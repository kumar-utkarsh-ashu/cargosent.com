# Deployment and Infrastructure Guide

## 1. Local Development Setup
The interactive prototype is optimized for local builds without configuration roadblocks:
```bash
# 1. Navigate to project root directory
cd cargosent-logistics

# 2. Install all dependencies
npm install

# 3. Launch local development server
npm run dev
# The application becomes available at http://localhost:3000

# 4. Run automated production build check
npm run build
```

## 2. Cloud Staging Deployment (Vercel / Netlify)
For team collaboration and client review previews:

### Netlify Deployment
- Build Command: npm run build
- Publish Directory: .next
- Environment Variables:
  - NODE_VERSION: 20.x
  - NEXT_PUBLIC_SITE_URL: Staging domain URL

### Vercel Deployment
- Framework Preset: Next.js (defined in vercel.json)
- Root Directory: ./ (Root)
- Build Command: npm run build
- Output Directory: .next
- Resolving 404 NOT_FOUND on Vercel:
  If a project was imported into Vercel prior to pushing the Next.js files, Vercel caches the framework preset as "Other" (static). To resolve:
  1. Open Vercel Project Dashboard -> Settings -> General.
  2. Set "Framework Preset" to "Next.js" (or let vercel.json handle it).
  3. Ensure "Root Directory" is set to "./".
  4. Navigate to "Deployments" tab -> Click (...) on latest deployment -> Click "Redeploy".

## 3. Mobrilz Staging Environment Review
- Purpose: Client review of full responsive behavior (desktop, tablet, mobile), flip-card animations, accordion usability, and lead inquiry submission.
- Gate Check: Client visual sign-off and approval of milestone deliverables.

## 4. Aliyun Virtual Hosting Production Migration
Upon final staging approval and receipt of Milestone 2 ($199 USD):

### Step 1: Client Dependency Verification
- Final copywriting approvals.
- High-resolution company photos and brand assets.
- Aliyun virtual hosting FTP credentials (host, port, username, password).
- Aliyun MySQL database credentials (database name, user, password, host).

### Step 2: WordPress Build Assembly
- Bundle custom WordPress theme files into wp-content/themes/cargosent/.
- Package static assets (images, css, js) into theme distribution directories.
- Export clean database dump (cargosent_db.sql) with site URLs pre-configured for client production domain.

### Step 3: FTP Migration Execution
- Connect to Aliyun virtual host via secure FTP (SFTP / FTPS).
- Upload WordPress core and theme files to public web root (/htdocs or /wwwroot).
- Configure wp-config.php with client Aliyun MySQL credentials and security salts.
- Import database schema and default content using phpMyAdmin or MySQL CLI.

### Step 4: Post-Migration Quality Verification
- Verify HTTP/HTTPS SSL certificate status.
- Test all navigation routes (Home, About, Solutions, Gallery, Contact).
- Verify 3D flip-cards across Chrome, Safari, Firefox, and Edge.
- Submit test inquiry and confirm email delivery to Cargosent operations inbox.
- Confirm excluded widgets (Track & Trace, Quote calculator, Login portal) remain excluded.
- Hand over WordPress admin login credentials to client.
