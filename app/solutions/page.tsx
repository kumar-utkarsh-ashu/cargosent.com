import React from "react";
import Image from "next/image";
import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import LeadBanner from "@/components/home/LeadBanner";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Solutions | Cargosent Logistics Solutions",
  description:
    "Explore Cargosent forwarding solutions: Air Freight, Ocean Freight, Road Freight, Events and Motorsports, Warehousing, and Railway Freight.",
};

export default function SolutionsPage() {
  return (
    <div>
      {/* Page Hero Banner */}
      <section className="bg-brand py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Multimodal Forwarding Architecture
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Logistics Solutions
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Engineered for global reach, speed-critical consignments, and complex commercial supply
            chains.
          </p>
        </div>
      </section>

      {/* Quick Jump Anchor Bar */}
      <div className="sticky top-20 z-40 bg-slate-100 border-b border-slate-200 py-3 overflow-x-auto shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center flex-wrap gap-2 sm:gap-3">
          {solutionsData.map((sol) => (
            <a
              key={sol.id}
              href={`#${sol.slug}`}
              className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white text-slate-700 hover:text-brand hover:bg-slate-50 border border-slate-200 transition-colors"
            >
              {sol.title}
            </a>
          ))}
        </div>
      </div>

      {/* Solution Detail Modules */}
      <div className="py-20 bg-white divide-y divide-slate-100">
        {solutionsData.map((solution, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <section
              key={solution.id}
              id={solution.slug}
              className="py-16 sm:py-20 scroll-mt-36"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Visual Photo & Details Card */}
                  <div className={`lg:col-span-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                      {/* Authentic Solution Photography - Clean Photo without Icon Overlay */}
                      <div className="relative h-64 w-full bg-slate-800">
                        <Image
                          src={solution.photoPath}
                          alt={solution.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-8 text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-sm font-semibold text-brand italic mb-4">
                          &quot;{solution.punchline}&quot;
                        </p>
                        <p className="text-sm text-slate-600 leading-relaxed mb-6">
                          {solution.summary}
                        </p>
                        <Link
                          href={`/contact?service=${solution.slug}`}
                          className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-xs font-bold text-white bg-brand hover:bg-brand-dark transition-colors shadow-sm"
                        >
                          Inquire for {solution.title}
                          <ArrowRight className="ml-2 w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Key Capabilities List */}
                  <div className={`lg:col-span-7 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                      Operational Capabilities
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold text-slate-900 tracking-tight">
                      Specialized Forwarding Scope: {solution.title}
                    </h2>
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      Every consignor receives dedicated logistics coordination with transparent
                      status communication and direct customs facilitation.
                    </p>

                    <div className="mt-8 space-y-4">
                      {solution.capabilities.map((cap, capIdx) => (
                        <div
                          key={capIdx}
                          className="flex items-start p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors"
                        >
                          <CheckCircle2 className="w-5 h-5 mr-3.5 text-brand flex-shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-slate-800 leading-normal">
                            {cap}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <LeadBanner />
    </div>
  );
}
