
import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-[#FAF7F2] pt-20 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <h2 className="text-[14px] font-black uppercase tracking-[0.2em] text-emerald-900 mb-4">Core Manufacturing Identity</h2>
            <h3 className="text-3xl font-bold text-stone-900 leading-tight">End-to-End  Control</h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-xl text-stone-600 font-light leading-snug">
              Mohini Tradelink is a <span className="text-stone-950 font-normal underline decoration-emerald-500 underline-offset-4">vertically integrated</span> manufacturer based in Gujarat, India. We control every step of the manufacturing process from granules selection to extrusion rolls to precision knitting. Every square meter is produced under one roof to ensure batch consistency quality control, and reliability for global markets.
            </p>
          </div>
        </div>
      </div> 
    </section>
  );
};
