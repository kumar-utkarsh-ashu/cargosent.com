# Cargosent Logistics Solutions - Website Redesign Documentation

## 1. Project Overview
Cargosent Logistics Solutions is a specialist Freight Forwarder established in 2017 based in Shanghai, China, offering tailored global logistics solutions across air, ocean, road, rail, warehousing, and specialized event cargo.

This project delivers a modern, clean, flat-design responsive corporate website prototype and production WordPress implementation based on the approved client prototype (http://47.95.200.163/index.html) integrated with layout cues from Tas Connect Logistics (https://tasconnectlogistics.com.au/).

All references to the previous purple accent color (#6f2b90) are replaced by Cargosent's corporate dark navy blue brand color (#022d5c / #032d5f).

## 2. Key Objectives and Exclusions
- Modern flat-design layout with responsive header and footer.
- Full-width hero image slider with central typography and call-to-action buttons.
- Interactive 3D flip-card grid for the six core logistics solutions:
  1. Air Freight
  2. Ocean Freight
  3. Road Freight
  4. Events and Motorsports Logistics
  5. Warehousing Solutions
  6. Railway Freight
- Corporate overview and "Why Choose Us" accordion blocks.
- Filterable portfolio and fleet highlights gallery.
- Contact inquiry form with validation.
- Explicit Exclusions:
  - No shipment Track and Trace widget.
  - No Get a Quote calculator widget.
  - No customer login portal buttons.
  - No domain or hosting purchase (client provides Aliyun virtual hosting).

## 3. Documentation Structure
All project documentation files are maintained inside the doc directory using relative file addresses:
- [doc/readme.md](./readme.md): Master project blueprint, IMET execution framework, and version changelog.
- [doc/index.md](./index.md): System index, user personas, screen hierarchy, and sitemap.
- [doc/technology.md](./technology.md): Technology stack specifications for Next.js prototype and WordPress deployment.
- [doc/database.md](./database.md): Data models, schema definitions, and WordPress MySQL mapping.
- [doc/deployment.md](./deployment.md): Local development, Vercel/Netlify staging, and Aliyun FTP production migration.
- [doc/process.md](./process.md): Phased delivery process, testing methodology, and quality gates.
- [doc/feature-structure.md](./feature-structure.md): Screen-by-screen breakdown, user journey mapping, and CTA inventory.
- [doc/modules.md](./modules.md): Reusable UI component specifications, flip-card interaction details, and design tokens.

## 4. IMET Execution Methodology
Every change and development phase adheres strictly to the IMET framework:
- I (Input): Gather source requirements, reference URLs, brand assets, and user comments.
- M (Mission): Define explicit atomic task goals, acceptance criteria, and constraints.
- E (Execute): Implement isolated, testable changes one task at a time.
- T (Testing): Run automated and manual checks, verify responsive behavior, and fix regressions immediately before moving forward.

## 5. Version History Log
- Version 1.0.0 (2026-11-18): Initial project architecture, SOW analysis, asset extraction, and documentation suite initialization.
- Version 1.1.0 (2026-11-18): Generated doc/index.md with user personas, system sitemap, and universal navigation rules. Verified ASCII compliance.
- Version 1.2.0 (2026-11-18): Created doc/technology.md specifying dual-tier Next.js 14 and WordPress stack, 3D flip-card mechanics, and design tokens. Verified ASCII compliance.
- Version 1.3.0 (2026-11-18): Created doc/database.md defining JSON schemas, MySQL inquiry tables, and WordPress ACF mapping. Verified ASCII compliance.
- Version 1.4.0 (2026-11-18): Created doc/deployment.md detailing local builds, Vercel/Netlify staging, and Aliyun FTP migration. Verified ASCII compliance.
- Version 1.5.0 (2026-11-18): Created doc/process.md detailing the 4-phase lifecycle, IMET protocol, and defect resolution gates. Verified ASCII compliance.
- Version 1.6.0 (2026-11-18): Created doc/feature-structure.md containing screen definitions, CTA inventory, user journeys, and gap analysis. Verified ASCII compliance.
- Version 1.7.0 (2026-11-18): Created doc/modules.md with full component specifications, 3D flip-card mechanics, and QA checklist. Verified ASCII compliance.
- Version 2.0.0 (2026-11-18): Initialized implementation workspace inside cargosent.com directory. Ready for Next.js application scaffolding and component assembly. Verified ASCII compliance.
- Version 2.1.0 (2026-11-18): Scaffolding completed. Created package.json, tsconfig.json, next.config.mjs, and postcss.config.js. Successfully installed all npm dependencies. Verified ASCII compliance.
- Version 2.2.0 (2026-11-18): Configured Tailwind CSS, CSS 3D transform utilities, brand navy tokens, and utility merger in lib/utils.ts. Verified ASCII compliance.
- Version 2.3.0 (2026-11-18): Built data catalog modules (solutions.ts, metrics.ts, highlights.ts, company.ts, faqs.ts) with verified copywriting. Verified ASCII compliance.
- Version 2.4.0 (2026-11-18): Built responsive Universal Header and Universal Footer components using client logos and pure ASCII characters. Verified ASCII compliance.
- Version 2.5.0 (2026-11-18): Implemented 3D flip-card module with perspective transforms, hover/touch Y-axis flip, front punchlines, and back capabilities. Verified ASCII compliance.
- Version 2.6.0 (2026-11-18): Built HeroSlider with rotating fleet visuals, MetricsBar, CorporateIntro, WhyChooseUs accordion, HighlightsPreview, and LeadBanner. Verified ASCII compliance.
- Version 2.7.0 (2026-11-18): Assembled all 5 application routes (Home, About, Solutions, Gallery, Contact) with universal layout and lead inquiry API endpoint. Verified ASCII compliance.
- Version 2.8.0 (2026-11-18): Production build check passed (9/9 static/dynamic pages compiled). Live dev server active on http://localhost:3000. Verified all routes return HTTP 200 and inquiry API returns HTTP 201. Confirmed exclusions and ASCII compliance.
- Version 3.0.0 (2026-11-18): Relocated codebase and documentation suite to user's preferred Documents repository at Documents/GitHub/cargosent.com and created alias in Documents/cargosent.com.
- Version 3.1.0 (2026-11-18): Installed node_modules in target directory, passed production build verification, and cleared port conflicts.
- Version 3.2.0 (2026-11-18): Launched active Next.js development server on port 3000 in Documents/GitHub/cargosent.com. Generated root README.md with quickstart guide. Verified ASCII compliance.
- Version 3.3.0 (2026-11-18): Replaced opaque black-box Logo 2.jpeg with high-resolution transparent PNG logo-horizontal.png (Cargosent Navy #022d5c) in Header, and logo-horizontal-white.png in Footer, eliminating visual artifacting. Verified ASCII compliance.
- Version 4.0.0 (2026-11-18): Crawled and integrated all 24 authentic assets from prototype (http://47.95.200.163) and tasconnectlogistics.com.au. Integrated hero-cargo.jpg (Your CARGO We SENT), all 9 Highlights photos (hl_112 to hl_9), 6 solutions icons, and 6 solutions photos. Verified ASCII compliance.
- Version 5.0.0 (2026-11-18): Investigated Vercel 404 NOT_FOUND. Identified that the initial Vercel project was created when the GitHub repo had only an empty README, causing Vercel to cache Framework Preset as "Other" static instead of Next.js.
- Version 5.1.0 (2026-11-18): Added vercel.json with explicit Next.js framework configuration, buildCommand, and installCommand. Documented 1-click Vercel redeployment resolution in doc/deployment.md. Verified ASCII compliance.
- Version 6.0.0 (2026-11-18): Updated all site-wide phone numbers to +86 138 1829 2991 and all email addresses to info@cargosent.com per client feedback. Ensured single-source-of-truth consistency across Header, Footer, Lead Banner, Contact Page, and documentation. Verified ASCII compliance.
- Version 7.0.0 (2026-11-18): Incorporated comprehensive client feedback from Home.docx, Solutions.docx, and Contact.docx:
  1. Header: Removed top announcement micro-bar per client directive ("leave it empty, we don't need this information on top").
  2. Hero Slider: Standardized all slides to feature the signature headline "Your CARGO We SENT" with subtext.
  3. Home Page Flow: Removed MetricsBar and CorporateIntro blocks from Home page flow to match prototype http://47.95.200.163/ where Hero slider directly transitions to Latest Highlights and Our Solutions. CorporateIntro retained on About page.
  4. Latest Highlights and Gallery: Updated title casing to "Latest Highlights" (only initial letters capitalized) and stripped all overlay tags, badges, and descriptions from photos so only clean photos are displayed.
  5. Footer: Removed physical office address and working hours, keeping only telephone (+86 138 1829 2991) and email (info@cargosent.com).
  6. Solutions Page: Centered section headings and introductions, removed floating white icon overlay from photos, and stripped "SOLUTION 01" numbering tags.
  7. Contact Page: Removed physical office address and operating hours cards, preserving direct phone, email, and hashtag contacts.
  8. Verified production build and responsive rendering across desktop and mobile. Verified ASCII compliance.
- Version 8.0.0 (2026-11-18): Layout realignment and section restoration based on direct client clarification:
  1. Home Page Structure: Restored MetricsBar (IMAGE 1: 2017 Established, 20+ Years, 6 Modes) and CorporateIntro (IMAGE 2 and 3: "WHO WE ARE" overview and "Our Operational Commitments").
  2. Small and Big Heading Mix: Restored the small pill badge above the large headline hierarchy on both SolutionsGrid (IMAGE 4: "OUR SOLUTIONS" badge + "Comprehensive Multimodal Forwarding") and HighlightsPreview (IMAGE 5: "OPERATIONS PORTFOLIO" badge + "Latest Highlights").
  3. Preserved clean photo cards in Highlights without overlay clutter per earlier client directive.
  4. Verified consistent phone (+86 138 1829 2991) and email (info@cargosent.com) in all restored components.
  5. Tested production build and verified all routes return HTTP 200. Verified ASCII compliance.
- Version 9.0.0 (2026-11-19): Precision UI refinements per client review:
  1. Solutions Quick Jump Bar: Center-aligned the horizontal anchor pills (Air Freight, Ocean Freight, Road Freight, Events and Motorsports, Warehousing, Railway Freight) on app/solutions/page.tsx.
  2. About Page Title: Pruned "Solutions" from the hero heading on app/about/page.tsx to read "About Cargosent Logistics".
  3. Metrics Bar Spacing: Adjusted the MetricsBar position downward to eliminate negative margin overlap (-mt-12), ensuring full visibility and breathing room for the Hero Slider pagination dots.
  4. Highlights Subtitle: Updated subtext under Latest Highlights on components/home/HighlightsPreview.tsx and app/gallery/page.tsx to "Behind the scenes of complex, high-stakes End-to-End cargo handling from ocean, air, road to event venues."
  5. Build and Route Verification: Passed production build verification with 0 errors and confirmed HTTP 200 across all routes. Verified ASCII compliance.
