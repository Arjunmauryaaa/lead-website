# lead-website

Website for **Arjunta**, a full-service digital marketing agency serving brands in the USA, UK, Canada, Australia and the UAE.

Built with **Next.js 15** (App Router) and **TypeScript**, using a custom matte design system with no CSS framework.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm start          # serve the production build
```

## What's inside

- **Home page**: hero with an animated growth-engine visual and a free website audit form, animated stats, services, process, case studies, work gallery, ROI calculator, testimonials, industries, pricing, playbook offer, insights, FAQ and booking/contact.
- **Service pages**: `/services/[slug]` (8 services).
- **Market pages**: `/digital-marketing/[country]` (5) and `/digital-marketing/[country]/[industry]` (30).
- **Insights blog**: `/insights` and `/insights/[slug]`.
- **Gated playbook**: `/playbook`, unlocked by email and printable to PDF.
- **About page**: `/about`.
- **Lead API**: `POST /api/lead` handles every form (audit, ROI, playbook, booking, contact).
- **SEO**: `sitemap.xml`, `robots.txt`, per-page metadata and structured data.

## Configuration

| What | Where |
|---|---|
| Brand name, email, WhatsApp number, booking link (Calendly or Cal.com), site URL | `lib/content.ts` → `brand` |
| All home-page copy, services, pricing, FAQ, founder bio | `lib/content.ts` |
| Service page content | `lib/services.ts` |
| Country and industry landing pages | `lib/markets.ts` |
| Blog articles | `lib/posts.ts` |
| Playbook chapters | `lib/playbook.ts` |

### Receiving leads

Copy `.env.example` to `.env.local` and set:

```
LEAD_WEBHOOK_URL=https://hooks.zapier.com/...   # or Make, Slack, or a Google Apps Script webhook
```

Every form submission is POSTed there as JSON. In local development, leads are also saved to `data/leads.jsonl`, which is git-ignored.

## Before going live

- Replace every item marked `sample: true` in `lib/content.ts` (case studies, testimonials, certifications) with real data. These items show a visible **Sample** badge on the site.
- Add the founder's name, bio and photo (`public/founder.jpg`).
- Set `brand.url` and `metadataBase` in `app/layout.tsx` to your real domain.
- Set `LEAD_WEBHOOK_URL` on your hosting platform, for example Vercel.
