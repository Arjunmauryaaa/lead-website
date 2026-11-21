"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import { brand } from "@/lib/content";
import { submitLead } from "@/lib/lead";

/**
 * If brand.bookingUrl is set (Calendly / Cal.com), the real scheduler is embedded.
 * Otherwise a built-in picker shows slots in the visitor's own time zone and sends a booking request.
 */

function nextWeekdays(n: number) {
  const out: Date[] = [];
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 1);
  while (out.length < n) {
    const wd = d.getDay();
    if (wd !== 0 && wd !== 6) out.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return out;
}

const SLOTS = ["09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"];

export default function BookCall() {
  const [mounted, setMounted] = useState(false);
  const [tz, setTz] = useState("");
  const [day, setDay] = useState(0);
  const [slot, setSlot] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [site, setSite] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [err, setErr] = useState("");

  useEffect(() => {
    setMounted(true);
    setTz(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const days = useMemo(() => (mounted ? nextWeekdays(10) : []), [mounted]);

  if (brand.bookingUrl) {
    return (
      <div className="book-embed">
        <iframe src={brand.bookingUrl} title="Book a strategy call" loading="lazy" />
      </div>
    );
  }

  if (!mounted) return <div className="booker booker--loading" />;

  const d = days[day];
  const dateLabel = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!slot) return;
    const fax = (new FormData(e.currentTarget).get("company_fax") as string) || "";
    const [h, m] = slot.split(":").map(Number);
    const when = new Date(d);
    when.setHours(h, m, 0, 0);
    setState("sending");
    const r = await submitLead("booking", {
      name,
      email,
      website: site,
      requestedTimeISO: when.toISOString(),
      requestedTimeLocal: `${dateLabel}, ${slot} (${tz})`,
      company_fax: fax,
    });
    if (r.ok) setState("done");
    else {
      setState("error");
      setErr(r.error || "");
    }
  }

  if (state === "done") {
    return (
      <div className="booker booker--done" role="status">
        <span className="booker__ok">✓</span>
        <h3>You&apos;re pencilled in.</h3>
        <p>
          <b>
            {dateLabel} · {slot}
          </b>
          <br />
          <span className="muted">{tz}</span>
        </p>
        <p className="muted">We&apos;ll confirm by email with a calendar invite and video link within a few hours.</p>
      </div>
    );
  }

  return (
    <div className="booker">
      <div className="booker__head">
        <div>
          <b>30-min strategy call</b>
          <small>Video call · Free · No obligation</small>
        </div>
        <span className="booker__tz" title="Times are shown in your local time zone">
          ◷ {tz.replace(/_/g, " ")}
        </span>
      </div>

      <div className="booker__days" role="listbox" aria-label="Choose a day">
        {days.map((x, k) => (
          <button
            key={k}
            role="option"
            aria-selected={k === day}
            className={k === day ? "is-on" : ""}
            onClick={() => {
              setDay(k);
              setSlot(null);
            }}
          >
            <small>{x.toLocaleDateString("en-GB", { weekday: "short" })}</small>
            <b>{x.getDate()}</b>
            <small>{x.toLocaleDateString("en-GB", { month: "short" })}</small>
          </button>
        ))}
      </div>

      <p className="booker__label">{dateLabel}</p>
      <div className="booker__slots" role="listbox" aria-label="Choose a time">
        {SLOTS.map((s) => (
          <button key={s} role="option" aria-selected={slot === s} className={slot === s ? "is-on" : ""} onClick={() => setSlot(s)}>
            {s}
          </button>
        ))}
      </div>

      <form className={`booker__form ${slot ? "is-open" : ""}`} onSubmit={onSubmit}>
        <div className="booker__fields">
          <input required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} aria-label="Full name" autoComplete="name" />
          <input required type="email" placeholder="Work email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Work email" autoComplete="email" />
          <input placeholder="Company website" value={site} onChange={(e) => setSite(e.target.value)} aria-label="Company website" autoComplete="url" />
          <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
        </div>
        <button className="btn btn--solid btn--block btn--lg" type="submit" disabled={!slot || state === "sending"}>
          {state === "sending" ? <span className="spinner" /> : <>Request {slot ?? "a time"} <span className="arr">→</span></>}
        </button>
        {state === "error" && <p className="form__note is-error">{err}</p>}
      </form>
    </div>
  );
}
