/**
 * NAIRI VENTURES — UNIVERSAL DATA ACCESS & DUAL-LAYER CMS ENGINE (v5.0)
 * Manages content parts, images, branding (logo & fonts), ventures, testimonials, links, and notes.
 * Synchronizes with local disk files via API, local storage, and broadcast channel.
 */

const SEED_DATA = {
  "page_content": [
    {
      "id": "pc-home_top_video_poster",
      "page": "Home",
      "part_name": "home.top_video.poster",
      "section_key": "home.top_video.poster",
      "page_name": "Home",
      "section_name": "top_video",
      "content": "",
      "is_deleted": false,
      "updated_at": "2026-09-08T05:12:26.009Z"
    },
    {
      "id": "pc-home_top_video_desc",
      "page": "Home",
      "part_name": "home.top_video.desc",
      "section_key": "home.top_video.desc",
      "page_name": "Home",
      "section_name": "top_video",
      "content": "Watch how we script, produce, and deploy high-converting video ads in days instead of months.",
      "is_deleted": false,
      "updated_at": "2026-09-08T05:12:26.009Z"
    },
    {
      "id": "pc-home_top_video_title",
      "page": "Home",
      "part_name": "home.top_video.title",
      "section_key": "home.top_video.title",
      "page_name": "Home",
      "section_name": "top_video",
      "content": "See How Our AI Video & Funnel System Works",
      "is_deleted": false,
      "updated_at": "2026-09-08T05:12:26.009Z"
    },
    {
      "id": "pc-home_top_video_tag",
      "page": "Home",
      "part_name": "home.top_video.tag",
      "section_key": "home.top_video.tag",
      "page_name": "Home",
      "section_name": "top_video",
      "content": "Featured Showcase",
      "is_deleted": false,
      "updated_at": "2026-09-08T05:12:26.009Z"
    },
    {
      "id": "pc-home_top_video_url",
      "page": "Home",
      "part_name": "home.top_video.url",
      "section_key": "home.top_video.url",
      "page_name": "Home",
      "section_name": "top_video",
      "content": "",
      "is_deleted": false,
      "updated_at": "2026-09-08T05:12:26.008Z"
    },
    {
      "id": "pc-home_hero_badge1",
      "page": "Home",
      "part_name": "home.hero.badge1",
      "section_key": "home.hero.badge1",
      "page_name": "Home",
      "section_name": "hero",
      "content": "America • India • Dubai",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_hero_badge2",
      "page": "Home",
      "part_name": "home.hero.badge2",
      "section_key": "home.hero.badge2",
      "page_name": "Home",
      "section_name": "hero",
      "content": "Founder-Led • No Fluff",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_hero_heading",
      "page": "Home",
      "part_name": "home.hero.heading",
      "section_key": "home.hero.heading",
      "page_name": "Home",
      "section_name": "hero",
      "content": "Marketing that doesn't cost what <span class=\"gradient-gold-text\">marketing used to cost.</span>",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_hero_subheading",
      "page": "Home",
      "part_name": "home.hero.subheading",
      "section_key": "home.hero.subheading",
      "page_name": "Home",
      "section_name": "hero",
      "content": "AI-produced video ads, a website that actually converts, and a sales funnel behind it — built in weeks, not the six months and five-figure retainer you were quoted.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_hero_btn",
      "page": "Home",
      "part_name": "home.hero.btn",
      "section_key": "home.hero.btn",
      "page_name": "Home",
      "section_name": "hero",
      "content": "See what this actually costs",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_hero_microline",
      "page": "Home",
      "part_name": "home.hero.microline",
      "section_key": "home.hero.microline",
      "page_name": "Home",
      "section_name": "hero",
      "content": "No contract talk until you've seen the real numbers.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_stats_item1_num",
      "page": "Home",
      "part_name": "home.stats.item1.num",
      "section_key": "home.stats.item1.num",
      "page_name": "Home",
      "section_name": "stats",
      "content": "<span class=\"fill-in-badge\">[FILL IN]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_stats_item1_label",
      "page": "Home",
      "part_name": "home.stats.item1.label",
      "section_key": "home.stats.item1.label",
      "page_name": "Home",
      "section_name": "stats",
      "content": "Avg. time to first draft",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_stats_item2_num",
      "page": "Home",
      "part_name": "home.stats.item2.num",
      "section_key": "home.stats.item2.num",
      "page_name": "Home",
      "section_name": "stats",
      "content": "3",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_stats_item2_label",
      "page": "Home",
      "part_name": "home.stats.item2.label",
      "section_key": "home.stats.item2.label",
      "page_name": "Home",
      "section_name": "stats",
      "content": "Countries we operate in (America, India, Dubai)",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_stats_item3_num",
      "page": "Home",
      "part_name": "home.stats.item3.num",
      "section_key": "home.stats.item3.num",
      "page_name": "Home",
      "section_name": "stats",
      "content": "1",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_stats_item3_label",
      "page": "Home",
      "part_name": "home.stats.item3.label",
      "section_key": "home.stats.item3.label",
      "page_name": "Home",
      "section_name": "stats",
      "content": "Point of contact, start to finish",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_stats_item4_num",
      "page": "Home",
      "part_name": "home.stats.item4.num",
      "section_key": "home.stats.item4.num",
      "page_name": "Home",
      "section_name": "stats",
      "content": "3-in-1",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_stats_item4_label",
      "page": "Home",
      "part_name": "home.stats.item4.label",
      "section_key": "home.stats.item4.label",
      "page_name": "Home",
      "section_name": "stats",
      "content": "Video, website & funnel, built as one system",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_pain_eyebrow",
      "page": "Home",
      "part_name": "home.pain.eyebrow",
      "section_key": "home.pain.eyebrow",
      "page_name": "Home",
      "section_name": "pain",
      "content": "The Real Problem",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_pain_heading",
      "page": "Home",
      "part_name": "home.pain.heading",
      "section_key": "home.pain.heading",
      "page_name": "Home",
      "section_name": "pain",
      "content": "<em>Let's be real — you already know what marketing costs. That's why you're hesitant.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_pain_body",
      "page": "Home",
      "part_name": "home.pain.body",
      "section_key": "home.pain.body",
      "page_name": "Home",
      "section_name": "pain",
      "content": "A freelance video editor: $500–$1,500 per video, and you're back in line next month for the next one. An agency retainer: $3,000–$10,000 a month, most of it going to account managers relaying messages, not people actually making things. A website agency: $5,000–$15,000 and a three-to-six month wait, for a site that still needs someone to figure out the funnel afterward. None of that is a knock on those people — it's just an expensive, disconnected way to get three things that need to work together anyway. We build all three as one system, using AI to cut the slow, expensive parts of production, so what used to cost a small team and $10K/month costs a fraction of that.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_pain_btn",
      "page": "Home",
      "part_name": "home.pain.btn",
      "section_key": "home.pain.btn",
      "page_name": "Home",
      "section_name": "pain",
      "content": "Learn how we work",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_what_eyebrow",
      "page": "Home",
      "part_name": "home.what.eyebrow",
      "section_key": "home.what.eyebrow",
      "page_name": "Home",
      "section_name": "what",
      "content": "Studio Thesis",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_what_heading",
      "page": "Home",
      "part_name": "home.what.heading",
      "section_key": "home.what.heading",
      "page_name": "Home",
      "section_name": "what",
      "content": "Three things. Built to work together, not sold separately.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_what_s1_title",
      "page": "Home",
      "part_name": "home.what.s1.title",
      "section_key": "home.what.s1.title",
      "page_name": "Home",
      "section_name": "what",
      "content": "AI-produced video ads",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_what_s1_desc",
      "page": "Home",
      "part_name": "home.what.s1.desc",
      "section_key": "home.what.s1.desc",
      "page_name": "Home",
      "section_name": "what",
      "content": "Scripted, produced fast, finished by a human before anything goes live.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_what_s2_title",
      "page": "Home",
      "part_name": "home.what.s2.title",
      "section_key": "home.what.s2.title",
      "page_name": "Home",
      "section_name": "what",
      "content": "Websites built to convert",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_what_s2_desc",
      "page": "Home",
      "part_name": "home.what.s2.desc",
      "section_key": "home.what.s2.desc",
      "page_name": "Home",
      "section_name": "what",
      "content": "Live in weeks, built to get someone to act, not just look at.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_what_s3_title",
      "page": "Home",
      "part_name": "home.what.s3.title",
      "section_key": "home.what.s3.title",
      "page_name": "Home",
      "section_name": "what",
      "content": "Sales funnels & business development",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_what_s3_desc",
      "page": "Home",
      "part_name": "home.what.s3.desc",
      "section_key": "home.what.s3.desc",
      "page_name": "Home",
      "section_name": "what",
      "content": "The connective tissue from \"saw your ad\" to \"became a customer.\"",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_eyebrow",
      "page": "Home",
      "part_name": "home.toolkit.eyebrow",
      "section_key": "home.toolkit.eyebrow",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Our Full Marketing Toolkit",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_heading",
      "page": "Home",
      "part_name": "home.toolkit.heading",
      "section_key": "home.toolkit.heading",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Everything a campaign needs — <em>under one roof",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_subline",
      "page": "Home",
      "part_name": "home.toolkit.subline",
      "section_key": "home.toolkit.subline",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "We don't hand you a strategy deck and disappear. We build the video, the site, and the funnel — and run the ads behind all three.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_v1_title",
      "page": "Home",
      "part_name": "home.toolkit.v1.title",
      "section_key": "home.toolkit.v1.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Script & Concept Development",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_v1_desc",
      "page": "Home",
      "part_name": "home.toolkit.v1.desc",
      "section_key": "home.toolkit.v1.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Every ad starts with a script built around your actual customer, not a generic template.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_v1_bullets",
      "page": "Home",
      "part_name": "home.toolkit.v1.bullets",
      "section_key": "home.toolkit.v1.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Customer research & messaging angles · Multiple concept variations per project · Platform-specific hooks",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_v2_title",
      "page": "Home",
      "part_name": "home.toolkit.v2.title",
      "section_key": "home.toolkit.v2.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "AI-Assisted Video Production",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_v2_desc",
      "page": "Home",
      "part_name": "home.toolkit.v2.desc",
      "section_key": "home.toolkit.v2.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "AI handles the slow, expensive parts; a human editor finishes every version before it goes live.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_v2_bullets",
      "page": "Home",
      "part_name": "home.toolkit.v2.bullets",
      "section_key": "home.toolkit.v2.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Rapid first-draft generation · Human review & finishing on every video · Full set of variations to A/B test",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.356Z"
    },
    {
      "id": "pc-home_toolkit_v3_title",
      "page": "Home",
      "part_name": "home.toolkit.v3.title",
      "section_key": "home.toolkit.v3.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Platform-Ready Delivery",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_v3_desc",
      "page": "Home",
      "part_name": "home.toolkit.v3.desc",
      "section_key": "home.toolkit.v3.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Every ad delivered in the exact formats each platform needs.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_v3_bullets",
      "page": "Home",
      "part_name": "home.toolkit.v3.bullets",
      "section_key": "home.toolkit.v3.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Vertical, square & widescreen formats · Captions & platform specs · Upload-ready files",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w1_title",
      "page": "Home",
      "part_name": "home.toolkit.w1.title",
      "section_key": "home.toolkit.w1.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Conversion-Focused Design",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w1_desc",
      "page": "Home",
      "part_name": "home.toolkit.w1.desc",
      "section_key": "home.toolkit.w1.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Every page built around what a visitor needs to see to take action.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w1_bullets",
      "page": "Home",
      "part_name": "home.toolkit.w1.bullets",
      "section_key": "home.toolkit.w1.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "User journey mapped before design starts · Mobile-first layouts · One clear call-to-action per page",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w2_title",
      "page": "Home",
      "part_name": "home.toolkit.w2.title",
      "section_key": "home.toolkit.w2.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Fast, Clean Development",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w2_desc",
      "page": "Home",
      "part_name": "home.toolkit.w2.desc",
      "section_key": "home.toolkit.w2.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "No bloated builders that lose visitors before they see the offer.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w2_bullets",
      "page": "Home",
      "part_name": "home.toolkit.w2.bullets",
      "section_key": "home.toolkit.w2.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Sub-3-second load times · Clean code, no plugin bloat · SEO-ready from day one",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w3_title",
      "page": "Home",
      "part_name": "home.toolkit.w3.title",
      "section_key": "home.toolkit.w3.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Full Ownership, No Lock-In",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w3_desc",
      "page": "Home",
      "part_name": "home.toolkit.w3.desc",
      "section_key": "home.toolkit.w3.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "You get the actual site, not a rented template.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_w3_bullets",
      "page": "Home",
      "part_name": "home.toolkit.w3.bullets",
      "section_key": "home.toolkit.w3.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Full source files handed over · No platform lock-in · Editable by anyone going forward",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f1_title",
      "page": "Home",
      "part_name": "home.toolkit.f1.title",
      "section_key": "home.toolkit.f1.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Funnel Strategy",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f1_desc",
      "page": "Home",
      "part_name": "home.toolkit.f1.desc",
      "section_key": "home.toolkit.f1.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "The path from \"saw your ad\" to \"became a customer,\" mapped before a page is built.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f1_bullets",
      "page": "Home",
      "part_name": "home.toolkit.f1.bullets",
      "section_key": "home.toolkit.f1.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Full funnel mapped · Offer structure reviewed · Drop-off points identified before launch",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f2_title",
      "page": "Home",
      "part_name": "home.toolkit.f2.title",
      "section_key": "home.toolkit.f2.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Follow-Up Sequences",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f2_desc",
      "page": "Home",
      "part_name": "home.toolkit.f2.desc",
      "section_key": "home.toolkit.f2.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Most leads don't buy on the first visit — this is what brings them back.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f2_bullets",
      "page": "Home",
      "part_name": "home.toolkit.f2.bullets",
      "section_key": "home.toolkit.f2.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Automated email sequences · Retargeting for warm leads · Abandoned-cart recovery flows",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f3_title",
      "page": "Home",
      "part_name": "home.toolkit.f3.title",
      "section_key": "home.toolkit.f3.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Business Development Support",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f3_desc",
      "page": "Home",
      "part_name": "home.toolkit.f3.desc",
      "section_key": "home.toolkit.f3.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Groundwork to open new customer channels beyond the funnel.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_f3_bullets",
      "page": "Home",
      "part_name": "home.toolkit.f3.bullets",
      "section_key": "home.toolkit.f3.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Outbound outreach templates · Partnership & channel identification · Ongoing optimization from real data",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a1_title",
      "page": "Home",
      "part_name": "home.toolkit.a1.title",
      "section_key": "home.toolkit.a1.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Campaign Setup",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a1_desc",
      "page": "Home",
      "part_name": "home.toolkit.a1.desc",
      "section_key": "home.toolkit.a1.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Accounts set up correctly from day one, where most wasted spend happens.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a1_bullets",
      "page": "Home",
      "part_name": "home.toolkit.a1.bullets",
      "section_key": "home.toolkit.a1.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Pixel/tracking setup · Audience & targeting structure · Budget allocation based on real goals",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a2_title",
      "page": "Home",
      "part_name": "home.toolkit.a2.title",
      "section_key": "home.toolkit.a2.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Ongoing Optimization",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a2_desc",
      "page": "Home",
      "part_name": "home.toolkit.a2.desc",
      "section_key": "home.toolkit.a2.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Checked and adjusted weekly, not set once and forgotten.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a2_bullets",
      "page": "Home",
      "part_name": "home.toolkit.a2.bullets",
      "section_key": "home.toolkit.a2.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Weekly performance review · A/B testing · Budget shifted toward what's working",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a3_title",
      "page": "Home",
      "part_name": "home.toolkit.a3.title",
      "section_key": "home.toolkit.a3.title",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Plain-Language Reporting",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a3_desc",
      "page": "Home",
      "part_name": "home.toolkit.a3.desc",
      "section_key": "home.toolkit.a3.desc",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "You'll always know what was spent and what it returned.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_toolkit_a3_bullets",
      "page": "Home",
      "part_name": "home.toolkit.a3.bullets",
      "section_key": "home.toolkit.a3.bullets",
      "page_name": "Home",
      "section_name": "toolkit",
      "content": "Weekly plain-language reports · Direct account access · No jargon-filled PDFs",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_comp_eyebrow",
      "page": "Home",
      "part_name": "home.comp.eyebrow",
      "section_key": "home.comp.eyebrow",
      "page_name": "Home",
      "section_name": "comp",
      "content": "Side-By-Side Reality",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_comp_heading",
      "page": "Home",
      "part_name": "home.comp.heading",
      "section_key": "home.comp.heading",
      "page_name": "Home",
      "section_name": "comp",
      "content": "Same result. <em>Different price and timeline.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_comp_subline",
      "page": "Home",
      "part_name": "home.comp.subline",
      "section_key": "home.comp.subline",
      "page_name": "Home",
      "section_name": "comp",
      "content": "Most businesses spend more than they need to, stitching together separate freelancers or one expensive retainer. Here's the actual difference.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_comp_note",
      "page": "Home",
      "part_name": "home.comp.note",
      "section_key": "home.comp.note",
      "page_name": "Home",
      "section_name": "comp",
      "content": "*(Fill in your real price before publishing.)*",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_eyebrow",
      "page": "Home",
      "part_name": "home.work.eyebrow",
      "section_key": "home.work.eyebrow",
      "page_name": "Home",
      "section_name": "work",
      "content": "How We Work",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_heading",
      "page": "Home",
      "part_name": "home.work.heading",
      "section_key": "home.work.heading",
      "page_name": "Home",
      "section_name": "work",
      "content": "From first message to live campaign: <em>our 4-step process",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_step1_title",
      "page": "Home",
      "part_name": "home.work.step1.title",
      "section_key": "home.work.step1.title",
      "page_name": "Home",
      "section_name": "work",
      "content": "Discovery Call",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_step1_desc",
      "page": "Home",
      "part_name": "home.work.step1.desc",
      "section_key": "home.work.step1.desc",
      "page_name": "Home",
      "section_name": "work",
      "content": "A real conversation about your business and what's already been tried — no generic intake form.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_step2_title",
      "page": "Home",
      "part_name": "home.work.step2.title",
      "section_key": "home.work.step2.title",
      "page_name": "Home",
      "section_name": "work",
      "content": "The Plan",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_step2_desc",
      "page": "Home",
      "part_name": "home.work.step2.desc",
      "section_key": "home.work.step2.desc",
      "page_name": "Home",
      "section_name": "work",
      "content": "You see the ad angles, site structure, and funnel plan before any money changes hands.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_step3_title",
      "page": "Home",
      "part_name": "home.work.step3.title",
      "section_key": "home.work.step3.title",
      "page_name": "Home",
      "section_name": "work",
      "content": "Build & Review",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_step3_desc",
      "page": "Home",
      "part_name": "home.work.step3.desc",
      "section_key": "home.work.step3.desc",
      "page_name": "Home",
      "section_name": "work",
      "content": "Video, website, and funnel built and shown to you at each stage.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_step4_title",
      "page": "Home",
      "part_name": "home.work.step4.title",
      "section_key": "home.work.step4.title",
      "page_name": "Home",
      "section_name": "work",
      "content": "Launch & Optimize",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_work_step4_desc",
      "page": "Home",
      "part_name": "home.work.step4.desc",
      "section_key": "home.work.step4.desc",
      "page_name": "Home",
      "section_name": "work",
      "content": "Campaign goes live with full account access on your end, and weekly optimization from ours.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_operate_heading",
      "page": "Home",
      "part_name": "home.operate.heading",
      "section_key": "home.operate.heading",
      "page_name": "Home",
      "section_name": "operate",
      "content": "Where we operate",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_operate_loc1_city",
      "page": "Home",
      "part_name": "home.operate.loc1.city",
      "section_key": "home.operate.loc1.city",
      "page_name": "Home",
      "section_name": "operate",
      "content": "America",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_operate_loc1_detail",
      "page": "Home",
      "part_name": "home.operate.loc1.detail",
      "section_key": "home.operate.loc1.detail",
      "page_name": "Home",
      "section_name": "operate",
      "content": "Operating entity",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_operate_loc2_city",
      "page": "Home",
      "part_name": "home.operate.loc2.city",
      "section_key": "home.operate.loc2.city",
      "page_name": "Home",
      "section_name": "operate",
      "content": "India",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_operate_loc2_detail",
      "page": "Home",
      "part_name": "home.operate.loc2.detail",
      "section_key": "home.operate.loc2.detail",
      "page_name": "Home",
      "section_name": "operate",
      "content": "Operating entity",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_operate_loc3_city",
      "page": "Home",
      "part_name": "home.operate.loc3.city",
      "section_key": "home.operate.loc3.city",
      "page_name": "Home",
      "section_name": "operate",
      "content": "Dubai",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_operate_loc3_detail",
      "page": "Home",
      "part_name": "home.operate.loc3.detail",
      "section_key": "home.operate.loc3.detail",
      "page_name": "Home",
      "section_name": "operate",
      "content": "Operating entity",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_obj_heading",
      "page": "Home",
      "part_name": "home.obj.heading",
      "section_key": "home.obj.heading",
      "page_name": "Home",
      "section_name": "obj",
      "content": "The questions you're actually asking",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.357Z"
    },
    {
      "id": "pc-home_obj_q1",
      "page": "Home",
      "part_name": "home.obj.q1",
      "section_key": "home.obj.q1",
      "page_name": "Home",
      "section_name": "obj",
      "content": "\"AI-generated video always looks fake. Why would this be different?\"",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_obj_a1",
      "page": "Home",
      "part_name": "home.obj.a1",
      "section_key": "home.obj.a1",
      "page_name": "Home",
      "section_name": "obj",
      "content": "AI gets us to a fast first draft; a person edits and finishes everything before you see it. You're getting speed on production, not a robot's raw output as the final product.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_obj_q2",
      "page": "Home",
      "part_name": "home.obj.q2",
      "section_key": "home.obj.q2",
      "page_name": "Home",
      "section_name": "obj",
      "content": "\"How is this so much cheaper than an agency?\"",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_obj_a2",
      "page": "Home",
      "part_name": "home.obj.a2",
      "section_key": "home.obj.a2",
      "page_name": "Home",
      "section_name": "obj",
      "content": "Agencies price around headcount and hours. AI cuts the hours on script drafts, initial edits, and variations, so the savings come from efficiency, not from cutting what you actually see.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_obj_q3",
      "page": "Home",
      "part_name": "home.obj.q3",
      "section_key": "home.obj.q3",
      "page_name": "Home",
      "section_name": "obj",
      "content": "\"What if I've been burned by a 'marketing agency' before?\"",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_obj_a3",
      "page": "Home",
      "part_name": "home.obj.a3",
      "section_key": "home.obj.a3",
      "page_name": "Home",
      "section_name": "obj",
      "content": "You'll see the actual plan before any money changes hands, so you're deciding on something real, not a pitch.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_obj_q4",
      "page": "Home",
      "part_name": "home.obj.q4",
      "section_key": "home.obj.q4",
      "page_name": "Home",
      "section_name": "obj",
      "content": "\"Do I need all three, or can I get just one?\"",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_obj_a4",
      "page": "Home",
      "part_name": "home.obj.a4",
      "section_key": "home.obj.a4",
      "page_name": "Home",
      "section_name": "obj",
      "content": "You can start with one. We'll tell you honestly which matters most for where your business is right now.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_fit_heading",
      "page": "Home",
      "part_name": "home.fit.heading",
      "section_key": "home.fit.heading",
      "page_name": "Home",
      "section_name": "fit",
      "content": "Not trying to be everyone's agency",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_fit_yes_title",
      "page": "Home",
      "part_name": "home.fit.yes.title",
      "section_key": "home.fit.yes.title",
      "page_name": "Home",
      "section_name": "fit",
      "content": "Probably a fit if:",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_fit_yes_desc",
      "page": "Home",
      "part_name": "home.fit.yes.desc",
      "section_key": "home.fit.yes.desc",
      "page_name": "Home",
      "section_name": "fit",
      "content": "You have a real product/service with actual customers already, you've tried marketing before and it didn't go well, and you want to understand what you're paying for.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_fit_no_title",
      "page": "Home",
      "part_name": "home.fit.no.title",
      "section_key": "home.fit.no.title",
      "page_name": "Home",
      "section_name": "fit",
      "content": "Probably not a fit if:",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_fit_no_desc",
      "page": "Home",
      "part_name": "home.fit.no.desc",
      "section_key": "home.fit.no.desc",
      "page_name": "Home",
      "section_name": "fit",
      "content": "You want overnight viral growth with no budget behind it, you want to hand everything over and never look at a number again, or you're not ready to spend anything yet.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_eyebrow",
      "page": "Home",
      "part_name": "home.pricing.eyebrow",
      "section_key": "home.pricing.eyebrow",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Direct Terms",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_heading",
      "page": "Home",
      "part_name": "home.pricing.heading",
      "section_key": "home.pricing.heading",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Simple pricing, everything connected",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_subline",
      "page": "Home",
      "part_name": "home.pricing.subline",
      "section_key": "home.pricing.subline",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Transparent, fixed scopes without five-figure agency retainers.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier1_badge",
      "page": "Home",
      "part_name": "home.pricing.tier1.badge",
      "section_key": "home.pricing.tier1.badge",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Starter",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier1_title",
      "page": "Home",
      "part_name": "home.pricing.tier1.title",
      "section_key": "home.pricing.tier1.title",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "One Core Service",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier1_price",
      "page": "Home",
      "part_name": "home.pricing.tier1.price",
      "section_key": "home.pricing.tier1.price",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "<span class=\"fill-in-badge\">[FILL IN price]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier1_sub",
      "page": "Home",
      "part_name": "home.pricing.tier1.sub",
      "section_key": "home.pricing.tier1.sub",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Video ads OR website OR funnel, one core service to start.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier2_badge",
      "page": "Home",
      "part_name": "home.pricing.tier2.badge",
      "section_key": "home.pricing.tier2.badge",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Growth (Most Popular)",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier2_title",
      "page": "Home",
      "part_name": "home.pricing.tier2.title",
      "section_key": "home.pricing.tier2.title",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Connected System",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier2_price",
      "page": "Home",
      "part_name": "home.pricing.tier2.price",
      "section_key": "home.pricing.tier2.price",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "<span class=\"fill-in-badge\">[FILL IN price]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier2_sub",
      "page": "Home",
      "part_name": "home.pricing.tier2.sub",
      "section_key": "home.pricing.tier2.sub",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Two of the three services, connected as one system.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier3_badge",
      "page": "Home",
      "part_name": "home.pricing.tier3.badge",
      "section_key": "home.pricing.tier3.badge",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Full System",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier3_title",
      "page": "Home",
      "part_name": "home.pricing.tier3.title",
      "section_key": "home.pricing.tier3.title",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Complete Engine",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier3_price",
      "page": "Home",
      "part_name": "home.pricing.tier3.price",
      "section_key": "home.pricing.tier3.price",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "<span class=\"fill-in-badge\">[FILL IN price]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_tier3_sub",
      "page": "Home",
      "part_name": "home.pricing.tier3.sub",
      "section_key": "home.pricing.tier3.sub",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "Video, website, and funnel together, plus ongoing ad management.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_pricing_note",
      "page": "Home",
      "part_name": "home.pricing.note",
      "section_key": "home.pricing.note",
      "page_name": "Home",
      "section_name": "pricing",
      "content": "*(Fill in real numbers — do not publish this section with placeholders live.)*",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_proof_heading",
      "page": "Home",
      "part_name": "home.proof.heading",
      "section_key": "home.proof.heading",
      "page_name": "Home",
      "section_name": "proof",
      "content": "High-Velocity Results for <em>Venture-Backed Products</em>",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_proof_body",
      "page": "Home",
      "part_name": "home.proof.body",
      "section_key": "home.proof.body",
      "page_name": "Home",
      "section_name": "proof",
      "content": "We don't have a wall of client logos yet. What we do have: the same person who talks to you today is the one checking your results next month. If that trade-off makes sense for where you're at, we'd like to be your first result.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_proof_btn",
      "page": "Home",
      "part_name": "home.proof.btn",
      "section_key": "home.proof.btn",
      "page_name": "Home",
      "section_name": "proof",
      "content": "Be our first result",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_proof_note",
      "page": "Home",
      "part_name": "home.proof.note",
      "section_key": "home.proof.note",
      "page_name": "Home",
      "section_name": "proof",
      "content": "*(Replace with a real result and remove this framing the moment you have one — see the testimonial note at the end of this document.)*",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_eyebrow",
      "page": "Home",
      "part_name": "home.faq.eyebrow",
      "section_key": "home.faq.eyebrow",
      "page_name": "Home",
      "section_name": "faq",
      "content": "Clear Answers",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_heading",
      "page": "Home",
      "part_name": "home.faq.heading",
      "section_key": "home.faq.heading",
      "page_name": "Home",
      "section_name": "faq",
      "content": "Frequently Asked Questions",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_q1",
      "page": "Home",
      "part_name": "home.faq.q1",
      "section_key": "home.faq.q1",
      "page_name": "Home",
      "section_name": "faq",
      "content": "What does this actually cost?",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_a1",
      "page": "Home",
      "part_name": "home.faq.a1",
      "section_key": "home.faq.a1",
      "page_name": "Home",
      "section_name": "faq",
      "content": "Depends on what you need — we'll give you a real number before you commit to anything.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_q2",
      "page": "Home",
      "part_name": "home.faq.q2",
      "section_key": "home.faq.q2",
      "page_name": "Home",
      "section_name": "faq",
      "content": "How fast can I actually be live?",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_a2",
      "page": "Home",
      "part_name": "home.faq.a2",
      "section_key": "home.faq.a2",
      "page_name": "Home",
      "section_name": "faq",
      "content": "<span class=\"fill-in-badge\">[FILL IN your real timeframes]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_q3",
      "page": "Home",
      "part_name": "home.faq.q3",
      "section_key": "home.faq.q3",
      "page_name": "Home",
      "section_name": "faq",
      "content": "Do I need a contract?",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_a3",
      "page": "Home",
      "part_name": "home.faq.a3",
      "section_key": "home.faq.a3",
      "page_name": "Home",
      "section_name": "faq",
      "content": "<span class=\"fill-in-badge\">[FILL IN your real policy]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_q4",
      "page": "Home",
      "part_name": "home.faq.q4",
      "section_key": "home.faq.q4",
      "page_name": "Home",
      "section_name": "faq",
      "content": "I already have a website or ads running — can you just fix what's there?",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_faq_a4",
      "page": "Home",
      "part_name": "home.faq.a4",
      "section_key": "home.faq.a4",
      "page_name": "Home",
      "section_name": "faq",
      "content": "Yes — we'll review what exists first and tell you honestly whether it needs a rebuild or just fixing.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_finalcta_heading",
      "page": "Home",
      "part_name": "home.finalcta.heading",
      "section_key": "home.finalcta.heading",
      "page_name": "Home",
      "section_name": "finalcta",
      "content": "Tell us what's not converting right now.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-home_finalcta_btn",
      "page": "Home",
      "part_name": "home.finalcta.btn",
      "section_key": "home.finalcta.btn",
      "page_name": "Home",
      "section_name": "finalcta",
      "content": "Start the conversation",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-footer_tagline",
      "page": "Home",
      "part_name": "footer.tagline",
      "section_key": "footer.tagline",
      "page_name": "Home",
      "section_name": "Footer",
      "content": "Marketing built to actually connect.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-footer_email",
      "page": "Home",
      "part_name": "footer.email",
      "section_key": "footer.email",
      "page_name": "Home",
      "section_name": "Footer",
      "content": "<span class=\"fill-in-badge\">[FILL IN your real email]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-footer_locations",
      "page": "Home",
      "part_name": "footer.locations",
      "section_key": "footer.locations",
      "page_name": "Home",
      "section_name": "Footer",
      "content": "Operating in America · India · Dubai",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-footer_copyright",
      "page": "Home",
      "part_name": "footer.copyright",
      "section_key": "footer.copyright",
      "page_name": "Home",
      "section_name": "Footer",
      "content": "&copy; 2026 Nairi Ventures. All rights reserved.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.358Z"
    },
    {
      "id": "pc-services_hero_eyebrow",
      "page": "Services",
      "part_name": "services.hero.eyebrow",
      "section_key": "services.hero.eyebrow",
      "page_name": "Services",
      "section_name": "hero",
      "content": "Studio Capabilities",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_hero_heading",
      "page": "Services",
      "part_name": "services.hero.heading",
      "section_key": "services.hero.heading",
      "page_name": "Services",
      "section_name": "hero",
      "content": "Marketing Built to Actually Connect",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_hero_subheading",
      "page": "Services",
      "part_name": "services.hero.subheading",
      "section_key": "services.hero.subheading",
      "page_name": "Services",
      "section_name": "hero",
      "content": "Three things. Built to work together, not sold separately. AI video production, high-conversion web development, and sales funnel infrastructure.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s1_title",
      "page": "Services",
      "part_name": "services.s1.title",
      "section_key": "services.s1.title",
      "page_name": "Services",
      "section_name": "s1",
      "content": "AI-Produced Video Ads",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s1_desc",
      "page": "Services",
      "part_name": "services.s1.desc",
      "section_key": "services.s1.desc",
      "page_name": "Services",
      "section_name": "s1",
      "content": "Scripted around your actual customer, AI-assisted production, human-finished before anything goes live.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s1_deliverables",
      "page": "Services",
      "part_name": "services.s1.deliverables",
      "section_key": "services.s1.deliverables",
      "page_name": "Services",
      "section_name": "s1",
      "content": "<span class=\"fill-in-badge\">[FILL IN — number]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s2_title",
      "page": "Services",
      "part_name": "services.s2.title",
      "section_key": "services.s2.title",
      "page_name": "Services",
      "section_name": "s2",
      "content": "Website Development",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s2_desc",
      "page": "Services",
      "part_name": "services.s2.desc",
      "section_key": "services.s2.desc",
      "page_name": "Services",
      "section_name": "s2",
      "content": "Built around action, not just appearance. Live in weeks.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s2_deliverables",
      "page": "Services",
      "part_name": "services.s2.deliverables",
      "section_key": "services.s2.deliverables",
      "page_name": "Services",
      "section_name": "s2",
      "content": "A site you own outright, not a template with a swapped logo.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s3_title",
      "page": "Services",
      "part_name": "services.s3.title",
      "section_key": "services.s3.title",
      "page_name": "Services",
      "section_name": "s3",
      "content": "Business Development & Sales Funnels",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s3_desc",
      "page": "Services",
      "part_name": "services.s3.desc",
      "section_key": "services.s3.desc",
      "page_name": "Services",
      "section_name": "s3",
      "content": "The connective tissue from click to close.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_s3_deliverables",
      "page": "Services",
      "part_name": "services.s3.deliverables",
      "section_key": "services.s3.deliverables",
      "page_name": "Services",
      "section_name": "s3",
      "content": "A mapped funnel built into the same system as your ads and site.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_cta_eyebrow",
      "page": "Services",
      "part_name": "services.cta.eyebrow",
      "section_key": "services.cta.eyebrow",
      "page_name": "Services",
      "section_name": "cta",
      "content": "Direct Consultation",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_cta_heading",
      "page": "Services",
      "part_name": "services.cta.heading",
      "section_key": "services.cta.heading",
      "page_name": "Services",
      "section_name": "cta",
      "content": "Not sure which you need?",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_cta_body",
      "page": "Services",
      "part_name": "services.cta.body",
      "section_key": "services.cta.body",
      "page_name": "Services",
      "section_name": "cta",
      "content": "Tell us what's happening in your business — we'll tell you honestly which to start with.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-services_cta_btn",
      "page": "Services",
      "part_name": "services.cta.btn",
      "section_key": "services.cta.btn",
      "page_name": "Services",
      "section_name": "cta",
      "content": "Start the conversation",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_hero_eyebrow",
      "page": "About",
      "part_name": "about.hero.eyebrow",
      "section_key": "about.hero.eyebrow",
      "page_name": "About",
      "section_name": "hero",
      "content": "Studio Origins",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_hero_heading",
      "page": "About",
      "part_name": "about.hero.heading",
      "section_key": "about.hero.heading",
      "page_name": "About",
      "section_name": "hero",
      "content": "Why a venture studio ended up doing marketing",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_story_body",
      "page": "About",
      "part_name": "about.story.body",
      "section_key": "about.story.body",
      "page_name": "About",
      "section_name": "story",
      "content": "Nairi is backed by a venture studio operating in America, India, and Dubai. Building other ventures kept surfacing the same problem: good businesses, real customers already, and marketing that was too slow, too expensive, or too disconnected to work. So this became one of the things we build — marketing the way we'd want it done for our own ventures. This isn't a freelancer working between other jobs — it's backed by a studio already running operations across three countries.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_stats_item1_num",
      "page": "About",
      "part_name": "about.stats.item1.num",
      "section_key": "about.stats.item1.num",
      "page_name": "About",
      "section_name": "stats",
      "content": "3",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_stats_item1_label",
      "page": "About",
      "part_name": "about.stats.item1.label",
      "section_key": "about.stats.item1.label",
      "page_name": "About",
      "section_name": "stats",
      "content": "Countries we operate in (America, India, Dubai)",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_stats_item2_num",
      "page": "About",
      "part_name": "about.stats.item2.num",
      "section_key": "about.stats.item2.num",
      "page_name": "About",
      "section_name": "stats",
      "content": "<span class=\"fill-in-badge\">[FILL IN]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_stats_item2_label",
      "page": "About",
      "part_name": "about.stats.item2.label",
      "section_key": "about.stats.item2.label",
      "page_name": "About",
      "section_name": "stats",
      "content": "Projects delivered so far",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_stats_item3_num",
      "page": "About",
      "part_name": "about.stats.item3.num",
      "section_key": "about.stats.item3.num",
      "page_name": "About",
      "section_name": "stats",
      "content": "1",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_stats_item3_label",
      "page": "About",
      "part_name": "about.stats.item3.label",
      "section_key": "about.stats.item3.label",
      "page_name": "About",
      "section_name": "stats",
      "content": "Point of contact, start to finish",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-about_cta_btn",
      "page": "About",
      "part_name": "about.cta.btn",
      "section_key": "about.cta.btn",
      "page_name": "About",
      "section_name": "cta",
      "content": "Start the conversation",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.359Z"
    },
    {
      "id": "pc-stories_hero_eyebrow",
      "page": "Case Studies",
      "part_name": "stories.hero.eyebrow",
      "section_key": "stories.hero.eyebrow",
      "page_name": "Case Studies",
      "section_name": "hero",
      "content": "Track Record & Proof",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-stories_hero_heading",
      "page": "Case Studies",
      "part_name": "stories.hero.heading",
      "section_key": "stories.hero.heading",
      "page_name": "Case Studies",
      "section_name": "hero",
      "content": "We're early — here's what that actually means for you",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-stories_hero_subheading",
      "page": "Case Studies",
      "part_name": "stories.hero.subheading",
      "section_key": "stories.hero.subheading",
      "page_name": "Case Studies",
      "section_name": "hero",
      "content": "No manufactured client logos. Just direct founder accountability and dedicated execution.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-stories_card_heading",
      "page": "Case Studies",
      "part_name": "stories.card.heading",
      "section_key": "stories.card.heading",
      "page_name": "Case Studies",
      "section_name": "card",
      "content": "We're early — here's what that actually means for you",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-stories_card_body",
      "page": "Case Studies",
      "part_name": "stories.card.body",
      "section_key": "stories.card.body",
      "page_name": "Case Studies",
      "section_name": "card",
      "content": "Being new means the person talking to you today is the same person on your account next month — not a name that changes as an agency scales past you. We don't hand your project off to junior interns, and your campaign gets our undivided focus because your growth becomes our signature case study.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-stories_card_btn",
      "page": "Case Studies",
      "part_name": "stories.card.btn",
      "section_key": "stories.card.btn",
      "page_name": "Case Studies",
      "section_name": "card",
      "content": "Be our first result",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-stories_card_note",
      "page": "Case Studies",
      "part_name": "stories.card.note",
      "section_key": "stories.card.note",
      "page_name": "Case Studies",
      "section_name": "card",
      "content": "*(Replace this entire page with real results — client type, what was done, what changed, over what timeframe — the moment you have your first one.)*",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-contact_hero_eyebrow",
      "page": "Contact",
      "part_name": "contact.hero.eyebrow",
      "section_key": "contact.hero.eyebrow",
      "page_name": "Contact",
      "section_name": "hero",
      "content": "Get In Touch",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-contact_hero_heading",
      "page": "Contact",
      "part_name": "contact.hero.heading",
      "section_key": "contact.hero.heading",
      "page_name": "Contact",
      "section_name": "hero",
      "content": "Say what's actually not working",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-contact_hero_subheading",
      "page": "Contact",
      "part_name": "contact.hero.subheading",
      "section_key": "contact.hero.subheading",
      "page_name": "Contact",
      "section_name": "hero",
      "content": "Tell us the real problem — we'll tell you honestly if we're the right fit.",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-contact_form_btn",
      "page": "Contact",
      "part_name": "contact.form.btn",
      "section_key": "contact.form.btn",
      "page_name": "Contact",
      "section_name": "form",
      "content": "Send it",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-contact_direct_line",
      "page": "Contact",
      "part_name": "contact.direct.line",
      "section_key": "contact.direct.line",
      "page_name": "Contact",
      "section_name": "direct",
      "content": "Direct line: Email <a href=\"mailto:team@nairiventures.com\" style=\"color: var(--color-amber); text-decoration: underline;\"><span class=\"fill-in-badge\">[FILL IN your real email]",
      "is_deleted": false,
      "updated_at": "2026-09-08T03:29:26.360Z"
    },
    {
      "id": "pc-site_ticker_text",
      "page": "Home",
      "part_name": "Header Studio Availability Ticker",
      "section_key": "site.ticker.text",
      "page_name": "Home",
      "section_name": "header",
      "content": "STUDIO AVAILABILITY: 2 Production Sprints Open for Q3 · 48h Turnaround Active · Next Intake: Monday",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.501Z"
    },
    {
      "id": "pc-home_clients_title",
      "page": "Home",
      "part_name": "Hero Client Ribbon Title",
      "section_key": "home.clients.title",
      "page_name": "Home",
      "section_name": "hero_clients",
      "content": "Trusted by High-Velocity Ventures:",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_clients_list",
      "page": "Home",
      "part_name": "Hero Client Partners List",
      "section_key": "home.clients.list",
      "page_name": "Home",
      "section_name": "hero_clients",
      "content": "<span class=\"client-name-pill\"><span class=\"client-dot\"></span>SwipeTouch</span>\n          <span class=\"client-name-pill\"><span class=\"client-dot\"></span>SwiftPay</span>\n          <span class=\"client-name-pill\"><span class=\"client-dot\"></span>Nexis AI</span>\n          <span class=\"client-name-pill\"><span class=\"client-dot\"></span>Zapit AI</span>\n          <span class=\"client-name-pill\"><span class=\"client-dot\"></span>TradePro</span>",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_split_heading",
      "page": "Home",
      "part_name": "Split Slider Heading",
      "section_key": "home.split.heading",
      "page_name": "Home",
      "section_name": "split_slider",
      "content": "Drag to Compare: <em>Generic Agency vs. Nairee Performance</em>",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_builder_heading",
      "page": "Home",
      "part_name": "Scope Builder Heading",
      "section_key": "home.builder.heading",
      "page_name": "Home",
      "section_name": "scope_builder",
      "content": "Build Your Custom <em>Production Sprint</em>",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_proof_swipetouch",
      "page": "Home",
      "part_name": "Client Quote: SwipeTouch",
      "section_key": "home.proof.swipetouch",
      "page_name": "Home",
      "section_name": "proof",
      "content": "“Nairee eliminated our creative fatigue entirely. Within 72 hours, we had 16 hook variations in flight on TikTok and Meta, resulting in our lowest blended CPA to date.”",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_proof_swiftpay",
      "page": "Home",
      "part_name": "Client Quote: SwiftPay",
      "section_key": "home.proof.swiftpay",
      "page_name": "Home",
      "section_name": "proof",
      "content": "“Other agencies wanted $12k and 6 weeks just to plan our fintech onboarding system. Nairee scripted, designed, and deployed our entire conversion pathway in under a week.”",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_proof_nexisai",
      "page": "Home",
      "part_name": "Client Quote: Nexis AI",
      "section_key": "home.proof.nexisai",
      "page_name": "Home",
      "section_name": "proof",
      "content": "“Their ability to take complex AI software and distill it into 30-second pattern-interrupting visual ads transformed our inbound sales calendar. Game-changer.”",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_proof_zapitai",
      "page": "Home",
      "part_name": "Client Quote: Zapit AI",
      "section_key": "home.proof.zapitai",
      "page_name": "Home",
      "section_name": "proof",
      "content": "“Direct founder communication and zero agency fluff. The website rebuild combined with direct-response video ads doubled our weekly booked demo volume.”",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_proof_tradepro",
      "page": "Home",
      "part_name": "Client Quote: TradePro",
      "section_key": "home.proof.tradepro",
      "page_name": "Home",
      "section_name": "proof",
      "content": "“When a campaign underperforms, Nairee has new hook angles and revised landing copy live before competitors even schedule their internal sync. That speed is invaluable.”",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    },
    {
      "id": "pc-home_teardown_title",
      "page": "Home",
      "part_name": "Teardown Intake Title",
      "section_key": "home.teardown.title",
      "page_name": "Home",
      "section_name": "final_cta",
      "content": "Want to see where your creative is leaking capital?",
      "is_deleted": false,
      "updated_at": "2026-09-10T04:19:56.502Z"
    }
  ],
  "ventures": [],
  "testimonials": [
    {
      "id": "test-swipetouch",
      "page": "index.html",
      "part_name": "SwipeTouch Growth Quote",
      "quote": "Nairee eliminated our creative fatigue entirely. Within 72 hours, we had 16 hook variations in flight on TikTok and Meta, resulting in our lowest blended CPA to date and a 3.4x hook rate jump.",
      "author_name": "Elena Rostova",
      "author_role": "Head of Growth, SwipeTouch",
      "is_approved": true,
      "is_deleted": false,
      "created_at": "2026-09-05T04:30:48.336Z"
    },
    {
      "id": "test-swiftpay",
      "page": "success-stories.html",
      "part_name": "SwiftPay Fintech Funnel Quote",
      "quote": "Other agencies wanted $12k and 6 weeks just to plan our fintech onboarding system. Nairee scripted, designed, and deployed our entire conversion pathway in under a week.",
      "author_name": "Devon Vance",
      "author_role": "VP Marketing, SwiftPay",
      "is_approved": true,
      "is_deleted": false,
      "created_at": "2026-09-06T04:30:48.336Z"
    },
    {
      "id": "test-nexis",
      "page": "index.html",
      "part_name": "Nexis AI Enterprise Campaign Quote",
      "quote": "Their ability to take complex AI software and distill it into 30-second pattern-interrupting visual ads transformed our inbound sales calendar with 40+ qualified pilot requests in month one.",
      "author_name": "Karan Mehta",
      "author_role": "Founding Engineer & Product Lead, Nexis AI",
      "is_approved": true,
      "is_deleted": false,
      "created_at": "2026-09-07T04:30:48.336Z"
    },
    {
      "id": "test-zapit",
      "page": "services.html",
      "part_name": "Zapit AI Performance Social Quote",
      "quote": "Direct founder communication and zero agency fluff. The website rebuild combined with direct-response video ads doubled our weekly booked demo volume and cut CAC by 41%.",
      "author_name": "Sarah Lindqvist",
      "author_role": "CMO, Zapit AI",
      "is_approved": true,
      "is_deleted": false,
      "created_at": "2026-09-08T04:30:48.336Z"
    },
    {
      "id": "test-tradepro",
      "page": "success-stories.html",
      "part_name": "TradePro High-Velocity Creative Quote",
      "quote": "When a campaign underperforms, Nairee has new hook angles and revised landing copy live before competitors even schedule their internal sync. That 48h speed is invaluable.",
      "author_name": "Liam Chen",
      "author_role": "Managing Director, TradePro Analytics",
      "is_approved": true,
      "is_deleted": false,
      "created_at": "2026-09-09T04:30:48.336Z"
    }
  ],
  "images": [
    {
      "id": "img-1",
      "page": "index.html",
      "part_name": "Homepage Hero Background",
      "element_key": "index.hero_bg",
      "url": "images/hero-bg.jpg",
      "type": "background",
      "alt": "Atmospheric Venture Studio Workspace"
    },
    {
      "id": "img-2",
      "page": "index.html",
      "part_name": "Homepage Story Founder Portrait",
      "element_key": "index.story_img",
      "url": "images/founder.jpg",
      "type": "image",
      "alt": "Nairi Ventures leadership in studio doorway"
    },
    {
      "id": "img-3",
      "page": "index.html",
      "part_name": "Studio Thesis Artwork",
      "element_key": "index.thesis_img",
      "url": "images/thesis.jpg",
      "type": "image",
      "alt": "Entrepreneurs reviewing plans together"
    },
    {
      "id": "img-4",
      "page": "index.html",
      "part_name": "Problem / Solution Visual",
      "element_key": "index.problem_img",
      "url": "images/problem.jpg",
      "type": "image",
      "alt": "Focused professional writing at desk"
    },
    {
      "id": "img-5",
      "page": "about.html",
      "part_name": "About Founder Portrait",
      "element_key": "about.founder_img",
      "url": "images/founder.jpg",
      "type": "image",
      "alt": "Founder standing in modern studio doorway"
    },
    {
      "id": "img-6",
      "page": "success-stories.html",
      "part_name": "Results Banner Texture",
      "element_key": "success.texture_img",
      "url": "images/success-texture.jpg",
      "type": "background",
      "alt": "Results texture grain"
    }
  ],
  "branding": {
    "id": "primary_branding",
    "logo_text": "Nairee Ventures",
    "logo_image": "images/WhatsApp_Image_2026-09-06_at_21.59.15.jpeg",
    "font_serif": "Fraunces",
    "font_sans": "Plus Jakarta Sans",
    "accent_color": "#E4A63A"
  },
  "videos": [
    {
      "id": "vid-1",
      "title": "SWIPETOUCH Hardware — From CAD to High-Precision Assembly Line",
      "category": "Hardware & Manufacturing",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "thumbnail_url": "images/problem.jpg",
      "description": "A behind-the-scenes walkthrough of precision tooling and tactile sensor calibration inside our production facility."
    },
    {
      "id": "vid-2",
      "title": "NEXIS AI Swarm — Autonomous Multi-Agent Systems in Production",
      "category": "AI Platform",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "thumbnail_url": "images/thesis.jpg",
      "description": "How our autonomous AI swarm framework handles live telemetry, distributed tasks, and enterprise workflows."
    },
    {
      "id": "vid-3",
      "title": "Cross-Border Operations — Building Across America, India & Dubai",
      "category": "Studio Thesis",
      "video_url": "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "thumbnail_url": "images/founder.jpg",
      "description": "Why establishing statutory multi-jurisdiction entities on day zero creates an insurmountable unfair advantage for our ventures."
    }
  ]
};

