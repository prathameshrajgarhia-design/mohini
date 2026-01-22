import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import greenhouse from "../assets/greenhouse.png";
import camelevent from "../assets/camel event.png";
import construction from "../assets/construction.png";
import fencing from "../assets/fencing.png";
import redevent from "../assets/red event.png";

/* ---------- SLIDES ---------- */

const slides = [
  {
    image: greenhouse,
    title: "Agro Shield",
    useCase: "Agriculture Sunlight Control",
    accent: "bg-emerald-400",
    desc: "Optimized sunlight filtration and temperature regulation for climate control for crops."
  },
  {
    image: fencing,
    title: "Perimeter Security",
    useCase: "Agriculture & Industrial Fencing",
    accent: "bg-black-600",
    desc: "Durable windbreak and privacy fencing for farms and complexes and manufacturing zones."
  },
  {
    image: redevent,
    title: "Event Infrastructure",
    useCase: "Event Flooring & Shade",
    accent: "bg-red-600",
    desc: "Reinforced flooring underlays and aesthetic shading for outdoor venues and temporary establishments."
  },
  {
    image: camelevent,
    title: "Event Netting",
    useCase: "Roofing and Flooring Nets",
    accent: "bg-stone-900",
    desc: "Heavy-duty canopy nets and flooring nets for Premium Events and Warehousing."
  },
  {
    image: construction,
    title: "Infrastructure Safety",
    useCase: "Construction Debris Containment",
    accent: "bg-emerald-600",
    desc: "High-visibility debris containment and safety nets for urban development projects."
  },
];

/* ---------- PROPS ---------- */

interface HeroProps {
  onNavigate: (page: string) => void;
}

/* ---------- HERO ---------- */

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="relative h-[90vh] min-h-[650px] flex items-center overflow-hidden bg-black mb-24 md:mb-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.9, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slides[index].image}
            alt={slides[index].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-12">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-4 mb-6"
          >
            <div className={`h-[1px] w-12 ${slides[index].accent}`} />
            <span className="text-white text-[10px] font-bold uppercase tracking-[0.4em]">
              Precision Manufacturing
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
          >
            Shading and <br />
            Tenting Solutions <br />
            <span className="text-stone-300 font-light text-lg md:text-2xl">
              by Mohini Tradelink
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row items-start gap-6 md:gap-12"
          >
            <div className="max-w-md">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-emerald-600 text-white px-10 py-4 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-emerald-700 transition-all"
              >
                Project Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom-right overlay */}
      <div className="absolute bottom-10 right-10 z-20 text-center max-w-md">
        <span className="text-emerald-400 uppercase text-xs md:text-sm font-bold tracking-[0.18em] block mb-2">
          {slides[index].useCase}
        </span>
        <p className="text-white/90 text-xs md:text-sm leading-relaxed md:leading-loose">
          {slides[index].desc}
        </p>
      </div>

      {/* Slide indicators */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-[6px] rounded-full transition-all duration-500 ${
              i === index ? 'h-12 bg-emerald-500' : 'h-6 bg-white/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
