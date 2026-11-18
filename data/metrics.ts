export interface MetricItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
}

export const metricsData: MetricItem[] = [
  {
    id: "m-1",
    value: "2017",
    label: "Established",
    subtext: "Founded in Shanghai, China",
  },
  {
    id: "m-2",
    value: "20+ Years",
    label: "Team Collaboration",
    subtext: "Collective leadership experience",
  },
  {
    id: "m-3",
    value: "6 Modes",
    label: "Forwarding Solutions",
    subtext: "Air, ocean, road, rail, events, storage",
  },
  {
    id: "m-4",
    value: "100%",
    label: "Tailored Care",
    subtext: "Long-term client partnerships",
  },
];
