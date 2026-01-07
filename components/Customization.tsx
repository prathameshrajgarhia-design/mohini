
import React from 'react';

const options = [
  { category: "Shade Density", specs: ["35% to 90% Filtration", "Micron Accuracy"] },
  { category: "Material GSM", specs: ["40 GSM to 220+ GSM", "Heavy-Duty Options"] },
  { category: "Pigmentation", specs: ["Custom Color Matching Ability", "Custom UV Stabilization"] },
  { category: "Dimensioning", specs: ["Custom Widths (up to 6m)", "Reinforced Edging"] },
];

export const Customization: React.FC = () => {
  return (
    <section id="customization" className="py-16 bg-[#FAF7F2] text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-[14px] font-black uppercase tracking-[0.5em] text-emerald-500 mb-4 block">Configuration</span>
            <h3 className="text-4xl font-bold tracking-tight">The Customization Matrix</h3>
          </div>
          <p className="text-stone-400 max-w-sm text-sm font-light leading-relaxed">
            Tailoring material density and chemical stability for high-exposure environments and customized needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {options.map((opt, idx) => (
            <div key={idx} className="border-t border-stone-800 pt-8">
              <h4 className="text-emerald-500 font-bold mb-4 text-[10px] uppercase tracking-widest">{opt.category}</h4>
              <ul className="space-y-2">
                {opt.specs.map((spec, sIdx) => (
                  <li key={sIdx} className="text-stone-300 text-[13px] font-light flex items-center">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3 opacity-50"></span>
                    {spec}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
