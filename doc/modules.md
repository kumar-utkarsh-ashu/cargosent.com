# UI Component Modules and QA Testing Checklist

## 1. Component Architecture Overview
The interface is assembled from modular, decoupled, and reusable components. Each component is self-contained with strict TypeScript typing, Tailwind CSS styling, and accessibility attributes.

Component Directory Structure:
```
components/
+-- layout/
|   +-- Header.tsx
|   +-- MobileNav.tsx
|   \-- Footer.tsx
+-- home/
|   +-- HeroSlider.tsx
|   +-- MetricsBar.tsx
|   +-- CorporateIntro.tsx
|   +-- SolutionsGrid.tsx
|   +-- FlipCard.tsx
|   +-- WhyChooseUs.tsx
|   \-- HighlightsPreview.tsx
+-- solutions/
|   +-- SolutionDetailCard.tsx
|   \-- QuickJumpNav.tsx
+-- gallery/
|   +-- GalleryFilter.tsx
|   +-- GalleryGrid.tsx
|   \-- LightboxModal.tsx
+-- contact/
|   +-- InquiryForm.tsx
|   \-- ContactInfoCard.tsx
\-- ui/
    +-- accordion.tsx
    +-- button.tsx
    +-- card.tsx
    +-- input.tsx
    +-- textarea.tsx
    \-- badge.tsx
```

## 2. Component Specifications

