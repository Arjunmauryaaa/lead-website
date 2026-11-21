"use client";

import { useEffect, useRef, useState } from "react";
import { companyStats, brand } from "@/lib/content";

function CountUp({ to, start, delay = 0 }: { to: number; start: boolean; delay?: number }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setV(to);
      return;
    }
    let raf = 0;
    const dur = 1900;
    const t0 = performance.now() + delay;
    const tick = (t: number) => {
      const p = Math.max(0, Math.min(1, (t - t0) / dur));
      setV(Math.round(to * (1 - Math.pow(1 - p, 4))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to, delay]);
  return <>{v}</>;
}

function Num({ i, start, delay }: { i: number; start: boolean; delay: number }) {
  const s = companyStats[i];
  return (
    <p className="kp-num" aria-label={`${s.n}${s.suffix}`}>
      <span className="kp-num__d">
        <CountUp to={s.n} start={start} delay={delay} />
      </span>
      {s.suffix && <span className="kp-num__s">{s.suffix}</span>}
    </p>
  );
}

const growth = [18, 24, 22, 31, 36, 34, 45, 52, 49, 63, 74, 92];

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [go, setGo] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setGo(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const [exp, reach, speed, service] = companyStats;

  return (
    <section className={`kp ${go ? "go" : ""}`} ref={ref} aria-label="Company at a glance">
      <div className="wrap">
        <div className="kp__head">
          <p className="kicker">At a glance</p>
          <p className="kp__intro">
            A decade of digital marketing, distilled into a <em>repeatable</em> growth system.
          </p>
        </div>

        <div className="kp__grid">
          {/* 10+ years — feature card */}
          <article className="kp-card kp-card--feat tilt">
            <div className="kp-card__top">
              <span className="kp-tag">{exp.tag}</span>
              <span className="kp-idx">01</span>
            </div>
            <Num i={0} start={go} delay={0} />
            <p className="kp-label">{exp.label}</p>
            <div className="kp-bars" aria-hidden="true">
              {growth.map((h, k) => (
                <span key={k} style={{ height: `${h}%`, transitionDelay: `${300 + k * 70}ms` }} className={k === growth.length - 1 ? "hi" : ""} />
              ))}
            </div>
            <div className="kp-bars__axis" aria-hidden="true">
              <span>Year 1</span>
              <span>Today</span>
            </div>
          </article>

          {/* 5 markets */}
          <article className="kp-card tilt">
            <div className="kp-card__top">
              <span className="kp-tag">{reach.tag}</span>
              <span className="kp-idx">02</span>
            </div>
            <Num i={1} start={go} delay={150} />
            <p className="kp-label">{reach.label}</p>
            <div className="kp-chips">
              {brand.markets.map((m, k) => (
                <span key={m} style={{ transitionDelay: `${600 + k * 160}ms` }}>
                  {m}
                </span>
              ))}
            </div>
          </article>

          {/* 14 days */}
          <article className="kp-card tilt">
            <div className="kp-card__top">
              <span className="kp-tag">{speed.tag}</span>
              <span className="kp-idx">03</span>
            </div>
            <Num i={2} start={go} delay={300} />
            <p className="kp-label">{speed.label}</p>
            <div className="kp-track" aria-hidden="true">
              {Array.from({ length: 14 }).map((_, k) => (
                <span key={k} style={{ transitionDelay: `${500 + k * 80}ms` }} />
              ))}
            </div>
            <div className="kp-track__axis" aria-hidden="true">
              <span>Kickoff</span>
              <span>Live</span>
            </div>
          </article>

          {/* 24h — wide card */}
          <article className="kp-card kp-card--wide tilt">
            <div className="kp-wide__copy">
              <div className="kp-card__top">
                <span className="kp-tag">{service.tag}</span>
                <span className="kp-idx">04</span>
              </div>
              <Num i={3} start={go} delay={450} />
              <p className="kp-label">{service.label}</p>
            </div>
            <div className="kp-dial" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                {Array.from({ length: 24 }).map((_, k) => {
                  const a = (k / 24) * Math.PI * 2;
                  const r1 = k % 6 === 0 ? 47 : 50;
                  return (
                    <line
                      key={k}
                      x1={60 + Math.sin(a) * r1}
                      y1={60 - Math.cos(a) * r1}
                      x2={60 + Math.sin(a) * 53}
                      y2={60 - Math.cos(a) * 53}
                      className={k % 6 === 0 ? "tick tick--major" : "tick"}
                    />
                  );
                })}
                <circle cx="60" cy="60" r="40" className="dial-bg" />
                <circle cx="60" cy="60" r="40" className="dial-arc" pathLength={100} />
              </svg>
              <span className="kp-dial__hand" />
              <div className="kp-dial__center">
                <b>24/5</b>
                <small>All time zones</small>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
