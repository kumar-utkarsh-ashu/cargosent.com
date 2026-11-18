import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import MetricsBar from "@/components/home/MetricsBar";
import CorporateIntro from "@/components/home/CorporateIntro";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HighlightsPreview from "@/components/home/HighlightsPreview";
import LeadBanner from "@/components/home/LeadBanner";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <MetricsBar />
      <CorporateIntro />
      <SolutionsGrid />
      <WhyChooseUs />
      <HighlightsPreview />
      <LeadBanner />
    </>
  );
}
