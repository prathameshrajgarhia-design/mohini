
import React from 'react';

const reasons = [
  {
    title: "Batch Stability",
    description: "In-house control over the entire supply chain guarantees zero deviation across bulk shipments."
  },
  {
    title: "Engineering First",
    description: "Every net is customized for specific tensile requirements and climate conditions."
  },
  {
    title: "Direct Logistics",
    description: "Factory-direct pricing and simplified export logistics for high-volume procurement."
  },
  {
    title: "Testing Rigor",
    description: "Standardized quality checks for UV stability, tear resistance, and color accuracy."
  }
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-px bg-stone-200 border border-stone-200 shadow-sm">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-white p-8 group hover:bg-stone-950 transition-colors duration-500">
              <span className="text-[10px] font-bold text-emerald-600 mb-4 block group-hover:text-emerald-400">0{idx + 1}</span>
              <h3 className="text-sm font-black uppercase tracking-widest text-stone-900 mb-3 group-hover:text-white">{item.title}</h3>
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
