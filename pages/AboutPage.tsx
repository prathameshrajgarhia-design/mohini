
import React from 'react';
import { motion } from 'framer-motion';

export const AboutPage: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="py-24 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-base md:text-lg font-bold uppercase tracking-[0.35em] text-emerald-800"
          >
            Our Heritage
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black text-stone-900 mt-8 mb-12"
          >
            Manufacturing Excellence.
          </motion.h1>
          <div className="grid md:grid-cols-2 gap-16">
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Mohini Tradelink was founded on the principle of direct control. Unlike traders or resellers, we manage the entire synthesis of shading solutions from granules to finished nets.
            </p>
            <p className="text-xl text-stone-600 font-light leading-relaxed">
              Our facilities are equipped with high-speed knitting lines capable of producing 24/7, ensuring that bulk commitments are met with absolute precision.
            </p>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { title: "Our Mission", text: "To redefine the global standard in shading textiles through engineering and customizable manufacturing." },
              { title: "Our Vision", text: "Empowering sectors with resilient material science to suit every usecase while withstanding the tests of time and environment." },
              { title: "Our Values", text: "Integrity in specs, transparency in pricing, and consistency in batch-to-batch execution, all with strict adherance to delivery timeline." }
            ].map((box, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-12 border border-stone-100 bg-white shadow-sm"
              >
                <h3 className="text-xs font-bold uppercase tracking-widest text-emerald-900 mb-6">{box.title}</h3>
                <p className="text-stone-500 leading-relaxed font-light">{box.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
