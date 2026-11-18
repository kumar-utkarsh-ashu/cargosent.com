"use client";

import React, { useState } from "react";
import Image from "next/image";
import { faqsData } from "@/data/faqs";
import { ChevronDown, CheckCircle2, Shield, Clock, Award } from "lucide-react";
import Link from "next/link";

export default function WhyChooseUs() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Visual Card Featuring Authentic Fleet Image */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand to-brand-dark rounded-3xl overflow-hidden text-white shadow-xl relative">
            {/* Background Image with Dark Navy Wash */}
            <div className="relative h-64 w-full">
              <Image
                src="/assets/crawler/tas_truck.jpg"
                alt="Cargosent Continental Freight Operations"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand/70 to-transparent" />
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white bg-brand/90 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
                  Global Logistics Capability
                </span>
              </div>
            </div>

            <div className="p-8 sm:p-10 pt-4">
              <h3 className="text-2xl font-extrabold text-white mb-4 leading-tight">
                A Forwarding Partner You Can Rely On Every Mile
              </h3>

              <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                Direct airline and shipping line contracting, proactive exception handling, and
                hands-on cargo care from our Shanghai dispatch center.
              </p>

              <div className="space-y-3.5 border-t border-white/15 pt-6 text-sm text-slate-200">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span>Single Point of Contact for All Trade Lanes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-blue-300 flex-shrink-0" />
                  <span>Round-the-Clock Time-Critical Dispatch</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-5 h-5 text-indigo-300 flex-shrink-0" />
                  <span>Strict Cargo Integrity & Minimal Handling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-amber-300 flex-shrink-0" />
                  <span>Proven 20+ Year Operations Heritage</span>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15">
                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold text-brand bg-white hover:bg-slate-100 transition-colors shadow-sm"
                >
                  Inquire With a Specialist
                </Link>
              </div>
            </div>
          </div>

          {/* Right Accordion Block */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-brand bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                Frequently Addressed Inquiries
              </span>
              <h2 className="mt-4 text-3xl font-extrabold text-slate-900 tracking-tight">
                Clear Answers to Forwarding Questions
              </h2>
            </div>

            <div className="divide-y divide-slate-200 border-t border-b border-slate-200">
              {faqsData.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="py-5">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(faq.id)}
                      className="w-full flex justify-between items-center text-left focus:outline-none group"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`text-base sm:text-lg font-bold transition-colors pr-6 ${
                          isOpen ? "text-brand" : "text-slate-800 group-hover:text-brand"
                        }`}
                      >
                        {faq.question}
                      </span>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200 flex-shrink-0 ${
                          isOpen ? "bg-brand text-white rotate-180" : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    {isOpen && (
                      <div className="mt-4 pr-12 text-sm text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
