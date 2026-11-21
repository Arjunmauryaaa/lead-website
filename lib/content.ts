// All site copy lives here so you can edit text without touching components.

export const brand = {
  name: "Arjunta",
  tagline: "Full-service digital marketing agency",
  email: "hello@arjunta.com",
  linkedin: "#",
  markets: ["USA", "UK", "CA", "AU", "UAE"],
  url: "https://arjunta.com",
  // WhatsApp number in international format, digits only (e.g. "14155550123"). Leave "" to hide the WhatsApp option.
  whatsapp: "",
  // Your Calendly / Cal.com booking link (e.g. "https://cal.com/arjunta/strategy"). Leave "" to use the built-in request picker.
  bookingUrl: "",
};

// ---------- About ----------
export const founder = {
  name: "Founder Name",
  role: "Founder & Head of Strategy",
  initials: "FN",
  bio: [
    "I started Arjunta after more than a decade running digital marketing for brands across e-commerce, SaaS, healthcare and professional services. The pattern was always the same: companies were paying several vendors for SEO, ads, social and web — and nobody owned the number that mattered, revenue.",
    "Arjunta exists to be the one senior team that owns the whole funnel. We work across time zones with brands in the US, UK, Canada, Australia and the UAE, and we measure ourselves the way our clients' boards do: by growth.",
  ],
  linkedin: "#",
};

export const values = [
  { title: "Outcomes over output", body: "We report on revenue, leads and cost per acquisition — not on how many posts we published." },
  { title: "Senior by default", body: "The people who pitch you are the people who run your account. No bait-and-switch." },
  { title: "Radical transparency", body: "You own every account, every asset and every data point, and you see every number live." },
  { title: "Built for your time zone", body: "We overlap with your working day, answer within 24 hours and meet on your calendar." },
];

// ---------- Social proof (replace samples with REAL data before going live) ----------
// Every item with `sample: true` renders a visible "Sample" badge on the site.
export const caseStudies = [
  {
    sample: true,
    industry: "E-commerce",
    market: "USA",
    client: "Sample — Apparel D2C brand",
    title: "Rebuilt paid social around creative testing and lifted return on ad spend.",
    services: ["Paid Social", "Email & Automation", "CRO"],
    metrics: [
      { label: "ROAS", before: "1.8×", after: "4.1×" },
      { label: "Email revenue share", before: "9%", after: "24%" },
      { label: "Conversion rate", before: "1.4%", after: "2.6%" },
    ],
  },
  {
    sample: true,
    industry: "Healthcare",
    market: "Australia",
    client: "Sample — Multi-location dental group",
    title: "Local SEO and Google Ads programme to fill new-patient appointment slots.",
    services: ["SEO", "Google Ads & PPC", "Web Design"],
    metrics: [
      { label: "New-patient enquiries / mo", before: "42", after: "131" },
      { label: "Cost per enquiry", before: "A$96", after: "A$41" },
      { label: "Map-pack keywords", before: "6", after: "38" },
    ],
  },
  {
    sample: true,
    industry: "SaaS",
    market: "UK",
    client: "Sample — B2B workflow software",
    title: "Content-led SEO and LinkedIn programme to grow inbound demo requests.",
    services: ["Content", "SEO", "Paid Social"],
    metrics: [
      { label: "Organic sessions / mo", before: "8.2K", after: "31K" },
      { label: "Demo requests / mo", before: "19", after: "64" },
      { label: "Cost per demo", before: "£410", after: "£165" },
    ],
  },
  {
    sample: true,
    industry: "Real Estate",
    market: "UAE",
    client: "Sample — Dubai property developer",
    title: "Full-funnel launch campaign for an off-plan residential project.",
    services: ["Paid Social", "Google Ads & PPC", "Branding"],
    metrics: [
      { label: "Qualified leads", before: "—", after: "1,240" },
      { label: "Cost per lead", before: "AED 310", after: "AED 118" },
      { label: "Site visits booked", before: "—", after: "186" },
    ],
  },
];

export const testimonials = [
  { sample: true, quote: "They took over SEO, ads and email in one go and, for the first time, we could see exactly which channel was paying for itself.", name: "Sample Name", role: "Founder, D2C brand", market: "USA" },
  { sample: true, quote: "Senior people, fast answers, and reporting our board actually reads. It feels like an in-house team in our time zone.", name: "Sample Name", role: "Marketing Director, SaaS", market: "UK" },
  { sample: true, quote: "Our phones started ringing within weeks of launch. The local SEO work keeps compounding month after month.", name: "Sample Name", role: "Practice Owner, Dental", market: "Australia" },
  { sample: true, quote: "Clear strategy, beautiful creative and honest numbers. Exactly what we wanted from an agency partner.", name: "Sample Name", role: "Head of Sales, Real Estate", market: "UAE" },
];

