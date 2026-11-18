export interface HighlightItem {
  id: string;
  title: string;
  category: "all" | "motorsports" | "air" | "maritime" | "freight";
  categoryLabel: string;
  description: string;
  imageUrl: string;
}

export const highlightsData: HighlightItem[] = [
  {
    id: "hl-1",
    title: "Racecar Container Staging",
    category: "motorsports",
    categoryLabel: "Events & Motorsports",
    description: "Pit-lane technician positioning competition racecar into dedicated shipping container.",
    imageUrl: "/assets/crawler/hl_112.jpg",
  },
  {
    id: "hl-2",
    title: "Shanghai Trackside Operations",
    category: "motorsports",
    categoryLabel: "Events & Motorsports",
    description: "Cargosent operations crew preparing vehicle transport against the Shanghai skyline.",
    imageUrl: "/assets/crawler/hl_26.jpg",
  },
  {
    id: "hl-3",
    title: "Qualcomm Safety Car Dispatch",
    category: "motorsports",
    categoryLabel: "Events & Motorsports",
    description: "High-tier enclosed vehicle carrier transporting official race safety car.",
    imageUrl: "/assets/crawler/hl_33.jpg",
  },
  {
    id: "hl-4",
    title: "Formula E Exhibition Logistics",
    category: "motorsports",
    categoryLabel: "Special Projects",
    description: "Indoor exhibition venue logistics and electric racecar display staging.",
    imageUrl: "/assets/crawler/hl_52.jpg",
  },
  {
    id: "hl-5",
    title: "Maritime Crane Vessel Hoist",
    category: "maritime",
    categoryLabel: "Ocean Cargo",
    description: "Heavy port crane precision hoist of project vehicle onto cargo vessel deck.",
    imageUrl: "/assets/crawler/hl_42.jpg",
  },
  {
    id: "hl-6",
    title: "Commercial Freighter Ramp Handling",
    category: "air",
    categoryLabel: "Air Freight",
    description: "Airside cargo ramp transfer and engine positioning on wide-body freight aircraft.",
    imageUrl: "/assets/crawler/hl_62.jpg",
  },
  {
    id: "hl-7",
    title: "Tandem Mobile Crane Lift",
    category: "freight",
    categoryLabel: "Project Cargo",
    description: "Dual mobile crane coordination lifting heavy industrial container equipment.",
    imageUrl: "/assets/crawler/hl_71.jpg",
  },
  {
    id: "hl-8",
    title: "Cargosent Protective Weather Shroud",
    category: "motorsports",
    categoryLabel: "Special Projects",
    description: "White-glove technician securing branded protective cover over high-value vehicle.",
    imageUrl: "/assets/crawler/hl_8.jpg",
  },
  {
    id: "hl-9",
    title: "Ferrari Supercar Container Devanning",
    category: "motorsports",
    categoryLabel: "Events & Motorsports",
    description: "Careful container devanning and rollout of Ferrari competition vehicle.",
    imageUrl: "/assets/crawler/hl_9.jpg",
  },
];
