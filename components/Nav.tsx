"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { navLinks, services } from "@/lib/content";

const marketLinks = [
  { slug: "usa", label: "United States", code: "US" },
  { slug: "uk", label: "United Kingdom", code: "UK" },
  { slug: "canada", label: "Canada", code: "CA" },
  { slug: "australia", label: "Australia", code: "AU" },
  { slug: "uae", label: "UAE", code: "AE" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mega, setMega] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setMega(false);
  }, [pathname]);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "is-open" : ""}`}>
      <div className="wrap nav__inner">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          <div className={`nav__dd ${mega ? "is-open" : ""}`} onMouseEnter={() => setMega(true)} onMouseLeave={() => setMega(false)}>
            <button className="nav__dd-btn" aria-expanded={mega} onClick={() => setMega((m) => !m)}>
              Services <span aria-hidden="true">▾</span>
            </button>
            <div className="mega" role="menu">
              <div className="mega__inner">
                <div className="mega__col mega__col--services">
                  <p className="mega__h">Services</p>
                  <div className="mega__grid">
                    {services.map((s) => (
                      <Link key={s.slug} href={`/services/${s.slug}`} className="mega__item" role="menuitem">
                        <span className="mega__ico">{s.icon}</span>
                        <span>
                          <b>{s.title}</b>
                          <small>{s.body}</small>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="mega__col mega__col--side">
                  <p className="mega__h">Markets we serve</p>
                  <div className="mega__markets">
                    {marketLinks.map((m) => (
                      <Link key={m.slug} href={`/digital-marketing/${m.slug}`} className="mega__market" role="menuitem">
                        <em>{m.code}</em>
                        {m.label}
                        <span aria-hidden="true">→</span>
                      </Link>
                    ))}
                  </div>
                  <Link href="/#roi" className="mega__promo" role="menuitem">
                    <span className="mega__promo-copy">
                      <small>Free tool</small>
                      <b>Growth &amp; ROI calculator</b>
                      <span>Estimate traffic, leads and revenue in seconds.</span>
                      <span className="mega__promo-cta">
                        Try it now <i>→</i>
                      </span>
                    </span>
                    <span className="mega__spark" aria-hidden="true">
                      {[30, 45, 38, 60, 72, 100].map((h, i) => (
                        <i key={i} style={{ height: `${h}%` }} />
                      ))}
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {navLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="/#contact" className="btn btn--sm btn--solid magnetic nav__cta">
          Book a strategy call <span className="arr">→</span>
        </Link>
        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-menu">
        <details className="mobile-menu__group">
          <summary>Services</summary>
          <div>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>
        </details>
        <details className="mobile-menu__group">
          <summary>Markets</summary>
          <div>
            {marketLinks.map((m) => (
              <Link key={m.slug} href={`/digital-marketing/${m.slug}`}>
                {m.label}
              </Link>
            ))}
          </div>
        </details>
        {navLinks.map((l) => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>
            {l.label}
          </Link>
        ))}
        <Link href="/#contact" className="btn btn--solid btn--lg" onClick={() => setOpen(false)}>
          Book a strategy call →
        </Link>
      </div>
    </header>
  );
}
