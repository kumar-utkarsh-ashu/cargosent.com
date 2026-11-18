"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { companyData } from "@/data/company";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
      {/* Top micro announcement bar */}
      <div className="bg-brand-dark text-slate-300 text-xs py-1.5 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span>Specialist Freight Forwarder Established 2017</span>
            <span>Headquartered in Shanghai, China</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone className="w-3.5 h-3.5 mr-1 text-slate-300" />
              {companyData.phone}
            </span>
            <span className="text-slate-400">|</span>
            <span className="font-semibold text-white tracking-wider">{companyData.hashtag}</span>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0 group">
            <div className="relative h-11 sm:h-12 w-52 sm:w-60">
              <Image
                src="/assets/logo-horizontal.png"
                alt="Cargosent Logistics Solutions"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-colors py-2 relative ${
                    isActive
                      ? "text-brand font-bold"
                      : "text-slate-700 hover:text-brand"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-brand hover:bg-brand-dark transition-all duration-200 shadow-sm hover:shadow"
            >
              Inquire Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-brand hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive
                      ? "bg-slate-100 text-brand font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-brand"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 rounded-md text-sm font-semibold text-white bg-brand hover:bg-brand-dark shadow-sm"
            >
              Inquire Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          <div className="pt-2 text-xs text-slate-500 text-center">
            <span>Direct Dispatch: {companyData.phone}</span>
          </div>
        </div>
      )}
    </header>
  );
}
