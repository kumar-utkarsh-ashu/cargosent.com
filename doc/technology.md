# Technology Architecture and Specifications

## 1. Dual-Tier Architecture Overview
The project is architected in two complementary tiers:
1. Interactive Prototype Tier: High-performance Next.js 14+ application with Tailwind CSS and shadcn/ui component primitives, optimized for rapid local development ("npm run dev"), automated testing, and one-click cloud deployment on Netlify or Vercel ("npm run build").
2. Production Deployment Tier: Clean WordPress 6.x CMS theme configured for Aliyun virtual hosting with MySQL database, responsive PHP templates, and zero-code admin editing capabilities.

## 2. Interactive Prototype Technology Stack
- Core Framework: Next.js 14.2+ (App Router architecture)
- Language: TypeScript 5.x / JavaScript ES2023
- Styling Engine: Tailwind CSS 3.4+ with custom color tokens
- UI Primitives: shadcn/ui (radix-ui accessible headless primitives)
  - Accordion (radix-ui/react-accordion) for "Why Choose Us" FAQ sections
  - Card, Button, Input, Textarea for forms and solutions
- Animation and 3D Effects:
  - CSS 3D Transforms (perspective, transform-style: preserve-3d, rotateY)
  - Tailwind 3D plugin utilities or custom keyframe styles
- Iconography: Lucide React (feather-style clean SVG icons)
- Build System: Node.js 18+ / 20+ and npm

## 3. Brand Styling and Design Tokens
- Primary Brand Color: #022d5c (Cargosent Dark Navy Blue)
- Primary Dark Shade: #011c3a
- Primary Light Tint: #0a468a
- Background Accent: #f8fafc (Slate 50) and #f1f5f9 (Slate 100)
- Text Heading Color: #0f172a (Slate 900)
- Text Body Color: #475569 (Slate 600)
- Border and Divider: #e2e8f0 (Slate 200)
- Status and Success: #059669 (Emerald 600)

## 4. 3D Flip-Card Technical Implementation
The interactive solutions flip-card module utilizes hardware-accelerated CSS 3D transforms:
- Container Card: perspective: 1000px, w-full, h-80, group relative.
- Inner Card Wrapper: relative w-full h-full transition-transform duration-500 ease-in-out transform-style: preserve-3d, group-hover:rotate-y-180.
- Front Face: absolute w-full h-full backface-hidden, displaying solution icon, title, punchline, and subtle navy accent border.
- Back Face: absolute w-full h-full backface-hidden rotate-y-180 bg-[#022d5c] text-white p-6 flex flex-col justify-between rounded-xl shadow-lg.
- Interactive Fallback: Accessible toggle button for touch devices without hover capability.

## 5. Production WordPress Stack (Aliyun Virtual Hosting)
- Core CMS: WordPress 6.4+ / 6.5+ (Latest Stable Release)
- Web Server Compatibility: Nginx or Apache with mod_rewrite enabled
- PHP Runtime: PHP 8.1 / 8.2 / 8.3
- Database Engine: MySQL 8.0 / MariaDB 10.6+
- Custom Fields: Advanced Custom Fields (ACF) or WordPress Block Patterns for client content updates
- Lead Form Handler: Contact Form 7 or native REST API endpoint with anti-spam honeypot
- Asset Optimization: Minified CSS/JS bundles with WebP image delivery
- Admin Usability: Simplified customizer and block templates allowing client editing of:
  - Hero slider images and headlines
  - Solution card titles and descriptions
  - Fleet gallery image uploads and category tags
  - Office contact phone numbers and email addresses

## 6. Build and Run Commands
- Local Development:
  ```bash
  npm install
  npm run dev
  # Server starts at http://localhost:3000
  ```
- Production Build Verification:
  ```bash
  npm run build
  # Generates optimized output in .next directory
  ```
- Production Start:
  ```bash
  npm run start
  ```
