export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string; // 1-2 sentences
  category: string; // e.g. "SEO", "Paid Media", "Strategy"
  readMins: number;
  date: string; // ISO date
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "meta-ads-creative-first",
    title: "Why Your Meta Ads Stopped Working — and the Creative-First Fix",
    excerpt:
      "Targeting used to be the lever that made Meta ads work. Today the algorithm does most of the targeting for you, which means your creative is now doing the job your audience settings used to do.",
    category: "Paid Media",
    readMins: 7,
    date: "2026-11-18",
    body: [
      {
        type: "p",
        text: "A familiar pattern: a Meta account performs well for a few months, then cost per lead or cost per purchase drifts upward. The team tightens the audience, tweaks bids, duplicates the winning ad set, and nothing sticks. The instinct is to look for a settings problem. In most accounts we review, the real problem is upstream of the settings. The ads have run out of creative to work with.",
      },
      {
        type: "p",
        text: "Understanding why requires understanding how Meta's delivery system has changed over the last few years, and what that means for where your effort should go.",
      },
      { type: "h2", text: "The algorithm now does the targeting" },
      {
        type: "p",
        text: "Meta has steadily pushed advertisers toward broad audiences, automated placements and consolidated campaign structures such as Advantage+. Privacy changes on mobile reduced the precision of the signals advertisers once relied on, and the platform responded by leaning harder on its own machine learning. The practical effect is that detailed interest stacks and narrow lookalikes matter far less than they used to. The system decides who sees your ad largely based on who engages with it and converts.",
      },
      {
        type: "p",
        text: "That shift changes the role of creative. When you hand the algorithm a broad audience, the ad itself becomes the targeting signal. A video that opens with a specific problem a dental practice owner recognises will find dental practice owners, because they are the ones who stop and watch. A generic brand video will find whoever is cheapest to reach, which is rarely who you want.",
      },
      {
        type: "quote",
        text: "When you hand the algorithm a broad audience, the ad itself becomes the targeting signal.",
      },
      { type: "h2", text: "Signs the problem is creative, not settings" },
      {
        type: "p",
        text: "Before rebuilding campaigns, check whether you are looking at creative fatigue or a genuine structural issue. The following patterns usually point to creative:",
      },
      {
        type: "ul",
        items: [
          "Frequency is climbing while click-through rate declines on the same ads week over week.",
          "Most of your spend is concentrated on one or two ads that have been live for months.",
          "New ads launched into the account get little delivery, because the system keeps favouring an old winner that is slowly decaying.",
          "Your ads look and sound like your competitors' ads, so nothing gives a viewer a reason to stop scrolling.",
          "Cost per thousand impressions is stable but cost per result is rising, meaning you are reaching people at the same price but persuading fewer of them.",
        ],
      },
      {
        type: "p",
        text: "If tracking is broken, for example if the Conversions API is not set up or events are deduplicated incorrectly, fix that first. Poor signal quality will undermine any creative strategy. But once measurement is sound, creative is usually the highest-leverage variable left.",
      },
      { type: "h2", text: "What creative-first actually means" },
      {
        type: "p",
        text: "Creative-first is not about making prettier ads. It is about treating creative as a structured testing programme rather than an occasional design task. That means producing a steady volume of meaningfully different concepts, not ten colour variations of the same idea.",
      },
      {
        type: "p",
        text: "A useful way to think about variation is in three layers. The concept is the core argument: the problem you lead with, the promise you make, the objection you address. The format is how it is delivered: talking-head video, product demonstration, customer-style testimonial, static comparison, carousel walkthrough. The hook is the first two or three seconds, or the headline on a static. Most accounts over-test hooks and under-test concepts. A new hook on a tired concept rarely changes much. A new concept can change everything.",
      },
      {
        type: "p",
        text: "Good concepts come from real customer language. Read your reviews, sales call notes, support tickets and the questions prospects ask before buying. The exact phrases customers use to describe their frustration are almost always more effective than the phrases your team uses to describe your product.",
      },
      { type: "h2", text: "A practical testing rhythm" },
      {
        type: "p",
        text: "For most small and mid-sized advertisers, a sustainable rhythm looks something like this. Keep account structure simple: one or two prospecting campaigns with broad targeting, plus retargeting if your volume supports it. Introduce a small batch of new concepts on a regular cadence, typically every one to two weeks depending on spend. Give each batch enough budget and time to exit the learning phase before judging it.",
      },
      {
        type: "p",
        text: "Judge new creative on the metric that matters to the business, such as cost per qualified lead or cost per purchase, but use leading indicators to diagnose why. Thumb-stop rate and hold rate tell you whether the hook works. Click-through rate tells you whether the message is persuasive. Landing page conversion rate tells you whether the page delivers on the ad's promise. Each metric points to a different fix.",
      },
      {
        type: "p",
        text: "When a concept wins, do not just let it run until it dies. Build iterations around it: new hooks, new formats, different spokespeople, shorter and longer cuts. This extends the life of a proven idea while you look for the next one.",
      },
      { type: "h2", text: "Where to start this month" },
      {
        type: "p",
        text: "If your Meta results have stalled, resist the urge to rebuild the account from scratch. Confirm your tracking is healthy, simplify the structure so the algorithm has enough data per campaign, and then commit to a regular flow of genuinely new creative concepts grounded in what your customers actually say. In our experience, that combination does more to revive a stalled account than any amount of audience or bid tinkering. The advertisers who win on Meta now are rarely the ones with the cleverest settings. They are the ones who never run out of things worth saying.",
      },
    ],
  },
  {
    slug: "local-seo-checklist",
    title: "The Local SEO Checklist for Service Businesses",
    excerpt:
      "For plumbers, clinics, law firms and other service businesses, the map pack is often the most valuable real estate on Google. This checklist covers the fundamentals that decide whether you show up there.",
    category: "SEO",
    readMins: 7,
    date: "2026-11-04",
    body: [
      {
        type: "p",
        text: "When someone searches for an emergency electrician, a family dentist or an accountant near them, the results that matter most are usually the map listings at the top of the page. For service businesses that depend on local customers, those listings can drive a large share of calls and enquiries. Yet many businesses treat local SEO as a one-off setup task, then wonder why a competitor with fewer years in business keeps outranking them.",
      },
      {
        type: "p",
        text: "Google has been consistent about what drives local rankings: relevance, distance and prominence. You cannot change where a searcher is standing, but you can control a great deal of how relevant and prominent your business appears. This checklist works through the areas that matter, in roughly the order we would tackle them.",
      },
      { type: "h2", text: "1. Your Google Business Profile" },
      {
        type: "p",
        text: "Your Business Profile is the single most important local asset you own. Treat it as a living page, not a directory listing.",
      },
      {
        type: "ul",
        items: [
          "Choose the most accurate primary category. This is one of the strongest relevance signals available to you, so pick the category that matches your core service, not the broadest one.",
          "Add relevant secondary categories, but only ones that genuinely reflect services you provide.",
          "List your services individually with clear descriptions, and keep opening hours, including holiday hours, accurate.",
          "Set your service area correctly if you travel to customers, and hide your address only if customers do not visit you.",
          "Upload real photos of your team, premises, vehicles and completed work. Stock imagery adds little.",
          "Post updates periodically, and use the Q&A and messaging features if you can respond promptly.",
        ],
      },
      { type: "h2", text: "2. Consistent business information everywhere" },
      {
        type: "p",
        text: "Your business name, address and phone number should be identical across your website, your Business Profile and the major directories and data aggregators in your country. Inconsistencies, such as an old address on a directory or a tracking number used without care, create doubt about which details are correct. Pay particular attention after a move, a rebrand or a phone system change, when old details tend to linger.",
      },
      {
        type: "p",
        text: "Beyond the general directories, prioritise listings that are specific to your industry and your city. A listing on a respected trade association site or a local chamber of commerce often carries more weight, and sends more real customers, than dozens of low-quality directories.",
      },
      { type: "h2", text: "3. Reviews as an operating process" },
      {
        type: "p",
        text: "Reviews influence both rankings and whether a searcher chooses to call you. The businesses that win here rarely have a review strategy; they have a review habit built into how they deliver work.",
      },
      {
        type: "ul",
        items: [
          "Ask every satisfied customer, at the moment the job is done, with a direct link to your review form.",
          "Make asking someone's job. Automated follow-up by text or email helps, but a personal ask from the technician or practitioner is usually more effective.",
          "Respond to every review, positive or negative, in a calm and specific way. Prospective customers read your replies.",
          "Never buy reviews, offer incentives that breach platform policies or gate requests so only happy customers are asked. The risk to your profile is not worth it.",
        ],
      },
      {
        type: "quote",
        text: "The businesses that win on reviews rarely have a review strategy; they have a review habit built into how they deliver work.",
      },
      { type: "h2", text: "4. A website that proves local relevance" },
      {
        type: "p",
        text: "Your Business Profile and your website work together. Google looks at your site to confirm what you do and where you do it, and searchers who click through need to find reassurance quickly.",
      },
      {
        type: "ul",
        items: [
          "Create a dedicated page for each core service, rather than one page that lists everything.",
          "If you serve several towns or suburbs, build location pages only where you can say something genuinely specific about working there. Thin, templated city pages tend to do more harm than good.",
          "Show your name, address and phone number clearly, ideally in the footer, and embed a map on your contact page.",
          "Add LocalBusiness structured data so search engines can parse your details reliably.",
          "Make the site fast and easy to use on a phone, with a tap-to-call button visible without scrolling.",
        ],
      },
      { type: "h2", text: "5. Local prominence and links" },
      {
        type: "p",
        text: "Prominence reflects how well known your business is, online and offline. Links and mentions from local sources are a strong signal. Sponsor a local sports team or community event, contribute expert comment to local news, partner with complementary businesses, and make sure suppliers and associations that already know you link to your site. These efforts compound slowly, which is exactly why competitors rarely bother and why they work.",
      },
      {
        type: "p",
        text: "Finally, measure what matters. Track calls, direction requests and website visits from your Business Profile, and tag the website link with UTM parameters so you can separate map traffic from organic traffic in your analytics. Local SEO is rarely about a single dramatic fix. It is the accumulation of small, consistent signals that tell Google, and your customers, that you are the obvious choice nearby.",
      },
    ],
  },
  {
    slug: "google-ads-vs-seo",
    title: "Google Ads vs SEO: Where Should Your First Marketing Dollar Go?",
    excerpt:
      "Paid search buys you visibility today; SEO builds an asset that pays off later. The right first move depends on your margins, your timeline and how much demand already exists for what you sell.",
    category: "Strategy",
    readMins: 7,
    date: "2026-10-14",
    body: [
      {
        type: "p",
        text: "It is one of the most common questions business owners ask when they start investing seriously in marketing: should the first budget go to Google Ads or to SEO? Both put you in front of people who are actively searching for what you sell, which is why they are so often the first two channels considered. But they behave very differently, and choosing the wrong one first can waste months and a meaningful share of your budget.",
      },
      {
        type: "p",
        text: "The honest answer is that it depends. The more useful answer is that it depends on a small number of specific factors you can assess before spending anything.",
      },
      { type: "h2", text: "How the two channels actually differ" },
      {
        type: "p",
        text: "Google Ads is rented visibility. You pay for each click, results can start within days of launch, and you can turn spend up or down whenever you like. When you stop paying, the traffic stops. Its great strength is speed and control: you can test which services, offers and messages convert before committing to them more broadly.",
      },
      {
        type: "p",
        text: "SEO is owned visibility. You invest in content, technical improvements and authority, and over time your pages earn rankings that generate traffic without a per-click cost. It typically takes months rather than weeks to see meaningful results, and progress is less predictable. But a page that ranks well can keep producing leads long after the work that built it is done.",
      },
      {
        type: "quote",
        text: "Google Ads is rented visibility. SEO is owned visibility. Most businesses eventually need both; the question is sequence.",
      },
      { type: "h2", text: "When Google Ads should come first" },
      {
        type: "p",
        text: "Paid search tends to be the better starting point when you need revenue soon and can measure what it produces. It is usually the right first move if several of the following are true:",
      },
      {
        type: "ul",
        items: [
          "You are a new business or launching a new service, and there is no organic visibility to build on yet.",
          "Your customers search with clear commercial intent, such as a specific service plus a location.",
          "Your margins or customer lifetime value comfortably cover the cost per click in your market.",
          "You want to validate which offers and messages convert before investing in long-term content.",
          "You have seasonal peaks or time-limited promotions where speed matters more than compounding.",
        ],
      },
      {
        type: "p",
        text: "One caveat: Google Ads only works if the economics work. In some categories, such as legal services, insurance or certain trades in large cities, clicks can be expensive enough that a small budget buys very little data. Before launching, estimate your likely cost per click with Google's Keyword Planner, apply a conservative conversion rate, and check whether the resulting cost per customer makes sense for your business.",
      },
      { type: "h2", text: "When SEO should come first" },
      {
        type: "p",
        text: "SEO deserves priority when the paid economics are difficult or when your growth depends on being found for many different questions. It often makes sense to lead with SEO when your market has high click costs relative to your margins, when customers research extensively before buying, or when you serve a niche where competitors have neglected organic search. Businesses with a long sales cycle, such as B2B services or high-ticket purchases, often benefit from content that answers buyer questions at every stage.",
      },
      {
        type: "p",
        text: "SEO also deserves attention early if your website has basic technical problems. A slow, poorly structured site undermines paid campaigns too, because Google Ads quality scores and conversion rates depend on the landing page experience.",
      },
      { type: "h2", text: "The sensible middle path" },
      {
        type: "p",
        text: "For most small and mid-sized businesses, the answer is not either-or but a deliberate sequence. Start paid search on a focused set of high-intent keywords to generate leads and learn quickly. At the same time, fix the technical fundamentals of your site and build the handful of core service pages that SEO depends on. Use the search term reports from your paid campaigns to see which queries actually convert, then prioritise those topics in your content plan.",
      },
      {
        type: "p",
        text: "As organic rankings grow, you can gradually rebalance. Some businesses reduce paid spend on terms where they rank strongly; others keep both, because owning a paid and an organic result on the same page can lift overall click share. Let your data decide rather than a fixed rule.",
      },
      { type: "h2", text: "Before you spend the first dollar" },
      {
        type: "p",
        text: "Whichever channel you choose, set up conversion tracking first. Know what a lead or sale is worth to you, record phone calls and form submissions properly, and decide in advance how you will judge success. Without that foundation, you will not be able to tell whether Google Ads is profitable or whether SEO is moving the needle, and every later decision becomes guesswork. The first marketing dollar is best spent where it teaches you the most, and that only happens if you are measuring.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
