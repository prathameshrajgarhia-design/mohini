
import React from 'react';

const reasons = [
  {
    title: "Batch Stability",
    description: "In-house process control ensures uniform tensile strength, shade consistency, and performance across large-volume shipments."
  },
  {
    title: "Engineering-Led Manufacturing",
    description: "Every net is engineered to specification—tensile strength, mesh density, UV rating and climate conditions—before production begins."
  },
  {
    title: "Factory-Direct Supply",
    description: "Direct-from-manufacturer pricing, consolidated dispatch, and export-ready documentation for efficient global procurement."
  },
  {
    title: "Single-Facility Accountability",
    description: "Manufacturing under one roof eliminates handoffs, delays, and quality dilution common in fragmented supply chains."
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-16 pb-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-px bg-stone-200 border border-stone-200 shadow-sm">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-white p-8 group hover:bg-stone-950 transition-colors duration-500">
              <span className="text-[10px] font-bold text-emerald-600 mb-4 block group-hover:text-emerald-400">0{idx + 1}</span>
              <div className="min-h-[48px] mb-3">
                <h3 className="text-[14px] font-black uppercase tracking-widest text-stone-900 group-hover:text-white">
                {item.title}
                </h3>
              </div>

              <p className="text-stone-500 text-xs leading-relaxed group-hover:text-stone-400 font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