// Extend SEED_DATA with links, notes, leads, compliance if not present
SEED_DATA.links = SEED_DATA.links || [
  { id: 'lk-1', page: 'index.html', part_name: 'Hero Ventures Button', label: 'See our ventures', url: 'ventures.html', category: 'Navigation' },
  { id: 'lk-2', page: 'index.html', part_name: 'Thesis Learn More Button', label: 'Learn how we work', url: 'about.html', category: 'Navigation' },
  { id: 'lk-3', page: 'about.html', part_name: 'About CTA Button', label: 'See our ventures', url: 'ventures.html', category: 'Navigation' },
  { id: 'lk-4', page: 'ventures.html', part_name: 'SWIPETOUCH External Link', label: 'Visit SWIPETOUCH', url: 'https://swipetouch.io', category: 'Ventures' },
  { id: 'lk-5', page: 'ventures.html', part_name: 'FINARA External Link', label: 'Visit FINARA', url: 'https://finara.io', category: 'Ventures' },
  { id: 'lk-6', page: 'ventures.html', part_name: 'NEXIS External Link', label: 'Visit NEXIS', url: 'https://nexis.ai', category: 'Ventures' },
  { id: 'lk-7', page: 'success-stories.html', part_name: 'Success Stories CTA Button', label: 'Contact us', url: 'contact.html', category: 'Navigation' },
  { id: 'lk-8', page: 'contact.html', part_name: 'Calendly Booking Link', label: 'Book a Call', url: 'https://calendly.com', category: 'Booking' }
];

