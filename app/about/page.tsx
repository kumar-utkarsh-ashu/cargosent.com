import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData } from "@/data/company";
import LeadBanner from "@/components/home/LeadBanner";
import {
  ShieldCheck,
  Globe2,
  Clock,
  Award,
  Users2,
  Building2,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "About Us | Cargosent Logistics",
  description:
    "Learn about Cargosent, a specialist Freight Forwarder established in 2017 based in Shanghai, China.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header Banner */}
      <section className="bg-brand py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Established 2017 in Shanghai, China
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Cargosent Logistics
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            More than moving cargo from A to B. We care about your cargo, support your business
            expansion, and build lasting partnerships.
          </p>
        </div>
      </section>

      {/* Corporate Story & Ethos */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand bg-slate-100 px-3 py-1 rounded-full">
                Our Corporate Heritage
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Specialist Freight Forwarding Backed by Proven Leadership
              </h2>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Hi, we are Cargosent, a specialist Freight Forwarder established in 2017 based in
                Shanghai, China, dedicated to offering quality logistics services and tailored
                solutions for our customers. With a close partnership agreement through our
                worldwide partners, we provide our customers with substantial global reach - no
                matter when or where in the world it needs to be, we keep you fully covered.
              </p>
              <p className="text-base text-slate-700 leading-relaxed font-normal">
                Our leadership team and operations staff have been working together for over 20+
                years. We are extremely proud of the longevity with our customers; you can always
                count on Cargosent to provide innovative, competitive, and cost-effective ways to
                meet your requirements.
              </p>
              <div className="bg-slate-50 border-l-4 border-brand p-5 rounded-r-xl">
                <p className="text-sm font-semibold text-slate-800 italic">
                  &quot;At Cargosent, we believe there is a better way to do logistics: it is more
                  than moving cargo from A to B. We are not just moving items, we care about your
                  cargo and exceed our customers growth - we are building lasting
                  relationships!&quot;
                </p>
              </div>
            </div>

            {/* Right Column: Authentic About Visual */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="relative h-64 w-full bg-slate-900">
                <Image
                  src="/assets/crawler/hero-cargo.jpg"
                  alt="Cargosent Operations Shanghai"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-8 space-y-4 text-sm">
                <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                  Company Vital Statistics
                </h3>
                <div className="flex items-center space-x-3">
                  <Building2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Headquarters:</span>
                    <span className="text-slate-600">{companyData.headquarters}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-brand flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Year Established:</span>
                    <span className="text-slate-600">2017</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Team Experience:</span>
                    <span className="text-slate-600">Over 20+ years working collaboratively</span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe2 className="w-5 h-5 text-brand flex-shrink-0" />
                  <div>
                    <span className="font-bold text-slate-900 block">Global Reach:</span>
                    <span className="text-slate-600">Worldwide partner network across Asia, Europe, Americas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Values */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Our Core Operational Values
            </h2>
            <p className="mt-4 text-base text-slate-600">
              The foundational pillars guiding every booking, airway bill, and ocean bill of lading.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Integrity and Care</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Treating every shipment with obsessive attention, ensuring cargo travels safely
                under optimal conditions from pickup to delivery.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand mb-6">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Tailored Precision</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                No rigid, one-size-fits-all contracts. We design bespoke multimodal routes that
                match your specific commercial deadlines and budgets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Global Connectivity</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Leveraging long-standing airline, ocean carrier, and customs broker partnerships
                to keep your freight moving without bureaucratic bottlenecks.
              </p>
            </div>
          </div>

          <div className="mt-14 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg text-sm font-bold text-white bg-brand hover:bg-brand-dark transition-colors shadow-sm"
            >
              Discuss Your Cargo Requirements
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <LeadBanner />
    </div>
  );
}
