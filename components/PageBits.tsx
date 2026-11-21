import Link from "next/link";
import type { ReactNode } from "react";

/** Renders "*word*" segments as gold italic <em>. */
export function Emph({ text }: { text: string }) {
  const parts = text.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((p, i) => (p.startsWith("*") && p.endsWith("*") ? <em key={i}>{p.slice(1, -1)}</em> : <span key={i}>{p}</span>))}
    </>
  );
}

export function Breadcrumbs({ items }: { items: { href?: string; label: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map((it, i) => (
        <span key={i}>
          <i aria-hidden="true">/</i>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageHero({
  crumbs,
  kicker,
  title,
  intro,
  children,
  aside,
}: {
  crumbs: { href?: string; label: string }[];
  kicker: string;
  title: string;
  intro: string;
  children?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="phero">
      <div className="hero__bg" aria-hidden="true">
        <div className="orb orb--a" />
        <div className="gridlines" />
      </div>
      <div className={`wrap phero__grid ${aside ? "phero__grid--aside" : ""}`}>
        <div>
          <div className="reveal">
            <Breadcrumbs items={crumbs} />
          </div>
          <p className="kicker reveal">{kicker}</p>
          <h1 className="phero__title reveal">
            <Emph text={title} />
          </h1>
          <p className="lede reveal">{intro}</p>
          {children && <div className="phero__cta reveal">{children}</div>}
        </div>
        {aside && <div className="phero__aside reveal">{aside}</div>}
      </div>
    </section>
  );
}

export function CtaBand({ title = "Ready to grow *faster?*", text }: { title?: string; text?: string }) {
  return (
    <section className="section ctaband">
      <div className="wrap">
        <div className="ctaband__box reveal">
          <div className="cta__bg" aria-hidden="true" />
          <div className="ctaband__copy">
            <h2 className="h2">
              <Emph text={title} />
            </h2>
            <p className="muted">
              {text ?? "Get a free audit of your website and channels, or book a 30-minute strategy call with a senior strategist."}
            </p>
          </div>
          <div className="ctaband__btns">
            <Link href="/#contact" className="btn btn--solid btn--lg magnetic">
              Book a strategy call <span className="arr">→</span>
            </Link>
            <Link href="/#audit" className="btn btn--ghost btn--lg">
              Free website audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
