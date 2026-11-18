# System Index and Documentation Navigation

## 1. Documentation Index
This documentation suite defines the complete technical and UI/UX design specifications for the Cargosent Logistics Solutions website redesign.

Directory tree:
- ./readme.md: Master overview, IMET process, and version log.
- ./index.md: Master system index, sitemap, and persona profiles (current document).
- ./technology.md: Frontend stack (Next.js 14, Tailwind, shadcn) and CMS specifications (WordPress, PHP, MySQL).
- ./database.md: Inquiries schema, dynamic solutions catalog, and metadata models.
- ./deployment.md: Local build instructions, Vercel/Netlify hosting, and Aliyun FTP production migration.
- ./process.md: Phased development plan, test-driven validation, and sign-off criteria.
- ./feature-structure.md: Screen inventory, user journeys, CTA catalog, and gap analysis.
- ./modules.md: UI component library, 3D flip-cards, accordions, and design tokens.

## 2. Target User Personas
The website caters to four distinct user groups:

### Persona A: Enterprise Supply Chain Director
- Profile: Head of Global Logistics for multinational manufacturers and trade organizations.
- Goal: Assess Cargosent's global forwarding capacity, multimodal network, and reliability track record.
- Primary Screens: Home, Solutions Detail, Corporate Overview.
- Primary CTA: "Request Dedicated Consultation" / "Contact Global Team".

### Persona B: SME Cargo Shipper
- Profile: Small-to-medium enterprise business owner importing/exporting retail or industrial goods.
- Goal: Find specific routing solutions (Air, Ocean, Railway), check service flexibility, and submit an inquiry.
- Primary Screens: Solutions (Flip-cards), FAQ Accordion, Contact.
- Primary CTA: "Submit Cargo Inquiry" / "View Solutions".

### Persona C: Specialized Cargo and Event Manager
- Profile: Project coordinator for exhibitions, motorsport events, and sensitive high-value cargo.
- Goal: Validate specialized handling capabilities, minimal handling protocols, and temperature-controlled storage.
- Primary Screens: Solutions (Events & Motorsports, Warehousing), Fleet Gallery.
- Primary CTA: "Inquire for Specialized Transport".

### Persona D: Cargosent Content Administrator
- Profile: Internal operations staff member updating company announcements, fleet photography, and service texts.
- Goal: Intuitive WordPress admin experience to update content without code edits.
- Primary Screens: WordPress Dashboard (/wp-admin), Pages Editor, Media Library.

## 3. Global Sitemap and Screen Hierarchy
```
Home (/)
+-- Hero Slider (3 rotating slides with company fleet visuals)
+-- Corporate Introduction Summary
+-- Our Solutions Grid (6 3D flip-cards)
+-- Why Choose Us (Accordion)
+-- Latest Highlights (Filterable preview gallery)
\-- Universal Lead Inquiry Banner

About (/about)
+-- Company History (Established 2017, Shanghai, China)
+-- Leadership and Operational Track Record (20+ years collective team experience)
+-- Global Partner Network Map
\-- Core Value Propositions

Solutions (/solutions)
+-- Air Freight (Time-critical, chartering, express, temperature-controlled)
+-- Ocean Freight (FCL, LCL, project cargo, breakbulk)
+-- Road Freight (FTL, LTL, cross-border express)
+-- Events and Motorsports (Fine art, exhibitions, precision race logistics)
+-- Warehousing (Customer-focused storage, pick-pack-ship, inventory control)
\-- Railway Freight (Cost-effective alternative to air, faster than ocean)

Gallery (/gallery)
+-- Fleet and Vehicle Operations
+-- Air Cargo Handling and Chartering
+-- Maritime Container Yards and Port Operations
\-- Specialized Event Cargo Logistics

Contact (/contact)
+-- Head Office Details (Shanghai, China)
+-- Inquiry Submission Form
+-- Direct Telephone and Email Support
\-- Interactive Location Route Map
```

## 4. Universal Header and Footer Constraints
- Header must remain persistent and universal across all pages, containing:
  - Horizontal Logo (Logo 2.jpeg) on desktop, responsive stacked logo on mobile.
  - Navigation links: Home, About, Solutions, Gallery, Contact.
  - Primary Action Button: "Contact Us".
  - Responsive hamburger drawer for mobile viewports.
  - No customer login button or portal link.
- Footer must remain universal across all pages, containing:
  - Stacked Logo (Logo 1.jpeg) with corporate summary.
  - Navigation link clusters.
  - Follow us notice with hashtag #CARGOSENT in brand navy blue.
  - Copyright statement: "(c) CARGOSENT - ALL RIGHTS RESERVED".
