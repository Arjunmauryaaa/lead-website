import type { Metadata } from "next";
import { posts } from "@/lib/posts";
import { PageHero, CtaBand } from "@/components/PageBits";
import { PostCard } from "@/components/InsightsPreview";
import { PlaybookForm } from "@/components/LeadMagnet";

export const metadata: Metadata = {
  title: "Insights | Arjunta Digital Marketing",
  description: "Practical, senior-level thinking on SEO, paid media, social, content and growth strategy.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [first, ...rest] = posts;
  return (
    <main>
      <PageHero
        crumbs={[{ label: "Insights" }]}
        kicker="Insights"
        title="Ideas from the *front line* of growth."
        intro="Practical, no-fluff thinking on SEO, paid media, social, content and strategy — written by the people who run the campaigns."
      />
      <section className="section section--tight">
        <div className="wrap">
          <div className="reveal">
            <PostCard p={first} big />
          </div>
          <div className="posts-grid posts-grid--2">
            {rest.map((p) => (
              <div className="reveal" key={p.slug}>
                <PostCard p={p} />
              </div>
            ))}
            <div className="news reveal">
              <p className="kicker">Free playbook</p>
              <h3>Get the 2026 Digital Marketing Playbook.</h3>
              <p className="muted">8 chapters, 40+ concrete actions. Instant access.</p>
              <PlaybookForm compact />
            </div>
          </div>
        </div>
      </section>
      <CtaBand />
    </main>
  );
}
