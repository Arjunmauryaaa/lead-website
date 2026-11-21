export type Chapter = {
  n: string; // "01".."08"
  title: string;
  intro: string; // 2-3 sentences
  points: string[]; // 4-6 concrete, actionable points
  action: string; // "Do this this week:" action (without the prefix)
};

export const playbook: {
  title: string;
  subtitle: string;
  chapters: Chapter[];
} = {
  title: "The 2026 Digital Marketing Playbook",
  subtitle:
    "A practical, eight-chapter framework for small and mid-sized businesses that want marketing to be measurable, efficient and built to scale.",
  chapters: [
    {
      n: "01",
      title: "Positioning & Offer",
      intro:
        "Every channel performs better when the message behind it is sharp. Before you spend on traffic, be clear about who you serve, what problem you solve and why a buyer should choose you over the obvious alternatives.",
      points: [
        "Define your ideal customer in specific terms: industry or life situation, size, location, budget and the trigger that makes them start looking.",
        "Write a one-sentence value proposition that names the customer, the outcome and what makes you different. If a competitor could use the same sentence, it is not finished.",
        "Collect the exact words customers use from reviews, sales calls and support emails, and reuse that language in your headlines and ads.",
        "Package your service into a clear, easy-to-buy offer with a defined scope, a visible next step and, where possible, transparent pricing or a starting price.",
        "Reduce perceived risk with guarantees, trial periods, case evidence you genuinely have, or a low-commitment first step such as an audit or consultation.",
      ],
      action:
        "Interview or review notes from five recent customers and rewrite your homepage headline using the words they used to describe their problem.",
    },
    {
      n: "02",
      title: "Tracking & Analytics Foundation",
      intro:
        "You cannot scale what you cannot measure. Clean tracking is the difference between confident budget decisions and expensive guesswork, and it is easier to set up properly now than to repair later.",
      points: [
        "Configure Google Analytics 4 with key events for the actions that matter: form submissions, calls, bookings and purchases, not just page views.",
        "Use Google Tag Manager to manage tags in one place, and document what each tag does and who owns it.",
        "Implement server-side or API-based conversion tracking, such as Meta's Conversions API and Google's enhanced conversions, to reduce signal loss from browser privacy restrictions.",
        "Track phone calls as conversions with call tracking numbers that are applied consistently and do not conflict with your local business listings.",
        "Apply consistent UTM parameters to every campaign link, and keep a shared naming convention so reports stay readable.",
        "Respect consent requirements in each market you serve, such as UK GDPR and PECR in the UK, PIPEDA in Canada and state privacy laws in the US, and implement a compliant consent banner.",
      ],
      action:
        "Submit a test lead through every form and call path on your site, then confirm each one appears correctly in analytics and your ad platforms.",
    },
    {
      n: "03",
      title: "SEO & Content",
      intro:
        "Search is still where buyers go when they have a problem to solve. Good SEO combines a technically healthy site with content that genuinely answers the questions your customers ask, which also makes you more likely to be cited in AI-generated answers.",
      points: [
        "Fix technical foundations first: crawlability, indexation, page speed, mobile usability and a clean site structure with logical internal links.",
        "Build one strong, dedicated page for each core service and each market you serve, rather than a single page that tries to cover everything.",
        "Prioritise content by buyer intent: start with topics close to a purchase decision before broad awareness articles.",
        "Show real expertise with named authors, first-hand examples, original photos and clear explanations. Thin, generic content rarely earns rankings for long.",
        "Earn links and mentions through partnerships, industry associations, expert commentary and genuinely useful resources.",
        "Keep your Google Business Profile complete and active if you serve local customers, and build a steady flow of reviews.",
      ],
      action:
        "List the ten questions prospects most often ask before buying, and check whether your site has a clear, dedicated answer to each one.",
    },
    {
      n: "04",
      title: "Paid Search",
      intro:
        "Paid search captures people actively looking for what you sell, which makes it one of the most efficient channels when managed tightly. The discipline lies in paying only for intent that converts and feeding the platform accurate data.",
      points: [
        "Start with a focused set of high-intent keywords tied to your core services, and expand only once those are profitable.",
        "Review search term reports regularly and add negative keywords to cut irrelevant spend.",
        "Write ads that mirror the searcher's query and lead with a concrete benefit, and use assets such as sitelinks, callouts and call extensions.",
        "Send traffic to dedicated landing pages that match the ad's promise rather than to your homepage.",
        "Use automated bidding only once conversion tracking is reliable, and optimise towards qualified leads or revenue rather than raw form fills where possible.",
        "Approach broad match and Performance Max with clear guardrails: strong conversion signals, brand exclusions where appropriate and regular review of where spend is going.",
      ],
      action:
        "Open your search terms report for the last 30 days and add negative keywords for every irrelevant query that cost you money.",
    },
    {
      n: "05",
      title: "Paid Social & Creative",
      intro:
        "On Meta, TikTok and LinkedIn, the algorithm increasingly decides who sees your ads. That makes creative the main lever you control, because the ad itself signals to the platform who it is for.",
      points: [
        "Keep campaign structure simple and audiences broad enough for the algorithm to learn, unless you have a clear reason to restrict them.",
        "Test distinct creative concepts, meaning different problems, promises and angles, rather than small variations of the same ad.",
        "Produce a mix of formats: short vertical video, talking-head explainers, product demonstrations, static comparisons and carousels.",
        "Treat the first few seconds of video as the most important part of the ad. Lead with the problem or outcome, not your logo.",
        "Diagnose results with leading indicators: hook rate for attention, click-through rate for persuasion and landing page conversion rate for follow-through.",
        "Refresh creative on a regular cadence and build iterations around proven winners before they fatigue.",
      ],
      action:
        "Brief three genuinely new ad concepts, each built around a different customer problem pulled from real reviews or sales conversations.",
    },
    {
      n: "06",
      title: "Email & Automation",
      intro:
        "Email remains one of the highest-return channels for most businesses because you own the audience. Automation lets a small team follow up consistently with every lead and customer without adding headcount.",
      points: [
        "Set up a welcome sequence for new subscribers or leads that introduces your business, sets expectations and makes one clear next step.",
        "Build a lead nurture sequence that answers common objections, shares proof and invites a conversation over several weeks.",
        "Automate post-purchase or post-service emails for onboarding, review requests, referrals and repeat business.",
        "Segment by behaviour and stage, such as new lead, active customer and lapsed customer, rather than sending the same message to everyone.",
        "Protect deliverability with proper SPF, DKIM and DMARC authentication, a clean list and a clear unsubscribe option.",
      ],
      action:
        "Write and switch on a three-email follow-up sequence for every new enquiry that does not book or buy within 48 hours.",
    },
    {
      n: "07",
      title: "Website Conversion (CRO)",
      intro:
        "Improving conversion rate makes every channel cheaper at the same time. Most websites lose buyers through unclear messaging, friction and lack of reassurance rather than poor design.",
      points: [
        "Make the value proposition and primary call to action visible without scrolling on both desktop and mobile.",
        "Shorten forms to the fields you genuinely need, and offer alternatives such as click-to-call, booking links or chat.",
        "Place trust signals near decision points: reviews, accreditations, guarantees, recognisable client logos you have permission to use, and clear contact details.",
        "Improve page speed and mobile usability, since slow or awkward pages quietly lose a share of every visitor you pay for.",
        "Watch session recordings and heatmaps to find where visitors hesitate or drop off before deciding what to test.",
        "Run one focused test at a time on high-traffic pages, and judge it on qualified leads or revenue rather than clicks alone.",
      ],
      action:
        "Complete your own enquiry or checkout process on a phone and fix the three biggest points of friction you encounter.",
    },
    {
      n: "08",
      title: "Budgeting, Reporting & Scaling",
      intro:
        "Sustainable growth comes from allocating budget based on evidence and scaling what works in deliberate steps. Reporting should drive decisions, not just describe activity.",
      points: [
        "Work backwards from revenue targets: define the value of a customer, your acceptable cost to acquire one and the lead volume you need.",
        "Split budget between proven channels and a smaller, ring-fenced test budget for new channels, offers and creative.",
        "Report on business outcomes such as qualified leads, cost per acquisition, revenue and return on ad spend, with channel metrics as supporting detail.",
        "Connect marketing data to your CRM so you can see which campaigns produce customers, not just enquiries.",
        "Scale winning campaigns in gradual increments and watch efficiency closely, since performance often softens as spend increases.",
        "Hold a monthly review that ends in clear decisions: what to stop, what to continue and what to test next.",
      ],
      action:
        "Calculate your maximum acceptable cost per customer and compare it against what each active channel delivered last month.",
    },
  ],
};
