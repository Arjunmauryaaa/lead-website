"use client";

import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/lead";

const checks = [
  "Site speed & Core Web Vitals",
  "Technical SEO & indexing",
  "On-page content & keywords",
  "Tracking & analytics setup",
  "Ads, landing pages & offers",
  "Conversion UX on mobile",
];

type Step = "url" | "email" | "sending" | "done";

export default function AuditBar() {
  const [step, setStep] = useState<Step>("url");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function normalise(u: string) {
    const v = u.trim().replace(/\s/g, "");
    if (!v) return "";
    return /^https?:\/\//i.test(v) ? v : `https://${v}`;
  }

  function onUrl(e: FormEvent) {
    e.preventDefault();
    const n = normalise(url);
    try {
      const host = new URL(n).hostname;
      if (!host.includes(".")) throw new Error();
      setUrl(n);
      setError("");
      setStep("email");
    } catch {
      setError("Please enter a valid website, e.g. yourcompany.com");
    }
  }

  async function onEmail(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fax = (new FormData(e.currentTarget).get("company_fax") as string) || "";
    setStep("sending");
    const r = await submitLead("audit", { website: url, email, company_fax: fax });
    if (r.ok) {
      setStep("done");
      setError("");
    } else {
      setStep("email");
      setError(r.error || "Something went wrong.");
    }
  }

  return (
    <div className="audit" id="audit">
      {step === "url" && (
        <form className="audit__bar" onSubmit={onUrl} noValidate>
          <span className="audit__pre" aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </span>
          <label htmlFor="audit-url" className="sr-only">
            Your website
          </label>
          <input
            id="audit-url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter your website — yourcompany.com"
            inputMode="url"
            autoComplete="url"
          />
          <button className="btn btn--solid magnetic" type="submit">
            Get free audit <span className="arr">→</span>
          </button>
        </form>
      )}

      {(step === "email" || step === "sending") && (
        <form className="audit__bar audit__bar--email" onSubmit={onEmail}>
          <button type="button" className="audit__back" onClick={() => setStep("url")} aria-label="Change website">
            ←
          </button>
          <span className="audit__site" title={url}>
            {url.replace(/^https?:\/\//, "")}
          </span>
          <label htmlFor="audit-email" className="sr-only">
            Work email
          </label>
          <input
            id="audit-email"
            type="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Where should we send it? you@company.com"
            autoComplete="email"
          />
          <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
          <button className="btn btn--solid" type="submit" disabled={step === "sending"}>
            {step === "sending" ? <span className="spinner" /> : <>Send my audit <span className="arr">→</span></>}
          </button>
        </form>
      )}

      {step === "done" && (
        <div className="audit__done" role="status">
          <div className="audit__done-head">
            <span className="audit__ok">✓</span>
            <div>
              <b>Audit request received</b>
              <small>
                We&apos;ll review <em>{url.replace(/^https?:\/\//, "")}</em> and email a video teardown within 48 hours.
              </small>
            </div>
          </div>
          <ul className="audit__checks">
            {checks.map((c, i) => (
              <li key={c} style={{ animationDelay: `${i * 140}ms` }}>
                {c}
              </li>
            ))}
          </ul>
        </div>
      )}

      {error && <p className="audit__err">{error}</p>}
      {step === "url" && !error && (
        <p className="audit__hint">
          <span>✓ Free, no obligation</span>
          <span>✓ Video teardown in 48h</span>
          <span>✓ 6-point review</span>
        </p>
      )}
    </div>
  );
}
