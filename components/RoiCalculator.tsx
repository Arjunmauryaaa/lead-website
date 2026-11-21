"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { roiIndustries } from "@/lib/content";
import { submitLead } from "@/lib/lead";

function useTween(target: number, dur = 700) {
  const [v, setV] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const start = from.current;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const val = start + (target - start) * (1 - Math.pow(1 - p, 3));
      setV(val);
      from.current = val;
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, dur]);
  return v;
}

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const money = (n: number) =>
  n >= 1_000_000 ? `$${(n / 1_000_000).toFixed(2)}M` : n >= 10_000 ? `$${(n / 1000).toFixed(1)}K` : `$${fmt(n)}`;

// Ramp-up curve: campaigns learn & optimise over the first months.
const RAMP = [0.55, 0.7, 0.82, 0.9, 0.96, 1, 1.04, 1.08, 1.11, 1.14, 1.17, 1.2];

export default function RoiCalculator() {
  const [ind, setInd] = useState(roiIndustries[0].id);
  const [budget, setBudget] = useState(5000);
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [err, setErr] = useState("");

  const i = roiIndustries.find((x) => x.id === ind)!;
  const r = useMemo(() => {
    const visitors = budget / i.cpc;
    const leads = visitors * i.cvr;
    const customers = leads * i.close;
    const revenue = customers * i.value;
    const months = RAMP.map((k) => revenue * k);
    const year = months.reduce((a, b) => a + b, 0);
    return { visitors, leads, customers, revenue, roi: revenue / budget, months, year };
  }, [budget, i]);

  const tv = useTween(r.visitors);
  const tl = useTween(r.leads);
  const tc = useTween(r.customers);
  const trev = useTween(r.revenue);
  const troi = useTween(r.roi);
  const tyear = useTween(r.year);
  const maxM = Math.max(...r.months);
  const pct = ((budget - 1000) / (50000 - 1000)) * 100;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fax = (new FormData(e.currentTarget).get("company_fax") as string) || "";
    setState("sending");
    const res = await submitLead("roi", {
      email,
      industry: i.label,
      monthlyBudgetUSD: budget,
      estVisitors: Math.round(r.visitors),
      estLeads: Math.round(r.leads),
      estRevenue: Math.round(r.revenue),
      company_fax: fax,
    });
    if (res.ok) setState("sent");
    else {
      setState("error");
      setErr(res.error || "");
    }
  }

  return (
    <section className="section roi" id="roi">
      <div className="wrap">
        <div className="section__head section__head--split">
          <div>
            <p className="kicker reveal">Free tool — Growth calculator</p>
            <h2 className="h2 reveal">
              What could your budget
              <br />
              <em>actually</em> return?
            </h2>
          </div>
          <p className="muted reveal">
            Pick your industry and monthly media budget. We&apos;ll estimate traffic, leads and revenue using
            conservative industry benchmarks.
          </p>
        </div>

        <div className="roi__box reveal">
          {/* Inputs */}
          <div className="roi__inputs">
            <p className="roi__label">1 · Your industry</p>
            <div className="roi__chips" role="radiogroup" aria-label="Industry">
              {roiIndustries.map((x) => (
                <button
                  key={x.id}
                  role="radio"
                  aria-checked={ind === x.id}
                  className={ind === x.id ? "is-on" : ""}
                  onClick={() => setInd(x.id)}
                >
                  {x.label}
                </button>
              ))}
            </div>

            <p className="roi__label">
              2 · Monthly media budget <b>${fmt(budget)}</b>
            </p>
            <div className="roi__range" style={{ ["--p" as string]: `${pct}%` }}>
              <input
                type="range"
                min={1000}
                max={50000}
                step={500}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                aria-label="Monthly media budget in US dollars"
              />
              <div className="roi__ticks" aria-hidden="true">
                <span>$1K</span>
                <span>$10K</span>
                <span>$25K</span>
                <span>$50K</span>
              </div>
            </div>

            <form className="roi__form" onSubmit={onSubmit}>
              <p className="roi__label">3 · Get the detailed forecast</p>
              {state === "sent" ? (
                <p className="roi__sent">✓ Sent! Your channel-by-channel forecast is on its way.</p>
              ) : (
                <div className="roi__field">
                  <input
                    type="email"
                    required
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Work email"
                  />
                  <input type="text" name="company_fax" tabIndex={-1} autoComplete="off" className="hp" aria-hidden="true" />
                  <button className="btn btn--solid" type="submit" disabled={state === "sending"}>
                    {state === "sending" ? <span className="spinner" /> : "Email me →"}
                  </button>
                </div>
              )}
              {state === "error" && <p className="form__note is-error">{err}</p>}
            </form>
          </div>

          {/* Outputs */}
          <div className="roi__out">
            <div className="roi__kpis">
              <div>
                <small>Visitors / mo</small>
                <b>{fmt(tv)}</b>
              </div>
              <div>
                <small>Leads / mo</small>
                <b>{fmt(tl)}</b>
              </div>
              <div>
                <small>{i.unit[0].toUpperCase() + i.unit.slice(1)} / mo</small>
                <b>{fmt(tc)}</b>
              </div>
            </div>

            <div className="roi__hero">
              <div>
                <small>Est. monthly revenue (at full run-rate)</small>
                <b className="roi__big">{money(trev)}</b>
              </div>
              <div className="roi__mult">
                <b>{troi.toFixed(1)}×</b>
                <small>return on media</small>
              </div>
            </div>

            <div className="roi__chart">
              <div className="roi__chart-head">
                <span>12-month projection</span>
                <b>{money(tyear)}</b>
              </div>
              <div className="roi__bars">
                {r.months.map((m, k) => (
                  <span key={k} style={{ height: `${(m / maxM) * 100}%` }} title={`Month ${k + 1}: ${money(m)}`} />
                ))}
              </div>
              <div className="roi__axis">
                <span>M1</span>
                <span>M6</span>
                <span>M12</span>
              </div>
            </div>
            <p className="roi__disc">
              Planning estimates based on typical paid-search benchmarks (CPC, conversion and close rates). Real results
              vary by offer, market and competition. Excludes management fees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
