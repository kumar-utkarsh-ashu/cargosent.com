# Engineering Process and Quality Assurance Workflow

## 1. Core Operating Philosophy
To maintain uncompromising code quality, zero regression, and complete transparency, every step follows the IMET protocol:
- I (Input): Ingest specific requirements, user feedback, design cues, or error logs.
- M (Mission): Articulate single atomic task objective with unambiguous boundaries.
- E (Execute): Apply surgical changes without modifying unrelated modules.
- T (Testing): Execute automated verification, functional tests, and visual checks. If an error is detected, halt forward progression, isolate the bug, apply the fix, re-test to green, and only then proceed.

## 2. Four-Phase Project Delivery Lifecycle

### Phase 1: Planning and Documentation (Current Phase)
- Rule: DO NOT write application code yet.
- Tasks:
  1. Complete comprehensive UI/UX plan covering all user types and personas.
  2. Define every screen, CTA, navigation link, and layout gap for each user journey.
  3. Author the complete technical documentation suite in the doc directory.
  4. Wait for explicit user review and approval before proceeding to Phase 2.

### Phase 2: Interactive Prototype Implementation
- Objective: Build responsive prototype using Next.js 14+, Tailwind CSS, and shadcn/ui.
- Key Deliverables:
  - Universal responsive Header and Footer across all routes.
  - Full-width Hero image slider with rotating fleet imagery.
  - Interactive 3D flip-card grid for the 6 core logistics solutions.
  - Expandable "Why Choose Us" FAQ accordion blocks.
  - Filterable "Latest Highlights" photo gallery.
  - Validated contact inquiry form.
  - Zero mock tabs for mobile vs desktop (native responsive CSS layout).
  - Clean build status with "npm run build" and instant local startup with "npm run dev".

### Phase 3: Mobrilz Staging Review and Quality Assurance
- Objective: Deploy to staging environment for multi-device QA and client review.
- Testing Checklist:
  - Desktop Viewports (1920x1080, 1440x900, 1280x720): Check navigation alignment, 3D flip-card hover transitions, slider responsiveness.
  - Tablet Viewports (768x1024, 820x1180): Check touch interactions for flip-cards, fluid grid collapse, legible typography.
  - Mobile Viewports (375x667, 390x844, 412x915): Check hamburger navigation toggle, single-column card stacking, tap target ergonomics.
  - Functional Verifications: Form validation on invalid emails or empty fields, exclusion verification (ensure Track & Trace, Quote widget, and Login buttons remain excluded).

### Phase 4: Production WordPress Deployment (Milestone 2)
- Objective: Transfer, deploy, and verify production CMS on client Aliyun virtual hosting upon Milestone 2 approval ($199 USD).
- Deliverables:
  - Custom WordPress theme package with dynamic ACF fields.
  - Database import on Aliyun MySQL instance.
  - Production DNS and SSL checks.
  - WordPress admin access and documentation handover to client.

## 3. Defect Management and Resolution Protocol
When an error, visual flaw, or functional gap is detected:
1. Log the failure state with exact reproduction steps.
2. Formulate an isolated fix targeting only the root cause.
3. Apply the correction.
4. Re-execute the test suite.
5. Record the resolution in doc/readme.md version history.
