"use client";

import { useState } from "react";
import { plans, currencySymbol, type Currency } from "@/lib/content";

const currencies: Currency[] = ["USD", "GBP", "AUD"];

export default function Pricing() {
  const [cur, setCur] = useState<Currency>("USD");

  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="section__head section__head--center">
          <p className="kicker reveal">05 — Engagements</p>
          <h2 className="h2 reveal">
            Clear scope. <em>Clear numbers.</em>
          </h2>
          <div className="toggle reveal" role="group" aria-label="Currency">
            {currencies.map((c) => (
              <button key={c} className={cur === c ? "is-on" : ""} onClick={() => setCur(c)} aria-pressed={cur === c}>
                {c}
              </button>
            ))}
            <span className="toggle__pill" style={{ transform: `translateX(${currencies.indexOf(cur) * 100}%)` }} />
          </div>
        </div>

        <div className="plans">
          {plans.map((p) => (
            <div key={p.name} className={`plan tilt reveal ${p.featured ? "plan--feat" : ""}`}>
              {p.featured && <span className="plan__badge">Most chosen</span>}
              <p className="plan__name">{p.name}</p>
              <p className="plan__price">
                {p.price ? (
                  <>
                    <span className="cur">{currencySymbol[cur]}</span>
                    <span className="amt" key={cur}>
                      {p.price[cur]}
                    </span>
                    <small>/ month</small>
                  </>
                ) : (
                  <span className="amt">Custom</span>
                )}
              </p>
              <p className="plan__desc">{p.desc}</p>
              <ul className="ticks">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a href="#contact" className={`btn btn--block ${p.featured ? "btn--solid magnetic" : "btn--ghost"}`}>
                {p.cta} <span className="arr">→</span>
              </a>
            </div>
          ))}
        </div>
        <p className="fineprint reveal">Ad spend is billed separately and paid directly to the platform. Prices exclude applicable taxes.</p>
      </div>
    </section>
  );
}
