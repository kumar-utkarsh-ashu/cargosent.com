# Feature Structure and UI/UX Specification

## 1. Architectural Scope and Design Goals
This document specifies the complete visual structure, screen definitions, navigation links, call-to-action (CTA) inventory, and layout gap resolutions for Cargosent Logistics Solutions.

Design Principles:
- Clean, flat, modern corporate aesthetic.
- Dominant brand color: Cargosent Navy Blue (#022d5c / #032d5f) with slate neutral backgrounds.
- Zero visual clutter: Explicit exclusion of Track & Trace bars, Quote calculators, and Login buttons.
- Fluid responsive layout without separate tabs for desktop and mobile.
- Universal header and footer consistency across all routes.

## 2. Screen-by-Screen UI/UX Specifications

### Screen 1: Home Page (/)
- Purpose: High-impact corporate introduction establishing global forwarding reach, multimodal capabilities, and trust.
- Screen Sections:
  1. Universal Header:
     - Left: Cargosent horizontal brand logo (Logo 2.jpeg).
     - Center: Primary navigation links (Home, About, Solutions, Gallery, Contact).
     - Right: Primary CTA button ("Inquire Now").
     - Mobile: Sticky header bar with responsive logo and animated hamburger drawer trigger.
  2. Full-Width Hero Slider:
     - 3 rotating fleet/cargo photography slides.
     - Slide 1: Global Air & Ocean Freight ("Global Logistics Solutions Delivered with Precision").
     - Slide 2: Highway & Rail Freight ("Reliable Cross-Continent Forwarding Networks").
     - Slide 3: Specialized Motorsports & Warehousing ("White-Glove Handling for Critical Cargo").
     - Centered high-contrast typography overlay.
     - Dual CTA buttons: Primary ("Explore Solutions" -> smooth scroll to #solutions) and Secondary ("Contact Our Team" -> /contact).
     - Manual slide dot indicators and pause-on-hover interaction.
  3. Corporate Overview Teaser:
     - Headline: "Specialist Freight Forwarder Established 2017".
     - Copy: Highlighting Shanghai headquarters, global agency partnerships, and 20+ years collective leadership experience.
     - Key Metrics Bar: 4 metric stat cards (Established 2017, 20+ Years Leadership Experience, Global Network Reach, 6 Core Transport Modes).
     - Secondary Link: "Read Full Corporate Story" -> /about.
  4. Interactive Solutions Grid ("Our Solutions"):
     - Headline: "OUR SOLUTIONS".
     - Subhead: "Comprehensive, tailored logistics infrastructure connecting global commerce".
     - Grid Layout: 3 columns x 2 rows on desktop (1200px+), 2 columns on tablet (768px-1024px), 1 column on mobile (<768px).
     - 6 Interactive 3D Flip-Cards:
       1. Air Freight
       2. Ocean Freight
       3. Road Freight
       4. Events & Motorsports
       5. Warehousing
       6. Railway Freight
     - Card Hover / Tap Behavior: 3D Y-axis flip reveals detailed capability bullets, key benefit punchline, and "View Details" action link.
  5. "Why Choose Us" Accordion Section:
     - Layout: 2-column split layout on desktop (Left: high-resolution fleet logistics image with navy badge; Right: clean expandable accordion group).
     - Accordion Items:
       1. Over Two Decades of Core Operational Team Collaboration.
       2. Direct Global Airline and Shipping Line Contracting.
       3. White-Glove Specialization (Motorsport, Fine Art, Pharma).
       4. Transparent Proactive Communication and Single Point of Contact.
  6. "Latest Highlights" Gallery Showcase:
     - Headline: "LATEST HIGHLIGHTS".
     - Filter Bar: "All", "Air Freight", "Ocean Cargo", "Fleet Operations", "Special Projects".
     - Grid: 6 featured photo cards with subtle zoom hover effect and caption overlay.
     - Primary Button: "View Full Gallery" -> /gallery.
  7. Universal Lead Inquiry Banner:
     - Dark navy background (#022d5c) with white typography.
     - Headline: "Ready to optimize your global supply chain?".
     - Subtext: "Connect with our Shanghai logistics desk for tailored forwarding schedules."
     - Action Button: "Speak to a Freight Specialist" -> /contact.

### Screen 2: About Us Page (/about)
- Purpose: Build enterprise credibility, detail corporate heritage, and showcase operational expertise.
- Screen Sections:
  1. Universal Header.
  2. Page Banner: Navy-tinted hero banner with title "About Cargosent" and breadcrumb trail.
  3. Corporate Heritage:
     - Founded in 2017 in Shanghai, China.
     - Founding philosophy: "It is more than moving cargo from A to B. We care about your cargo and build lasting relationships."
  4. Leadership Team Excellence:
     - 20+ years of collaborative team experience in international logistics.
     - Values: Operational Transparency, Tailored Freight Routing, Rigorous Reliability.
  5. Global Coverage Map Section:
     - Schematic visual mapping Shanghai headquarters with major trade lanes across Asia-Pacific, Europe, Americas, and Middle East.
  6. Universal Lead Inquiry Banner and Universal Footer.

### Screen 3: Solutions Page (/solutions)
- Purpose: Comprehensive reference for all 6 transport and logistics services.
- Screen Sections:
  1. Universal Header.
  2. Page Banner: Title "Our Logistics Solutions".
  3. Quick-Jump Sticky Sub-Navigation: Quick anchor links to Air, Ocean, Road, Events, Warehousing, Railway.
  4. Detailed Solution Modules (Alternating 2-column image/text blocks):
     - Air Freight: Timing is critical, working around the clock. Airside handling, chartering, express, onboard courier, temperature control.
     - Ocean Freight: Cost matters, time matters too! FCL, LCL, project cargo, breakbulk, customs clearance.
     - Road Freight: The highway to accelerate your business. High-quality transportation, FTL, LTL, bonded cross-border, dangerous goods.
     - Events & Motorsports: Highly specialized logistics. Circuit logistics, exhibitions, fine art transport, on-site ramp supervision.
     - Warehousing: Extension of your organization. Minimal handling, pick/pack/ship, inventory management, bonded warehousing.
     - Railway Freight: Less expensive than air, faster than ocean. Trans-Eurasian rail corridors, block trains, multimodal interchange.
  5. Per-Solution Direct CTA: "Inquire About This Service" (pre-selects the solution in the Contact form).
  6. Universal Footer.

### Screen 4: Gallery Page (/gallery)
- Purpose: Visual verification of Cargosent's operational scale and fleet activities.
- Screen Sections:
  1. Universal Header.
  2. Page Banner: Title "Operations and Fleet Gallery".
  3. Interactive Category Filter: All, Air Freight, Ocean Cargo, Road Fleet, Special Events, Warehousing.
  4. Dynamic Responsive Image Grid: 3 columns desktop, 2 columns tablet, 1 column mobile.
  5. Lightbox Modal: Clicking an image opens high-resolution preview with caption and category tag.
  6. Universal Footer.

### Screen 5: Contact Us Page (/contact)
- Purpose: Primary conversion funnel for shipper inquiries.
- Screen Sections:
  1. Universal Header.
  2. Page Banner: Title "Get in Touch with Cargosent".
  3. 2-Column Contact Grid:
     - Left Column: Direct Corporate Contacts
       - Shanghai Head Office Address
       - Telephone Lines (+86 operations desk)
       - Direct Inquiries Email
       - Operating Hours (24/7 time-critical dispatch support)
       - Social / Digital Tag (#CARGOSENT)
     - Right Column: Lead Inquiry Form
       - Name (required)
       - Email Address (required)
       - Phone Number (optional)
       - Company Name (optional)
       - Service Selection (Dropdown: Air, Ocean, Road, Events, Warehousing, Railway, General)
       - Origin and Destination Ports / Cities (optional)
       - Project / Cargo Summary (required textarea)
       - Submit Button: "Send Cargo Inquiry"
       - Success / Error alert feedback inline
  4. Universal Footer.

## 3. Comprehensive Call-to-Action (CTA) Catalog
All CTAs across the site adhere to a consistent hierarchy:
- Primary CTA (Dark Navy #022d5c background, white text, rounded-md, hover:bg-[#011c3a], shadow):
  1. Header: "Inquire Now" -> /contact
  2. Hero Slider: "Explore Solutions" -> #solutions
  3. Solution Back-Cards: "Inquire for [Service Name]" -> /contact?service=[slug]
  4. Bottom Banner: "Speak to a Freight Specialist" -> /contact
  5. Contact Form: "Send Cargo Inquiry" -> API submission
- Secondary CTA (White background, navy border #022d5c, navy text, hover:bg-slate-50):
  1. Hero Slider: "Contact Our Team" -> /contact
  2. Corporate Overview: "Learn More About Us" -> /about
  3. Highlights Section: "View Full Gallery" -> /gallery
- Text Links (Navy font with subtle underline transition):
  1. Solution card details: "Read Full Specifications" -> /solutions#[slug]
  2. Accordion assistance: "Have a unique cargo requirement? Inquire directly" -> /contact

## 4. User Journey Mapping

### Journey 1: Enterprise Supply Chain Director
1. Lands on Home Page hero slider.
2. Observes international fleet visuals and corporate punchline.
3. Scrolls down to Corporate Overview, notes 20+ years leadership collaboration and 2017 establishment.
4. Explores 3D flip-card grid, hovering on "Ocean Freight" and "Railway Freight" to check multimodal options.
5. Clicks "Read Full Specifications" to review port capabilities on /solutions.
6. Clicks "Inquire About This Service" which redirects to /contact with Ocean Freight pre-selected.
7. Submits enterprise cargo details and receives instant submission confirmation.

### Journey 2: SME Cargo Shipper
1. Lands on Home Page on a smartphone device.
2. Taps "Explore Solutions" button in hero.
3. Page smooth scrolls to "Our Solutions" grid.
4. Taps "Air Freight" card, which smoothly flips 180 degrees revealing express and charter capabilities.
5. Scrolls to "Why Choose Us" accordion, taps "Transparent Communication".
6. Clicks "Submit Cargo Inquiry" from the persistent banner.
7. Fills compact contact form on mobile with thumb-friendly tap inputs.

### Journey 3: Motorsports and Events Coordinator
1. Clicks direct link to /solutions or navigates via universal header.
2. Clicks quick-jump link "Events & Motorsports".
3. Reviews specialized handling for circuit race vehicles, fine art climate controls, and on-site coordination.
4. Clicks "View Operational Photos" which jumps to /gallery filtered to "Special Events".
5. Verifies handling photos in the lightbox modal.
6. Clicks "Inquire for Specialized Transport" to connect with the specialist dispatch desk.

## 5. Layout Gap Analysis and Resolutions
1. Purple Accent Elimination:
   - Previous reference sites (Berra prototype and Tas Connect) featured purple #6f2b90.
   - Solution: Every accent, border, button, hover state, and icon highlight has been strictly mapped to Cargosent Navy (#022d5c / #032d5f) and slate neutrals.
2. Exclusion of Track & Trace Bar:
   - In reference sites, a large tracking widget was floating beneath the hero slider.
   - Solution: In place of the tracking bar, we implement a sleek 4-pillar Key Metrics Bar (2017 Established, 20+ Years Leadership, Global Network, 6 Transport Modes) that smoothly bridges the hero slider into the Corporate Overview without an awkward visual void.
3. Exclusion of Quote Calculator & Customer Login:
   - Reference headers had login buttons and quote forms.
   - Solution: Header is streamlined to showcase clean corporate branding (horizontal logo) and direct "Inquire Now" contact CTA. This eliminates authentication clutter while boosting lead generation conversion.
4. Mobile vs Desktop Consistency:
   - Avoided separate mobile tabs or disjointed layouts.
   - Single fluid responsive grid: 3-column desktop collapses to 2-column tablet and 1-column mobile with touch-enabled 3D card flips.
