export type LeadSource = "audit" | "roi" | "playbook" | "booking" | "contact";

export async function submitLead(
  source: LeadSource,
  data: Record<string, string | number>
): Promise<{ ok: boolean; error?: string }> {
  try {
    const r = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source,
        page: typeof window !== "undefined" ? window.location.pathname : "",
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        ...data,
      }),
    });
    const j = await r.json().catch(() => ({}));
    return r.ok ? { ok: true } : { ok: false, error: j.error || "Something went wrong. Please try again." };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
