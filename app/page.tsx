import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import HighlightsPreview from "@/components/home/HighlightsPreview";
import SolutionsGrid from "@/components/home/SolutionsGrid";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import LeadBanner from "@/components/home/LeadBanner";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HighlightsPreview />
      <SolutionsGrid />
      <WhyChooseUs />
      <LeadBanner />
    </>
  );
}
