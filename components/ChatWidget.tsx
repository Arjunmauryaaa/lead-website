"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { brand } from "@/lib/content";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [nudge, setNudge] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShow(true), 1200);
    const t2 = setTimeout(() => setNudge(true), 9000);
    const t3 = setTimeout(() => setNudge(false), 17000);
    return () => [t1, t2, t3].forEach(clearTimeout);
  }, []);

  const wa = brand.whatsapp
    ? `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(`Hi ${brand.name}, I'd like to talk about growing my business.`)}`
    : "";

  return (
    <div className={`chat ${show ? "is-shown" : ""} ${open ? "is-open" : ""}`}>
      <div className="chat__panel" role="dialog" aria-label="Contact options" aria-hidden={!open}>
        <div className="chat__head">
          <span className="chat__avatar" aria-hidden="true">
            {brand.name[0]}
            <i />
          </span>
          <div>
            <b>{brand.name} team</b>
            <small>Typically replies within a few hours</small>
          </div>
        </div>
        <p className="chat__bubble">
          Hi there 👋 How can we help you grow? Pick whatever is easiest for you.
        </p>
        <div className="chat__opts">
          {wa && (
            <a href={wa} target="_blank" rel="noopener noreferrer" className="chat__opt chat__opt--wa">
              <span>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .1-1.7-.1a15 15 0 0 1-6.4-5.6c-.5-.7-1-1.6-1-2.6 0-1 .5-1.6.8-1.9.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.7-.1 1.3Z" />
                </svg>
              </span>
              <b>Chat on WhatsApp</b>
              <i>→</i>
            </a>
          )}
          <Link href="/#contact" className="chat__opt" onClick={() => setOpen(false)}>
            <span>◷</span>
            <b>Book a strategy call</b>
            <i>→</i>
          </Link>
          <a href={`mailto:${brand.email}`} className="chat__opt">
            <span>✉</span>
            <b>Email {brand.email}</b>
            <i>→</i>
          </a>
          <Link href="/#audit" className="chat__opt" onClick={() => setOpen(false)}>
            <span>⌕</span>
            <b>Get a free website audit</b>
            <i>→</i>
          </Link>
        </div>
      </div>

      {nudge && !open && <div className="chat__nudge">Questions? We&apos;re online 👋</div>}

      <button className="chat__btn" aria-label={open ? "Close contact options" : "Open contact options"} aria-expanded={open} onClick={() => { setOpen((o) => !o); setNudge(false); }}>
        <svg className="chat__ico chat__ico--chat" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Zm3 6.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" transform="translate(0 1)" />
        </svg>
        <svg className="chat__ico chat__ico--x" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
        <span className="chat__ping" />
      </button>
    </div>
  );
}
