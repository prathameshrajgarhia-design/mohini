
import React from 'react';
import { motion } from 'framer-motion';

const expertiseItems = [
  {
    label: "Color & Quality Matching",
    detail: "Spectrophotometric calibration and batch-level validation deliver consistent pigment accuracy and repeatable shade matching across production runs."
  },
  {
    label: "UV Stability Management",
    detail: "Proprietary additive formulations and controlled extrusion processes ensure long-term UV resistance in high-exposure and equatorial operating environments."
  },
  {
    label: "Tensile Resilience",
    detail: "Optimized knit geometries tested for multi-directional load distribution, wind resistance, and long-term mechanical durability."
  },
  {
    label: "Industrial Polymer Synthesis",
    detail: "Direct control over high-density polyethylene (HDPE) synthesis enables precise material properties, structural consistency, and extended service life."
  }
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="py-16 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[14px] font-black uppercase tracking-[0.2em] text-emerald-900 mb-6 block">Capabilities</span>
            <h3 className="text-3xl font-bold text-stone-900 mb-6 leading-tight">Precision Knitting, Engineered In-House</h3>
            <p className="text-stone-500 mb-10 text-base font-light leading-relaxed">
              Our manufacturing unit bridges the gap between material science and field application. From colour accuracy to tensile resilience to shade requirements.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-12">
              {expertiseItems.map((item, idx) => (
                <div key={idx} className="group border-l border-stone-100 pl-6 py-2 hover:border-emerald-600 transition-colors">
                  <h4 className="font-bold text-stone-900 text-[11px] uppercase tracking-widest mb-2">{item.label}</h4>
                  <p className="text-stone-500 text-[12px] leading-relaxed font-light tracking-[0.01em]">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[5/6] bg-stone-100 overflow-hidden relative">
               <img 
                src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?auto=format&fit=crop&q=80&w=1200" 
                alt="Industrial Inspection" 
                className="w-full h-full object-cover grayscale opacity-90"
              />
              <div className="absolute inset-0 bg-emerald-900/10 mix-blend-multiply"></div>
              <div className="absolute bottom-10 -left-10 bg-stone-900 p-8 text-white hidden xl:block shadow-2xl">
                 <div className="text-4xl font-black mb-2 tracking-tighter">100%</div>
                 <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-emerald-400">Batch Consistency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
