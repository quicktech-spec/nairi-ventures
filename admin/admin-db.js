/**
 * NAIRI VENTURES · UNIVERSAL DATA ACCESS & DUAL-LAYER CMS ENGINE (v5.0)
 * Manages content parts, images, branding (logo & fonts), ventures, testimonials, links, and notes.
 * Synchronizes with local disk files via API, local storage, and broadcast channel.
 */

const SEED_DATA = {
  "page_content": [
    {
      "id": "pc-brand_footer_name",
      "page": "Home",
      "part_name": "Footer Brand Wordmark / Subtext",
      "section_key": "brand.footer_name",
      "section_group": "Footer & Company Info",
      "content": "<span class=\"text-sky-400\">Ventures</span>",
      "is_deleted": false,
      "updated_at": "2026-09-14T06:07:45.742Z"
    },
    {
      "id": "pc-nav_cta",
      "page": "Home",
      "part_name": "Header Navigation CTA Button",
      "section_key": "nav.cta",
      "section_group": "Header & Branding",
      "content": "Book Strategy Session →",
      "is_deleted": false,
      "updated_at": "2026-09-14T06:07:45.742Z"
    },
    {
      "id": "pc-brand_name",
      "page": "Home",
      "part_name": "Header Brand Wordmark / Subtext",
      "section_key": "brand.name",
      "section_group": "Header & Branding",
      "content": "",
      "is_deleted": true,
      "updated_at": "2026-09-14T06:07:45.742Z"
    },
    {
      "id": "pc-hero_slogan",
      "page": "Home",
      "part_name": "Hero Slogan Headline",
      "section_key": "hero.slogan",
      "section_group": "Hero Section",
      "content": "<span class=\"block overflow-hidden pb-1\"><span class=\"block\" style=\"transform: none;\">You Direct the <span class=\"text-sky-600\">Vision.</span></span></span><span class=\"block overflow-hidden pb-1\"><span class=\"block\" style=\"transform: none;\">We Execute the <span class=\"text-sky-600\">Engine.</span></span></span>",
      "is_deleted": false,
      "updated_at": "2026-09-14T04:08:32.968Z"
    },
    {
      "id": "pc-hero_subtext",
      "page": "Home",
      "part_name": "Hero Subtext Description",
      "section_key": "hero.subtext",
      "section_group": "Hero Section",
      "content": "From AI personalized video campaigns mapped to your customer segments, to full stack finance, capital advisory and end to end operations, one integrated execution engine for India's most ambitious founders.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_cta_primary",
      "page": "Home",
      "part_name": "Hero Primary Button Text",
      "section_key": "hero.cta_primary",
      "section_group": "Hero Section",
      "content": "Request Growth Diagnostic<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"lucide lucide-arrow-right ml-1.5 h-3.5 w-3.5\" aria-hidden=\"true\"><path d=\"M5 12h14\"></path><path d=\"m12 5 7 7-7 7\"></path></svg>",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_cta_secondary",
      "page": "Home",
      "part_name": "Hero Secondary Button Text",
      "section_key": "hero.cta_secondary",
      "section_group": "Hero Section",
      "content": "Explore the 3 Tiers",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_tier_switcher_desc",
      "page": "Home",
      "part_name": "Hero Modular Tier Switcher Subtext",
      "section_key": "hero.tier_switcher_desc",
      "section_group": "Hero Section",
      "content": "AI generated video ads and creatives mapped to your customer clusters: websites, social profiles and ad ops included.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_pill_roas_val",
      "page": "Home",
      "part_name": "Hero Floating Pill 1 (Value)",
      "section_key": "hero.pill_roas_val",
      "section_group": "Hero Section",
      "content": "",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_pill_roas_label",
      "page": "Home",
      "part_name": "Hero Floating Pill 1 (Label)",
      "section_key": "hero.pill_roas_label",
      "section_group": "Hero Section",
      "content": "",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_pill_pod_val",
      "page": "Home",
      "part_name": "Hero Floating Pill 2 (Value)",
      "section_key": "hero.pill_pod_val",
      "section_group": "Hero Section",
      "content": "",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_pill_pod_label",
      "page": "Home",
      "part_name": "Hero Floating Pill 2 (Label)",
      "section_key": "hero.pill_pod_label",
      "section_group": "Hero Section",
      "content": "",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_metric_0_val",
      "page": "Home",
      "part_name": "Hero Metric 1 Value",
      "section_key": "hero.metric_0_val",
      "section_group": "Hero Section",
      "content": "₹120Cr+",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_metric_0_label",
      "page": "Home",
      "part_name": "Hero Metric 1 Label",
      "section_key": "hero.metric_0_label",
      "section_group": "Hero Section",
      "content": "Partner revenue managed",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_metric_1_val",
      "page": "Home",
      "part_name": "Hero Metric 2 Value",
      "section_key": "hero.metric_1_val",
      "section_group": "Hero Section",
      "content": "4.2x",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_metric_1_label",
      "page": "Home",
      "part_name": "Hero Metric 2 Label",
      "section_key": "hero.metric_1_label",
      "section_group": "Hero Section",
      "content": "Average campaign ROAS",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_metric_2_val",
      "page": "Home",
      "part_name": "Hero Metric 3 Value",
      "section_key": "hero.metric_2_val",
      "section_group": "Hero Section",
      "content": "14 days",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-hero_metric_2_label",
      "page": "Home",
      "part_name": "Hero Metric 3 Label",
      "section_key": "hero.metric_2_label",
      "section_group": "Hero Section",
      "content": "Pod deployment time",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_heading",
      "page": "Home",
      "part_name": "Bottlenecks Main Heading",
      "section_key": "bottlenecks.heading",
      "section_group": "Founder Bottlenecks",
      "content": "Three bottlenecks tax every Indian founder's ambition.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_subheading",
      "page": "Home",
      "part_name": "Bottlenecks Subheading",
      "section_key": "bottlenecks.subheading",
      "section_group": "Founder Bottlenecks",
      "content": "We have sat across the table from hundreds of founders. The story is almost always the same, and it is fixable.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_01_title",
      "page": "Home",
      "part_name": "Bottleneck 01 Title",
      "section_key": "bottlenecks.01.title",
      "section_group": "Founder Bottlenecks",
      "content": "Marketing Scatter & Generic Creative Burnout",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_01_bottleneck",
      "page": "Home",
      "part_name": "Bottleneck 01 Challenge",
      "section_key": "bottlenecks.01.bottleneck",
      "section_group": "Founder Bottlenecks",
      "content": "Founders burn ad budgets on blanket creatives that fail to speak directly to differentiated customer segments and buyer personas.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_01_answer",
      "page": "Home",
      "part_name": "Bottleneck 01 Nairee Answer",
      "section_key": "bottlenecks.01.answer",
      "section_group": "Founder Bottlenecks",
      "content": "Nairee builds AI generated personalized video ads and tailor made copy mapped dynamically to discrete customer clusters.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_02_title",
      "page": "Home",
      "part_name": "Bottleneck 02 Title",
      "section_key": "bottlenecks.02.title",
      "section_group": "Founder Bottlenecks",
      "content": "Financial Blindspots & Fragmented Cash Flows",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_02_bottleneck",
      "page": "Home",
      "part_name": "Bottleneck 02 Challenge",
      "section_key": "bottlenecks.02.bottleneck",
      "section_group": "Founder Bottlenecks",
      "content": "High revenue hides poor cash flow timing, messy tax compliance and unprepared books when it is time to raise venture debt or equity.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_02_answer",
      "page": "Home",
      "part_name": "Bottleneck 02 Nairee Answer",
      "section_key": "bottlenecks.02.answer",
      "section_group": "Founder Bottlenecks",
      "content": "Dedicated financial analytics, automated runway modeling, capital raising advisory and complete company registration & tax management.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_03_title",
      "page": "Home",
      "part_name": "Bottleneck 03 Title",
      "section_key": "bottlenecks.03.title",
      "section_group": "Founder Bottlenecks",
      "content": "The Execution Trap: Founder Playing 10 Roles",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_03_bottleneck",
      "page": "Home",
      "part_name": "Bottleneck 03 Challenge",
      "section_key": "bottlenecks.03.bottleneck",
      "section_group": "Founder Bottlenecks",
      "content": "The founder is buried in marketing ops, bookkeeping, vendor calls and hiring firefights instead of steering strategic growth.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-bottlenecks_03_answer",
      "page": "Home",
      "part_name": "Bottleneck 03 Nairee Answer",
      "section_key": "bottlenecks.03.answer",
      "section_group": "Founder Bottlenecks",
      "content": "Management as a Service: Nairee acts as your dedicated operating arm across marketing, finance, sales and execution.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tiers_heading",
      "page": "Home",
      "part_name": "Tiers Main Heading",
      "section_key": "tiers.heading",
      "section_group": "3 Tier Solutions",
      "content": "Three tiers. One engine. Engage them together, or decouple what you need.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tiers_decoupling_text",
      "page": "Home",
      "part_name": "Tiers Modular Banner Text",
      "section_key": "tiers.decoupling_text",
      "section_group": "3 Tier Solutions",
      "content": "<span class=\"font-semibold text-ink\">Every tier is modular.</span> Engage us for standalone AI marketing, add finance & capital analytics as you scale, or activate the full Management as a Service engine.",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_01_title",
      "page": "Home",
      "part_name": "Tier 1 Title",
      "section_key": "tier.01.title",
      "section_group": "3 Tier Solutions",
      "content": "Marketing Strategy & Dynamic Creative Execution",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_01_highlight",
      "page": "Home",
      "part_name": "Tier 1 Highlight Banner",
      "section_key": "tier.01.highlight",
      "section_group": "3 Tier Solutions",
      "content": "Creative variants tested 6x faster with automated audience mapping.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_01_cta",
      "page": "Home",
      "part_name": "Tier 1 Button CTA",
      "section_key": "tier.01.cta",
      "section_group": "3 Tier Solutions",
      "content": "Start With TIER 01",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_02_title",
      "page": "Home",
      "part_name": "Tier 2 Title",
      "section_key": "tier.02.title",
      "section_group": "3 Tier Solutions",
      "content": "Finance, Accounting & Capital Advisory",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_02_highlight",
      "page": "Home",
      "part_name": "Tier 2 Highlight Banner",
      "section_key": "tier.02.highlight",
      "section_group": "3 Tier Solutions",
      "content": "Clean books and actionable metrics that institutional investors respect.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_02_cta",
      "page": "Home",
      "part_name": "Tier 2 Button CTA",
      "section_key": "tier.02.cta",
      "section_group": "3 Tier Solutions",
      "content": "Start With TIER 02",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_03_title",
      "page": "Home",
      "part_name": "Tier 3 Title",
      "section_key": "tier.03.title",
      "section_group": "3 Tier Solutions",
      "content": "Management as a Service (MaaS)",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_03_highlight",
      "page": "Home",
      "part_name": "Tier 3 Highlight Banner",
      "section_key": "tier.03.highlight",
      "section_group": "3 Tier Solutions",
      "content": "Zero operational friction: focus 100% on high level strategic direction.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-tier_03_cta",
      "page": "Home",
      "part_name": "Tier 3 Button CTA",
      "section_key": "tier.03.cta",
      "section_group": "3 Tier Solutions",
      "content": "Start With TIER 03",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-calc_heading",
      "page": "Home",
      "part_name": "Calculator Main Heading",
      "section_key": "calc.heading",
      "section_group": "Growth Calculator",
      "content": "Configure your execution stack.",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-calc_desc",
      "page": "Home",
      "part_name": "Calculator Description",
      "section_key": "calc.desc",
      "section_group": "Growth Calculator",
      "content": "Toggle the tiers you need and see how fast a Nairee pod deploys, and what you save against building the same capability in house. Combine all three for a bundle advantage.",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-calc_stat_0_label",
      "page": "Home",
      "part_name": "Calculator Metric 1 Label",
      "section_key": "calc.stat_0_label",
      "section_group": "Growth Calculator",
      "content": "Pod deployment window",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-calc_stat_1_label",
      "page": "Home",
      "part_name": "Calculator Metric 2 Label",
      "section_key": "calc.stat_1_label",
      "section_group": "Growth Calculator",
      "content": "In house roles replaced",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-calc_stat_2_label",
      "page": "Home",
      "part_name": "Calculator Metric 3 Label",
      "section_key": "calc.stat_2_label",
      "section_group": "Growth Calculator",
      "content": "Estimated savings vs in house",
      "is_deleted": true,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_heading",
      "page": "Home",
      "part_name": "Team Section Heading",
      "section_key": "team.heading",
      "section_group": "Leadership Team",
      "content": "Operators, strategists and builders, not consultants who vanish after a deck.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_subheading",
      "page": "Home",
      "part_name": "Team Section Subheading",
      "section_key": "team.subheading",
      "section_group": "Leadership Team",
      "content": "Authentic Indian business operators, financial strategists and AI marketing veterans dedicated to scaling partner enterprises.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_0_name",
      "page": "Home",
      "part_name": "Team Member 1 Name",
      "section_key": "team.0.name",
      "section_group": "Leadership Team",
      "content": "Ananya Sharma",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_0_role",
      "page": "Home",
      "part_name": "Team Member 1 Role",
      "section_key": "team.0.role",
      "section_group": "Leadership Team",
      "content": "Head of AI Marketing & Video Intelligence",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_0_bio",
      "page": "Home",
      "part_name": "Team Member 1 Bio",
      "section_key": "team.0.bio",
      "section_group": "Leadership Team",
      "content": "Ex growth lead. Specializes in AI synthesized video ads and dynamic customer segmentation engines.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_1_name",
      "page": "Home",
      "part_name": "Team Member 2 Name",
      "section_key": "team.1.name",
      "section_group": "Leadership Team",
      "content": "Vikramaditya Roy",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_1_role",
      "page": "Home",
      "part_name": "Team Member 2 Role",
      "section_key": "team.1.role",
      "section_group": "Leadership Team",
      "content": "Partner · Financial Analytics & Capital Strategy",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_1_bio",
      "page": "Home",
      "part_name": "Team Member 2 Bio",
      "section_key": "team.1.bio",
      "section_group": "Leadership Team",
      "content": "Chartered Accountant & VC advisor. Manages cash flow diagnostics, tax advisory and fundraising pipelines.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_2_name",
      "page": "Home",
      "part_name": "Team Member 3 Name",
      "section_key": "team.2.name",
      "section_group": "Leadership Team",
      "content": "Rohan Deshmukh",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_2_role",
      "page": "Home",
      "part_name": "Team Member 3 Role",
      "section_key": "team.2.role",
      "section_group": "Leadership Team",
      "content": "VP · Management as a Service (MaaS)",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_2_bio",
      "page": "Home",
      "part_name": "Team Member 3 Bio",
      "section_key": "team.2.bio",
      "section_group": "Leadership Team",
      "content": "Operations veteran who builds dedicated execution pods, letting founders focus purely on CEO level steering.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_3_name",
      "page": "Home",
      "part_name": "Team Member 4 Name",
      "section_key": "team.3.name",
      "section_group": "Leadership Team",
      "content": "Karthik Subramanian",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_3_role",
      "page": "Home",
      "part_name": "Team Member 4 Role",
      "section_key": "team.3.role",
      "section_group": "Leadership Team",
      "content": "Principal Systems & Web Architect",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-team_3_bio",
      "page": "Home",
      "part_name": "Team Member 4 Bio",
      "section_key": "team.3.bio",
      "section_group": "Leadership Team",
      "content": "Designs high converting digital storefronts, modern web apps and automated omnichannel ad pipelines.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-lead_heading",
      "page": "Home",
      "part_name": "Lead Form Main Heading",
      "section_key": "lead.heading",
      "section_group": "Lead Intake Form",
      "content": "Tell us where it hurts. We will bring the operating plan.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-lead_subheading",
      "page": "Home",
      "part_name": "Lead Form Subheading",
      "section_key": "lead.subheading",
      "section_group": "Lead Intake Form",
      "content": "Share a few details about your venture and the bottleneck slowing you down. Our strategy desk reviews every request personally and responds with a growth diagnostic and a tier recommendation, usually within one business day.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-lead_point_0",
      "page": "Home",
      "part_name": "Lead Commitment 1",
      "section_key": "lead.point_0",
      "section_group": "Lead Intake Form",
      "content": "No retainers discussed before a real diagnosis.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-lead_point_1",
      "page": "Home",
      "part_name": "Lead Commitment 2",
      "section_key": "lead.point_1",
      "section_group": "Lead Intake Form",
      "content": "Decoupled tiers: start with only what you need.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-lead_point_2",
      "page": "Home",
      "part_name": "Lead Commitment 3",
      "section_key": "lead.point_2",
      "section_group": "Lead Intake Form",
      "content": "Your details stay between you and our partners.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-footer_statement",
      "page": "Home",
      "part_name": "Footer Brand Statement",
      "section_key": "footer.statement",
      "section_group": "Footer & Company Info",
      "content": "Building India's next <span class=\"text-sky-400\">market leaders.</span>",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-footer_bio",
      "page": "Home",
      "part_name": "Footer Studio Bio",
      "section_key": "footer.bio",
      "section_group": "Footer & Company Info",
      "content": "Marketing, finance and full stack management execution for visionary Indian enterprises.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-footer_email",
      "page": "Home",
      "part_name": "Footer Contact Email",
      "section_key": "footer.email",
      "section_group": "Footer & Company Info",
      "content": "hello@naireeventures.in",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-footer_location",
      "page": "Home",
      "part_name": "Footer Studio Location",
      "section_key": "footer.location",
      "section_group": "Footer & Company Info",
      "content": "Bengaluru · Mumbai, India",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "pc-footer_copyright",
      "page": "Home",
      "part_name": "Footer Copyright",
      "section_key": "footer.copyright",
      "section_group": "Footer & Company Info",
      "content": "© 2026 Nairee Ventures. All rights reserved.",
      "is_deleted": false,
      "updated_at": "2026-09-13T04:07:15.913Z"
    }
  ],
  "images": [
    {
      "id": "img-brand_header_logo",
      "page": "Home",
      "element_key": "brand.header_logo",
      "part_name": "Header Brand Logo (Dark/Navy)",
      "section_group": "Header & Branding",
      "url": "images/nairee-logo-navy-sky.png",
      "alt": "Nairee Ventures Header Logo",
      "updated_at": "2026-09-14T06:07:45.742Z"
    },
    {
      "id": "img-hero_image",
      "page": "Home",
      "element_key": "hero.image",
      "part_name": "Hero Executive Collaboration Photo",
      "section_group": "Hero Section",
      "url": "https://images.unsplash.com/photo-1781246212288-7fa538344718?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHRlYW0lMjBtZWV0aW5nJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3ODkxODIxNDN8MA&ixlib=rb-4.1.0&q=85",
      "alt": "Indian strategy collective collaborating in an executive session",
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "img-team_photo_0",
      "page": "Home",
      "element_key": "team.photo_0",
      "part_name": "Team Photo: Ananya Sharma",
      "section_group": "Leadership Team",
      "url": "https://images.unsplash.com/photo-1637589267610-6c66fc2a086b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzJ8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMHByb2Zlc3Npb25hbCUyMGNvcnBvcmF0ZXxlbnwwfHx8fDE3ODkxODIxNTF8MA&ixlib=rb-4.1.0&q=85",
      "alt": "Ananya Sharma · Head of AI Marketing & Video Intelligence",
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "img-team_photo_1",
      "page": "Home",
      "element_key": "team.photo_1",
      "part_name": "Team Photo: Vikramaditya Roy",
      "section_group": "Leadership Team",
      "url": "https://images.unsplash.com/photo-1787724779241-cb5c250ed70b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwwfHx8fDE3ODkxODIxNTF8MA&ixlib=rb-4.1.0&q=85",
      "alt": "Vikramaditya Roy · Partner, Financial Analytics & Capital Strategy",
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "img-team_photo_2",
      "page": "Home",
      "element_key": "team.photo_2",
      "part_name": "Team Photo: Rohan Deshmukh",
      "section_group": "Leadership Team",
      "url": "https://images.unsplash.com/photo-1589386417686-0d34b5903d23?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwwfHx8fDE3ODkxODIxNTF8MA&ixlib=rb-4.1.0&q=85",
      "alt": "Rohan Deshmukh · VP, Management as a Service (MaaS)",
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "img-team_photo_3",
      "page": "Home",
      "element_key": "team.photo_3",
      "part_name": "Team Photo: Karthik Subramanian",
      "section_group": "Leadership Team",
      "url": "https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0JTIwc21pbGluZ3xlbnwwfHx8fDE3ODkxODIxNTF8MA&ixlib=rb-4.1.0&q=85",
      "alt": "Karthik Subramanian · Principal Systems & Web Architect",
      "updated_at": "2026-09-13T04:07:15.913Z"
    },
    {
      "id": "img-brand_footer_logo",
      "page": "Home",
      "element_key": "brand.footer_logo",
      "part_name": "Footer Brand Logo (Light/White)",
      "section_group": "Footer & Company Info",
      "url": "images/nairee-logo-white-sky.png",
      "alt": "Nairee Ventures Footer Logo",
      "updated_at": "2026-09-14T06:07:45.742Z"
    }
  ],
  "branding": {
    "logo_text": "Nairee Ventures",
    "logo_image": "images/nairee-logo-navy-sky.png",
    "font_heading": "Fraunces",
    "font_subheading": "General Sans",
    "font_body": "General Sans",
    "font_mono": "JetBrains Mono",
    "accent_color": "#0284C7"
  },
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
      "page": "index.html",
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
      "page": "index.html",
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
      "page": "index.html",
      "part_name": "TradePro High-Velocity Creative Quote",
      "quote": "When a campaign underperforms, Nairee has new hook angles and revised landing copy live before competitors even schedule their internal sync. That 48h speed is invaluable.",
      "author_name": "Liam Chen",
      "author_role": "Managing Director, TradePro Analytics",
      "is_approved": true,
      "is_deleted": false,
      "created_at": "2026-09-09T04:30:48.336Z"
    }
  ]
};

