import Link from "next/link";
import Console from "@/components/Console";
import LeadEngine from "@/components/LeadEngine";
import Stats from "@/components/Stats";
import Pricing from "@/components/Pricing";
import AuditBar from "@/components/AuditBar";
import Certifications from "@/components/Certifications";
import CaseStudies from "@/components/CaseStudies";
import WorkGallery from "@/components/WorkGallery";
import RoiCalculator from "@/components/RoiCalculator";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import InsightsPreview from "@/components/InsightsPreview";
import ContactSection from "@/components/ContactSection";
import { channels, services, steps, pillars, faqs, platforms, flagship } from "@/lib/content";
import { countries, marketIndustries } from "@/lib/markets";

export default function Home() {
  return (
    <main id="top">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true">
          <div className="orb orb--a" />
          <div className="orb orb--b" />
          <div className="gridlines" />
        </div>

        <div className="wrap hero__grid">
          <div className="hero__copy">
            <p className="eyebrow reveal">
              <span className="dot" /> Full-service digital marketing · 10+ years · USA · UK · CA · AU · UAE
            </p>
            <h1 className="display reveal">
              Digital marketing
              <br />
              that grows <em>revenue,</em>
              <br />
              not just reach.
            </h1>
            <p className="lede reveal">
              SEO, paid media, social, content, websites and lead generation — planned, built and run by one senior team
              for brands across the US, UK, Canada, Australia and the UAE.{" "}
              <span className="hl">One partner. Every channel. Measurable growth.</span>
            </p>
            <div className="reveal">
              <AuditBar />
            </div>
            <div className="hero__links reveal">
              <Link href="/#contact">Book a strategy call →</Link>
              <Link href="/#roi">Try the ROI calculator →</Link>
            </div>
          </div>

          <div className="hero__visual reveal">
            <LeadEngine />
          </div>
        </div>
      </section>

      {/* ================= PLATFORMS ================= */}
      <section className="platforms" aria-label="Platforms we operate">
        <div className="wrap platforms__inner">
          <p className="platforms__label">
            <span>Platforms</span> we run campaigns on
          </p>
          <div className="platforms__viewport">
            <div className="platforms__track">
              {[...platforms, ...platforms].map((p, i) => (
                <span className="plat" key={i} aria-hidden={i >= platforms.length}>
                  <i>{p.glyph}</i>
                  {p.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Stats />
      <Certifications />

      {/* ================= MARQUEE ================= */}
      <section className="marquee" aria-label="Channels we operate">
        <div className="marquee__row">
          <div className="marquee__track">
            {[...channels, ...channels].map((c, i) => (
              <span key={i}>
                {c}
                <i aria-hidden="true">✦</i>
              </span>
            ))}
          </div>
        </div>
        <div className="marquee__row marquee__row--alt" aria-hidden="true">
          <div className="marquee__track">
            {[...channels, ...channels].reverse().map((c, i) => (
              <span key={i}>
                {c}
                <i>✦</i>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ================= STATEMENT ================= */}
      <section className="statement wrap">
        <p className="reveal">
          Most agencies sell <em>impressions.</em> We sell <em>outcomes</em> — more customers, more revenue and a brand
          people remember, across every channel that matters.
        </p>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="section__head section__head--split">
            <div>
              <p className="kicker reveal">01 — Capabilities</p>
              <h2 className="h2 reveal">
                One partner. <em>Every channel</em>
                <br /> your customers use.
              </h2>
            </div>
            <p className="muted reveal">Hire us for a single channel or the whole funnel. Every service has its own specialist team and playbook.</p>
          </div>

          <div className="bento bento--full">
            <article className="card card--xl tilt reveal">
              <div className="card__top">
                <span className="tag">{flagship.tag}</span>
                <span className="num">/01</span>
              </div>
              <h3>{flagship.title}</h3>
              <p>{flagship.body}</p>
              <ul className="ticks ticks--2">
                {flagship.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mini-flow" aria-hidden="true">
                {flagship.flow.map((f, k) => (
                  <span key={f} style={{ display: "contents" }}>
                    {k > 0 && <i />}
                    <span className={k === flagship.flow.length - 1 ? "on" : ""}>{f}</span>
                  </span>
                ))}
              </div>
            </article>

            {services.map((s, i) => (
              <Link href={`/services/${s.slug}`} className="card card--link tilt reveal" key={s.slug}>
                <div className="card__top">
                  <span className="ico">{s.icon}</span>
                  <span className="num">/{String(i + 2).padStart(2, "0")}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <span className="card__more">
                  Explore <span className="arr">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="section section--alt" id="process">
        <div className="wrap">
          <div className="section__head section__head--split">
            <div>
              <p className="kicker reveal">02 — The Method</p>
              <h2 className="h2 reveal">
                From kickoff to
                <br />
                <em>compounding growth</em> in four moves.
              </h2>
            </div>
            <p className="muted reveal">
              A tight, transparent operating rhythm: weekly reporting, a shared live dashboard and a dedicated strategist
              who works your hours.
            </p>
          </div>
          <ol className="steps">
            {steps.map((s) => (
              <li className="step reveal" key={s.n}>
                <span className="step__n">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <span className="step__t">{s.when}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CaseStudies />
      <WorkGallery />
      <RoiCalculator />
      <Testimonials />

      {/* ================= INDUSTRIES ================= */}
      <section className="section" id="industries">
        <div className="wrap">
          <div className="section__head section__head--split">
            <div>
              <p className="kicker reveal">03 — Where we play</p>
              <h2 className="h2 reveal">
                Specialists, <em>not</em> generalists.
              </h2>
            </div>
            <p className="muted reveal">
              Every vertical has its own buyer psychology, compliance rules and sales cycle. Pick your industry and market.
            </p>
          </div>
          <div className="industries">
            {marketIndustries.map((ind, i) => (
              <div className="ind reveal" key={ind.slug}>
                <span className="ind__n">0{i + 1}</span>
                <h4>{ind.name}</h4>
                <p>{ind.intro.split(". ")[0]}.</p>
                <div className="ind__links">
                  {countries.map((c) => (
                    <Link key={c.slug} href={`/digital-marketing/${c.slug}/${ind.slug}`} title={`${ind.name} marketing in ${c.label}`}>
                      {c.code}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="section section--alt">
        <div className="wrap why">
          <div className="why__copy">
            <p className="kicker reveal">04 — Why Arjunta</p>
            <h2 className="h2 reveal">
              Reporting that reads
              <br />
              like a <em>board pack.</em>
            </h2>
            <p className="muted reveal">
              Every engagement comes with a live dashboard and a monthly performance review — traffic, leads, sales,
              revenue, cost per acquisition and channel mix, in plain numbers your leadership team can act on.
            </p>
            <div className="why__list">
              {pillars.map((p) => (
                <div className="reveal" key={p.title}>
                  <b>{p.title}</b>
                  <span>{p.body}</span>
                </div>
              ))}
            </div>
          </div>
          <Console />
        </div>
      </section>

      <Pricing />
      <LeadMagnet />
      <InsightsPreview />

      {/* ================= FAQ ================= */}
      <section className="section section--alt" id="faq">
        <div className="wrap faq">
          <div>
            <p className="kicker reveal">06 — Questions</p>
            <h2 className="h2 reveal">
              Answers, <em>upfront.</em>
            </h2>
            <p className="muted reveal">
              Something else on your mind?{" "}
              <a href="#contact" className="link">
                Ask us directly.
              </a>
            </p>
          </div>
          <div className="acc">
            {faqs.map((f, i) => (
              <details className="reveal" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
