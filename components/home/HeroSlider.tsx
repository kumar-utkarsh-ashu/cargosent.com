"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

interface Slide {
  id: number;
  badge: string;
  headlinePrefix: string;
  headlineHighlight: string;
  headlineSuffix: string;
  subhead: string;
  imagePath: string;
}

const slides: Slide[] = [
  {
    id: 1,
    badge: "Specialist Freight Forwarder Established 2017",
    headlinePrefix: "Your",
    headlineHighlight: "CARGO",
    headlineSuffix: "We SENT",
    subhead: "Headquartered in Shanghai, China, offering tailored global forwarding solutions across air, ocean, road, rail, and specialized event cargo.",
    imagePath: "/assets/crawler/hero-cargo.jpg",
  },
  {
    id: 2,
    badge: "Specialist Freight Forwarder Established 2017",
    headlinePrefix: "Your",
    headlineHighlight: "CARGO",
    headlineSuffix: "We SENT",
    subhead: "Headquartered in Shanghai, China, offering tailored global forwarding solutions across air, ocean, road, rail, and specialized event cargo.",
    imagePath: "/assets/crawler/tas_truck.jpg",
  },
  {
    id: 3,
    badge: "Specialist Freight Forwarder Established 2017",
    headlinePrefix: "Your",
    headlineHighlight: "CARGO",
    headlineSuffix: "We SENT",
    subhead: "Headquartered in Shanghai, China, offering tailored global forwarding solutions across air, ocean, road, rail, and specialized event cargo.",
    imagePath: "/assets/crawler/sol_s1.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section
      className="relative w-full h-[600px] sm:h-[700px] bg-slate-950 overflow-hidden flex items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides */}
      {slides.map((slide, index) => {
        const isActive = index === current;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.imagePath}
              alt={slide.headlineHighlight}
              fill
              className="object-cover object-center"
              priority={index === 0}
            />

            {/* Cinematic Gradient Overlays for Guaranteed Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

            {/* Slide Content */}
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-left">
                <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-blue-300 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-1.5 rounded-full mb-6">
                  {slide.badge}
                </span>

                <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-none mb-6">
                  {slide.headlinePrefix}{" "}
                  <span className="text-blue-400 underline decoration-blue-500 underline-offset-8">
                    {slide.headlineHighlight}
                  </span>{" "}
                  {slide.headlineSuffix}
                </h1>

                <p className="text-base sm:text-lg text-slate-200 mb-8 leading-relaxed font-normal">
                  {slide.subhead}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <a
                    href="#solutions"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-brand hover:bg-brand-dark border border-brand-accent transition-all duration-200 shadow-xl hover:shadow-2xl"
                  >
                    Explore Solutions
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-white/15 hover:bg-white/25 border border-white/20 backdrop-blur-md transition-all duration-200"
                  >
                    Contact Our Team
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Controls */}
      <div className="absolute inset-y-0 left-4 z-20 hidden sm:flex items-center">
        <button
          type="button"
          onClick={prevSlide}
          className="p-3 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white backdrop-blur-md border border-white/15 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-4 z-20 hidden sm:flex items-center">
        <button
          type="button"
          onClick={nextSlide}
          className="p-3 rounded-full bg-slate-950/40 hover:bg-slate-950/80 text-white backdrop-blur-md border border-white/15 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Indicators & Pause Control */}
      <div className="absolute bottom-8 inset-x-0 z-20 flex justify-center items-center space-x-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setCurrent(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === current ? "w-8 h-2 bg-blue-400" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="ml-3 p-1.5 rounded-full text-white/50 hover:text-white transition-colors"
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
        >
          {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
        </button>
      </div>
    </section>
  );
}
