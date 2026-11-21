"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { playbook } from "@/lib/playbook";
import { PlaybookForm, UNLOCK_KEY } from "./LeadMagnet";
import { Breadcrumbs } from "./PageBits";

export default function PlaybookGate() {
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      setUnlocked(localStorage.getItem(UNLOCK_KEY) === "1");
    } catch {
      setUnlocked(false);
    }
  }, []);

  return (
    <>
      <section className="phero pb-hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="orb orb--a" />
          <div className="gridlines" />
        </div>
        <div className="wrap pb-hero__grid">
          <div>
            <Breadcrumbs items={[{ label: "Playbook" }]} />
            <p className="kicker">Free guide · 8 chapters</p>
            <h1 className="phero__title">
              The 2026 Digital Marketing <em>Playbook.</em>
            </h1>
            <p className="lede">{playbook.subtitle}</p>
            {unlocked === false && (
              <div className="pb-gate">
                <PlaybookForm onDone={() => setUnlocked(true)} />
              </div>
            )}
            {unlocked && (
              <div className="phero__cta no-print">
                <button className="btn btn--solid btn--lg" onClick={() => window.print()}>
                  Download as PDF <span className="arr">↓</span>
                </button>
                <a href="#ch-01" className="btn btn--ghost btn--lg">
                  Start reading
                </a>
              </div>
            )}
          </div>
          <div className="lm__book pb-book" aria-hidden="true">
            <div className="book">
              <div className="book__cover">
                <span className="book__brand">Arjunta</span>
                <span className="book__year">2026</span>
                <span className="book__title">Digital Marketing Playbook</span>
                <span className="book__lines">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="book__foot">8 chapters · 40+ actions</span>
              </div>
              <div className="book__pages" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="wrap pb-body">
          <nav className="pb-toc" aria-label="Chapters">
            <p className="footer__h">Chapters</p>
            {playbook.chapters.map((c) => (
              <a key={c.n} href={`#ch-${c.n}`} className={!unlocked ? "is-locked" : ""}>
                <span>{c.n}</span>
                {c.title}
              </a>
            ))}
          </nav>

          <div className={`pb-chapters ${unlocked ? "" : "is-locked"}`}>
            {playbook.chapters.map((c, i) => (
              <article className="pb-ch" id={`ch-${c.n}`} key={c.n} aria-hidden={!unlocked && i > 0}>
                <span className="pb-ch__n">{c.n}</span>
                <h2>{c.title}</h2>
                <p className="pb-ch__intro">{c.intro}</p>
                <ul className="ticks ticks--big">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <div className="pb-action">
                  <b>Do this this week</b>
                  <p>{c.action}</p>
                </div>
              </article>
            ))}
            {!unlocked && (
              <div className="pb-lock">
                <span className="pb-lock__ico">🔒</span>
                <b>Unlock all 8 chapters — free</b>
                <p className="muted">Enter your email above for instant access.</p>
                <a href="#top" className="btn btn--solid" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  Unlock the playbook ↑
                </a>
              </div>
            )}
            {unlocked && (
              <div className="pb-end no-print">
                <h3>Want us to run this playbook for you?</h3>
                <Link href="/#contact" className="btn btn--solid btn--lg">
                  Book a strategy call <span className="arr">→</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
