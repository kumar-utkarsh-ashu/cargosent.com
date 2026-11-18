"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { companyData } from "@/data/company";
import { solutionsData } from "@/data/solutions";
import {
  Phone,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: initialService,
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    // Basic frontend verification
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSuccessMessage(
          "Thank you! Your inquiry has been sent to our Shanghai operations desk. A specialist will reply shortly."
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          message: "",
        });
      } else {
        setErrorMessage(data.error || "Failed to submit inquiry. Please try again.");
      }
    } catch {
      setErrorMessage("Network error connecting to dispatch server. Please call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {successMessage && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start space-x-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <span>{successMessage}</span>
        </div>
      )}

      {errorMessage && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Work Email *
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="john@company.com"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Telephone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+86 138 1829 2991"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Global Trade Ltd"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          Required Forwarding Solution
        </label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm bg-white"
        >
          <option value="">Select Service Mode (Optional)</option>
          {solutionsData.map((s) => (
            <option key={s.id} value={s.slug}>
              {s.title}
            </option>
          ))}
          <option value="general">Multimodal / General Freight</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          Cargo Details & Project Summary *
        </label>
        <textarea
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder="Please outline cargo weight, dimensions, origin, destination, and target transit deadlines..."
          className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand text-sm"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center px-8 py-4 rounded-lg text-sm font-bold text-white bg-brand hover:bg-brand-dark transition-all duration-200 shadow-md disabled:opacity-60"
      >
        {loading ? (
          <span>Transmitting Inquiry...</span>
        ) : (
          <>
            <span>Send Cargo Inquiry</span>
            <Send className="ml-2 w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-xs text-slate-400 text-center">
        Direct inquiry transmitted to Cargosent Shanghai Operations Desk. No marketing spam.
      </p>
    </form>
  );
}

export default function ContactPage() {
  return (
    <div>
      {/* Page Hero Banner */}
      <section className="bg-brand py-16 sm:py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-300 bg-white/10 px-3.5 py-1 rounded-full inline-block mb-4">
            Connect With Our Freight Desk
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in Touch with Cargosent
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Our Shanghai headquarters and worldwide forwarding partners are ready to assist with
            your shipment routing and customs requirements.
          </p>
        </div>
      </section>

      {/* Main Form and Corporate Contacts Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Corporate Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-brand bg-slate-100 px-3 py-1 rounded-full">
                  Direct Communications
                </span>
                <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Shanghai Operations Headquarters
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Reach out directly by phone, email, or schedule a logistics consultation with
                  our team.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/60 border border-blue-200 flex items-center justify-center flex-shrink-0 text-brand">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      Telephone
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      <a href={`tel:${companyData.phone}`} className="hover:text-brand transition-colors">
                        {companyData.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100/60 border border-blue-200 flex items-center justify-center flex-shrink-0 text-brand">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      Email Address
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      <a
                        href={`mailto:${companyData.email}`}
                        className="hover:text-brand transition-colors"
                      >
                        {companyData.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-brand text-white shadow-md">
                <span className="text-xs uppercase tracking-widest text-blue-300 font-bold block mb-1">
                  Tag Us Online
                </span>
                <p className="text-2xl font-black tracking-wider">{companyData.hashtag}</p>
                <p className="text-xs text-slate-300 mt-1">
                  Connect with our global network on LinkedIn and trade channels.
                </p>
              </div>
            </div>

            {/* Right Column: Lead Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-lg">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                  Submit a Cargo Inquiry
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Please provide details about your consignment and our freight desk will prepare
                  a tailored proposal.
                </p>
              </div>

              <Suspense
                fallback={
                  <div className="py-12 text-center text-sm text-slate-400">
                    Loading inquiry form...
                  </div>
                }
              >
                <ContactForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
