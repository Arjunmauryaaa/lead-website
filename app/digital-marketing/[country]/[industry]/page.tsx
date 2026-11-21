import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { countries, marketIndustries, getCountry, getMarketIndustry } from "@/lib/markets";
import { PageHero, CtaBand } from "@/components/PageBits";

export function generateStaticParams() {
  return countries.flatMap((c) => marketIndustries.map((i) => ({ country: c.slug, industry: i.slug })));
}

type P = { params: Promise<{ country: string; industry: string }> };

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export async function generateMetadata({ params }: P): Promise<Metadata> {
  const { country, industry } = await params;
  const c = getCountry(country);
  const i = getMarketIndustry(industry);
  if (!c || !i) return {};
  return {
    title: `Digital Marketing for ${cap(i.audience)} in ${c.label} | Arjunta`,
    description: `SEO, Google Ads, social media and lead generation for ${i.audience} in ${c.name}. ${i.intro.split(". ")[0]}.`,
    alternates: { canonical: `/digital-marketing/${c.slug}/${i.slug}` },
  };
}

export default async function IndustryMarketPage({ params }: P) {
  const { country, industry } = await params;
  const c = getCountry(country);
  const i = getMarketIndustry(industry);
  if (!c || !i) notFound();

  return (
    <main>
      <PageHero
        crumbs={[{ href: `/digital-marketing/${c.slug}`, label: c.label }, { label: i.name }]}
        kicker={`${i.name} · ${c.label}`}
        title={`Digital marketing for *${i.audience}* in ${c.label}.`}
        intro={i.intro}
        aside={
          <div className="kpi-card">
            <p className="outcomes__h">KPIs we track</p>
            {i.kpis.map((k, n) => (
              <div className="kpi-card__row" key={k}>
                <span>{String(n + 1).padStart(2, "0")}</span>
                <b>{k}</b>
              </div>
            ))}
            <p className="kpi-card__foot">
              {c.code} · {c.currency} reporting · {c.timezones}
            </p>
          </div>
        }
      >
        <Link href="/#contact" className="btn btn--solid btn--lg magnetic">
          Book a strategy call <span className="arr">→</span>
        </Link>
        <Link href="/#roi" className="btn btn--ghost btn--lg">
          Estimate your ROI
        </Link>
      </PageHero>

      <section className="section">
        <div className="wrap split2">
          <div className="reveal">
            <p className="kicker">The challenge</p>
            <h2 className="h2">
              What holds {i.audience} <em>back.</em>
            </h2>
            <ol className="challenges">
              {i.challenges.map((ch, n) => (
                <li key={ch}>
                  <span>{String(n + 1).padStart(2, "0")}</span>
                  {ch}
                </li>
              ))}
            </ol>
          </div>
          <div className="reveal">
            <p className="kicker">Our playbook</p>
            <h2 className="h2">
              The channels we <em>prioritise.</em>
            </h2>
            <div className="playlist">
              {i.playbook.map((pb) => (
                <div className="playlist__item" key={pb.channel}>
                  <b>{pb.channel}</b>
                  <p>{pb.why}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="wrap">
          <div className="section__head">
            <p className="kicker reveal">Local expertise</p>
            <h2 className="h2 reveal">
              Built for <em>{c.label}.</em>
            </h2>
          </div>
          <div className="insights3">
            {c.insights.map((x, n) => (
              <article className="card tilt reveal" key={x.title}>
                <div className="card__top">
                  <span className="tag">{c.code}</span>
                  <span className="num">/0{n + 1}</span>
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

      <section className="section">
        <div className="wrap">
          <p className="kicker reveal">{i.name} in other markets</p>
          <div className="related" style={{ marginTop: 28 }}>
            {countries
              .filter((x) => x.slug !== c.slug)
              .map((x) => (
                <Link key={x.slug} href={`/digital-marketing/${x.slug}/${i.slug}`} className="related__item reveal">
                  <span className="ico">{x.code}</span>
                  <b>{x.label}</b>
                  <span className="arr">→</span>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Let's grow your *${i.name}* business.`} />
    </main>
  );
}
