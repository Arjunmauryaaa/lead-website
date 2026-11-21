"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Hero visual: marketing channels feed animated "lead" particles into a central
 * engine, which outputs qualified meetings. Pure SVG + CSS, no libraries.
 * SVG viewBox is 100×100 so HTML overlays can share the same % coordinates.
 */

const CORE = { x: 50, y: 48 };

const channels = [
  { id: "g", name: "SEO", sub: "Organic search", icon: "⌕", x: 15, y: 16, c: [30, 30] },
  { id: "m", name: "Google Ads", sub: "Paid search", icon: "G", x: 84, y: 13, c: [72, 26] },
  { id: "l", name: "Social Media", sub: "Meta · TikTok · LinkedIn", icon: "◐", x: 90, y: 50, c: [74, 44] },
  { id: "e", name: "Email", sub: "Automation", icon: "@", x: 10, y: 56, c: [26, 60] },
  { id: "s", name: "Content & Web", sub: "Site · blog · video", icon: "✎", x: 24, y: 88, c: [34, 70] },
];

const OUT = { x: 74, y: 84 };

const outputs = [
  { t: "New order · $248", s: "Online store · Austin, TX", f: "US" },
  { t: "Qualified lead", s: "Dental clinic · Sydney", f: "AU" },
  { t: "Demo booked", s: "SaaS company · Toronto", f: "CA" },
  { t: "New order · £186", s: "D2C brand · London", f: "UK" },
  { t: "Enquiry received", s: "Property group · Dubai", f: "AE" },
];

const metrics = [
  { k: "CTR", v: "4.8%", d: "▲ 38%", x: 60, y: 6 },
  { k: "Cost / lead", v: "−32%", d: "vs. last qtr", x: 6, y: 36 },
  { k: "ROAS", v: "5.2×", d: "▲ 1.4", x: 90, y: 74 },
];

function curve(x: number, y: number, c: number[]) {
  return `M ${x} ${y} Q ${c[0]} ${c[1]} ${CORE.x} ${CORE.y}`;
}

export default function LeadEngine() {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [count, setCount] = useState(118);

  useEffect(() => {
    const id = setInterval(() => {
      setI((n) => (n + 1) % outputs.length);
      setCount((c) => c + 1);
    }, 2800);
    return () => clearInterval(id);
  }, []);

  // Subtle parallax on pointer move
  useEffect(() => {
    const el = ref.current;
    if (!el || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--px", `${((e.clientX - r.left) / r.width - 0.5).toFixed(3)}`);
      el.style.setProperty("--py", `${((e.clientY - r.top) / r.height - 0.5).toFixed(3)}`);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const out = outputs[i];

  return (
    <div className="engine" ref={ref} aria-label="How our lead engine works: channels feed qualified meetings">
      {/* Layer 1: rings */}
      <div className="engine__layer l1" aria-hidden="true">
        <span className="ring ring--1" />
        <span className="ring ring--2" />
        <span className="ring ring--3" />
        <span className="sweep" />
      </div>

      {/* Layer 2: flow paths + particles */}
      <svg className="engine__svg" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="coreGlow">
            <stop offset="0" stopColor="#ddcba3" stopOpacity=".55" />
            <stop offset="1" stopColor="#ddcba3" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="flowGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#c9b48a" stopOpacity=".05" />
            <stop offset="1" stopColor="#c9b48a" stopOpacity=".55" />
          </linearGradient>
        </defs>

        {channels.map((ch) => (
          <path key={ch.id} id={`p-${ch.id}`} d={curve(ch.x, ch.y, ch.c)} className="flow" />
        ))}
        <path id="p-out" d={`M ${CORE.x} ${CORE.y} Q ${66} ${60} ${OUT.x} ${OUT.y}`} className="flow flow--out" />

        <g className="particles">
          {channels.map((ch, ci) =>
            [0, 1, 2].map((k) => (
              <circle key={`${ch.id}${k}`} r={k === 0 ? 0.9 : 0.6} className={k === 0 ? "pt pt--lead" : "pt"}>
                <animateMotion dur={`${2.6 + ci * 0.25}s`} begin={`${-(k * 0.9 + ci * 0.4)}s`} repeatCount="indefinite" rotate="auto">
                  <mpath href={`#p-${ch.id}`} />
                </animateMotion>
                <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.15;0.8;1" dur={`${2.6 + ci * 0.25}s`} begin={`${-(k * 0.9 + ci * 0.4)}s`} repeatCount="indefinite" />
              </circle>
            ))
          )}
          {[0, 1].map((k) => (
            <circle key={`o${k}`} r="1.3" className="pt pt--out">
              <animateMotion dur="1.4s" begin={`${-k * 0.7}s`} repeatCount="indefinite">
                <mpath href="#p-out" />
              </animateMotion>
              <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.2;0.8;1" dur="1.4s" begin={`${-k * 0.7}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        <circle cx={CORE.x} cy={CORE.y} r="22" fill="url(#coreGlow)" className="core-glow" />
        <circle cx={CORE.x} cy={CORE.y} r="13" className="core-pulse" />
        <circle cx={CORE.x} cy={CORE.y} r="13" className="core-pulse core-pulse--2" />
      </svg>

      {/* Layer 3: core */}
      <div className="core" style={{ left: `${CORE.x}%`, top: `${CORE.y}%` }}>
        <span className="core__ring" aria-hidden="true" />
        <div className="core__inner">
          <span className="core__label">Growth engine</span>
          <b key={count} className="core__num">{count}</b>
          <span className="core__sub">conversions this month</span>
        </div>
      </div>

      {/* Layer 4: channel nodes */}
      <div className="engine__layer l3">
        {channels.map((ch, ci) => (
          <div className="node" key={ch.id} style={{ left: `${ch.x}%`, top: `${ch.y}%`, animationDelay: `${-ci * 1.3}s` }}>
            <span className={`node__ico node__ico--${ch.id}`}>{ch.icon}</span>
            <span className="node__txt">
              <b>{ch.name}</b>
              <small>{ch.sub}</small>
            </span>
          </div>
        ))}

        {metrics.map((m, mi) => (
          <div className="metric" key={m.k} style={{ left: `${m.x}%`, top: `${m.y}%`, animationDelay: `${-mi * 2}s` }}>
            <small>{m.k}</small>
            <b>{m.v}</b>
            <em>{m.d}</em>
          </div>
        ))}

        {/* Output card */}
        <div className="output" style={{ left: `${OUT.x}%`, top: `${OUT.y}%` }} aria-live="polite">
          <div className="output__card" key={i}>
            <span className="output__ico">✓</span>
            <span className="output__txt">
              <b>{out.t}</b>
              <small>
                <em>{out.f}</em> {out.s}
              </small>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
