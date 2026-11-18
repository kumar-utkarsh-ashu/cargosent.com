import React from "react";
import { metricsData } from "@/data/metrics";
import { Calendar, Users, Layers, Award } from "lucide-react";

export default function MetricsBar() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Calendar className="w-6 h-6 text-brand" />;
      case 1:
        return <Users className="w-6 h-6 text-brand" />;
      case 2:
        return <Layers className="w-6 h-6 text-brand" />;
      case 3:
        return <Award className="w-6 h-6 text-brand" />;
      default:
        return <Award className="w-6 h-6 text-brand" />;
    }
  };

  return (
    <section className="relative z-20 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {metricsData.map((item, idx) => (
            <div
              key={item.id}
              className={`flex items-center space-x-4 ${idx !== 0 ? "pt-6 sm:pt-0 sm:pl-8" : ""}`}
            >
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center flex-shrink-0 shadow-inner">
                {getIcon(idx)}
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight block">
                  {item.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-brand block mt-0.5">
                  {item.label}
                </span>
                <span className="text-xs text-slate-500 block mt-0.5">
                  {item.subtext}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
