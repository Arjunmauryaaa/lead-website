import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/posts";
import { brand } from "@/lib/content";
import { Breadcrumbs, CtaBand, JsonLd } from "@/components/PageBits";
import { PostCard, formatDate } from "@/components/InsightsPreview";
import { PlaybookForm } from "@/components/LeadMagnet";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const p = getPost((await params).slug);
  if (!p) return {};
  return {
    title: `${p.title} | Arjunta`,
    description: p.excerpt,
    alternates: { canonical: `/insights/${p.slug}` },
    openGraph: { type: "article", title: p.title, description: p.excerpt, publishedTime: p.date },
  };
}

const anchor = (t: string) => t.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const p = getPost((await params).slug);
  if (!p) notFound();
  const toc = p.body.filter((b): b is { type: "h2"; text: string } => b.type === "h2");
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 2);

  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.excerpt,
          datePublished: p.date,
          author: { "@type": "Organization", name: brand.name },
          publisher: { "@type": "Organization", name: brand.name },
        }}
      />
      <article>
        <header className="art-hero">
          <div className="hero__bg" aria-hidden="true">
            <div className="orb orb--a" />
            <div className="gridlines" />
          </div>
          <div className="wrap art-hero__inner">
            <div className="reveal">
              <Breadcrumbs items={[{ href: "/insights", label: "Insights" }, { label: p.category }]} />
            </div>
            <p className="art-meta reveal">
              <span className="art-cat">{p.category}</span>
              {formatDate(p.date)} · {p.readMins} min read
            </p>
            <h1 className="art-title reveal">{p.title}</h1>
            <p className="lede reveal">{p.excerpt}</p>
          </div>
        </header>

        <div className="wrap art-layout">
          <aside className="art-side">
            <div className="art-toc">
              <p className="footer__h">In this article</p>
              {toc.map((h) => (
                <a key={h.text} href={`#${anchor(h.text)}`}>
                  {h.text}
                </a>
              ))}
            </div>
            <div className="art-promo">
              <p className="kicker">Free playbook</p>
              <b>The 2026 Digital Marketing Playbook</b>
              <PlaybookForm compact />
            </div>
          </aside>

          <div className="prose">
            {p.body.map((b, i) => {
              if (b.type === "h2")
                return (
                  <h2 key={i} id={anchor(b.text)}>
                    {b.text}
                  </h2>
                );
              if (b.type === "ul")
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
              return <p key={i}>{b.text}</p>;
            })}
            <div className="art-end">
              <p>
                Want this applied to your business? <Link href="/#contact" className="link">Book a free strategy call →</Link>
              </p>
            </div>
          </div>
        </div>
      </article>

      <section className="section section--tight">
        <div className="wrap">
          <p className="kicker reveal">Keep reading</p>
          <div className="posts-grid posts-grid--2" style={{ marginTop: 28 }}>
            {related.map((r) => (
              <div className="reveal" key={r.slug}>
                <PostCard p={r} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