// Extend SEED_DATA with links, notes, leads, compliance if not present (Main Website Only)
SEED_DATA.links = SEED_DATA.links || [
  { id: 'lk-1', page: 'index.html', part_name: 'Hero CTA Button', label: 'Book Diagnostic', url: '#lead', category: 'Navigation' },
  { id: 'lk-2', page: 'index.html', part_name: 'Solutions Section Link', label: 'Explore Solutions', url: '#tiers', category: 'Navigation' },
  { id: 'lk-3', page: 'index.html', part_name: 'Problems Section Link', label: 'Founder Bottlenecks', url: '#problems', category: 'Navigation' },
  { id: 'lk-4', page: 'index.html', part_name: 'Team Section Link', label: 'Leadership Team', url: '#team', category: 'Navigation' },
  { id: 'lk-5', page: 'index.html', part_name: 'Calendly Booking Link', label: 'Book a Call', url: 'https://calendly.com', category: 'Booking' }
];

SEED_DATA.notes = SEED_DATA.notes || [
  { id: 'nt-1', page: 'index.html', part_name: 'Homepage Task', text: 'Review live stats numbers and editorial story copy', is_done: false },
  { id: 'nt-2', page: 'index.html', part_name: 'Conversion Task', text: 'Monitor inbound lead intake on main website', is_done: true },
  { id: 'nt-3', page: 'general', part_name: 'General Studio Task', text: 'Finalize annual statutory filings for America, India, and Dubai', is_done: false }
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
    title: 'SWIPETOUCH Hardware · From CAD to High-Precision Assembly Line',
    category: 'Hardware & Manufacturing',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'images/problem.jpg',
    description: 'A behind-the-scenes walkthrough of precision tooling and tactile sensor calibration inside our production facility.'
  },
  {
    id: 'vid-2',
    title: 'NEXIS AI Swarm · Autonomous Multi-Agent Systems in Production',
    category: 'AI Platform',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'images/thesis.jpg',
    description: 'How our autonomous AI swarm framework handles live telemetry, distributed tasks, and enterprise workflows.'
  },
  {
    id: 'vid-3',
    title: 'Cross-Border Operations · Building Across America, India & Dubai',
    category: 'Studio Thesis',
    video_url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    thumbnail_url: 'images/founder.jpg',
    description: 'Why establishing statutory multi-jurisdiction entities on day zero creates an insurmountable unfair advantage for our ventures.'
  }
];

