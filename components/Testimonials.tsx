"use client";

import { useEffect, useState } from "react";
import { testimonials } from "@/lib/content";
import SampleBadge from "./SampleBadge";

const DUR = 7000;

export default function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => setI((n) => (n + 1) % testimonials.length), DUR);
    return () => clearTimeout(id);
  }, [i, paused]);

  const t = testimonials[i];

  return (
    <section className="section section--alt testi" aria-label="Client testimonials">
      <div className="wrap testi__grid" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
        <div>
          <p className="kicker reveal">What clients say</p>
          <h2 className="h2 reveal">
            Trusted across <em>four continents.</em>
          </h2>
          <div className="testi__nav reveal" role="tablist" aria-label="Choose testimonial">
            {testimonials.map((x, k) => (
              <button key={k} role="tab" aria-selected={k === i} className={k === i ? "is-on" : ""} onClick={() => setI(k)}>
                <span className="testi__mk">{x.market}</span>
                <span className="testi__role">{x.role}</span>
                <span className="testi__bar">
                  <span key={`${i}-${paused}`} style={{ animationDuration: `${DUR}ms`, animationPlayState: k === i && !paused ? "running" : "paused" }} />
                </span>
              </button>
            ))}
          </div>
        </div>

        <figure className="testi__card reveal" key={i}>
          <span className="testi__q" aria-hidden="true">“</span>
          <blockquote>{t.quote}</blockquote>
          <figcaption>
            <span className="testi__av" aria-hidden="true">
              {t.name
                .split(" ")
                .map((p) => p[0])
                .join("")}
            </span>
            <span>
              <b>{t.name}</b>
              <small>
                {t.role} · {t.market}
              </small>
            </span>
            <SampleBadge show={t.sample} />
          </figcaption>
          <div className="testi__stars" aria-label="5 out of 5">
            ★★★★★
          </div>
        </figure>
      </div>
    </section>
  );
}
