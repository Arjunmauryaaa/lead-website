"use client";

import { useState } from "react";
import { brand } from "@/lib/content";
import BookCall from "./BookCall";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  const [tab, setTab] = useState<"book" | "msg">("book");
  return (
    <section className="section cta" id="contact">
      <div className="wrap">
        <div className="cta__box reveal">
          <div className="cta__bg" aria-hidden="true" />
          <div className="cta__copy">
            <p className="kicker">Let&apos;s talk</p>
            <h2 className="h2">
              Book a free
              <br />
              <em>strategy call.</em>
            </h2>
            <p className="muted">
              30 minutes with a senior strategist. We&apos;ll review your website, ads and channels and leave you with
              the three opportunities we&apos;d test first — whether you hire us or not.
            </p>
            <ul className="cta__meta">
              <li>
                <span>Email</span>
                <a href={`mailto:${brand.email}`}>{brand.email}</a>
              </li>
              <li>
                <span>Response</span>Within one business day
              </li>
              <li>
                <span>Markets</span>
                {brand.markets.join(" · ")}
              </li>
            </ul>
          </div>
          <div className="cta__panel">
            <div className="tabs" role="tablist">
              <button role="tab" aria-selected={tab === "book"} className={tab === "book" ? "is-on" : ""} onClick={() => setTab("book")}>
                ◷ Book a call
              </button>
              <button role="tab" aria-selected={tab === "msg"} className={tab === "msg" ? "is-on" : ""} onClick={() => setTab("msg")}>
                ✉ Send a message
              </button>
              <span className="tabs__pill" style={{ transform: `translateX(${tab === "book" ? 0 : 100}%)` }} />
            </div>
            <div className="cta__tab" key={tab}>
              {tab === "book" ? <BookCall /> : <ContactForm />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
