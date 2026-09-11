-- ==============================================================================
-- NAIRI VENTURES — SUPABASE COMPLETE DATABASE SCHEMA & INITIAL DATA
-- Copy and paste this ENTIRE file into your Supabase project's SQL Editor and click "Run".
-- ==============================================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PAGE CONTENT TABLE
create table if not exists public.page_content (
  id text primary key,
  page text not null,
  part_name text not null,
  section_key text not null unique,
  content text not null,
  is_deleted boolean default false
);

-- 2. VENTURES TABLE
create table if not exists public.ventures (
  id text primary key,
  name text not null,
  tag text not null,
  description text not null,
  external_url text not null,
  image text not null default 'images/hero-bg.jpg',
  status text not null default 'Building',
  display_order int not null default 1,
  next_milestone text,
  owner text default 'Nairi Studio',
  is_published boolean default true,
  created_at timestamptz default now()
);

-- 3. TESTIMONIALS TABLE
create table if not exists public.testimonials (
  id text primary key,
  page text not null default 'success-stories.html',
  part_name text,
  quote text not null,
  author_name text not null,
  author_role text,
  is_approved boolean default true,
  is_deleted boolean default false,
  created_at timestamptz default now()
);

-- 4. LINKS TABLE
create table if not exists public.links (
  id text primary key,
  page text not null default 'quick_links',
  part_name text,
  label text not null,
  url text not null,
  category text not null default 'Navigation'
);

-- 5. NOTES TABLE
create table if not exists public.notes (
  id text primary key,
  page text not null default 'general',
  part_name text,
  text text not null,
  is_done boolean default false,
  created_at timestamptz default now()
);

-- 6. LEADS TABLE
create table if not exists public.leads (
  id text primary key default ('l-' || extract(epoch from now())::bigint),
  name text not null,
  email text not null,
  venture_interest text default 'General',
  message text not null,
  status text not null default 'New',
  created_at timestamptz default now()
);

-- 7. COMPLIANCE DEADLINES TABLE
create table if not exists public.compliance_deadlines (
  id text primary key,
  country text not null,
  task_description text not null,
  due_date date not null,
  status text not null default 'Upcoming'
);

-- 8. IMAGES TABLE
create table if not exists public.images (
  id text primary key,
  page text not null,
  part_name text not null,
  element_key text not null unique,
  url text not null,
  alt text,
  type text default 'image'
);

-- 9. BRANDING TABLE
create table if not exists public.branding (
  id text primary key default 'primary_branding',
  logo_text text default 'NAIRI VENTURES',
  logo_image text default '',
  font_serif text default 'Fraunces',
  font_sans text default 'Plus Jakarta Sans',
  accent_color text default '#E4A63A'
);

-- 10. VIDEOS TABLE
create table if not exists public.videos (
  id text primary key,
  title text not null,
  category text not null,
  video_url text not null,
  thumbnail_url text not null,
  description text not null,
  created_at timestamptz default now()
);

-- ==============================================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================

alter table public.page_content enable row level security;
alter table public.ventures enable row level security;
alter table public.testimonials enable row level security;
alter table public.links enable row level security;
alter table public.notes enable row level security;
alter table public.leads enable row level security;
alter table public.compliance_deadlines enable row level security;
alter table public.images enable row level security;
alter table public.branding enable row level security;
alter table public.videos enable row level security;

-- Drop previous restrictive policies if present
drop policy if exists "Public can read page_content" on public.page_content;
drop policy if exists "Public can read published ventures" on public.ventures;
drop policy if exists "Public can read approved testimonials" on public.testimonials;
drop policy if exists "Public can read images" on public.images;
drop policy if exists "Public can read branding" on public.branding;
drop policy if exists "Public can read videos" on public.videos;
drop policy if exists "Public can submit contact leads" on public.leads;
drop policy if exists "Admin full access page_content" on public.page_content;
drop policy if exists "Admin full access ventures" on public.ventures;
drop policy if exists "Admin full access testimonials" on public.testimonials;
drop policy if exists "Admin full access links" on public.links;
drop policy if exists "Admin full access notes" on public.notes;
drop policy if exists "Admin full access leads" on public.leads;
drop policy if exists "Admin full access compliance" on public.compliance_deadlines;
drop policy if exists "Admin full access images" on public.images;
drop policy if exists "Admin full access branding" on public.branding;
drop policy if exists "Admin full access videos" on public.videos;