SEED_DATA.notes = SEED_DATA.notes || [
  { id: 'nt-1', page: 'index.html', part_name: 'Homepage Task', text: 'Review live stats numbers and editorial story copy', is_done: false },
  { id: 'nt-2', page: 'about.html', part_name: 'About Story Task', text: 'Update founder quote and multi-jurisdiction details', is_done: false },
  { id: 'nt-3', page: 'ventures.html', part_name: 'Ventures Task', text: 'Review SWIPETOUCH production tooling milestones', is_done: true },
  { id: 'nt-4', page: 'success-stories.html', part_name: 'Testimonials Task', text: 'Collect signed approval from industrial partners', is_done: false },
  { id: 'nt-5', page: 'contact.html', part_name: 'Inquiry Routing Task', text: 'Verify automated email routing for new leads', is_done: false },
  { id: 'nt-6', page: 'general', part_name: 'General Studio Task', text: 'Finalize annual statutory filings for America, India, and Dubai', is_done: false }
];

SEED_DATA.leads = SEED_DATA.leads || [
  {
    id: 'l-1',
    created_at: new Date(Date.now() - 86400000).toISOString(),
    name: 'Marcus Vance',
    email: 'm.vance@apexcap.com',
    venture_interest: 'NEXIS',
    message: 'Interested in enterprise agent orchestration for financial risk simulations.',
    status: 'New'
  }
];

