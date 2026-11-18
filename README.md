# Cargosent Logistics Solutions - Website Redesign

Modern, clean, flat-design responsive corporate website prototype and WordPress CMS foundation for Cargosent Logistics Solutions.

## 1. Quick Start
The project is set up and ready to run locally:
```bash
# 1. Install dependencies (already executed)
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# http://localhost:3000

# 4. Production build check
npm run build
```

## 2. Key Features Implemented
- Universal Header: Persistent across all routes with horizontal logo (Logo 2.jpeg), navigation links, active tab indicators, primary "Inquire Now" CTA, and responsive mobile sliding drawer.
- Full-Width Hero Slider: 3 rotating fleet/cargo photography slides with centered typography, dual CTAs ("Explore Solutions", "Contact Our Team"), pause on hover, and dot indicators.
- Key Metrics Bar: 4 structured cards (2017 Established, 20+ Years Leadership, 6 Forwarding Solutions, 100% Tailored Commitment) that eliminate layout gaps where Track & Trace was removed.
- Interactive 3D Flip-Cards: Hardware-accelerated 3D Y-axis flip on desktop hover and mobile tap for all 6 solutions:
  1. Air Freight
  2. Ocean Freight
  3. Road Freight
  4. Events & Motorsports
  5. Warehousing
  6. Railway Freight
- "Why Choose Us" Accordion: 2-column layout with visual operations card and expandable FAQ accordion based on Tas Connect layout cues.
- "Latest Highlights" Gallery: Category filtering (All, Air, Ocean, Road, Special Projects) with photo cards and interactive lightbox modal.
- Lead Inquiry Form & API: Validated contact form connected to /api/inquiries endpoint.
- Universal Footer: Stacked logo (Logo 1.jpeg), corporate summary, Shanghai address, phone lines, #CARGOSENT hashtag, and copyright statement.
- Excluded Features Confirmed Absent: Track & Trace bar, Quote calculator widget, and Customer Login portal buttons have been completely removed.
- Brand Color: All reference purple accents (#6f2b90) replaced with Cargosent Dark Navy Blue (#022d5c).

## 3. Modular Technical Documentation
All comprehensive design and technical documents are located in the doc directory:
- [doc/readme.md](./doc/readme.md): Master blueprint, IMET execution framework, and version log.
- [doc/index.md](./doc/index.md): System index, user personas, sitemap, and universal navigation rules.
- [doc/technology.md](./doc/technology.md): Next.js 14, Tailwind CSS, 3D flip-card mechanics, and WordPress 6.x production stack.
- [doc/database.md](./doc/database.md): Inquiry data models, solutions catalog, gallery schema, and WordPress MySQL mapping.
- [doc/deployment.md](./doc/deployment.md): Local development commands, Vercel/Netlify staging, and Aliyun FTP production migration.
- [doc/process.md](./doc/process.md): 4-phase lifecycle, IMET testing loop, and quality gates.
- [doc/feature-structure.md](./doc/feature-structure.md): Screen-by-screen specifications, CTA catalog, and gap analysis.
- [doc/modules.md](./doc/modules.md): UI component contracts, props interfaces, and tester QA checklist.
