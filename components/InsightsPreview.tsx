import Link from "next/link";
import { posts } from "@/lib/posts";

export function formatDate(d: string) {
  return new Date(d + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

export function PostCard({ p, big = false }: { p: (typeof posts)[number]; big?: boolean }) {
  return (
    <Link href={`/insights/${p.slug}`} className={`post-card tilt ${big ? "post-card--big" : ""}`}>
      <div className={`post-card__art post-card__art--${p.category.toLowerCase().replace(/\s+/g, "-")}`} aria-hidden="true">
        <span className="pc-orb" />
        <span className="pc-grid" />
        <span className="pc-cat">{p.category}</span>
      </div>
      <div className="post-card__body">
        <p className="post-card__meta">
          <span>{p.category}</span> · {formatDate(p.date)} · {p.readMins} min read
        </p>
        <h3>{p.title}</h3>
        <p className="post-card__ex">{p.excerpt}</p>
        <span className="post-card__more">
          Read article <span className="arr">→</span>
        </span>
      </div>
    </Link>
  );
}

export default function InsightsPreview() {
  return (
    <section className="section" id="insights">
      <div className="wrap">
        <div className="section__head section__head--split">
          <div>
            <p className="kicker reveal">Insights</p>
            <h2 className="h2 reveal">
              Ideas from the <em>front line.</em>
            </h2>
          </div>
          <Link href="/insights" className="btn btn--ghost reveal" style={{ justifySelf: "end" }}>
            All insights <span className="arr">→</span>
          </Link>
        </div>
        <div className="posts-grid">
          {posts.slice(0, 3).map((p) => (
            <div className="reveal" key={p.slug}>
              <PostCard p={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
