import React from "react";
import { solutionsData } from "@/data/solutions";
import FlipCard from "./FlipCard";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsGrid() {
  return (
    <section id="solutions" className="py-24 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Our Solutions
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comprehensive Multimodal Forwarding
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Tailored logistics infrastructure engineered for global scale, speed-critical
            consignments, and complex supply chain corridors.
          </p>
        </div>

        {/* 3D Flip Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((item) => (
            <FlipCard key={item.id} solution={item} />
          ))}
        </div>

        {/* Bottom Helper */}
        <div className="mt-16 text-center">
          <p className="text-sm text-slate-600 mb-4">
            Need a custom combination of air, sea, and overland warehousing?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center text-sm font-bold text-brand hover:text-brand-dark transition-colors"
          >
            Request a dedicated supply chain consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