### 2.1 Universal Header (Header.tsx)
- Props: currentRoute: string
- Structure:
  - Container: w-full fixed top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all duration-300
  - Brand Logo: Horizontal logo (Logo 2.jpeg) with height h-12 w-auto
  - Desktop Navigation: Flex items-center space-x-8 with hover text color #022d5c
  - Action CTA Button: "Inquire Now" with solid navy fill (#022d5c), hover:bg-[#011c3a]
  - Mobile Menu Trigger: Lucide Menu icon toggling sliding mobile sheet drawer

### 2.2 Hero Slider (HeroSlider.tsx)
- Props: slides: Array<HeroSlide>
- State: activeIndex: number, isPaused: boolean
- Behavior:
  - 5-second automatic interval transitions.
  - Pauses timer when user hovers mouse over slider.
  - High-resolution background images with 50% dark overlay for guaranteed WCAG AA text contrast.
  - Slide indicators: 3 clickable dot pills with active indicator colored #022d5c.
  - CTAs: Primary ("Explore Solutions") and Secondary ("Contact Our Team").

### 2.3 Key Metrics Bar (MetricsBar.tsx)
- Replaces the excluded Track & Trace bar without leaving an empty layout gap.
- Layout: 4 responsive cards situated directly beneath the Hero Slider.
- Items:
  1. "2017" - Year Established in Shanghai China
  2. "20+ Years" - Core Team Collaborative Logistics Experience
  3. "6 Modes" - Comprehensive Global Forwarding Capabilities
  4. "100% Tailored" - Customer-Centric Routing & White-Glove Support

### 2.4 Interactive 3D Flip-Cards (FlipCard.tsx)
- Dimensions: h-80 w-full min-h-[320px]
- Card Perspective Wrapper: perspective: 1000px, group relative cursor-pointer
- Flipper Inner Body:
  - CSS: relative w-full h-full transition-transform duration-600 transform-style: preserve-3d
  - Desktop: group-hover:[transform:rotateY(180deg)]
  - Mobile / Touch: [transform:rotateY(180deg)] when card is toggled via tap state
- Front Side (Card Front):
  - CSS: absolute inset-0 w-full h-full backface-hidden bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md
  - Visuals: Vector service icon in navy circle, service title in bold uppercase, 2-line punchline from SOW, and "Hover or tap to reveal capabilities" hint.
- Back Side (Card Back):
  - CSS: absolute inset-0 w-full h-full backface-hidden [transform:rotateY(180deg)] bg-[#022d5c] text-white rounded-xl p-6 flex flex-col justify-between shadow-xl
  - Visuals: Service title, 5 bullet points of exact freight capabilities, and button "Inquire for [Service]" redirecting to /contact?service=[slug].

### 2.5 "Why Choose Us" Accordion (WhyChooseUs.tsx)
- Primitives: shadcn/radix Accordion (type="single" collapsible)
- Visual Style: Clean border-b separators, navy active chevron icon, bold active title.
- Accordion Items:
  1. Decades of Dedicated Teamwork: Operations and leadership have worked together for over 20+ years.
  2. Global Agency Network: Shanghai headquarters backed by trusted worldwide forwarding partners.
  3. Specialized Handling Mastery: Proven track record in motorsports, high-value art, and cold-chain pharma.
  4. Cost and Schedule Transparency: Competitive direct carrier contracts with round-the-clock status updates.

### 2.6 Latest Highlights Gallery (HighlightsPreview.tsx & GalleryGrid.tsx)
- Filter Tabs: All, Air Freight, Ocean Freight, Road Fleet, Special Projects.
- Image Card: Aspect ratio 4:3, object-cover, rounded-lg, overflow-hidden.
- Hover Effect: Scale 105% smooth transition with subtle dark vignette and white typography title badge.
- Lightbox Modal: Accessible full-screen modal showing enlarged photograph, category label, and close trigger.

### 2.7 Lead Inquiry Form (InquiryForm.tsx)
- Input Controls: Clean bordered inputs with focus ring in brand navy blue.
- Fields:
  - Full Name (required)
  - Work Email (required, regex email validation)
  - Phone Number (optional)
  - Company Name (optional)
  - Required Logistics Service (Select dropdown with 6 service options)
  - Project Summary / Cargo Details (required textarea, min 10 characters)
- Submission States: Idle, Submitting (animated spinner), Success (confirmation alert), Error (inline error notice).

### 2.8 Universal Footer (Footer.tsx)
- Background: Slate 900 (#0f172a) with brand navy accents.
- Sections:
  - Brand Column: Stacked Logo (Logo 1.jpeg), corporate summary, and Shanghai address.
  - Quick Links: Home, About Us, Solutions, Gallery, Contact.
  - Solutions Directory: Air, Ocean, Road, Events, Warehousing, Railway.
  - Social & Follow Bar: "Follow us #CARGOSENT" highlighted in bold #3b82f6 / #022d5c.
  - Copyright: "(c) CARGOSENT - ALL RIGHTS RESERVED".

## 3. Comprehensive QA Testing Checklist (Tester Role)

### 3.1 Layout and Visual Integrity
- [ ] Header logo renders clearly without distortion on desktop (Logo 2.jpeg) and mobile.
- [ ] Brand color is strictly Cargosent Dark Navy Blue (#022d5c / #032d5f). Zero purple accents remaining.
- [ ] Hero slider rotates smoothly with pause-on-hover and accessible dot controls.
- [ ] No layout voids or broken containers where Track & Trace or Login buttons were removed.
- [ ] Key Metrics Bar aligns cleanly beneath the hero slider across all viewports.
- [ ] Header and Footer remain universal and identical across all pages.

### 3.2 3D Flip-Cards Interactive Testing
- [ ] Desktop: Hovering over each of the 6 service cards triggers smooth 180-degree Y-axis flip.
- [ ] Front face displays correct icon, title, and SOW punchline.
- [ ] Back face displays navy background, 5 capability bullets, and working inquiry button.
- [ ] Mobile / Tablet: Tapping a card flips it cleanly without layout jump or overflow glitch.
- [ ] Clicking "Inquire for [Service]" navigates to /contact with the service pre-selected.

### 3.3 Responsive Breakpoint Verification
- [ ] Desktop (1440px / 1280px): 3-column solutions grid, full horizontal navigation bar.
- [ ] Tablet (1024px / 768px): 2-column solutions grid, responsive padding, legible accordion.
- [ ] Mobile (375px / 390px / 414px): Single-column stacked cards, hamburger drawer menu, thumb-accessible CTA buttons.
- [ ] Zero separate tabs for mobile vs desktop (fluid responsive CSS design).

### 3.4 Functional and Form Validation
- [ ] Contact form rejects submission if Name, Email, or Message is empty.
- [ ] Contact form validates email syntax (e.g., rejects user@invalid).
- [ ] Submitting valid inquiry displays success confirmation message.
- [ ] "Why Choose Us" accordion expands and collapses smoothly with accessible ARIA tags.
- [ ] Gallery filter buttons filter images dynamically without page reload.
- [ ] Image lightbox opens and closes cleanly on click and ESC key press.

### 3.5 Build, Performance, and Deployment Verification
- [ ] "npm install" executes cleanly without dependency conflicts.
- [ ] "npm run dev" starts local development server on http://localhost:3000 without errors.
- [ ] "npm run build" executes cleanly and generates production-ready bundle.
- [ ] Verification confirms exclusion of:
  - Track & Trace consignment bar (EXCLUDED)
  - Get a Quote calculator widget (EXCLUDED)
  - Customer login portal buttons (EXCLUDED)