SEED_DATA.compliance_deadlines = SEED_DATA.compliance_deadlines || [
  {
    id: 'c-1',
    country: 'Dubai (UAE)',
    task_description: 'Corporate Tax Registration & Annual Filing',
    due_date: new Date(Date.now() + 86400000 * 20).toISOString().split('T')[0],
    status: 'Upcoming'
  },
  {
    id: 'c-2',
    country: 'America (Delaware)',
    task_description: 'Delaware Annual Franchise Tax Report',
    due_date: new Date(Date.now() + 86400000 * 45).toISOString().split('T')[0],
    status: 'Upcoming'
  },
  {
    id: 'c-3',
    country: 'India',
    task_description: 'MCA Statutory Audit & ROC Annual Filing',
    due_date: new Date(Date.now() + 86400000 * 60).toISOString().split('T')[0],
    status: 'Upcoming'
  }
];

SEED_DATA.videos = SEED_DATA.videos || [
  {
    id: 'vid-1',
    title: 'SWIPETOUCH Hardware — From CAD to High-Precision Assembly Line',
    category: 'Hardware & Manufacturing',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'images/problem.jpg',
    description: 'A behind-the-scenes walkthrough of precision tooling and tactile sensor calibration inside our production facility.'
  },
  {
    id: 'vid-2',
    title: 'NEXIS AI Swarm — Autonomous Multi-Agent Systems in Production',
    category: 'AI Platform',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'images/thesis.jpg',
    description: 'How our autonomous AI swarm framework handles live telemetry, distributed tasks, and enterprise workflows.'
  },
  {
    id: 'vid-3',
    title: 'Cross-Border Operations — Building Across America, India & Dubai',
    category: 'Studio Thesis',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'images/founder.jpg',
    description: 'Why establishing statutory multi-jurisdiction entities on day zero creates an insurmountable unfair advantage for our ventures.'
  }
];

