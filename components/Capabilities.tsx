
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
  },
  {
    label: "Custom Net Length",
    detail: "Direct control over high-density polyethylene (HDPE) synthesis enables precise material properties, structural consistency, and extended service life."

  },
  {
    label: "Custom Packing for Bulk Shipments",
    detail: "Direct control over high-density polyethylene (HDPE) synthesis enables precise material properties, structural consistency, and extended service life."

  }
];

export const Expertise: React.FC = () => {
  return (
    <section id="expertise" className="bg-[#FAF7F2] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[18px] font-black uppercase tracking-[0.1em] text-[#1C1C1C] mb-6 block">Capabilities</span>
            <h3 className="text-4xl font-bold text-[#1C1C1C] mb-6 leading-tight">Precision Knitting, Engineered In-House</h3>
            <p className="text-stone-600 mb-10 text-base font-light leading-relaxed">
              Our manufacturing unit bridges the gap between material science and field application.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-y-10 gap-x-12">
              {expertiseItems.map((item, idx) => (
                <div key={idx} className="group border-l border-stone-700 pl-6 py-2 hover:border-white transition-colors">
                  <h4 className="font-bold text-[#4A4A4A] text-[11px] uppercase tracking-widest mb-2">{item.label}</h4>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[5/6] bg-stone-100 overflow-hidden relative">
               <img 
                src="   " 
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
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-slate-900 pointer-events-none" />
    </section>
  );
};