// List only certifications you have actually earned (all are free to obtain).
export const certifications = [
  { sample: true, issuer: "Google", name: "Google Ads Search Certification" },
  { sample: true, issuer: "Google", name: "Google Analytics Certification" },
  { sample: true, issuer: "Meta", name: "Meta Certified Media Buying Professional" },
  { sample: true, issuer: "HubSpot", name: "Inbound Marketing Certification" },
  { sample: true, issuer: "Semrush", name: "SEO Toolkit Certification" },
];

// "Our Work" gallery — rendered as styled concept tiles. Replace with real work later.
export const work = [
  { kind: "Ad creative", title: "Summer collection launch", client: "Fashion D2C", tone: "clay", headline: "New season. Same obsession.", cta: "Shop now" },
  { kind: "Website", title: "Clinic website redesign", client: "Dental group", tone: "sage", headline: "Your smile, our specialty.", cta: "Book a visit" },
  { kind: "Social post", title: "Thought-leadership series", client: "SaaS company", tone: "slate", headline: "5 workflows to automate this quarter", cta: "Read more" },
  { kind: "Landing page", title: "Off-plan launch", client: "Property developer", tone: "gold", headline: "Waterfront living, from AED 1.2M", cta: "Register interest" },
  { kind: "Ad creative", title: "Lead-gen campaign", client: "Solar installer", tone: "sage", headline: "Cut your power bill by design.", cta: "Get a quote" },
  { kind: "Email", title: "Win-back flow", client: "Skincare brand", tone: "lilac", headline: "We saved your favourites.", cta: "Come back" },
];

// Only publish figures that are true for you / your team.
export const companyStats = [
  { n: 10, suffix: "+", tag: "Experience", label: "Years in digital marketing" },
  { n: 5, suffix: "", tag: "Reach", label: "Core international markets served" },
  { n: 14, suffix: "d", tag: "Speed", label: "From kickoff to live campaigns" },
  { n: 24, suffix: "h", tag: "Service", label: "Response time, in any time zone" },
];

// Platforms you operate on (tools you use — not claimed partnerships).
export const platforms = [
  { name: "Google Ads", glyph: "◎" },
  { name: "Meta", glyph: "∞" },
  { name: "LinkedIn", glyph: "▣" },
  { name: "TikTok", glyph: "♪" },
  { name: "Shopify", glyph: "◈" },
  { name: "HubSpot", glyph: "✺" },
  { name: "Semrush", glyph: "◉" },
  { name: "GA4", glyph: "▥" },
  { name: "Mailchimp", glyph: "✉" },
  { name: "WordPress", glyph: "◇" },
];

export const navLinks = [
  { href: "/#work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/#pricing", label: "Pricing" },
];

export const clocks = [
  { city: "New York", tz: "America/New_York" },
  { city: "Toronto", tz: "America/Toronto" },
  { city: "London", tz: "Europe/London" },
  { city: "Dubai", tz: "Asia/Dubai" },
  { city: "Sydney", tz: "Australia/Sydney" },
];

export const channels = [
  "Search Engine Optimisation",
  "Google Ads",
  "Social Media Marketing",
  "Paid Social",
  "Content Marketing",
  "Web Design",
  "Email Marketing",
  "Branding",
  "Lead Generation",
  "Analytics & CRO",
];

// Flagship card in the services grid
export const flagship = {
  tag: "Full-funnel",
  title: "Growth marketing, end to end",
  body: "One senior team owning strategy, creative, media and measurement — so every channel works together instead of competing for credit.",
  points: ["Strategy & media planning", "Creative & content production", "Performance across every channel", "Analytics, attribution & reporting"],
  flow: ["Attract", "Engage", "Convert", "Retain"],
};

export const services = [
  { slug: "seo", icon: "⌕", title: "SEO", body: "Technical, on-page and content SEO that compounds into organic traffic you own." },
  { slug: "google-ads", icon: "◎", title: "Google Ads & PPC", body: "Search, Shopping and Performance Max campaigns built around margin, not clicks." },
  { slug: "social-media-marketing", icon: "◐", title: "Social Media Marketing", body: "Always-on content, community and calendars for Instagram, LinkedIn, TikTok and more." },
  { slug: "paid-social", icon: "▶", title: "Paid Social", body: "Creative-led Meta, TikTok and LinkedIn ads that turn scroll into sales." },
  { slug: "content-marketing", icon: "✎", title: "Content & Copywriting", body: "Blogs, landing pages, video scripts and thought leadership that converts." },
  { slug: "web-design", icon: "▢", title: "Web Design & Development", body: "Fast, conversion-focused websites and landing pages on WordPress, Webflow & Shopify." },
  { slug: "email-marketing", icon: "✉", title: "Email & Automation", body: "Lifecycle flows, newsletters and CRM automation that keep customers coming back." },
  { slug: "branding", icon: "◆", title: "Branding & Creative", body: "Identity, ad creative and design systems that look as premium as you are." },
];