const DB_SCHEMA_VERSION = 'v8_universal_sync_20260914';
try {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('nairi_admin_db_version', DB_SCHEMA_VERSION);
  }
} catch (e) {}

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
    let loadedFromLocal = false;
    try {
      const resp = await fetch('/api/cms-data');
      if (resp.ok) {
        const data = await resp.json();
        if (data && data.page_content && data.page_content.length) {
          setStore('page_content', data.page_content);
          loadedFromLocal = true;
        }
      }
    } catch (e) {}
    if (!loadedFromLocal) {
      try {
        const staticResp = await fetch('../data/cms-data.json');
        if (staticResp.ok) {
          const sData = await staticResp.json();
          if (sData && sData.page_content && sData.page_content.length) {
            setStore('page_content', sData.page_content);
            loadedFromLocal = true;
          }
        }
      } catch (e) {}
    }
    if (!loadedFromLocal) {
      const remote = await fetchFromSupabase('page_content');
      if (remote && remote.length) {
        setStore('page_content', remote);
      }
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
    let loadedFromLocal = false;
    try {
      const resp = await fetch('/api/cms-data');
      if (resp.ok) {
        const data = await resp.json();
        if (data && data.images && data.images.length) {
          setStore('images', data.images);
          loadedFromLocal = true;
        }
      }
    } catch (e) {}
    if (!loadedFromLocal) {
      try {
        const staticResp = await fetch('../data/cms-data.json');
        if (staticResp.ok) {
          const sData = await staticResp.json();
          if (sData && sData.images && sData.images.length) {
            setStore('images', sData.images);
            loadedFromLocal = true;
          }
        }
      } catch (e) {}
    }
    if (!loadedFromLocal) {
      const remote = await fetchFromSupabase('images');
      if (remote && remote.length) {
        setStore('images', remote);
      }
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
    let loadedFromLocal = false;
    try {
      const resp = await fetch('/api/cms-data');
      if (resp.ok) {
        const data = await resp.json();
        if (data && data.branding && typeof data.branding === 'object') {
          setStore('branding', data.branding);
          loadedFromLocal = true;
        }
      }
    } catch (e) {}
    if (!loadedFromLocal) {
      try {
        const staticResp = await fetch('../data/cms-data.json');
        if (staticResp.ok) {
          const sData = await staticResp.json();
          if (sData && sData.branding && typeof sData.branding === 'object') {
            setStore('branding', sData.branding);
            loadedFromLocal = true;
          }
        }
      } catch (e) {}
    }
    if (!loadedFromLocal) {
      const remote = await fetchFromSupabase('branding');
      if (remote && remote.length) {
        setStore('branding', remote[0]);
      }
    }
    let branding = getStore('branding');
    if (!branding || typeof branding !== 'object' || Array.isArray(branding)) {
      branding = SEED_DATA.branding || {
        logo_text: 'Nairee',
        logo_image: 'images/nairee-logo-navy-sky.png',
        font_heading: 'Fraunces',
        font_subheading: 'General Sans',
        font_body: 'General Sans',
        font_mono: 'JetBrains Mono',
        accent_color: '#0284C7'
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
      desc: getVal('home.top_video.desc', 'Watch how we script, produce, and deploy high converting video ads in days instead of months.'),
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
