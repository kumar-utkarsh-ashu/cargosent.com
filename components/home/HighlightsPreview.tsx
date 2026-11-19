"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { highlightsData, HighlightItem } from "@/data/highlights";
import { ArrowRight, Maximize2, X } from "lucide-react";

export default function HighlightsPreview() {
  const [selectedPhoto, setSelectedPhoto] = useState<HighlightItem | null>(null);
  const items = highlightsData.slice(0, 9);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand bg-blue-50 border border-blue-200 px-3.5 py-1 rounded-full inline-block">
            Operations Portfolio
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Latest Highlights
          </h2>
          <p className="mt-3 text-sm text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Behind the scenes of complex, high-stakes End-to-End cargo handling from ocean, air, road
            <br className="hidden sm:inline" /> to event venues.
          </p>
        </div>

        {/* 3x3 Highlights Grid - Clean Photo Grid per Client Directive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
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

              {/* Hover Zoom Indicator */}
              <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm p-2 rounded-full text-white">
                <Maximize2 className="w-4 h-4" />
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

            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-3">
              {selectedPhoto.categoryLabel}
            </span>

            <div className="relative h-96 w-full rounded-xl overflow-hidden mb-3 border border-slate-800">
              <Image
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                fill
                className="object-contain bg-slate-950"
              />
            </div>

            <p className="text-sm font-semibold tracking-wider text-blue-400">
              #CARGOSENT
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
