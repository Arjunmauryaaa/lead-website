"use client";

import { useState } from "react";
import { caseStudies } from "@/lib/content";
import SampleBadge from "./SampleBadge";

export default function CaseStudies() {
  const filters = ["All", ...Array.from(new Set(caseStudies.map((c) => c.industry)))];
  const [f, setF] = useState("All");
  const list = f === "All" ? caseStudies : caseStudies.filter((c) => c.industry === f);

  return (
    <section className="section cases" id="work">
      <div className="wrap">
        <div className="section__head section__head--split">
          <div>
            <p className="kicker reveal">Case studies</p>
            <h2 className="h2 reveal">
              Growth you can <em>measure.</em>
            </h2>
          </div>
          <div className="cases__filters reveal" role="tablist" aria-label="Filter by industry">
            {filters.map((x) => (
              <button key={x} role="tab" aria-selected={f === x} className={f === x ? "is-on" : ""} onClick={() => setF(x)}>
                {x}
              </button>
            ))}
          </div>
        </div>

        <div className="cases__grid" key={f}>
          {list.map((c, i) => (
            <article className="case tilt" key={c.title} style={{ animationDelay: `${i * 90}ms` }}>
              <div className="case__top">
                <span className="case__ind">{c.industry}</span>
                <span className="case__mkt">{c.market}</span>
                <SampleBadge show={c.sample} />
              </div>
              <p className="case__client">{c.client}</p>
              <h3>{c.title}</h3>
              <div className="case__metrics">
                {c.metrics.map((m) => (
                  <div className="case__m" key={m.label}>
                    <small>{m.label}</small>
                    <div className="case__ba">
                      <span className="case__before">{m.before}</span>
                      <span className="case__arrow" aria-hidden="true">→</span>
                      <b>{m.after}</b>
                    </div>
                  </div>
                ))}
              </div>
              <div className="case__foot">
                {c.services.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
