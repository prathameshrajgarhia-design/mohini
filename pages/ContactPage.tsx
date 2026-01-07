
import React from 'react';
import { motion } from 'framer-motion';

export const ContactPage: React.FC = () => {
  return (
    <div className="pb-32">
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">
            <div>
              <h1 className="text-6xl font-black text-stone-900 mb-8">Let's Discuss <br /> Your Scale.</h1>
              <p className="text-xl text-stone-600 font-light mb-12 leading-relaxed">
                Our manufacturing unit is geared for bulk procurement and high-volume export orders. Reach out with your technical data sheets for a rapid quote.
              </p>
              
              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.3em] mb-4">Corporate Office</h4>
                  <p className="text-stone-900 font-medium">Mohini Tradelink Manufacturing Unit <br /> Industrial Zone, Phase II <br /> Ahmedabad, Gujarat, India</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.3em] mb-4">Export Division</h4>
                  <p className="text-stone-900 font-medium">exports@mohinitradelink.com <br /> +91 (079) 4000-0000</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 border border-stone-100 shadow-2xl shadow-stone-900/5">
              <h3 className="text-xl font-bold mb-8">Technical Inquiry</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">Company Name</label>
                    <input type="text" className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">Region/Country</label>
                    <input type="text" className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">Requirement Summary</label>
                  <textarea rows={4} className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none transition-colors" placeholder="e.g. 150 GSM, 75% Shade, 50,000 SQM for Construction"></textarea>
                </div>
                <button className="w-full bg-stone-900 text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-emerald-800 transition-all">
                  Submit Specification Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
