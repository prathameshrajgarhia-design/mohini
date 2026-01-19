
import React from 'react';
import { motion } from 'framer-motion';

const productCategories = [
  { 
    name: "Agro Shade Nets", 
    specs: "35% - 95% Shade | 80 - 180 GSM",
    features: ["UV Stabilized", "Anti-Sulfur", "Multi-Color"]
  },
  { 
    name: "Industrial Fencing", 
    specs: "High Tenacity | Custom Heights",
    features: ["Wind Resistant", "Tear Proof", "Reinforced Edges"]
  },
  { 
    name: "Safety Scaffolding", 
    specs: "FR Rated | High Visibility",
    features: ["Debris Control", "Flame Retardant", "Breathable"]
  },
  { 
    name: "Decorative Tents", 
    specs: "Architectural Weave",
    features: ["Matte Finish", "Stretch Stable", "Event Ready"]
  }
];

export const ProductsPage: React.FC = () => {
  return (
    <div className="pb-32">
      <section
        id="products"
        className="py-24 bg-[#FAF7F2] border-b border-stone-100 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.5em]">The Catalog</span>
          <h1 className="text-6xl font-black text-stone-900 mt-6 mb-12">Product Prathmesh.</h1>
          
          <div className="space-y-12">
            {productCategories.map((prod, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-between p-12 border border-stone-100 hover:border-emerald-800 transition-colors"
              >
                <div className="mb-8 md:mb-0">
                  <h3 className="text-3xl font-bold text-stone-900 mb-2">{prod.name}</h3>
                  <p className="text-emerald-800 font-bold text-xs uppercase tracking-widest mb-4">{prod.specs}</p>
                  <div className="flex gap-4">
                    {prod.features.map((f, fi) => (
                      <span key={fi} className="text-[10px] bg-stone-50 text-stone-500 px-3 py-1 border border-stone-200">{f}</span>
                    ))}
                  </div>
                </div>
                <button className="px-10 py-4 border border-stone-900 text-stone-900 text-xs font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all">
                  Request Data Sheet
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
