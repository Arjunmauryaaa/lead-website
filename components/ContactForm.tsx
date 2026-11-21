"use client";

import { useState, type FormEvent } from "react";
import { submitLead } from "@/lib/lead";

export default function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "error" | "sent">("idle");
  const [err, setErr] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      setState("error");
      setErr("Please fill in your name, a valid email and your market.");
      form.reportValidity();
      return;
    }
    const d = new FormData(form);
    const data: Record<string, string> = {};
    d.forEach((v, k) => (data[k] = String(v)));
    setState("sending");
    const r = await submitLead("contact", data);
    if (r.ok) {
      setState("sent");
      form.reset();
    } else {
      setState("error");
      setErr(r.error || "");
    }
  }

  if (state === "sent") {
    return (
      <div className="booker booker--done" role="status">
        <span className="booker__ok">✓</span>
        <h3>Message received.</h3>
        <p className="muted">A strategist will reply within one business day — in your time zone.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <input id="f-name" name="name" required placeholder=" " autoComplete="name" />
        <label htmlFor="f-name">Full name</label>
      </div>
      <div className="field">
        <input id="f-email" name="email" type="email" required placeholder=" " autoComplete="email" />
        <label htmlFor="f-email">Work email</label>
      </div>
      <div className="field">
        <input id="f-site" name="website" placeholder=" " autoComplete="url" />
        <label htmlFor="f-site">Company website</label>
      </div>
      <div className="field field--select">
        <select id="f-market" name="market" required defaultValue="">
          <option value="" disabled hidden></option>
          <option>United States</option>
          <option>United Kingdom</option>
          <option>Canada</option>
          <option>Australia</option>
          <option>UAE</option>
          <option>Other</option>
        </select>
        <label htmlFor="f-market">Primary market</label>
      </div>
      <div className="field">
        <textarea id="f-msg" name="message" rows={3} placeholder=" " />
        <label htmlFor="f-msg">What would a great year look like for you?</label>
      </div>
      <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
      <button className="btn btn--solid btn--lg btn--block magnetic" type="submit" disabled={state === "sending"}>
        {state === "sending" ? <span className="spinner" /> : <>Send message <span className="arr">→</span></>}
      </button>
      <p className={`form__note ${state === "error" ? "is-error" : ""}`}>
        {state === "error" ? err : "We reply within one business day. No spam, ever."}
      </p>
    </form>
  );
}
