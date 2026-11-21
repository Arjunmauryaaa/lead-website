"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/lead";
import { playbook } from "@/lib/playbook";

export const UNLOCK_KEY = "arjunta_playbook_unlocked";

export function PlaybookForm({ onDone, compact = false }: { onDone?: () => void; compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fax = (new FormData(e.currentTarget).get("company_fax") as string) || "";
    setState("sending");
    const r = await submitLead("playbook", { email, name, company_fax: fax });
    if (r.ok) {
      try {
        localStorage.setItem(UNLOCK_KEY, "1");
      } catch {}
      setState("done");
      onDone?.();
    } else {
      setState("error");
      setErr(r.error || "");
    }
  }

  if (state === "done" && !onDone) {
    return (
      <div className="lm__done" role="status">
        <span>✓</span>
        <div>
          <b>Your playbook is ready.</b>
          <Link href="/playbook" className="link">
            Open the playbook →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form className={`lm__form ${compact ? "lm__form--compact" : ""}`} onSubmit={onSubmit}>
      <input placeholder="First name" value={name} onChange={(e) => setName(e.target.value)} aria-label="First name" autoComplete="given-name" />
      <input type="email" required placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Work email" autoComplete="email" />
      <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn btn--solid" type="submit" disabled={state === "sending"}>
        {state === "sending" ? <span className="spinner" /> : <>Get the playbook <span className="arr">→</span></>}
      </button>
      {state === "error" && <p className="form__note is-error">{err}</p>}
      <p className="lm__fine">Free. Instant access. Unsubscribe anytime.</p>
    </form>
  );
}

export default function LeadMagnet() {
  return (
    <section className="section lm" id="playbook">
      <div className="wrap">
        <div className="lm__box reveal">
          <div className="lm__bg" aria-hidden="true" />
          <div className="lm__book" aria-hidden="true">
            <div className="book">
              <div className="book__cover">
                <span className="book__brand">Arjunta</span>
                <span className="book__year">2026</span>
                <span className="book__title">Digital Marketing Playbook</span>
                <span className="book__lines">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="book__foot">8 chapters · 40+ actions</span>
              </div>
              <div className="book__pages" />
            </div>
          </div>
          <div className="lm__copy">
            <p className="kicker">Free download</p>
            <h2 className="h2">
              The 2026 Digital Marketing <em>Playbook.</em>
            </h2>
            <p className="muted">{playbook.subtitle}</p>
            <ul className="lm__chapters">
              {playbook.chapters.map((c) => (
                <li key={c.n}>
                  <span>{c.n}</span>
                  {c.title}
                </li>
              ))}
            </ul>
            <PlaybookForm />
          </div>
        </div>
      </div>
    </section>
  );
}
