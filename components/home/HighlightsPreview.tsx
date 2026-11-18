"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { highlightsData, HighlightItem } from "@/data/highlights";
import { ArrowRight, Maximize2, X } from "lucide-react";

export default function HighlightsPreview() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<HighlightItem | null>(null);

  const filterTabs = [
    { key: "all", label: "All Highlights" },
    { key: "motorsports", label: "Events & Motorsports" },
    { key: "air", label: "Air Cargo" },
    { key: "maritime", label: "Ocean Cargo" },
    { key: "freight", label: "Heavy Linehaul" },
  ];

  const filteredItems =
    activeTab === "all"
      ? highlightsData
      : highlightsData.filter((item) => item.category === activeTab);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full">
            Operations Portfolio
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            LATEST HIGHLIGHTS
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            Authentic operational photography from our Shanghai airside ramp handovers, maritime
            crane lifts, and race circuit logistics.
          </p>

          {/* Filter Bar */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  activeTab === tab.key
                    ? "bg-brand text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3x3 Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group relative bg-slate-900 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-[4/3]"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-brand/90 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/20">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-white/20 backdrop-blur-sm p-2 rounded-full text-white">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 inset-x-4 z-10">
                <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 line-clamp-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Link */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm font-bold text-brand hover:text-brand-dark transition-colors group"
          >
            <span>View More</span>
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full p-6 text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
              {selectedPhoto.categoryLabel}
            </span>
            <h3 className="text-xl font-bold mb-4">{selectedPhoto.title}</h3>

            <div className="relative h-96 w-full rounded-xl overflow-hidden mb-4 border border-slate-800">
              <Image
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                fill
                className="object-contain bg-slate-950"
              />
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedPhoto.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
