export interface SolutionItem {
  id: string;
  slug: string;
  title: string;
  punchline: string;
  iconPath: string;
  photoPath: string;
  summary: string;
  capabilities: string[];
}

export const solutionsData: SolutionItem[] = [
  {
    id: "sol-1",
    slug: "air-freight",
    title: "Air Freight",
    punchline: "Timing is critical, working around the clock",
    iconPath: "/assets/crawler/icon_1.png",
    photoPath: "/assets/crawler/sol_s1.jpg",
    summary: "Time-definite air cargo solutions engineered for high-value and urgent consignments globally.",
    capabilities: [
      "Airside handling and airport ramp supervision",
      "Full and part aircraft chartering",
      "Express and urgent transit routing",
      "Hand carry and onboard courier service",
      "Temperature-controlled cold-chain management"
    ],
  },
  {
    id: "sol-2",
    slug: "ocean-freight",
    title: "Ocean Freight",
    punchline: "Cost matters, time matters too!",
    iconPath: "/assets/crawler/icon_2.png",
    photoPath: "/assets/crawler/sol_s2.jpg",
    summary: "Reliable maritime transport connecting major global seaports with direct carrier partnerships.",
    capabilities: [
      "Full Container Load (FCL) service",
      "Less than Container Load (LCL) consolidation",
      "Out of Gauge (OOG) and project breakbulk",
      "Port customs clearance and inspection",
      "Port-to-door multimodal freight integration"
    ],
  },
  {
    id: "sol-3",
    slug: "road-freight",
    title: "Road Freight",
    punchline: "The Highway to accelerate your business",
    iconPath: "/assets/crawler/icon_3.png",
    photoPath: "/assets/crawler/sol_s3.jpg",
    summary: "Flexible highway transportation network providing secure overland delivery with tracking.",
    capabilities: [
      "High-quality domestic and regional fleet",
      "Full Truckload (FTL) point-to-point dispatch",
      "Less than Truckload (LTL) scheduled service",
      "Cross-border bonded highway transport",
      "Dangerous goods (ADR) licensed carriage"
    ],
  },
  {
    id: "sol-4",
    slug: "events-motorsports",
    title: "Events & Motorsports",
    punchline: "Highly specialized area of logistics",
    iconPath: "/assets/crawler/icon_4.png",
    photoPath: "/assets/crawler/sol_s5.jpg",
    summary: "White-glove project logistics tailored for race circuits, global exhibitions, and cultural assets.",
    capabilities: [
      "Race vehicle, chassis, and engine transit",
      "Paddock and circuit on-site coordination",
      "Exhibition stand and trade display freight",
      "Fine art handling with climate telemetry",
      "ATA Carnet temporary import customs processing"
    ],
  },
  {
    id: "sol-5",
    slug: "warehousing",
    title: "Warehousing",
    punchline: "Customer-focused and cost-effective storage solutions. Pick, Pack, Ship",
    iconPath: "/assets/crawler/icon_5.png",
    photoPath: "/assets/crawler/sol_s6.jpg",
    summary: "Customer-centric storage solutions and value-added fulfillment built to streamline your supply chain.",
    capabilities: [
      "Minimal handling damage prevention protocol",
      "Pick, Pack, and Ship order fulfillment",
      "Real-time inventory ledger and barcode tracking",
      "Bonded and climate-controlled storage facilities",
      "Cross-docking and container devanning"
    ],
  },
  {
    id: "sol-6",
    slug: "railway-freight",
    title: "Railway Freight",
    punchline: "Less expensive than air, faster than ocean",
    iconPath: "/assets/crawler/icon_6.png",
    photoPath: "/assets/crawler/sol_s4.jpg",
    summary: "Sustainable trans-continental rail connectivity balancing rapid transit speed with low carbon emissions.",
    capabilities: [
      "Direct Trans-Eurasian Silk Road rail corridors",
      "Scheduled block train wagon allocations",
      "Rail-to-truck intermodal interchange",
      "Full container (FCL) and groupage rail service",
      "Cost-efficient alternative to air cargo"
    ],
  },
];
