export type Country = {
  slug: "usa" | "uk" | "canada" | "australia" | "uae";
  name: string;
  label: string;
  code: string;
  currency: string;
  cities: string[];
  timezones: string;
  intro: string;
  compliance: string;
  insights: { title: string; body: string }[];
};

export type MarketIndustry = {
  slug: "ecommerce" | "saas" | "healthcare" | "real-estate" | "home-services" | "professional-services";
  name: string;
  audience: string;
  intro: string;
  challenges: string[];
  playbook: { channel: string; why: string }[];
  kpis: string[];
};

export const countries: Country[] = [
  {
    slug: "usa",
    name: "the United States",
    label: "United States",
    code: "US",
    currency: "USD",
    cities: ["New York", "Los Angeles", "Chicago", "Houston", "Miami"],
    timezones: "ET · CT · MT · PT",
    intro:
      "The US is the world's largest and most competitive digital advertising market, where auction prices reward precision and punish waste. Winning here means treating it as many regional markets rather than one, with campaigns, creative and budgets tuned by state, metro and time zone.",
    compliance:
      "We build campaigns aligned with CAN-SPAM for email, the TCPA for SMS and calling, and state privacy laws such as California's CCPA/CPRA. Regulated sectors such as healthcare may carry additional obligations, which we plan for with your legal team.",
    insights: [
      {
        title: "Regional nuance matters",
        body: "Buyer expectations, pricing and competition vary sharply between metros. Geo-segmented campaigns and location pages outperform a single national approach for most businesses.",
      },
      {
        title: "Retail media and marketplaces",
        body: "Amazon is often where product searches begin, so e-commerce brands need a plan that covers marketplace visibility alongside Google and paid social.",
      },
      {
        title: "Reviews drive local decisions",
        body: "For service businesses, Google reviews and local pack visibility heavily influence who gets the call. Review generation and Google Business Profile management belong at the core of local strategy.",
      },
    ],
  },
  {
    slug: "uk",
    name: "the United Kingdom",
    label: "United Kingdom",
    code: "UK",
    currency: "GBP",
    cities: ["London", "Manchester", "Birmingham", "Leeds", "Edinburgh"],
    timezones: "GMT · BST",
    intro:
      "The UK is a mature, digitally sophisticated market where consumers are quick to spot overstatement and slow to trust brands that oversell. Clear value, credible proof and a tone that feels understated rather than hyped tend to perform best.",
    compliance:
      "We build campaigns aligned with UK GDPR, the Data Protection Act 2018 and PECR, including consent for marketing emails, texts and non-essential cookies. Advertising claims are also planned with the CAP Code and ASA guidance in mind.",
    insights: [
      {
        title: "Tone and trust",
        body: "British audiences respond to wit, clarity and substance. Copy written for the US often needs reworking for UK spelling, idiom and a lighter touch on superlatives.",
      },
      {
        title: "London versus the rest",
        body: "London is the most expensive and competitive market for paid media, while strong regional cities can offer better efficiency. Splitting budgets by region usually reveals real opportunities.",
      },
      {
        title: "Comparison and review culture",
        body: "Price comparison sites and review platforms such as Trustpilot carry real weight in purchase decisions, so reputation management should sit alongside search and paid activity.",
      },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    label: "Canada",
    code: "CA",
    currency: "CAD",
    cities: ["Toronto", "Vancouver", "Montreal", "Calgary", "Ottawa"],
    timezones: "PT · MT · CT · ET · AT",
    intro:
      "Canada combines North American digital habits with distinct regional, linguistic and regulatory considerations. Brands that treat it as an extension of a US campaign usually underperform, while those that localise for provinces and language see stronger returns.",
    compliance:
      "We build campaigns aligned with CASL, which generally requires express or implied consent before sending commercial electronic messages, and with PIPEDA for personal information. Quebec's Law 25 and French-language requirements are factored in where relevant.",
    insights: [
      {
        title: "Bilingual audiences",
        body: "Quebec requires genuinely French-language campaigns, landing pages and ads rather than literal translations. Separate keyword research and creative for French Canadian audiences pay off.",
      },
      {
        title: "Lower competition, smaller pools",
        body: "Paid media auctions can be less crowded than in the US, but audiences are smaller. Campaign structures need enough consolidation to give algorithms sufficient data.",
      },
      {
        title: "Cross-border shopping behaviour",
        body: "Canadian shoppers weigh duties, shipping times and pricing in CAD. Clear local pricing and delivery promises remove friction that US-centric sites often leave in place.",
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    label: "Australia",
    code: "AU",
    currency: "AUD",
    cities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"],
    timezones: "AWST · ACST · AEST",
    intro:
      "Australia is a high-spending, mobile-first market concentrated in a handful of major cities. Audiences favour brands that feel authentic and local, and campaigns that ignore regional seasons or time-zone spread tend to miss.",
    compliance:
      "We build campaigns aligned with the Spam Act 2003, which requires consent, sender identification and a functional unsubscribe, and with the Privacy Act 1988 and Australian Privacy Principles. Advertising claims are planned with Australian Consumer Law in mind.",
    insights: [
      {
        title: "Reverse seasons",
        body: "Summer sales run from December to February and end-of-financial-year promotions in June are major retail moments. Global calendars need to be inverted, not copied.",
      },
      {
        title: "City-by-city strategy",
        body: "Sydney and Melbourne dominate population and ad competition, while Perth sits several hours behind the east coast. Scheduling and geo-targeting should reflect that spread.",
      },
      {
        title: "Local proof wins",
        body: "Australian buyers respond strongly to local presence, Australian-made claims and local reviews. Visible local credentials often outperform generic global brand messaging.",
      },
    ],
  },
  {
    slug: "uae",
    name: "the UAE",
    label: "UAE",
    code: "AE",
    currency: "AED",
    cities: ["Dubai", "Abu Dhabi", "Sharjah", "Ajman", "Ras Al Khaimah"],
    timezones: "GST",
    intro:
      "The UAE is a highly connected, mobile-first market with a multinational population and premium consumer expectations. Effective campaigns speak to Arabic-speaking nationals and a large expatriate audience at the same time, often in different languages and on different platforms.",
    compliance:
      "We build campaigns aligned with Federal Decree-Law No. 45 of 2021 on Personal Data Protection (PDPL) and TDRA rules for commercial messaging. Influencer activity and advertising content are planned with local media regulations and cultural standards in mind.",
    insights: [
      {
        title: "Bilingual by default",
        body: "English and Arabic campaigns reach different segments. Native Arabic copywriting, not translation, is essential for reaching Emirati and wider Arab audiences.",
      },
      {
        title: "Ramadan and seasonal peaks",
        body: "Ramadan, Eid, the Dubai Shopping Festival and the cooler winter season shift media consumption and buying patterns. Planning around this calendar is critical.",
      },
      {
        title: "Social and messaging first",
        body: "Instagram, TikTok, Snapchat and YouTube carry significant influence, and WhatsApp is a common channel for enquiries. Click-to-message journeys often convert better than long web forms.",
      },
    ],
  },
];

export const marketIndustries: MarketIndustry[] = [
  {
    slug: "ecommerce",
    name: "E-commerce & D2C",
    audience: "e-commerce brands",
    intro:
      "We help online retailers and direct-to-consumer brands grow profitable revenue, not just top-line sales. Acquisition, conversion and retention are managed as one system so customer value keeps rising.",
    challenges: [
      "Rising acquisition costs on paid social and search eroding margins",
      "Weakened tracking making it harder to know which channels really drive sales",
      "Over-reliance on discounting and one-time buyers instead of repeat customers",
    ],
    playbook: [
      { channel: "Google Shopping & Performance Max", why: "Captures high-intent product searches, driven by a well-optimised product feed." },
      { channel: "Meta & TikTok Ads", why: "Creates demand at scale through creative testing and full-funnel prospecting." },
      { channel: "Email & SMS automation", why: "Turns first purchases into repeat purchases through lifecycle flows, at very low marginal cost." },
      { channel: "SEO for category & product pages", why: "Builds a compounding source of organic revenue that reduces dependence on paid media." },
    ],
    kpis: ["Blended ROAS (MER)", "Customer acquisition cost", "Customer lifetime value", "Repeat purchase rate"],
  },
  {
    slug: "saas",
    name: "B2B SaaS & Technology",
    audience: "SaaS & tech companies",
    intro:
      "We help software and technology companies build predictable pipeline across long, multi-stakeholder buying cycles. Marketing is measured on qualified opportunities and revenue, not form fills.",
    challenges: [
      "Long sales cycles with many decision makers make attribution difficult",
      "High cost per click on competitive software keywords",
      "Marketing and sales misaligned on what counts as a qualified lead",
    ],
    playbook: [
      { channel: "LinkedIn Ads", why: "Reaches decision makers by job title, seniority and target account lists." },
      { channel: "Google Search Ads", why: "Captures buyers actively comparing solutions, including competitor and alternative terms." },
      { channel: "SEO & content", why: "Educational and comparison content builds authority and pipeline throughout the buying journey." },
      { channel: "Marketing automation", why: "Lead scoring and nurture sequences move prospects to sales-ready at the right moment." },
    ],
    kpis: ["Marketing qualified leads", "Sales qualified opportunities", "Pipeline value", "Customer acquisition cost"],
  },
  {
    slug: "healthcare",
    name: "Healthcare & Dental",
    audience: "dental clinics & healthcare practices",
    intro:
      "We help clinics and healthcare practices attract the right patients while respecting the rules and sensitivities of the sector. Campaigns are designed to build trust first and fill appointment books second.",
    challenges: [
      "Strict advertising and privacy rules around health claims and patient data",
      "Intense local competition for high-value treatments",
      "Patients researching heavily and relying on reviews before booking",
    ],
    playbook: [
      { channel: "Local SEO & Google Business Profile", why: "Wins visibility in map results where most local patient searches begin." },
      { channel: "Google Search Ads", why: "Captures urgent and high-value treatment searches with compliant ad copy." },
      { channel: "Reviews & reputation", why: "Systematic, compliant review generation builds the trust patients look for." },
      { channel: "Content & treatment pages", why: "Clear, accurate treatment information answers patient questions and supports search visibility." },
    ],
    kpis: ["New patient bookings", "Cost per booked appointment", "Call and enquiry volume", "Review rating and volume"],
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    audience: "real estate agencies",
    intro:
      "We help agencies and developers generate seller, buyer and investor leads in competitive property markets. Campaigns are built around local expertise and the long, considered nature of property decisions.",
    challenges: [
      "Portals dominating search visibility and capturing buyer attention",
      "Long decision cycles with leads that need sustained nurturing",
      "Winning valuable seller and landlord instructions, not just buyer enquiries",
    ],
    playbook: [
      { channel: "Meta Ads", why: "Showcases listings and developments visually to tightly targeted local and investor audiences." },
      { channel: "Google Search Ads", why: "Captures valuation, area and development searches from motivated sellers and buyers." },
      { channel: "Local SEO & area guides", why: "Neighbourhood content builds authority and visibility beyond the property portals." },
      { channel: "Email & CRM nurture", why: "Keeps long-cycle leads engaged with new listings and market updates until they are ready." },
    ],
    kpis: ["Cost per qualified lead", "Valuation requests", "Viewing bookings", "Lead-to-instruction rate"],
  },
  {
    slug: "home-services",
    name: "Home Services",
    audience: "home service businesses",
    intro:
      "We help trades and home service companies keep their schedules full with profitable local jobs. Speed, visibility and reputation in your service area are the priorities.",
    challenges: [
      "Paying for leads that are outside the service area or not genuine",
      "Seasonal swings in demand creating feast-or-famine schedules",
      "Competing with national lead-gen platforms and directories",
    ],
    playbook: [
      { channel: "Google Local Services Ads", why: "Pay-per-lead placement at the top of local results, available in many markets for eligible trades." },
      { channel: "Google Search Ads", why: "Geo-targeted campaigns capture urgent, high-intent jobs at the moment of need." },
      { channel: "Local SEO & Google Business Profile", why: "Map pack visibility and reviews drive a steady flow of calls without paying per click." },
      { channel: "Call tracking & follow-up", why: "Tracks which campaigns generate booked jobs and ensures no enquiry goes unanswered." },
    ],
    kpis: ["Cost per booked job", "Inbound call volume", "Lead-to-job conversion rate", "Average job value"],
  },
  {
    slug: "professional-services",
    name: "Professional Services",
    audience: "law firms, accountants & consultancies",
    intro:
      "We help firms whose expertise is the product attract higher-value clients and matters. Marketing is built on credibility, thought leadership and visibility at the moment clients need advice.",
    challenges: [
      "Professional conduct rules limiting how services can be advertised",
      "Expensive, highly competitive search terms in practice areas",
      "Differentiating on expertise when every firm sounds similar",
    ],
    playbook: [
      { channel: "SEO & practice area content", why: "Answers the questions clients search for and demonstrates depth of expertise." },
      { channel: "Google Search Ads", why: "Captures time-sensitive, high-value enquiries with tightly controlled targeting." },
      { channel: "LinkedIn & thought leadership", why: "Builds partner and firm profiles among referrers and corporate clients." },
      { channel: "Email nurture", why: "Keeps the firm front of mind with insights and updates between engagements." },
    ],
    kpis: ["Qualified consultation requests", "Cost per qualified enquiry", "Enquiry-to-client conversion rate", "Organic visibility for practice areas"],
  },
];

export function getCountry(slug: string) {
  return countries.find((c) => c.slug === slug);
}

export function getMarketIndustry(slug: string) {
  return marketIndustries.find((i) => i.slug === slug);
}
