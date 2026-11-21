import type { MetadataRoute } from "next";
import { brand } from "@/lib/content";
import { serviceDetails } from "@/lib/services";
import { countries, marketIndustries } from "@/lib/markets";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const u = (p: string) => `${brand.url}${p}`;
  return [
    { url: u("/"), priority: 1 },
    { url: u("/about"), priority: 0.7 },
    { url: u("/insights"), priority: 0.7 },
    { url: u("/playbook"), priority: 0.6 },
    ...serviceDetails.map((s) => ({ url: u(`/services/${s.slug}`), priority: 0.9 })),
    ...countries.map((c) => ({ url: u(`/digital-marketing/${c.slug}`), priority: 0.8 })),
    ...countries.flatMap((c) => marketIndustries.map((i) => ({ url: u(`/digital-marketing/${c.slug}/${i.slug}`), priority: 0.7 }))),
    ...posts.map((p) => ({ url: u(`/insights/${p.slug}`), lastModified: p.date, priority: 0.6 })),
  ];
}
