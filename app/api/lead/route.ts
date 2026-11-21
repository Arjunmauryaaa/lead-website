import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

/**
 * Single lead endpoint used by every form on the site
 * (audit, ROI calculator, playbook, booking, contact).
 *
 * Delivery:
 *  1. If LEAD_WEBHOOK_URL is set (Zapier / Make / Slack / Google Apps Script…), the lead is POSTed there as JSON.
 *  2. Leads are also appended to ./data/leads.jsonl when the filesystem is writable (local dev / VPS).
 */

const SOURCES = new Set(["audit", "roi", "playbook", "booking", "contact"]);
const MAX = 2000;

function clean(v: unknown): string {
  return typeof v === "string" ? v.trim().slice(0, MAX) : "";
}

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (clean(body.company_fax)) return NextResponse.json({ ok: true });

  const source = clean(body.source);
  const email = clean(body.email);
  if (!SOURCES.has(source)) return NextResponse.json({ ok: false, error: "Unknown form" }, { status: 400 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email address." }, { status: 400 });
  }

  const fields: Record<string, string> = {};
  for (const [k, v] of Object.entries(body)) {
    if (k === "company_fax") continue;
    if (typeof v === "string" || typeof v === "number") fields[k] = clean(String(v));
  }

  const lead = {
    ...fields,
    receivedAt: new Date().toISOString(),
    userAgent: clean(req.headers.get("user-agent") ?? ""),
    country: clean(req.headers.get("x-vercel-ip-country") ?? ""),
  };

  let delivered = false;

  const hook = process.env.LEAD_WEBHOOK_URL;
  if (hook) {
    try {
      const r = await fetch(hook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      delivered = r.ok;
    } catch (e) {
      console.error("[lead] webhook failed", e);
    }
  }

  try {
    const dir = path.join(process.cwd(), "data");
    await mkdir(dir, { recursive: true });
    await appendFile(path.join(dir, "leads.jsonl"), JSON.stringify(lead) + "\n", "utf8");
    delivered = true;
  } catch {
    // Read-only filesystem (e.g. serverless) — rely on the webhook.
  }

  if (!delivered) {
    console.error("[lead] NOT DELIVERED — set LEAD_WEBHOOK_URL", lead);
    return NextResponse.json({ ok: false, error: "We couldn't save that right now — please email us directly." }, { status: 500 });
  }

  console.log(`[lead] ${source} from ${email}`);
  return NextResponse.json({ ok: true });
}
