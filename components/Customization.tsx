
import React from 'react';

const options = [
  { category: "Shade Density", specs: ["35% to 90% Filtration", "Micron Accuracy"] },
  { category: "Material GSM", specs: ["40 GSM to 220+ GSM", "Heavy-Duty Options"] },
  { category: "Pigmentation", specs: ["Custom Color Matching Ability", "Custom UV Stabilization"] },
  { category: "Dimensioning", specs: ["Custom Widths (up to 6m)", "Reinforced Edging"] },
];

export const Customization: React.FC = () => {
  return (
    <section id="customization" className="bg-[#F2EFE8] py-24 text-stone-600">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 mb-3 block">Configuration</span>
            <h3 className="text-4xl font-bold tracking-tight text-slate-900">The Customization Matrix</h3>
          </div>
          <p className="text-stone-600 max-w-sm text-base leading-relaxed">
            Tailoring material composition and chemistry for various environments and customized needs.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {options.map((opt, idx) => (
            <div key={idx} className="border-t border-stone-500 pt-8">
              <h4 className="text-stone-600 font-semibold mb-4 text-xs uppercase tracking-wider">{opt.category}</h4>
              <ul className="space-y-2">
                {opt.specs.map((spec, sIdx) => (
                  <li key={sIdx} className="text-stone-600 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-3"></span>
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
