export type ServiceDetail = {
  slug: string;
  name: string;
  icon: string;
  headline: string;
  intro: string;
  outcomes: { value: string; label: string }[];
  included: { title: string; body: string }[];
  process: { title: string; body: string }[];
  deliverables: string[];
  tools: string[];
  faqs: { q: string; a: string }[];
  metaTitle: string;
  metaDescription: string;
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "seo",
    name: "SEO",
    icon: "⌕",
    headline: "SEO that compounds into *revenue*",
    intro:
      "We build organic search programmes around the queries your buyers actually use, not vanity rankings. Technical foundations, content and authority are planned together so every month of work keeps paying back.",
    outcomes: [
      { value: "Top 3", label: "Target positions for revenue-driving keywords" },
      { value: "Core Web Vitals", label: "Technical health brought to passing thresholds" },
      { value: "Qualified", label: "Organic traffic measured by leads and sales, not visits" },
    ],
    included: [
      {
        title: "Technical audit & fixes",
        body: "Crawlability, indexation, site architecture, structured data and page speed reviewed and prioritised by impact. We work with your developers or implement fixes directly.",
      },
      {
        title: "Keyword & intent research",
        body: "We map search demand to each stage of the buying journey and to the pages that should win it, so content effort goes where revenue is.",
      },
      {
        title: "On-page optimisation",
        body: "Titles, headings, internal links and copy refined for relevance and click-through without diluting your brand voice.",
      },
      {
        title: "Content strategy",
        body: "A topic plan built around commercial pages and supporting articles that earn links and build topical authority.",
      },
      {
        title: "Local & international SEO",
        body: "Google Business Profile management, local citations, and hreflang and market targeting for multi-country sites.",
      },
      {
        title: "Digital PR & link earning",
        body: "Editorial outreach and linkable assets that attract relevant, credible links. No link schemes or paid networks.",
      },
    ],
    process: [
      {
        title: "Audit",
        body: "We benchmark technical health, content coverage and competitor visibility to establish where the real gaps are.",
      },
      {
        title: "Strategy",
        body: "A prioritised roadmap ties keyword clusters to pages, timelines and the business metrics they should move.",
      },
      {
        title: "Execute",
        body: "Technical fixes, on-page work and new content ship in monthly sprints with clear ownership.",
      },
      {
        title: "Measure & refine",
        body: "Rankings, organic conversions and revenue attribution are reviewed monthly and the roadmap adjusts accordingly.",
      },
    ],
    deliverables: [
      "Technical SEO audit",
      "Keyword and intent map",
      "Prioritised 90-day roadmap",
      "On-page optimisation briefs",
      "Monthly content calendar",
      "Link-earning outreach",
      "Monthly performance report",
    ],
    tools: ["Google Search Console", "Google Analytics 4", "Ahrefs", "Semrush", "Screaming Frog", "PageSpeed Insights"],
    faqs: [
      {
        q: "How long does SEO take to show results?",
        a: "Technical fixes can lift visibility within weeks, but meaningful gains on competitive terms typically take several months. We set realistic milestones at the start and report against them.",
      },
      {
        q: "Do you guarantee rankings?",
        a: "No. Nobody controls Google's algorithm, and guarantees are a red flag. We commit to a transparent process, clear targets and honest reporting.",
      },
      {
        q: "Can you work with our in-house team or developers?",
        a: "Yes. We regularly supply tickets and specifications to internal teams, or handle implementation ourselves where that is faster.",
      },
    ],
    metaTitle: "SEO Services That Drive Revenue | Arjunta",
    metaDescription:
      "Technical SEO, content and link earning built around revenue keywords. Organic search programmes for brands in the US, UK, Canada, Australia and UAE.",
  },
  {
    slug: "google-ads",
    name: "Google Ads & PPC",
    icon: "◎",
    headline: "Paid search built for *profit*, not clicks",
    intro:
      "We run Google and Microsoft Ads accounts against the numbers that matter to your business: cost per acquisition, return on ad spend and pipeline. Every pound, dollar or dirham is tracked from click to conversion.",
    outcomes: [
      { value: "ROAS", label: "Bidding optimised to target return on ad spend" },
      { value: "Lower CPA", label: "Ongoing focus on reducing cost per acquisition" },
      { value: "100%", label: "Conversion tracking verified before scaling spend" },
    ],
    included: [
      {
        title: "Account audit & restructure",
        body: "We review structure, match types, negatives and wasted spend, then rebuild where needed for clarity and control.",
      },
      {
        title: "Search & Performance Max",
        body: "Campaigns built around intent, with Performance Max used deliberately and fed with strong signals rather than left to guess.",
      },
      {
        title: "Shopping & feed management",
        body: "Product feed optimisation in Merchant Center so titles, attributes and pricing work harder in Shopping results.",
      },
      {
        title: "Conversion tracking",
        body: "GA4, Google Tag Manager, enhanced conversions and offline conversion imports set up so bidding learns from real outcomes.",
      },
      {
        title: "Ad copy & landing pages",
        body: "Responsive search ads and landing page recommendations tested systematically to lift conversion rate.",
      },
      {
        title: "YouTube & Display",
        body: "Video and display campaigns for awareness and remarketing, measured against assisted conversions.",
      },
    ],
    process: [
      {
        title: "Audit & tracking",
        body: "We verify conversion tracking first, then identify wasted spend and missed opportunities in the existing account.",
      },
      {
        title: "Build",
        body: "Campaign structure, keyword strategy, audiences and creative are built around your margins and targets.",
      },
      {
        title: "Optimise",
        body: "Bids, search terms, assets and budgets are managed weekly with structured A/B testing.",
      },
      {
        title: "Scale",
        body: "Once efficiency is proven, we expand into new keywords, markets and formats while holding target CPA or ROAS.",
      },
    ],
    deliverables: [
      "Account audit",
      "Conversion tracking setup",
      "Campaign architecture",
      "Keyword and negative lists",
      "Ad copy and asset sets",
      "Landing page recommendations",
      "Weekly optimisation log",
      "Monthly performance report",
    ],
    tools: ["Google Ads", "Microsoft Advertising", "Google Merchant Center", "Google Tag Manager", "Google Analytics 4", "Looker Studio"],
    faqs: [
      {
        q: "What budget do we need to start?",
        a: "It depends on your market and cost per click, but spend must be enough to generate statistically useful data. We will recommend a starting budget after reviewing your sector and goals.",
      },
      {
        q: "Do we keep ownership of the ad account?",
        a: "Always. Accounts, data and assets stay in your name. We are granted access as managers.",
      },
      {
        q: "How do you measure success?",
        a: "Against agreed targets such as CPA, ROAS or qualified leads, tied back to revenue wherever your systems allow.",
      },
    ],
    metaTitle: "Google Ads & PPC Management | Arjunta",
    metaDescription:
      "Google Ads and Microsoft Ads management focused on ROAS and CPA. Search, Shopping, Performance Max and YouTube with verified conversion tracking.",
  },
  {
    slug: "social-media-marketing",
    name: "Social Media Marketing",
    icon: "◐",
    headline: "Social that builds *audiences*, not just posts",
    intro:
      "We plan, create and manage organic social content that gives people a reason to follow, engage and remember your brand. Strategy comes first, so every channel has a clear role and a clear measure of success.",
    outcomes: [
      { value: "Engagement", label: "Focus on meaningful interaction over reach alone" },
      { value: "Consistent", label: "Always-on publishing cadence across priority channels" },
      { value: "Community", label: "Timely responses and active audience management" },
    ],
    included: [
      {
        title: "Channel strategy",
        body: "We decide which platforms deserve your time based on where your audience is, and define the role each one plays.",
      },
      {
        title: "Content pillars & calendar",
        body: "Recurring themes and a monthly calendar that balance brand, education, product and culture.",
      },
      {
        title: "Content production",
        body: "Short-form video, carousels, graphics and copy produced to platform-native standards.",
      },
      {
        title: "Community management",
        body: "Comments and messages handled in your brand voice, with escalation paths for service and sensitive issues.",
      },
      {
        title: "Creator & influencer partnerships",
        body: "Shortlisting, briefing and managing creators whose audiences genuinely match yours, with disclosure handled properly.",
      },
      {
        title: "Social listening",
        body: "Monitoring of brand mentions, competitors and category conversations to inform content and spot issues early.",
      },
    ],
    process: [
      {
        title: "Discover",
        body: "We audit your current channels, competitors and audience to understand what is working and what is not.",
      },
      {
        title: "Plan",
        body: "Channel roles, content pillars, tone of voice and KPIs are agreed before anything is published.",
      },
      {
        title: "Create & publish",
        body: "Content is produced in monthly batches, approved by you and scheduled for the best times in each market.",
      },
      {
        title: "Review",
        body: "Monthly analysis of what resonated feeds directly into the next content cycle.",
      },
    ],
    deliverables: [
      "Social media audit",
      "Channel strategy",
      "Content pillars and tone guide",
      "Monthly content calendar",
      "Platform-native creative",
      "Community management",
      "Monthly analytics report",
    ],
    tools: ["Meta Business Suite", "LinkedIn Pages", "TikTok", "Sprout Social", "Later", "Canva", "CapCut"],
    faqs: [
      {
        q: "Which platforms should we be on?",
        a: "Only the ones your audience uses and your team can sustain. For many B2B brands that is LinkedIn first; for consumer brands it is often Instagram and TikTok.",
      },
      {
        q: "Do you create the content or do we?",
        a: "We can handle everything end to end, or work with your existing assets and in-house team. Most clients use a mix.",
      },
      {
        q: "How do you measure organic social?",
        a: "Engagement rate, follower quality, saves and shares, and traffic or leads from social, rather than follower count alone.",
      },
    ],
    metaTitle: "Social Media Marketing Agency | Arjunta",
    metaDescription:
      "Organic social media strategy, content production and community management across Instagram, LinkedIn, TikTok and more for international brands.",
  },
  {
    slug: "paid-social",
    name: "Paid Social",
    icon: "▶",
    headline: "Paid social that turns attention into *demand*",
    intro:
      "We run performance campaigns on Meta, TikTok, LinkedIn and beyond, with creative testing at the centre of the work. Audiences, offers and creative are tested systematically so budget flows to what converts.",
    outcomes: [
      { value: "ROAS", label: "Target return on ad spend agreed per campaign" },
      { value: "Weekly", label: "Creative testing cadence to fight ad fatigue" },
      { value: "Full-funnel", label: "Prospecting and retargeting planned as one system" },
    ],
    included: [
      {
        title: "Meta Ads",
        body: "Facebook and Instagram campaigns structured for modern, signal-driven delivery, including Advantage+ where it fits.",
      },
      {
        title: "TikTok Ads",
        body: "Native-feeling creative and Spark Ads that work with the platform's culture rather than against it.",
      },
      {
        title: "LinkedIn Ads",
        body: "Account and job-title targeting for B2B, with lead gen forms and conversation ads tied to your CRM.",
      },
      {
        title: "Creative testing framework",
        body: "Hooks, formats, angles and offers tested in a structured way so learnings compound over time.",
      },
      {
        title: "Tracking & signal quality",
        body: "Meta Conversions API, TikTok Events API and server-side tagging to strengthen measurement as browser tracking weakens.",
      },
      {
        title: "Audience strategy",
        body: "Broad, lookalike, interest and first-party audiences combined and sequenced across the funnel.",
      },
    ],
    process: [
      {
        title: "Audit & tracking",
        body: "We review past performance and fix pixel, API and event setup before spending more.",
      },
      {
        title: "Creative strategy",
        body: "We define angles, hooks and formats for each audience and produce the first round of test assets.",
      },
      {
        title: "Launch & test",
        body: "Campaigns launch with a structured testing plan and clear criteria for what scales and what stops.",
      },
      {
        title: "Scale",
        body: "Winning creative and audiences receive more budget while new tests keep the pipeline of ideas full.",
      },
    ],
    deliverables: [
      "Paid social audit",
      "Pixel and Conversions API setup",
      "Campaign structure",
      "Creative testing roadmap",
      "Ad creative and copy",
      "Weekly optimisation notes",
      "Monthly performance report",
    ],
    tools: ["Meta Ads Manager", "TikTok Ads Manager", "LinkedIn Campaign Manager", "Pinterest Ads", "Google Tag Manager", "Triple Whale"],
    faqs: [
      {
        q: "How much creative do we need?",
        a: "More than most brands expect. Creative is the main lever on modern ad platforms, so we plan for a steady flow of new concepts each month.",
      },
      {
        q: "Meta, TikTok or LinkedIn?",
        a: "It depends on your audience and offer. Consumer brands usually start with Meta and TikTok; B2B with LinkedIn and Meta retargeting.",
      },
      {
        q: "How do you deal with iOS tracking limitations?",
        a: "We implement server-side conversion APIs, use modelled and blended metrics, and judge performance against your own sales data, not platform figures alone.",
      },
    ],
    metaTitle: "Paid Social Advertising Agency | Arjunta",
    metaDescription:
      "Performance campaigns on Meta, TikTok and LinkedIn with structured creative testing, server-side tracking and full-funnel audience strategy.",
  },
  {
    slug: "content-marketing",
    name: "Content & Copywriting",
    icon: "✎",
    headline: "Content with a point of view and a *purpose*",
    intro:
      "We write content that earns attention, builds authority and moves readers toward a decision. Every piece has a defined audience, a job to do and a way to measure whether it did it.",
    outcomes: [
      { value: "Authority", label: "Topical depth that supports search and sales" },
      { value: "Conversion", label: "Copy written to move readers to the next step" },
      { value: "On-brand", label: "One consistent voice across every channel" },
    ],
    included: [
      {
        title: "Content strategy",
        body: "Audience research, topic clusters and a distribution plan aligned to your commercial goals.",
      },
      {
        title: "Website copywriting",
        body: "Homepages, service pages and landing pages written for clarity, persuasion and search.",
      },
      {
        title: "Long-form articles & guides",
        body: "Researched, expert-led articles that answer real questions and earn links and shares.",
      },
      {
        title: "Thought leadership",
        body: "Ghostwritten articles, LinkedIn posts and opinion pieces that capture your leadership's perspective.",
      },
      {
        title: "Sales & lead magnets",
        body: "Case study frameworks, whitepapers, e-books and one-pagers that support your sales conversations.",
      },
      {
        title: "Editing & tone of voice",
        body: "Voice guidelines and editorial standards so in-house and agency content sound like one brand.",
      },
    ],
    process: [
      {
        title: "Research",
        body: "We interview stakeholders, study your audience and analyse search and competitor content.",
      },
      {
        title: "Plan",
        body: "A content roadmap sets topics, formats, owners and publishing dates against business goals.",
      },
      {
        title: "Write & edit",
        body: "Briefs, drafts and edits move through a clear review flow with subject matter input where it matters.",
      },
      {
        title: "Distribute & measure",
        body: "Content is published, promoted across channels and measured on traffic, engagement and conversions.",
      },
    ],
    deliverables: [
      "Content strategy and roadmap",
      "Tone of voice guide",
      "SEO content briefs",
      "Website and landing page copy",
      "Long-form articles",
      "Lead magnets",
      "Monthly content report",
    ],
    tools: ["Google Docs", "Surfer SEO", "Clearscope", "Grammarly", "Semrush", "Notion"],
    faqs: [
      {
        q: "Do you use AI to write content?",
        a: "We use AI tools for research and efficiency where useful, but strategy, writing and editing are led by experienced people. Everything is fact-checked and edited before it reaches you.",
      },
      {
        q: "Can you write for technical or regulated industries?",
        a: "Yes. We work with your subject matter experts and build in review steps for accuracy and compliance.",
      },
      {
        q: "Do you write in British or American English?",
        a: "Whichever suits your market. We adapt spelling, terminology and tone for each audience.",
      },
    ],
    metaTitle: "Content Marketing & Copywriting | Arjunta",
    metaDescription:
      "Content strategy, website copy, long-form articles and thought leadership written to build authority and drive conversions in international markets.",
  },
  {
    slug: "web-design",
    name: "Web Design & Development",
    icon: "▢",
    headline: "Websites engineered to *convert*",
    intro:
      "We design and build fast, accessible websites that look premium and work hard commercially. Every decision is weighed against speed, search visibility and conversion.",
    outcomes: [
      { value: "Sub-2.5s", label: "Target Largest Contentful Paint on key pages" },
      { value: "WCAG 2.2", label: "Accessibility standard we design and build towards" },
      { value: "CRO-led", label: "Layouts structured around a clear conversion path" },
    ],
    included: [
      {
        title: "UX research & architecture",
        body: "Sitemaps, user journeys and wireframes based on how your customers actually make decisions.",
      },
      {
        title: "UI design",
        body: "Distinctive, on-brand interfaces designed in Figma with a reusable component system.",
      },
      {
        title: "Development",
        body: "Modern builds on Next.js, WordPress, Webflow or Shopify, chosen for your needs rather than our habits.",
      },
      {
        title: "Performance & SEO foundations",
        body: "Clean code, optimised assets, structured data and redirect mapping so launches protect existing rankings.",
      },
      {
        title: "CMS & integrations",
        body: "Editor-friendly content management plus CRM, analytics, booking and payment integrations.",
      },
      {
        title: "Conversion optimisation",
        body: "Post-launch A/B testing and heatmap analysis to keep improving conversion rates.",
      },
    ],
    process: [
      {
        title: "Discover",
        body: "Stakeholder workshops, analytics review and competitor research define goals and requirements.",
      },
      {
        title: "Design",
        body: "Wireframes and high-fidelity designs are reviewed with you in structured rounds.",
      },
      {
        title: "Build",
        body: "Development, content population, QA across devices and accessibility checks.",
      },
      {
        title: "Launch & improve",
        body: "A managed launch with redirects and tracking in place, followed by ongoing optimisation.",
      },
    ],
    deliverables: [
      "Sitemap and wireframes",
      "Figma design system",
      "Responsive website build",
      "CMS setup and training",
      "Analytics and tag setup",
      "SEO migration plan",
      "QA and accessibility checks",
      "Post-launch support",
    ],
    tools: ["Figma", "Next.js", "WordPress", "Webflow", "Shopify", "Vercel", "Hotjar"],
    faqs: [
      {
        q: "How long does a website project take?",
        a: "A focused marketing site typically takes several weeks; larger or e-commerce builds take longer. We provide a detailed timeline after discovery.",
      },
      {
        q: "Will a redesign hurt our SEO?",
        a: "Not if it is handled properly. We map redirects, preserve valuable content and monitor rankings closely through launch.",
      },
      {
        q: "Can we update the site ourselves?",
        a: "Yes. We build with an editor-friendly CMS and train your team before handover.",
      },
    ],
    metaTitle: "Web Design & Development Agency | Arjunta",
    metaDescription:
      "Fast, accessible, conversion-focused websites built on Next.js, WordPress, Webflow and Shopify, with SEO-safe migrations and ongoing optimisation.",
  },
  {
    slug: "email-marketing",
    name: "Email & Automation",
    icon: "✉",
    headline: "Email that earns its place in the *inbox*",
    intro:
      "We build lifecycle email and SMS programmes that nurture, convert and retain customers automatically. Segmentation, deliverability and compliance are handled as carefully as the creative.",
    outcomes: [
      { value: "Lifecycle", label: "Automated flows covering every key customer moment" },
      { value: "Inbox", label: "Deliverability and sender reputation actively managed" },
      { value: "Retention", label: "Focus on repeat purchase and customer lifetime value" },
    ],
    included: [
      {
        title: "Lifecycle flows",
        body: "Welcome, abandoned cart, browse abandonment, post-purchase, win-back and lead nurture sequences.",
      },
      {
        title: "Campaign management",
        body: "Planned newsletters and promotional sends designed, written and scheduled for each market.",
      },
      {
        title: "Segmentation & personalisation",
        body: "Behavioural and value-based segments that make every message more relevant.",
      },
      {
        title: "Deliverability",
        body: "SPF, DKIM and DMARC setup, list hygiene and sending practices that meet mailbox provider requirements.",
      },
      {
        title: "SMS marketing",
        body: "Consent-based SMS programmes that complement email without overwhelming subscribers.",
      },
      {
        title: "CRM & marketing automation",
        body: "Lead scoring, sales handoffs and pipeline automation in HubSpot and similar platforms for B2B teams.",
      },
    ],
    process: [
      {
        title: "Audit",
        body: "We review your platform, data, existing flows, deliverability and consent records.",
      },
      {
        title: "Architect",
        body: "A lifecycle map defines which flows to build, triggers, segments and success metrics.",
      },
      {
        title: "Build",
        body: "Templates, copy and automations are built, tested and QA'd across email clients and devices.",
      },
      {
        title: "Optimise",
        body: "Subject lines, timing, content and offers are tested continuously against revenue and engagement.",
      },
    ],
    deliverables: [
      "Email programme audit",
      "Lifecycle automation map",
      "Responsive email templates",
      "Core automated flows",
      "Segmentation strategy",
      "Deliverability setup",
      "Monthly campaign calendar",
      "Performance reporting",
    ],
    tools: ["Klaviyo", "HubSpot", "Mailchimp", "Braze", "Customer.io", "Postscript"],
    faqs: [
      {
        q: "Which email platform should we use?",
        a: "Klaviyo suits most e-commerce brands; HubSpot and similar platforms suit B2B and service businesses. We recommend based on your stack and goals.",
      },
      {
        q: "How do you handle compliance across countries?",
        a: "We build consent capture, unsubscribe handling and sender identification aligned with local rules such as CAN-SPAM, UK GDPR and PECR, CASL and the Australian Spam Act. We recommend you confirm specifics with your legal adviser.",
      },
      {
        q: "Can you migrate us from another platform?",
        a: "Yes. We migrate lists, consent data, templates and flows with care to protect deliverability.",
      },
    ],
    metaTitle: "Email Marketing & Automation Agency | Arjunta",
    metaDescription:
      "Lifecycle email and SMS automation in Klaviyo and HubSpot. Flows, campaigns, segmentation and deliverability built to grow retention and revenue.",
  },
  {
    slug: "branding",
    name: "Branding & Creative",
    icon: "◆",
    headline: "Brands people *remember*",
    intro:
      "We define what your brand stands for and express it through identity, language and creative that work across every touchpoint. The result is a brand that feels considered, distinctive and ready to scale.",
    outcomes: [
      { value: "Distinctive", label: "Identity designed to stand apart in your category" },
      { value: "Consistent", label: "One system applied across every channel" },
      { value: "Scalable", label: "Guidelines your team and partners can actually use" },
    ],
    included: [
      {
        title: "Brand strategy",
        body: "Positioning, audience, value proposition and brand personality defined through research and workshops.",
      },
      {
        title: "Naming & messaging",
        body: "Names, taglines, messaging hierarchy and tone of voice that make your story easy to tell.",
      },
      {
        title: "Visual identity",
        body: "Logo, colour, typography, imagery and graphic language designed as one coherent system.",
      },
      {
        title: "Brand guidelines",
        body: "Practical guidelines and asset libraries so anyone can apply the brand correctly.",
      },
      {
        title: "Campaign creative",
        body: "Concepts and assets for launches and campaigns across digital, social and print.",
      },
      {
        title: "Motion & video",
        body: "Animated logos, social video and motion systems that bring the identity to life.",
      },
    ],
    process: [
      {
        title: "Immerse",
        body: "Stakeholder interviews, customer insight and competitive analysis uncover what makes you different.",
      },
      {
        title: "Define",
        body: "We agree positioning, personality and messaging before any design begins.",
      },
      {
        title: "Design",
        body: "Identity routes are explored, refined and tested in real-world applications.",
      },
      {
        title: "Roll out",
        body: "Guidelines, templates and launch assets equip your team to apply the brand with confidence.",
      },
    ],
    deliverables: [
      "Brand strategy document",
      "Messaging framework",
      "Logo suite",
      "Colour and typography system",
      "Brand guidelines",
      "Templates and asset library",
      "Launch creative",
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Adobe After Effects", "Frontify"],
    faqs: [
      {
        q: "Do we need a full rebrand or a refresh?",
        a: "Often a refresh is enough. We assess the equity in your current brand before recommending how far to go.",
      },
      {
        q: "How involved will our team be?",
        a: "Closely, at key decision points: workshops, strategy sign-off and design reviews. We keep the process structured so it does not drain your time.",
      },
      {
        q: "Will the brand work internationally?",
        a: "We check names, colours and messaging for cultural fit in your target markets, including the US, UK, Canada, Australia and the Middle East.",
      },
    ],
    metaTitle: "Branding & Creative Agency | Arjunta",
    metaDescription:
      "Brand strategy, naming, visual identity and campaign creative for ambitious businesses. Distinctive brands built to scale across international markets.",
  },
];

export function getService(slug: string): ServiceDetail | undefined {
  return serviceDetails.find((s) => s.slug === slug);
}
