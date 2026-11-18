"use client";

import React, { useState } from "react";
import Image from "next/image";
import { highlightsData, HighlightItem } from "@/data/highlights";
import LeadBanner from "@/components/home/LeadBanner";
import { X, Maximize2 } from "lucide-react";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<HighlightItem | null>(null);

  const categories = [
    { key: "all", label: "All Fleet & Operations" },
    { key: "motorsports", label: "Events & Motorsports" },
    { key: "air", label: "Air Cargo & Ramp" },
    { key: "maritime", label: "Maritime & Ports" },
    { key: "freight", label: "Heavy Linehaul" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? highlightsData
      : highlightsData.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Page Hero Banner */}
      <section className="bg-brand py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Operations & Fleet Visuals
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Cargosent Operations Gallery
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            A visual showcase of our global aircraft ground handling, maritime container yards,
            express highway fleet, and motorsport logistics.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <div className="py-8 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              type="button"
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all ${
                activeCategory === cat.key
                  ? "bg-brand text-white shadow-sm"
                  : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Photo Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className="group relative bg-slate-100 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300 aspect-[4/3] border border-slate-200"
              >
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover zoom trigger icon */}
                <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm p-2 rounded-full text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      <LeadBanner />
    </div>
  );
}