function getStore(key) {
  try {
    const raw = localStorage.getItem('nairi_db_' + key);
    if (!raw) {
      localStorage.setItem('nairi_db_' + key, JSON.stringify(SEED_DATA[key] || []));
      return SEED_DATA[key] || [];
    }
    return JSON.parse(raw);
  } catch (e) {
    return SEED_DATA[key] || [];
  }
}

function setStore(key, data) {
  try {
    localStorage.setItem('nairi_db_' + key, JSON.stringify(data));
    if (typeof BroadcastChannel !== 'undefined') {
      const ch = new BroadcastChannel('nairi_cms_sync');
      ch.postMessage({ type: 'REFRESH_CONTENT', key: key });
    }
  } catch (e) {
    console.error('Storage write error:', e);
  }
}

// Server API Sync Helper
async function syncToServer(endpoint, payload) {
  try {
    await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
  } catch (err) {
    // Falls back gracefully on static Netlify deployments
  }
}

// Supabase Cloud Sync Helpers & Schema Sanitizers
const TABLE_SCHEMAS = {
  branding: ['id', 'logo_text', 'logo_image', 'font_serif', 'font_sans', 'accent_color'],
  page_content: ['id', 'page', 'part_name', 'section_key', 'content', 'is_deleted'],
  images: ['id', 'page', 'part_name', 'element_key', 'url', 'alt', 'type'],
  videos: ['id', 'title', 'category', 'video_url', 'thumbnail_url', 'description', 'created_at'],
  testimonials: ['id', 'page', 'part_name', 'quote', 'author_name', 'author_role', 'is_approved', 'is_deleted', 'created_at'],
  links: ['id', 'page', 'part_name', 'label', 'url', 'category'],
  notes: ['id', 'page', 'part_name', 'text', 'is_done', 'created_at'],
  ventures: ['id', 'name', 'tag', 'description', 'external_url', 'image', 'status', 'display_order', 'next_milestone', 'owner', 'is_published', 'created_at'],
  leads: ['id', 'name', 'email', 'venture_interest', 'message', 'status', 'created_at'],
  compliance_deadlines: ['id', 'country', 'task_description', 'due_date', 'status']
};

