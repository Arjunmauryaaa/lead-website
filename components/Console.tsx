"use client";

import { useEffect, useRef, useState } from "react";

const kpis = [
  { label: "Marketing revenue", value: 1.4, dec: 1, prefix: "$", suffix: "M", delta: "+63%" },
  { label: "Organic traffic", value: 182, suffix: "K", delta: "+41%" },
  { label: "Blended ROAS", value: 4.6, dec: 1, suffix: "×", delta: "+1.2" },
];

const bars = [28, 34, 31, 42, 47, 45, 56, 61, 58, 72, 81, 94];
const months = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

const mix = [
  { ch: "SEO & Content", pct: 34 },
  { ch: "Google Ads", pct: 28 },
  { ch: "Paid Social", pct: 22 },
  { ch: "Email & Automation", pct: 16 },
];

function useCount(target: number, start: boolean, dur = 1600) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      setV(target * (1 - Math.pow(1 - p, 4)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, dur]);
  return v;
}

function Kpi({ k, start }: { k: (typeof kpis)[number]; start: boolean }) {
  const v = useCount(k.value, start);
  return (
    <div className="kpi">
      <small>{k.label}</small>
      <b>
        {k.prefix}
        {v.toFixed(k.dec ?? 0)}
        {k.suffix}
      </b>
      <em>{k.delta} YoY</em>
    </div>
  );
}

export default function Console() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setStart(true), { threshold: 0.25 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="reveal">
    <div className={`report-wrap ${start ? "go" : ""}`} ref={ref}>
      <div className="report" aria-label="Sample client performance report">
        <header className="report__head">
          <div>
            <p className="report__eyebrow">Performance report</p>
            <p className="report__title">D2C brand · United States</p>
          </div>
          <span className="report__period">FY 2025</span>
        </header>

        <div className="report__kpis">
          {kpis.map((k) => (
            <Kpi key={k.label} k={k} start={start} />
          ))}
        </div>

        <div className="report__chart">
          <div className="report__chart-head">
            <span>Conversions / month</span>
            <span className="legend">
              <i /> All channels
            </span>
          </div>
          <div className="bars">
            {bars.map((h, i) => (
              <div className="bar" key={i}>
                <span style={{ height: `${h}%`, transitionDelay: `${i * 60}ms` }} className={i === bars.length - 1 ? "hi" : ""} />
                <em>{months[i]}</em>
              </div>
            ))}
          </div>
        </div>

        <div className="report__mix">
          <p className="report__label">Channel mix</p>
          {mix.map((m, i) => (
            <div className="mix" key={m.ch}>
              <span className="mix__ch">{m.ch}</span>
              <span className="mix__track">
                <span style={{ width: start ? `${m.pct}%` : 0, transitionDelay: `${400 + i * 120}ms` }} />
              </span>
              <span className="mix__pct">{m.pct}%</span>
            </div>
          ))}
        </div>

        <p className="report__note">Illustrative reporting view</p>
      </div>

      {/* Floating notification */}
      <div className="toast" aria-hidden="true">
        <span className="toast__ico">✓</span>
        <div>
          <b>Monthly report delivered</b>
          <span>Shared with leadership · 1st of every month</span>
        </div>
      </div>
    </div>
    </div>
  );
}
