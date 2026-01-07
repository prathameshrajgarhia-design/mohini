
import React from 'react';
import { motion } from 'framer-motion';

const apps = [
  { name: "Agriculture", desc: "Open-field crop protection, Plantation crops, Floriculture, Large nurseries & propagation centers, Polyhouse & greenhouse projects, Hydroponics / vertical farming projects.", img: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&q=80&w=800" },
  { name: "Construction", desc: "Debris containment, scaffolding netting, edge protection, wind and dust barriers, shading for concrete works, perimeter enclosures for sites and visibility screening for construction environments.", img: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
  { name: "Events & Tenting", desc: "Temporary shading and roofing structures, crowd and queue management barriers, flooring underlays, weather and sun protection for outdoor venues, dust and wind shielding and privacy partitions", img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800" },
  { name: "Fencing", desc: "Perimeter demarcation for industrial, agricultural, and residential sites, privacy screening, sports court and playground barriers, animal containment, dust and wind control, temporary site fencing, access control zones, and long-span boundary applications requiring durability and visibility management", img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800" }
];

export const ApplicationsPage: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">Real-World <br /> Resilience.</h1>
          <p className="text-stone-400 max-w-2xl text-xl font-light">Versatile shading solutions engineered for specific environmental stresses.</p>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-stone-200 border border-stone-200">
            {apps.map((app, i) => (
              <div key={i} className="bg-white group overflow-hidden relative h-[400px]">
                <img src={app.img} className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000" />
                <div className="relative z-10 p-12 flex flex-col h-full pointer-events-none">
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-900 mb-auto">{app.name}</span>
                  <div className="bg-white/90 backdrop-blur-sm p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-stone-900 font-bold text-xl mb-2">{app.name} Protection</p>
                    <p className="text-stone-500 text-sm font-light">{app.desc}</p>
                    <p className="text-stone-400 text-[10px] font-bold mt-4 uppercase tracking-widest"></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
