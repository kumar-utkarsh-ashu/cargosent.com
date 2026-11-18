export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Why choose Cargosent over traditional freight forwarders?",
    answer: "Our leadership and operations teams have worked closely together for over 20+ years. We believe logistics is more than moving cargo from A to B. We provide hands-on oversight, tailored solutions, and responsive communication, functioning as a true extension of your business.",
  },
  {
    id: "faq-2",
    question: "What geographic trade lanes does Cargosent cover?",
    answer: "Headquartered in Shanghai, China, Cargosent operates through a robust global network of trusted logistics partners spanning the Asia-Pacific region, Europe, the Americas, and the Middle East, covering major airline and ocean carrier trade lanes.",
  },
  {
    id: "faq-3",
    question: "How does Cargosent handle sensitive and specialized event cargo?",
    answer: "We have dedicated teams specializing in motorsports, fine art, and international exhibitions. We provide on-site circuit and paddock coordination, climate-controlled container handling, ATA Carnet temporary import processing, and 24/7 proactive supervision.",
  },
  {
    id: "faq-4",
    question: "How do I request a tailored logistics consultation?",
    answer: "You can submit an inquiry through our online contact form or reach our Shanghai operations desk directly by telephone or email. Our freight specialists assess your cargo dimensions, routing parameters, and schedule requirements to formulate a customized solution.",
  },
];
