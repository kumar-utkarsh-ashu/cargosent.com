"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SolutionItem } from "@/data/solutions";
import { CheckCircle2, ArrowRight, RotateCw } from "lucide-react";

interface FlipCardProps {
  solution: SolutionItem;
}

export default function FlipCard({ solution }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="perspective-1000 w-full h-[410px] group cursor-pointer select-none"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full duration-700 transform-style-3d transition-transform shadow-sm hover:shadow-md rounded-2xl ${
          isFlipped ? "rotate-y-180" : "group-hover:[transform:rotateY(180deg)]"
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:border-brand/50 transition-colors text-center">
          <div className="flex flex-col items-center">
            {/* Authentic Crawled Icon */}
            <div className="relative w-16 h-16 mb-5 flex items-center justify-center">
              <Image
                src={solution.iconPath}
                alt={solution.title}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
              {solution.title}
            </h3>

            <p className="text-sm font-semibold text-brand mb-4 leading-relaxed">
              {solution.punchline}
            </p>

            <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed">
              {solution.summary}
            </p>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400 font-medium">
            <span className="flex items-center">
              <RotateCw className="w-3.5 h-3.5 mr-1.5 text-brand" />
              Hover or tap to reveal details
            </span>
            <span className="text-brand font-semibold flex items-center">
              Details
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </span>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-brand text-white rounded-2xl p-7 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
              <h4 className="text-xl font-bold tracking-tight text-white">
                {solution.title}
              </h4>
              <span className="text-xs bg-white/15 px-2.5 py-0.5 rounded text-slate-200">
                Core Capabilities
              </span>
            </div>

            <ul className="space-y-2.5 text-xs text-slate-200 mb-4 text-left">
              {solution.capabilities.map((cap, idx) => (
                <li key={idx} className="flex items-start">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span className="leading-tight">{cap}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4 border-t border-white/15 flex flex-col gap-2">
            <Link
              href={`/contact?service=${solution.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full text-center py-2 px-4 rounded-lg bg-white text-brand font-bold text-xs hover:bg-slate-100 transition-colors shadow-sm"
            >
              Inquire for {solution.title}
            </Link>
            <Link
              href={`/solutions#${solution.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="w-full text-center py-1.5 px-4 text-xs text-slate-300 hover:text-white transition-colors flex items-center justify-center"
            >
              Read More
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