-- Studio CMS Read/Write Access Policies
create policy "Allow all page_content" on public.page_content for all using (true) with check (true);
create policy "Allow all ventures" on public.ventures for all using (true) with check (true);
create policy "Allow all testimonials" on public.testimonials for all using (true) with check (true);
create policy "Allow all links" on public.links for all using (true) with check (true);
create policy "Allow all notes" on public.notes for all using (true) with check (true);
create policy "Allow all leads" on public.leads for all using (true) with check (true);
create policy "Allow all compliance" on public.compliance_deadlines for all using (true) with check (true);
create policy "Allow all images" on public.images for all using (true) with check (true);
create policy "Allow all branding" on public.branding for all using (true) with check (true);
create policy "Allow all videos" on public.videos for all using (true) with check (true);

-- ==============================================================================
-- SEED INITIAL DATA
-- ==============================================================================

insert into public.page_content (id, page, part_name, section_key, content, is_deleted)
values
  ('pc-idx-1', 'index.html', 'Hero Eyebrow', 'index.hero_eyebrow', 'Welcome to Nairi Ventures', false),
  ('pc-idx-2', 'index.html', 'Hero Main Headline', 'index.hero_title', '<em>We build companies —</em> across manufacturing, <em>across AI, across borders.</em>', false),
  ('pc-idx-3', 'index.html', 'Hero Sub-line', 'index.hero_subline', 'A venture studio registered in three countries, building what''s next in two very different worlds.', false),
  ('pc-idx-4', 'index.html', 'Hero Button Text', 'index.hero_btn', 'See our ventures', false),
  ('pc-idx-5', 'index.html', 'Thesis Eyebrow', 'index.thesis_eyebrow', 'Studio Thesis', false),
  ('pc-idx-6', 'index.html', 'Thesis Heading', 'index.thesis_title', 'Build ventures that last', false),
  ('pc-idx-7', 'index.html', 'Thesis Body Text', 'index.thesis_body', 'We take ideas from blueprint to balance sheet — whether that means a production line or an AI platform. Right now, we''re building ZupFly, FINARA, and NEXIS.', false),
  ('pc-idx-8', 'index.html', 'Problem / Solution Heading', 'index.problem_title', '<em>Let''s be real — building one company is hard enough.</em>', false),
  ('pc-idx-9', 'index.html', 'Problem Body Paragraph 1', 'index.problem_body1', 'Most founders spend half their energy on registration, compliance, and operations instead of building.', false),
  ('pc-idx-10', 'index.html', 'Problem Body Paragraph 2', 'index.problem_body2', 'Nairi exists to carry that weight, so every venture under us can focus on growth from day one.', false),
  ('pc-idx-11', 'index.html', 'Ventures Teaser Heading', 'index.ventures_title', 'What we''re building', false),
  ('pc-idx-12', 'index.html', 'Marquee Quote Block', 'index.marquee_quote', '"Working with Nairi felt like finally having an operations team behind the idea."', false),
  ('pc-idx-13', 'index.html', 'Marquee Quote Author', 'index.marquee_cite', '— Sample Partner, Sample Company', false),

  ('pc-abt-1', 'about.html', 'Header Eyebrow', 'about.header_eyebrow', 'About Nairi Ventures', false),
  ('pc-abt-2', 'about.html', 'Header Main Title', 'about.header_title', '<em>A studio for people who build things —</em> not just apps.', false),
  ('pc-abt-3', 'about.html', 'Story Paragraph 1', 'about.story_p1', 'Nairi Ventures started with a simple observation — most great ideas don''t die from bad ideas, they die from bad operations. Registration, compliance, hiring, and the hundred small decisions between an idea and a working company take up more energy than the idea itself.', false),
  ('pc-abt-4', 'about.html', 'Story Paragraph 2', 'about.story_p2', 'So we built Nairi as a studio that carries that weight — registered across three countries, built to launch and run ventures in two very different worlds: manufacturing and technology/AI.', false),
  ('pc-abt-5', 'about.html', 'Story Paragraph 3', 'about.story_p3', 'Today, that means ZupFly Study Abroad connecting students to universities abroad, FINARA making accounting simple for growing businesses, and NEXIS coordinating AI agents at scale.', false),
  ('pc-abt-6', 'about.html', 'Principle 1 Title', 'about.p1_title', 'We handle the back office', false),
  ('pc-abt-7', 'about.html', 'Principle 1 Description', 'about.p1_desc', 'Registration, compliance, and operations, so every venture can focus on building.', false),
  ('pc-abt-8', 'about.html', 'Principle 2 Title', 'about.p2_title', 'We think long-term', false),
  ('pc-abt-9', 'about.html', 'Principle 2 Description', 'about.p2_desc', 'We''re not building to flip. We''re building companies meant to run for years.', false),
  ('pc-abt-10', 'about.html', 'Principle 3 Title', 'about.p3_title', 'We build across borders', false),
  ('pc-abt-11', 'about.html', 'Principle 3 Description', 'about.p3_desc', 'Being registered in three countries means we can move ventures wherever they need to be.', false)
