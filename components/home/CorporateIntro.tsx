import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Globe2, Compass } from "lucide-react";

export default function CorporateIntro() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-brand bg-slate-100 px-3 py-1 rounded-full">
              <Compass className="w-3.5 h-3.5 text-brand" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              A Specialist Freight Forwarder Dedicated to Tailored Logistics Excellence
            </h2>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Hi, we are Cargosent, a specialist Freight Forwarder established in 2017 based in
              Shanghai, China, dedicated to offering quality logistics services and tailored
              solutions for our customers. With a close partnership agreement through our worldwide
              partners, we provide our customers with substantial global reach - no matter when or
              where in the world it needs to be, we keep you fully covered.
            </p>

            <p className="text-base text-slate-700 leading-relaxed font-normal">
              Our leadership team and operations staff have been working together for over 20+ years.
              We are extremely proud of the longevity with our customers; you can always count on
              Cargosent to provide innovative, competitive, and cost-effective ways to meet your
              requirements.
            </p>

            <blockquote className="border-l-4 border-brand pl-4 py-1 text-slate-800 font-semibold italic bg-slate-50 rounded-r-lg">
              &quot;At Cargosent, we believe there is a better way to do logistics: it is more than
              moving cargo from A to B. We are not just moving items, we care about your cargo and
              exceed our customers growth - we are building lasting relationships!&quot;
            </blockquote>

            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-white bg-brand hover:bg-brand-dark transition-all duration-200 shadow-sm"
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-brand hover:text-brand-dark transition-colors"
              >
                Connect with our Shanghai Office
              </Link>
            </div>
          </div>

          {/* Right Visual Pillars Block */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-6 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-4">
              Our Operational Commitments
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/60 border border-blue-200 flex items-center justify-center flex-shrink-0 text-brand">
                  <Globe2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Substantial Global Reach
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Direct agency connectivity covering major airlines, ocean terminals, and
                    intermodal transport corridors worldwide.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/60 border border-blue-200 flex items-center justify-center flex-shrink-0 text-brand">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    20+ Years Team Longevity
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    A cohesive, battle-tested forwarding dispatch team managing risk, customs
                    telemetry, and precision delivery.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100/60 border border-blue-200 flex items-center justify-center flex-shrink-0 text-brand">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900">
                    Tailored Routing Architectures
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Custom chartering, multi-modal handovers, and white-glove specialized event
                    supervision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
