import Link from "next/link";
import Logo from "./Logo";
import Clocks from "./Clocks";
import { brand, services } from "@/lib/content";

const markets = [
  { slug: "usa", label: "United States" },
  { slug: "uk", label: "United Kingdom" },
  { slug: "canada", label: "Canada" },
  { slug: "australia", label: "Australia" },
  { slug: "uae", label: "UAE" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p className="footer__h footer__clocks-h">Working hours across our markets</p>
      </div>
      <Clocks />
      <div className="wrap">
        <div className="footer__big" aria-hidden="true">
          {brand.name}
        </div>
        <div className="footer__grid footer__grid--5">
          <div>
            <Logo />
            <p className="muted small">
              {brand.tagline}. Serving brands in the USA, UK, Canada, Australia &amp; UAE.
            </p>
            <Link href="/playbook" className="footer__promo">
              <small>Free download</small>
              <b>The 2026 Digital Marketing Playbook →</b>
            </Link>
          </div>
          <div>
            <p className="footer__h">Services</p>
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                {s.title}
              </Link>
            ))}
          </div>
          <div>
            <p className="footer__h">Markets</p>
            {markets.map((m) => (
              <Link key={m.slug} href={`/digital-marketing/${m.slug}`}>
                {m.label}
              </Link>
            ))}
          </div>
          <div>
            <p className="footer__h">Company</p>
            <Link href="/about">About</Link>
            <Link href="/#work">Work</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/#roi">ROI Calculator</Link>
            <Link href="/#pricing">Pricing</Link>
          </div>
          <div>
            <p className="footer__h">Contact</p>
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <Link href="/#contact">Book a call</Link>
            <a href={brand.linkedin}>LinkedIn ↗</a>
          </div>
        </div>
        <div className="footer__bottom">
          <span>
            © {new Date().getFullYear()} {brand.name}. All rights reserved.
          </span>
          <span>
            <a href="#">Privacy</a> · <a href="#">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