// ROI calculator benchmarks — rough, conservative planning assumptions, not guarantees.
export const roiIndustries = [
  { id: "ecommerce", label: "E-commerce & D2C", cpc: 1.1, cvr: 0.025, value: 85, close: 1, unit: "orders" },
  { id: "saas", label: "B2B SaaS & Technology", cpc: 4.5, cvr: 0.03, value: 6000, close: 0.12, unit: "customers" },
  { id: "healthcare", label: "Healthcare & Dental", cpc: 3.2, cvr: 0.06, value: 1200, close: 0.35, unit: "patients" },
  { id: "realestate", label: "Real Estate", cpc: 2.0, cvr: 0.03, value: 9000, close: 0.03, unit: "deals" },
  { id: "home", label: "Home Services", cpc: 5.5, cvr: 0.07, value: 4500, close: 0.25, unit: "jobs" },
  { id: "pro", label: "Professional Services", cpc: 4.0, cvr: 0.045, value: 3500, close: 0.2, unit: "clients" },
];

export const steps = [
  { n: "01", title: "Discover", body: "Audit of your brand, website, channels, competitors and numbers. We find where growth is leaking.", when: "Week 1" },
  { n: "02", title: "Strategise", body: "A channel-by-channel marketing plan with budgets, creative direction, KPIs and a 90-day roadmap.", when: "Week 1–2" },
  { n: "03", title: "Launch", body: "Campaigns, content and pages go live with full tracking, so every lead and sale is attributed.", when: "Week 2" },
  { n: "04", title: "Optimise", body: "Weekly testing on creative, audiences, keywords and offers. What works scales; what doesn't gets cut.", when: "Ongoing" },
];

export const industries = [
  { title: "E-commerce & D2C", body: "Shopify brands, online retail, subscriptions", markets: "USA · UK · AU" },
  { title: "B2B SaaS & Technology", body: "Software, IT services, cloud & security", markets: "USA · CA" },
  { title: "Healthcare & Dental", body: "Clinics, practices, aesthetics & wellness", markets: "AU · UK" },
  { title: "Real Estate", body: "Agents, brokerages, developers", markets: "UK · UAE" },
  { title: "Home Services", body: "Roofing, solar, HVAC, remodeling", markets: "USA · AU" },
  { title: "Professional Services", body: "Law, accounting, consulting, recruitment", markets: "Global" },
];

export const pillars = [
  { title: "Senior strategist", body: "One accountable owner — never handed off to juniors." },
  { title: "Month-to-month", body: "No long lock-ins. We earn the next month, every month." },
  { title: "Radical transparency", body: "Live dashboard. Every lead, every sale, every dollar." },
  { title: "Compliance-first", body: "GDPR, CAN-SPAM & CASL-aware marketing practices." },
];

export type Currency = "USD" | "GBP" | "AUD";
export const currencySymbol: Record<Currency, string> = { USD: "$", GBP: "£", AUD: "A$" };

export const plans: {
  name: string;
  price: Record<Currency, string> | null;
  desc: string;
  features: string[];
  cta: string;
  featured?: boolean;
}[] = [
  {
    name: "Starter",
    price: { USD: "1,200", GBP: "950", AUD: "1,850" },
    desc: "Two channels, done properly. Ideal for building a strong foundation.",
    features: ["Any 2 services (e.g. SEO + Social)", "Monthly content calendar", "Tracking & analytics setup", "Monthly performance report"],
    cta: "Start with Starter",
  },
  {
    name: "Growth",
    price: { USD: "2,400", GBP: "1,900", AUD: "3,700" },
    desc: "A full-funnel marketing team for brands ready to scale.",
    features: ["SEO, paid media, social & email", "Ad creative & landing pages", "Conversion optimisation", "Live dashboard", "Weekly strategy call"],
    cta: "Choose Growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: null,
    desc: "Multi-market programmes, white-label and custom scopes.",
    features: ["Multi-country campaigns", "Dedicated cross-channel pod", "White-label for agencies", "SLA-backed delivery"],
    cta: "Talk to us",
  },
];

export const faqs = [
  {
    q: "What services do you offer?",
    a: "We're a full-service digital marketing agency: SEO, Google Ads & PPC, social media marketing, paid social, content, web design & development, email automation, branding and lead generation. You can hire us for one channel or the whole funnel.",
  },
  {
    q: "How quickly will we see results?",
    a: "Paid media typically produces leads and sales within the first weeks of launch. SEO and content compound over 3–6 months. We set realistic KPIs per channel up front, so you always know what to expect and when.",
  },
  {
    q: "Where is your team based, and how do we communicate?",
    a: "We're a remote-first team serving clients across North America, the UK, the Middle East and Australia. We align meetings to your business hours and work over Slack, email and video calls — you'll always have a named strategist who knows your account.",
  },
  {
    q: "Do you lock us into long contracts?",
    a: "No. Engagements are month-to-month after a short onboarding period. We'd rather keep you with results than with paperwork.",
  },
  {
    q: "Who owns the ad accounts, website and data?",
    a: "You do — always. Ad accounts, domains, websites, content, analytics and CRM data are set up in your name or transferred to you.",
  },
  {
    q: "How do you invoice international clients?",
    a: "We invoice in USD, GBP, AUD, CAD or EUR and accept international bank transfer, card and major payment platforms.",
  },
];