function sanitizeForSupabase(table, rawRecord) {
  const allowed = TABLE_SCHEMAS[table];
  if (!allowed) return { ...rawRecord };
  const clean = {};

  // Table specific adjustments & aliases
  if (table === 'page_content') {
    if (!rawRecord.part_name) rawRecord.part_name = rawRecord.section_key || 'Content Part';
  } else if (table === 'images') {
    if (rawRecord.image_url && !rawRecord.url) rawRecord.url = rawRecord.image_url;
    if (!rawRecord.part_name) rawRecord.part_name = rawRecord.element_key || 'Image Slot';
  } else if (table === 'testimonials') {
    if (rawRecord.name && !rawRecord.author_name) rawRecord.author_name = rawRecord.name;
    if (rawRecord.role && !rawRecord.author_role) rawRecord.author_role = rawRecord.role;
    if (!rawRecord.author_name) rawRecord.author_name = 'Client';
    if (!rawRecord.quote) rawRecord.quote = '';
  } else if (table === 'videos') {
    if (!rawRecord.category) rawRecord.category = 'Video Production';
  }

  for (const col of allowed) {
    if (rawRecord[col] !== undefined) {
      clean[col] = rawRecord[col];
    }
  }
  return clean;
}

async function syncToSupabase(table, record, idField = 'id') {
  if (window.supabaseClient && window.isSupabaseConfigured && window.isSupabaseConfigured()) {
    try {
      const cleanRecord = sanitizeForSupabase(table, record);
      const { data, error } = await window.supabaseClient.from(table).upsert(cleanRecord, { onConflict: 'id' });
      if (error) {
        console.warn(`Supabase sync error (${table}):`, error);
        return { ok: false, error };
      }
      return { ok: true, data };
    } catch (e) {
      console.warn(`Supabase network error (${table}):`, e);
      return { ok: false, error: e };
    }
  }
  return { ok: true, offline: true };
}

async function deleteFromSupabase(table, id, idField = 'id') {
  if (window.supabaseClient && window.isSupabaseConfigured && window.isSupabaseConfigured()) {
    try {
      const { error } = await window.supabaseClient.from(table).delete().eq(idField, id);
      if (error) console.warn(`Supabase delete error (${table}):`, error);
    } catch (e) {
      console.warn(`Supabase network error (${table}):`, e);
    }
  }
}

async function fetchFromSupabase(table, select = '*') {
  if (window.supabaseClient && window.isSupabaseConfigured && window.isSupabaseConfigured()) {
    try {
      const { data, error } = await window.supabaseClient.from(table).select(select);
      if (!error && data && data.length) {
        return data;
      }
    } catch (e) {
      console.warn(`Supabase fetch error (${table}):`, e);
    }
  }
  return null;
}

