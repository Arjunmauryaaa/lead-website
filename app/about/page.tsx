import type { Metadata } from "next";
import Link from "next/link";
import { founder, values, brand } from "@/lib/content";
import { countries } from "@/lib/markets";
import { PageHero, CtaBand } from "@/components/PageBits";
import Stats from "@/components/Stats";
import Certifications from "@/components/Certifications";

export const metadata: Metadata = {
  title: "About Arjunta | Full-Service Digital Marketing Agency",
  description:
    "Meet Arjunta — a senior, remote-first digital marketing team working with brands across the USA, UK, Canada, Australia and the UAE.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <PageHero
        crumbs={[{ label: "About" }]}
        kicker="About us"
        title="One senior team. *Every* channel. Your time zone."
        intro={`${brand.name} is a full-service digital marketing agency for ambitious brands in the US, UK, Canada, Australia and the UAE. We exist to own the number that matters: growth.`}
      >
        <Link href="/#contact" className="btn btn--solid btn--lg magnetic">
          Meet the team on a call <span className="arr">→</span>
        </Link>
      </PageHero>

      {/* Founder */}
      <section className="section">
        <div className="wrap founder">
          <div className="founder__portrait reveal">
            <div className="portrait">
              <span className="portrait__ring" />
              <span className="portrait__initials">{founder.initials}</span>
              <span className="portrait__tag">
                <b>{founder.name}</b>
                <small>{founder.role}</small>
              </span>
            </div>
            <p className="founder__hint">Replace with a professional headshot (public/founder.jpg)</p>
          </div>
          <div className="founder__copy">
            <p className="kicker reveal">Founder&apos;s note</p>
            <h2 className="h2 reveal">
              Why we <em>started.</em>
            </h2>
            {founder.bio.map((p, i) => (
              <p className="founder__p reveal" key={i}>
                {p}
              </p>
            ))}
            <div className="founder__sig reveal">
              <span className="founder__sign">{founder.name}</span>
              <small>{founder.role}</small>
              <a href={founder.linkedin} className="link">
                Connect on LinkedIn ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Values */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="section__head">
            <p className="kicker reveal">What we believe</p>
            <h2 className="h2 reveal">
              Principles we <em>don&apos;t</em> compromise on.
            </h2>
          </div>
          <div className="values">
            {values.map((v, i) => (
              <article className="value tilt reveal" key={v.title}>
                <span className="value__n">0{i + 1}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Markets */}
      <section className="section">
        <div className="wrap">
          <div className="section__head section__head--split">
            <div>
              <p className="kicker reveal">Where we work</p>
              <h2 className="h2 reveal">
                Five markets. <em>One</em> standard.
              </h2>
            </div>
            <p className="muted reveal">Remote-first by design: we overlap with your working day and meet on your calendar.</p>
          </div>
          <div className="mkts">
            {countries.map((c) => (
              <Link key={c.slug} href={`/digital-marketing/${c.slug}`} className="mkt tilt reveal">
                <span className="mkt__code">{c.code}</span>
                <h3>{c.label}</h3>
                <p>{c.cities.slice(0, 3).join(" · ")}</p>
                <small>
                  {c.timezones} · {c.currency}
                </small>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Certifications />
      <CtaBand title="Let's build something *great.*" />
    </main>
  );
}
