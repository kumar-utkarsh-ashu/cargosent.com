import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { solutionsData } from "@/data/solutions";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-brand">
      {/* Upper Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand & Overview */}
          <div className="space-y-6">
            <div className="relative h-12 w-56">
              <Image
                src="/assets/logo-horizontal-white.png"
                alt="Cargosent Logistics Solutions"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Specialist Freight Forwarder established in 2017 based in Shanghai, China.
              Offering tailored global logistics solutions across air, ocean, road, rail, warehousing, and event cargo.
            </p>
            <div className="pt-2">
              <span className="text-xs text-slate-400 uppercase tracking-widest block mb-1">
                Corporate Social
              </span>
              <p className="text-lg font-bold text-white tracking-wider">
                Follow us <span className="text-blue-400">{companyData.hashtag}</span>
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-3 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition-colors">
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Operations Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Logistics Solutions */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-3 mb-6">
              Our Solutions
            </h3>
            <ul className="space-y-3 text-sm">
              {solutionsData.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/solutions#${item.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-3 mb-6">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                <a
                  href={`tel:${companyData.phone}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-blue-400 flex-shrink-0" />
                <a
                  href={`mailto:${companyData.email}`}
                  className="hover:text-white transition-colors"
                >
                  {companyData.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 space-y-3 md:space-y-0">
          <p className="tracking-wider">{companyData.copyright}</p>
          <div className="flex space-x-6">
            <span>Specialist Freight Forwarding</span>
            <span>Worldwide Partner Network</span>
            <span>Shanghai, China</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
