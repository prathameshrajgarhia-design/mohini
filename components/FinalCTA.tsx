
import React from 'react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto relative z-10">
          <h2 className="text-4xl font-black text-stone-900 mb-6 tracking-tight">
            Deploy Scalable Solutions.
          </h2>
          <p className="text-stone-500 mb-10 text-lg font-light">
            Discuss material specifications and bulk export timelines with our technical department.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-stone-900 text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-emerald-800 transition-all border border-stone-800 shadow-xl">
              Technical Inquiry
            </button>
            <button className="bg-transparent text-stone-900 px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-stone-50 transition-all border border-stone-200">
              Download Catalog
            </button>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-50 rounded-full blur-[100px] opacity-60"></div>
    </section>
  );
};
