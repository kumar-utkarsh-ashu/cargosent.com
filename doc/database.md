# Database Architecture and Data Models

## 1. Data Layer Overview
The application handles informational content, catalog structures, and customer inquiries:
- Prototype State: Structured in-memory and local JSON data models powering dynamic Next.js components and form handlers.
- Production WordPress Database: MySQL 8.0 schema leveraging standard WordPress tables (wp_posts, wp_postmeta) augmented with custom post types and meta keys for easy CMS administrative updates.

## 2. Inquiries Data Model (Lead Generation)
Captures customer inquiry submissions from the Contact form and universal lead banners.

### Prototype JSON Model
```json
{
  "id": "inq_1731934800000",
  "fullName": "John Doe",
  "email": "johndoe@example.com",
  "company": "Pacific Trade Ltd",
  "phone": "+86 138 1829 2991",
  "serviceRequired": "Air Freight",
  "origin": "Shanghai, China",
  "destination": "Melbourne, Australia",
  "cargoDetails": "Electronic components, approx 1200kg temperature-controlled",
  "status": "pending",
  "createdAt": "2026-11-18T09:30:00Z"
}
```

### Production WordPress MySQL Schema
Mapped to wp_cargosent_inquiries or stored via standard post type:
```sql
CREATE TABLE IF NOT EXISTS wp_cargosent_inquiries (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(120) NOT NULL,
  email VARCHAR(160) NOT NULL,
  phone VARCHAR(40) DEFAULT NULL,
  company VARCHAR(160) DEFAULT NULL,
  service_category VARCHAR(60) NOT NULL,
  origin_city VARCHAR(100) DEFAULT NULL,
  destination_city VARCHAR(100) DEFAULT NULL,
  message TEXT NOT NULL,
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

## 3. Solutions Catalog Data Model
Powers the interactive 3D flip-cards and dedicated solution pages.

```json
[
  {
    "slug": "air-freight",
    "title": "Air Freight",
    "punchline": "Timing is critical, working around the clock",
    "icon": "Plane",
    "summary": "Specialized global air cargo solutions when speed and precision are paramount.",
    "capabilities": [
      "Airside handling",
      "Full and part chartering",
      "Express and time-critical routing",
      "Hand carry and onboard courier",
      "Temperature-controlled pharma logistics"
    ],
    "sortOrder": 1
  },
  {
    "slug": "ocean-freight",
    "title": "Ocean Freight",
    "punchline": "Cost matters, time matters too!",
    "icon": "Ship",
    "summary": "Comprehensive maritime forwarding connecting major global ports efficiently.",
    "capabilities": [
      "Full Container Load (FCL)",
      "Less than Container Load (LCL) consolidation",
      "Out of Gauge (OOG) and project cargo",
      "Breakbulk shipping",
      "Customs clearance at port of arrival"
    ],
    "sortOrder": 2
  },
  {
    "slug": "road-freight",
    "title": "Road Freight",
    "punchline": "The Highway to accelerate your business",
    "icon": "Truck",
    "summary": "Reliable ground transportation network ensuring safe point-to-point delivery.",
    "capabilities": [
      "High-Quality Transportation fleet",
      "Full Truckload (FTL)",
      "Less than Truckload (LTL)",
      "Cross-border bonded trucking",
      "Dangerous goods (ADR) compliance"
    ],
    "sortOrder": 3
  },
  {
    "slug": "events-motorsports",
    "title": "Events & Motorsports",
    "punchline": "Highly specialized area of logistics",
    "icon": "Trophy",
    "summary": "White-glove logistics for motorsport circuits, global exhibitions, and cultural assets.",
    "capabilities": [
      "Motorsport vehicle and parts transport",
      "Exhibition booth and display cargo",
      "Fine art handling with climate telemetry",
      "On-site coordination team",
      "Time-critical event turnaround"
    ],
    "sortOrder": 4
  },
  {
    "slug": "warehousing",
    "title": "Warehousing",
    "punchline": "Not just storage, an extension of your organization",
    "icon": "Warehouse",
    "summary": "Customer-focused and cost-effective storage solutions built for scalable inventory.",
    "capabilities": [
      "Minimal handling protocols",
      "Pick, Pack, and Ship operations",
      "Barcode tracking and inventory management",
      "Bonded and non-bonded facilities",
      "Secure short and long-term storage"
    ],
    "sortOrder": 5
  },
  {
    "slug": "railway-freight",
    "title": "Railway Freight",
    "punchline": "Less expensive than air, faster than ocean",
    "icon": "Train",
    "summary": "Direct rail freight connectivity across Eurasia and domestic corridors.",
    "capabilities": [
      "Reliable railway service providers",
      "Trans-Eurasian Silk Road corridors",
      "Block train bookings",
      "Intermodal rail-to-road transfers",
      "Lower carbon footprint freight options"
    ],
    "sortOrder": 6
  }
]
```

## 4. Highlights Gallery Model
Stores metadata for fleet, cargo, and operation photos.
- id: string
- title: string
- category: enum ("air", "ocean", "road", "rail", "events", "warehouse")
- imageUrl: string (relative asset path)
- altText: string
- sortOrder: integer

## 5. WordPress Dynamic CMS Fields (ACF Mapping)
To empower Cargosent administrators to update content without code:
- Field Group: "Home Hero Slider" (repeater: slide_image, heading, subtext, cta_label, cta_link)
- Field Group: "Solutions Configuration" (repeater: solution_name, punchline, description_bullets, icon_code)
- Field Group: "Why Choose Us FAQ" (repeater: question, answer_rich_text)
- Field Group: "Company Contact Info" (text: telephone_1, telephone_2, email_inquiries, office_address)
