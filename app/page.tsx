import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import MetricsBar from "@/components/home/MetricsBar";
import CorporateIntro from "@/components/home/CorporateIntro";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import HighlightsPreview from "@/components/home/HighlightsPreview";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LeadBanner from "@/components/home/LeadBanner";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <MetricsBar />
      <CorporateIntro />
      <SolutionsGrid />
      <HighlightsPreview />
      <WhyChooseUs />
      <LeadBanner />
    </>
  );
}
