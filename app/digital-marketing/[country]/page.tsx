import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, getCountry, marketIndustries } from "@/lib/markets";
import { services, brand } from "@/lib/content";
import { PageHero, CtaBand, JsonLd } from "@/components/PageBits";

export function generateStaticParams() {
  return countries.map((c) => ({ country: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }): Promise<Metadata> {
  const c = getCountry((await params).country);
  if (!c) return {};
  return {
    title: `Digital Marketing Agency for ${c.label} Brands | Arjunta`,
    description: `Full-service digital marketing for businesses in ${c.name}: SEO, Google Ads, social media, content, web design and email. Senior team, ${c.currency} invoicing, your time zone.`,
    alternates: { canonical: `/digital-marketing/${c.slug}` },
  };
}

export default async function CountryPage({ params }: { params: Promise<{ country: string }> }) {
  const c = getCountry((await params).country);
  if (!c) notFound();

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: `${brand.name} — Digital Marketing for ${c.label}`,
          url: `${brand.url}/digital-marketing/${c.slug}`,
          areaServed: c.label,
        }}
      />
      <PageHero
        crumbs={[{ label: "Markets" }, { label: c.label }]}
        kicker={`${c.code} · Digital marketing in ${c.label}`}
        title={`Digital marketing for *${c.label}* brands.`}
        intro={c.intro}
        aside={
          <div className="mkt-card">
            <span className="mkt-card__code">{c.code}</span>
            <dl>
              <div>
                <dt>Key cities</dt>
                <dd>{c.cities.join(" · ")}</dd>
              </div>
              <div>
                <dt>Time zones covered</dt>
                <dd>{c.timezones}</dd>
              </div>
              <div>
                <dt>Invoicing</dt>
                <dd>{c.currency}</dd>
              </div>
            </dl>
          </div>
        }
      >
        <Link href="/#contact" className="btn btn--solid btn--lg magnetic">
          Book a call in your time zone <span className="arr">→</span>
        </Link>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="kicker reveal">Market insight</p>
            <h2 className="h2 reveal">
              What works in <em>{c.label}.</em>
            </h2>
          </div>
          <div className="insights3">
            {c.insights.map((x, i) => (
              <article className="card tilt reveal" key={x.title}>
                <div className="card__top">
                  <span className="tag">Insight</span>
                  <span className="num">/0{i + 1}</span>
                </div>
                <h3>{x.title}</h3>
                <p>{x.body}</p>
              </article>
            ))}
          </div>
          <div className="compliance reveal">
            <span className="compliance__ico">§</span>
            <div>
              <b>Compliance built in</b>
              <p>{c.compliance}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section__head">
            <p className="kicker reveal">Industries</p>
            <h2 className="h2 reveal">
              Specialist playbooks for <em>{c.label}.</em>
            </h2>
          </div>
          <div className="related related--ind">
            {marketIndustries.map((ind) => (
              <Link key={ind.slug} href={`/digital-marketing/${c.slug}/${ind.slug}`} className="related__item reveal">
                <b>{ind.name}</b>
                <small>Marketing for {ind.audience}</small>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section__head">
            <p className="kicker reveal">Services</p>
            <h2 className="h2 reveal">
              Every channel, <em>one</em> team.
            </h2>
          </div>
          <div className="related">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="related__item reveal">
                <span className="ico">{s.icon}</span>
                <b>{s.title}</b>
                <span className="arr">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Grow faster in *${c.label}.*`} />
    </main>
  );
}