function matchesPage(itemPage, filter) {
  if (!filter || filter === 'all') return true;
  if (!itemPage) return false;
  
  const norm = (s) => String(s).toLowerCase().replace(/[\s_\-\.]+/g, '').replace('html', '');
  const p = norm(itemPage);
  const f = norm(filter);
  
  if (p === f) return true;
  if ((p === 'home' || p === 'index') && (f === 'home' || f === 'index')) return true;
  if ((p === 'services' || p === 'ventures') && (f === 'services' || f === 'ventures')) return true;
  if ((p === 'casestudies' || p === 'successstories' || p === 'success') && (f === 'casestudies' || f === 'successstories' || f === 'success')) return true;
  if (p === 'contact' && f === 'contact') return true;
  if (p === 'about' && f === 'about') return true;
  
  return false;
}
window.matchesPage = matchesPage;

window.NairiDB = {
  // Helper for external consumers
  matchesPage,

  // --- Page Content ---
  async getPageContent(pageFilter = null) {
    try {
      const resp = await fetch('/api/cms-data');
      if (resp.ok) {
        const data = await resp.json();
        if (data && data.page_content && data.page_content.length) {
          setStore('page_content', data.page_content);
        }
      }
    } catch (e) {
      // Offline fallback
    }
    const remote = await fetchFromSupabase('page_content');
    if (remote && remote.length) {
      setStore('page_content', remote);
    }
    let list = getStore('page_content');
    if (!list || !list.length) {
      list = SEED_DATA.page_content || [];
      setStore('page_content', list);
    }
    if (pageFilter && pageFilter !== 'all') {
      list = list.filter(p => matchesPage(p.page, pageFilter));
    }
    return list;
  },

  async updateContentPart(id, newContent) {
    const list = getStore('page_content');
    const item = list.find(p => p.id === id);
    if (item) {
      item.content = newContent;
      item.is_deleted = false;
      setStore('page_content', list);
      syncToServer('/api/save-content', item);
      syncToSupabase('page_content', item, 'id');
    }
    return item;
  },

  async addContentPart(part) {
    const list = getStore('page_content');
    const existingIdx = list.findIndex(p => p.id === part.id || p.section_key === part.section_key);
    if (existingIdx >= 0) {
      list[existingIdx] = { ...list[existingIdx], ...part, is_deleted: false };
    } else {
      part.id = part.id || 'pc-' + Date.now();
      list.push(part);
    }
    setStore('page_content', list);
    syncToServer('/api/save-content', part);
    syncToSupabase('page_content', part, 'id');
    return part;
  },

  async deleteContentPart(id) {
    const list = getStore('page_content');
    const item = list.find(p => p.id === id);
    if (item) {
      item.is_deleted = true;
      item.content = '';
      setStore('page_content', list);
      syncToServer('/api/save-content', item);
      syncToSupabase('page_content', item, 'id');
    }
    return item;
  },

  // --- Images & Media ---
  async getImages(pageFilter = null) {
    const remote = await fetchFromSupabase('images');
    if (remote && remote.length) {
      setStore('images', remote);
    }
    let list = getStore('images');
    if (!list || !list.length) {
      list = SEED_DATA.images || [];
      setStore('images', list);
    }
    if (pageFilter && pageFilter !== 'all') {
      list = list.filter(img => matchesPage(img.page, pageFilter));
    }
    return list;
  },

  async saveImage(imgData) {
    let list = getStore('images');
    // Ensure url column is properly assigned
    imgData.url = imgData.url || imgData.image_url || '';
    imgData.part_name = imgData.part_name || imgData.element_key || 'Image Slot';
    const idx = list.findIndex(i => i.id === imgData.id || i.element_key === imgData.element_key);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...imgData };
    } else {
      imgData.id = imgData.id || 'img-' + Date.now();
      list.push(imgData);
    }
    setStore('images', list);
    syncToServer('/api/save-image', imgData);
    syncToSupabase('images', imgData, 'id');
    return list;
  },

  async getMediaLibrary() {
    try {
      const res = await fetch('/api/list-images');
      if (res.ok) {
        const data = await res.json();
        if (data.images && data.images.length) return data.images;
      }
    } catch (e) {}
    // Fallback library
    return [
      { filename: 'nairi-logo.svg', url: 'images/nairi-logo.svg' },
      { filename: 'nairi-logo-white.svg', url: 'images/nairi-logo-white.svg' },
      { filename: 'hero-bg.jpg', url: 'images/hero-bg.jpg' },
      { filename: 'founder.jpg', url: 'images/founder.jpg' },
      { filename: 'thesis.jpg', url: 'images/thesis.jpg' },
      { filename: 'problem.jpg', url: 'images/problem.jpg' },
      { filename: 'finara.jpg', url: 'images/finara.jpg' },
      { filename: 'nexis.jpg', url: 'images/nexis.jpg' },
      { filename: 'success-texture.jpg', url: 'images/success-texture.jpg' },
      { filename: 'global-hubs.svg', url: 'images/global-hubs.svg' }
    ];
  },

  async uploadImage(filename, base64Data) {
    try {
      const res = await fetch('/api/upload-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename, base64Data })
      });
      if (res.ok) {
        const json = await res.json();
        if (json && json.url) return json;
      }
    } catch (e) {}
    // Fail-safe for static hosting (Netlify, etc.):
    // Base64 data URLs work universally in browsers and persist directly in database & localStorage
    return { ok: true, url: base64Data, filename: filename };
  },

  // --- Branding (Logo & Fonts) ---
  async getBranding() {
    const remote = await fetchFromSupabase('branding');
    if (remote && remote.length) {
      setStore('branding', remote[0]);
    }
    let branding = getStore('branding');
    if (!branding || typeof branding !== 'object' || Array.isArray(branding)) {
      branding = SEED_DATA.branding || {
        logo_text: 'Nairee',
        logo_image: 'images/nairi-icon.svg',
        font_serif: 'Fraunces',
        font_sans: 'Plus Jakarta Sans',
        accent_color: '#E4A63A'
      };
      setStore('branding', branding);
    }
    return branding;
  },

  async saveBranding(brandingData) {
    let current = await this.getBranding();
    const updated = { ...current, ...brandingData, id: 'primary_branding' };
    setStore('branding', updated);
    syncToServer('/api/save-branding', updated);
    syncToSupabase('branding', updated, 'id');
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel('nairi_cms_sync');
        bc.postMessage({ type: 'REFRESH_CONTENT', branding: updated });
      } catch (e) {}
    }
    return updated;
  },

  // --- Testimonials ---
  async getTestimonials(pageFilter = null, onlyApproved = false) {
    try {
      const resp = await fetch('/api/cms-data');
      if (resp.ok) {
        const data = await resp.json();
        if (data && data.testimonials && data.testimonials.length) {
          setStore('testimonials', data.testimonials);
        }
      }
    } catch (e) {}

    const remote = await fetchFromSupabase('testimonials');
    if (remote && remote.length) {
      setStore('testimonials', remote);
    }
    let list = getStore('testimonials');
    if (!list || !list.length) {
      list = SEED_DATA.testimonials || [];
      setStore('testimonials', list);
    }
    if (pageFilter && pageFilter !== 'all') {
      list = list.filter(t => matchesPage(t.page, pageFilter));
    }
    if (onlyApproved) {
      list = list.filter(t => t.is_approved && !t.is_deleted);
    } else {
      list = list.filter(t => !t.is_deleted);
    }
    return list;
  },

  async saveTestimonial(t) {
    let list = getStore('testimonials') || [];
    const idx = list.findIndex(item => item.id === t.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...t, is_deleted: false };
    } else {
      t.id = t.id || 't-' + Date.now();
      t.created_at = t.created_at || new Date().toISOString();
      t.is_approved = t.is_approved !== undefined ? t.is_approved : true;
      t.is_deleted = false;
      list.unshift(t);
    }
    setStore('testimonials', list);
    await syncToServer('/api/save-testimonial', t);
    await syncToSupabase('testimonials', t, 'id');
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel('nairi_cms_sync');
        bc.postMessage({ type: 'REFRESH_CONTENT', key: 'testimonials' });
      } catch (e) {}
    }
    return list;
  },

  async deleteTestimonial(id) {
    let list = getStore('testimonials') || [];
    const item = list.find(t => t.id === id);
    if (item) item.is_deleted = true;
    list = list.filter(t => t.id !== id);
    setStore('testimonials', list);
    await syncToServer('/api/delete-testimonial', { id });
    await deleteFromSupabase('testimonials', id, 'id');
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel('nairi_cms_sync');
        bc.postMessage({ type: 'REFRESH_CONTENT', key: 'testimonials' });
      } catch (e) {}
    }
    return list;
  },

  // --- Links ---
  async getLinks(pageFilter = null) {
    const remote = await fetchFromSupabase('links');
    if (remote && remote.length) {
      setStore('links', remote);
    }
    let list = getStore('links');
    if (pageFilter && pageFilter !== 'all') {
      list = list.filter(l => matchesPage(l.page, pageFilter));
    }
    return list;
  },

  async saveLink(l) {
    const list = getStore('links');
    const idx = list.findIndex(item => item.id === l.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...l };
    } else {
      l.id = 'lk-' + Date.now();
      list.push(l);
    }
    setStore('links', list);
    syncToSupabase('links', l, 'id');
    return list;
  },

  async deleteLink(id) {
    let list = getStore('links');
    list = list.filter(l => l.id !== id);
    setStore('links', list);
    deleteFromSupabase('links', id, 'id');
    return list;
  },

  // --- Notes ---
  async getNotes(pageFilter = null) {
    const remote = await fetchFromSupabase('notes');
    if (remote && remote.length) {
      setStore('notes', remote);
    }
    let list = getStore('notes');
    if (pageFilter && pageFilter !== 'all') {
      list = list.filter(n => matchesPage(n.page, pageFilter));
    }
    return list.sort((a, b) => (a.is_done === b.is_done ? 0 : a.is_done ? 1 : -1));
  },

  async saveNote(n) {
    const list = getStore('notes');
    const idx = list.findIndex(item => item.id === n.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...n };
    } else {
      n.id = 'nt-' + Date.now();
      n.created_at = new Date().toISOString();
      n.is_done = false;
      list.unshift(n);
    }
    setStore('notes', list);
    syncToSupabase('notes', n, 'id');
    return list;
  },

  async toggleNote(id) {
    const list = getStore('notes');
    const note = list.find(n => n.id === id);
    if (note) {
      note.is_done = !note.is_done;
      syncToSupabase('notes', note, 'id');
    }
    setStore('notes', list);
    return list;
  },

  async deleteNote(id) {
    let list = getStore('notes');
    list = list.filter(n => n.id !== id);
    setStore('notes', list);
    deleteFromSupabase('notes', id, 'id');
    return list;
  },

  // --- Ventures ---
  async getVentures(onlyPublished = false) {
    const remote = await fetchFromSupabase('ventures');
    if (remote && remote.length) {
      setStore('ventures', remote);
    }
    let list = getStore('ventures');
    if (onlyPublished) list = list.filter(v => v.is_published);
    return list.sort((a, b) => (a.display_order || 0) - (b.display_order || 0));
  },

  async saveVenture(venture) {
    const list = getStore('ventures');
    const idx = list.findIndex(v => v.id === venture.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...venture };
    } else {
      venture.id = venture.id || 'v-' + Date.now();
      list.push(venture);
    }
    setStore('ventures', list);
    syncToServer('/api/save-venture', venture);
    syncToSupabase('ventures', venture, 'id');
    return list;
  },

  async deleteVenture(id) {
    let list = getStore('ventures');
    list = list.filter(v => v.id !== id);
    setStore('ventures', list);
    syncToServer('/api/delete-venture', { id });
    deleteFromSupabase('ventures', id, 'id');
    return list;
  },

  // --- Leads ---
  async getLeads() {
    try {
      const resp = await fetch('/api/leads');
      if (resp.ok) {
        const localLeads = await resp.json();
        if (Array.isArray(localLeads) && localLeads.length) {
          setStore('leads', localLeads);
        }
      }
    } catch (e) {}

    const remote = await fetchFromSupabase('leads');
    if (remote && remote.length) {
      setStore('leads', remote);
    }
    const list = getStore('leads');
    return list.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  },

  async addLead(lead) {
    lead.id = 'l-' + Date.now();
    lead.created_at = new Date().toISOString();
    lead.status = lead.status || 'New';
    const list = getStore('leads');
    list.unshift(lead);
    setStore('leads', list);

    // 1. Sync to local backend server
    try {
      syncToServer('/api/save-lead', lead);
    } catch (e) {}

    // 2. Await sync to Supabase Cloud
    try {
      await syncToSupabase('leads', lead, 'id');
    } catch (e) {
      console.warn('Supabase lead sync exception:', e);
    }

    return lead;
  },

  async updateLeadStatus(id, status) {
    const list = getStore('leads');
    const item = list.find(l => l.id === id);
    if (item) {
      item.status = status;
      try {
        syncToServer('/api/save-lead', item);
      } catch (e) {}
      await syncToSupabase('leads', item, 'id');
    }
    setStore('leads', list);
    return list;
  },

  // --- Compliance ---
  async getCompliance() {
    const remote = await fetchFromSupabase('compliance_deadlines');
    if (remote && remote.length) {
      setStore('compliance_deadlines', remote);
    }
    const list = getStore('compliance_deadlines');
    return list.sort((a, b) => new Date(a.due_date) - new Date(b.due_date));
  },

  async addCompliance(item) {
    item.id = 'c-' + Date.now();
    const list = getStore('compliance_deadlines');
    list.push(item);
    setStore('compliance_deadlines', list);
    syncToSupabase('compliance_deadlines', item, 'id');
    return list;
  },

  async updateComplianceStatus(id, status) {
    const list = getStore('compliance_deadlines');
    const item = list.find(c => c.id === id);
    if (item) {
      item.status = status;
      syncToSupabase('compliance_deadlines', item, 'id');
    }
    setStore('compliance_deadlines', list);
    return list;
  },

  async deleteCompliance(id) {
    let list = getStore('compliance_deadlines');
    list = list.filter(c => c.id !== id);
    setStore('compliance_deadlines', list);
    deleteFromSupabase('compliance_deadlines', id, 'id');
    return list;
  },

  // --- Videos (Owner / Admin Controlled) ---
  async getVideos() {
    const remote = await fetchFromSupabase('videos');
    if (remote && remote.length) {
      setStore('videos', remote);
    }
    return getStore('videos');
  },

  async saveVideo(v) {
    const list = getStore('videos');
    const idx = list.findIndex(item => item.id === v.id);
    if (idx >= 0) {
      list[idx] = { ...list[idx], ...v };
    } else {
      v.id = v.id || 'vid-' + Date.now();
      list.push(v);
    }
    setStore('videos', list);
    syncToServer('/api/save-video', v);
    syncToSupabase('videos', v, 'id');
    return list;
  },

  async deleteVideo(id) {
    let list = getStore('videos');
    list = list.filter(v => v.id !== id);
    setStore('videos', list);
    syncToServer('/api/delete-video', { id });
    deleteFromSupabase('videos', id, 'id');
    return list;
  },

  // --- Homepage Top Video Slot ---
  async getTopVideo() {
    const list = await this.getPageContent('Home');
    const getVal = (key, fallback = '') => {
      const item = list.find(p => p.section_key === key);
      return (item && item.content !== undefined) ? item.content : fallback;
    };
    return {
      url: getVal('home.top_video.url', ''),
      tag: getVal('home.top_video.tag', 'Featured Showcase'),
      title: getVal('home.top_video.title', 'See How Our AI Video & Funnel System Works'),
      desc: getVal('home.top_video.desc', 'Watch how we script, produce, and deploy high-converting video ads in days instead of months.'),
      poster: getVal('home.top_video.poster', '')
    };
  },

  async saveTopVideo(data) {
    const keys = [
      { key: 'home.top_video.url', val: data.url || '', name: 'Top Video URL' },
      { key: 'home.top_video.tag', val: data.tag || 'Featured Showcase', name: 'Top Video Tag' },
      { key: 'home.top_video.title', val: data.title || 'See How Our AI Video & Funnel System Works', name: 'Top Video Title' },
      { key: 'home.top_video.desc', val: data.desc || '', name: 'Top Video Description' },
      { key: 'home.top_video.poster', val: data.poster || '', name: 'Top Video Poster' }
    ];

    for (const k of keys) {
      await this.addContentPart({
        id: `pc-${k.key.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
        page: 'Home',
        part_name: k.name,
        section_key: k.key,
        content: k.val,
        is_deleted: false
      });
    }

    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel('nairi_cms_sync');
        bc.postMessage({ type: 'REFRESH_CONTENT' });
      } catch (e) {}
    }
  },

  // --- Homepage Hero 3-Video 9:16 Seamless Triptych Reels ---
  async getHeroReels() {
    const list = await this.getPageContent('Home');
    const getVal = (key, fallback = '') => {
      const item = list.find(p => p.section_key === key);
      return (item && item.content !== undefined && item.content !== '') ? item.content : fallback;
    };
    return {
      reel1: getVal('home.hero_reel_1.url', 'videos/hero-reel-1.mp4'),
      reel2: getVal('home.hero_reel_2.url', 'videos/hero-reel-2.mp4'),
      reel3: getVal('home.hero_reel_3.url', 'videos/hero-reel-3.mp4')
    };
  },

  async saveHeroReels(data) {
    const keys = [
      { key: 'home.hero_reel_1.url', val: data.reel1 || 'videos/hero-reel-1.mp4', name: 'Hero Reel 1 (Left 9:16 Video)' },
      { key: 'home.hero_reel_2.url', val: data.reel2 || 'videos/hero-reel-2.mp4', name: 'Hero Reel 2 (Center 9:16 Video)' },
      { key: 'home.hero_reel_3.url', val: data.reel3 || 'videos/hero-reel-3.mp4', name: 'Hero Reel 3 (Right 9:16 Video)' }
    ];

    for (const k of keys) {
      await this.addContentPart({
        id: `pc-${k.key.replace(/[^a-zA-Z0-9_-]/g, '_')}`,
        page: 'Home',
        part_name: k.name,
        section_key: k.key,
        content: k.val,
        is_deleted: false
      });
    }

    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel('nairi_cms_sync');
        bc.postMessage({ type: 'REFRESH_CONTENT' });
      } catch (e) {}
    }
  },

  // --- Studio Availability & Client Partners ---
  async getStudioStatus() {
    const list = await this.getPageContent('all');
    const getVal = (key, fallback = '') => {
      const item = list.find(p => p.section_key === key);
      return (item && item.content !== undefined && item.content !== '') ? item.content : fallback;
    };
    return {
      ticker: getVal('site.ticker.text', 'STUDIO AVAILABILITY: 2 Production Sprints Open for Q3 · 48h Turnaround Active · Next Intake: Monday'),
      clients: getVal('home.clients.list', 'SwipeTouch, SwiftPay, Nexis AI, Zapit AI, TradePro')
    };
  },

  async saveStudioStatus(data) {
    if (data.ticker !== undefined) {
      await this.addContentPart({
        id: 'pc-site_ticker_text',
        page: 'Home',
        part_name: 'Studio Availability Header Ticker',
        section_key: 'site.ticker.text',
        content: data.ticker,
        is_deleted: false
      });
    }
    if (data.clients !== undefined) {
      const clientNames = (Array.isArray(data.clients) ? data.clients : String(data.clients).split(','))
        .map(c => c.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
      const htmlPills = clientNames.map(c => `<span class="client-name-pill"><span class="client-dot"></span>${c}</span>`).join('\n          ');

      await this.addContentPart({
        id: 'pc-home_clients_list',
        page: 'Home',
        part_name: 'Hero Client Partners Ribbon List',
        section_key: 'home.clients.list',
        content: htmlPills,
        is_deleted: false
      });
    }
    if (typeof BroadcastChannel !== 'undefined') {
      try {
        const bc = new BroadcastChannel('nairi_cms_sync');
        bc.postMessage({ type: 'REFRESH_CONTENT' });
      } catch (e) {}
    }
  },

  // Compatibility Aliases
  getContent(page) {
    return this.getPageContent(page);
  },
  saveContent(part) {
    return this.addContentPart(part);
  },
  saveImageSlot(img) {
    return this.saveImage(img);
  }
};