on conflict (section_key) do nothing;

insert into public.ventures (id, name, tag, description, external_url, image, status, display_order, next_milestone, owner, is_published)
values
  ('v-1', 'ZupFly Study Abroad', 'Education · Outreach', 'University recruitment and lead-generation for students planning to study abroad — connecting institutions with the right applicants, backed by focused outreach and research.', 'https://zupfly.com', 'images/zupfly.jpg', 'Live', 1, 'University Outreach Lead-gen', 'Nairi Studio', true),
  ('v-2', 'FINARA', 'Fintech · SaaS', 'Cloud-based accounting software built for businesses that want their books handled without the busywork — clear, simple, and built for growing teams.', 'https://finara.io', 'images/finara.jpg', 'Building', 2, 'Cloud Accounting Core', 'Nairi Studio', true),
  ('v-3', 'NEXIS', 'AI · Platform', 'An AI swarm platform — a WebGL front end paired with a Python back end, built for coordinating multiple AI agents at once.', 'https://nexis.ai', 'images/nexis.jpg', 'Building', 3, 'Swarm Telemetry & WebGL', 'Nairi Studio', true)
on conflict (id) do nothing;

insert into public.testimonials (id, page, part_name, quote, author_name, author_role, is_approved, is_deleted)
values
  ('t-1', 'success-stories.html', 'Partner Quote 1', 'The team behind Nairi thinks like operators, not just investors.', 'Sample Founder', 'Partner Company', true, false),
  ('t-2', 'success-stories.html', 'Partner Quote 2', 'What impressed us most was how fast things actually moved.', 'Sample Client', 'Strategic Partner', true, false),
  ('t-3', 'success-stories.html', 'Partner Quote 3', 'They don''t just fund ideas — they build alongside you.', 'Sample Collaborator', 'Advisory Board', true, false),
  ('t-4', 'index.html', 'Homepage Quote Band', 'Working with Nairi felt like finally having an operations team behind the idea.', 'Sample Partner', 'Sample Company', true, false)
on conflict (id) do nothing;

insert into public.links (id, page, part_name, label, url, category)
values
  ('lk-1', 'index.html', 'Hero Ventures Button', 'See our ventures', 'ventures.html', 'Navigation'),
  ('lk-2', 'index.html', 'Thesis Learn More Button', 'Learn how we work', 'about.html', 'Navigation'),
  ('lk-3', 'about.html', 'About CTA Button', 'See our ventures', 'ventures.html', 'Navigation'),
  ('lk-4', 'ventures.html', 'ZupFly External Link', 'Visit ZupFly', 'https://zupfly.com', 'Ventures'),
  ('lk-5', 'ventures.html', 'FINARA External Link', 'Visit FINARA', 'https://finara.io', 'Ventures'),
  ('lk-6', 'ventures.html', 'NEXIS External Link', 'Visit NEXIS', 'https://nexis.ai', 'Ventures'),
  ('lk-7', 'success-stories.html', 'Success Stories CTA Button', 'Contact us', 'contact.html', 'Navigation'),
  ('lk-8', 'contact.html', 'Calendly Booking Link', 'Book a Call', 'https://calendly.com', 'Booking')
on conflict (id) do nothing;

insert into public.images (id, page, part_name, element_key, url, alt, type)
values
  ('img-1', 'index.html', 'Homepage Hero Background', 'index.hero_bg', 'images/hero-bg.jpg', 'Hero background atmosphere', 'background'),
  ('img-2', 'index.html', 'Homepage Story Founder Portrait', 'index.story_img', 'images/founder.jpg', 'Nairi Ventures leadership in studio doorway', 'image'),
  ('img-3', 'index.html', 'Studio Thesis Artwork', 'index.thesis_img', 'images/thesis.jpg', 'Entrepreneurs reviewing plans together', 'image'),
  ('img-4', 'index.html', 'Problem / Solution Visual', 'index.problem_img', 'images/problem.jpg', 'Focused professional writing at desk', 'image'),
  ('img-5', 'about.html', 'About Founder Portrait', 'about.founder_img', 'images/founder.jpg', 'Founder standing in modern studio doorway', 'image'),
  ('img-6', 'success-stories.html', 'Results Banner Texture', 'success.texture_img', 'images/success-texture.jpg', 'Results texture grain', 'background')
on conflict (element_key) do nothing;

insert into public.branding (id, logo_text, logo_image, font_serif, font_sans, accent_color)
values
  ('primary_branding', 'NAIRI VENTURES', '', 'Fraunces', 'Plus Jakarta Sans', '#E4A63A')
on conflict (id) do nothing;

