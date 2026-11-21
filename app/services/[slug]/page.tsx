import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails, getService } from "@/lib/services";
import { brand } from "@/lib/content";
import { PageHero, CtaBand, Emph, JsonLd } from "@/components/PageBits";

export function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const s = getService((await params).slug);
  if (!s) return {};
  return { title: s.metaTitle, description: s.metaDescription, alternates: { canonical: `/services/${s.slug}` } };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const others = serviceDetails.filter((x) => x.slug !== s.slug).slice(0, 7);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.name,
          description: s.metaDescription,
          provider: { "@type": "Organization", name: brand.name, url: brand.url },
          areaServed: ["US", "GB", "CA", "AU", "AE"],
        }}
      />
      <PageHero
        crumbs={[{ href: "/#services", label: "Services" }, { label: s.name }]}
        kicker={`${s.icon}  ${s.name}`}
        title={s.headline}
        intro={s.intro}
        aside={
          <div className="outcomes">
            <p className="outcomes__h">What we focus on</p>
            {s.outcomes.map((o, i) => (
              <div className="outcome" key={i}>
                <b>{o.value}</b>
                <span>{o.label}</span>
              </div>
            ))}
          </div>
        }
      >
        <Link href="/#contact" className="btn btn--solid btn--lg magnetic">
          Book a strategy call <span className="arr">→</span>
        </Link>
        <Link href="/#audit" className="btn btn--ghost btn--lg">
          Free audit
        </Link>
      </PageHero>

      {/* Included */}
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="kicker reveal">What&apos;s included</p>
            <h2 className="h2 reveal">
              Everything you need, <em>nothing</em> you don&apos;t.
            </h2>
          </div>
          <div className="inc-grid">
            {s.included.map((it, i) => (
              <article className="card tilt reveal" key={it.title}>
                <div className="card__top">
                  <span className="ico">{s.icon}</span>
                  <span className="num">/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section section--alt">
        <div className="wrap">
          <div className="section__head">
            <p className="kicker reveal">How we work</p>
            <h2 className="h2 reveal">
              A proven <em>process.</em>
            </h2>
          </div>
          <ol className="timeline">
            {s.process.map((p, i) => (
              <li className="reveal" key={p.title}>
                <span className="timeline__n">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Deliverables + tools */}
      <section className="section">
        <div className="wrap split2">
          <div className="reveal">
            <p className="kicker">Deliverables</p>
            <h2 className="h2">
              What you <em>get.</em>
            </h2>
            <ul className="ticks ticks--big">
              {s.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className="toolbox reveal">
            <p className="kicker">Our toolkit</p>
            <div className="toolbox__grid">
              {s.tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="toolbox__note">
              <b>You own everything.</b>
              <span>Accounts, data, content and assets are set up in your name — always.</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--alt">
        <div className="wrap faq">
          <div>
            <p className="kicker reveal">FAQ</p>
            <h2 className="h2 reveal">
              <Emph text={`${s.name}, *answered.*`} />
            </h2>
          </div>
          <div className="acc">
            {s.faqs.map((f, i) => (
              <details className="reveal" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="kicker reveal">Other services</p>
            <h2 className="h2 reveal">
              Better <em>together.</em>
            </h2>
          </div>
          <div className="related">
            {others.map((o) => (
              <Link key={o.slug} href={`/services/${o.slug}`} className="related__item reveal">
                <span className="ico">{o.icon}</span>
                <b>{o.name}</b>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Let's grow with *${s.name}.*`} />
    </main>
  );
}
