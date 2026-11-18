import React from "react";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import { companyData } from "@/data/company";

export default function LeadBanner() {
  return (
    <section className="bg-brand text-white py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-15" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-white/10 px-3 py-1 rounded-full inline-block mb-4">
              Direct Shanghai Forwarding Desk
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Optimize Your Global Supply Chain?
            </h2>
            <p className="mt-3 text-base text-slate-200">
              Connect with our operations specialists for tailored routing, air/ocean charter
              schedules, and white-glove event logistics.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold text-brand bg-white hover:bg-slate-100 transition-colors shadow-lg"
            >
              Speak to a Freight Specialist
              <ArrowRight className="ml-2 w-4 h-4 text-brand" />
            </Link>
            <a
              href={`tel:${companyData.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-lg text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-colors"
            >
              <PhoneCall className="mr-2 w-4 h-4 text-blue-300" />
              {companyData.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
