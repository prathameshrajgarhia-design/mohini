import React from 'react';
import { motion } from 'framer-motion';

const productApplications = [
  {
    name: "Agro Shade Nets",
    overview:
      "Engineered for crop protection and microclimate control, with controlled shade percentages and long-term UV resistance.",
    gsm: "80 – 180 GSM",
    material:
      "UV-stabilized HDPE with application-specific additives to resist sulfur exposure and prolonged sunlight.",
    width:
      "Manufactured in multiple widths based on installation geometry and field layout.",
    highlights: ["Shade Control (35%–95%)", "UV Stabilized", "Multi-Color Options"]
  },
  {
    name: "Decorative & Event Nets",
    overview:
      "Architectural and event-focused netting designed for aesthetics, stability, and controlled stretch.",
    gsm: "70 – 130 GSM",
    material:
      "Specialized polymer formulations emphasizing finish quality, color consistency, and stretch stability.",
    width:
      "Custom widths manufactured to suit temporary structures and design layouts.",
    highlights: ["Architectural Weave", "Stretch Stable", "Event Ready"]
  },
  {
    name: "Industrial Fencing",
    overview:
      "Designed for perimeter protection in industrial and agricultural environments where tensile strength and durability are critical.",
    gsm: "120 – 220 GSM",
    material:
      "High-tenacity polymer blends optimized for tear resistance, wind load handling, and edge reinforcement.",
    width:
      "Custom widths and roll dimensions produced to suit site-specific fencing requirements.",
    highlights: ["High Tensile Strength", "Wind Resistant", "Reinforced Edges"]
  },
  {
    name: "Safety Scaffolding Nets",
    overview:
      "Manufactured for construction and infrastructure safety, prioritizing visibility, debris containment, and flame resistance.",
    gsm: "90 – 150 GSM",
    material:
      "FR-rated formulations with controlled porosity to balance airflow and debris control.",
    width:
      "Widths engineered to match scaffolding spans and elevation coverage.",
    highlights: ["Flame Retardant", "High Visibility", "Debris Control"]
  }
];

export const ProductsPage: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2] pb-32">
      <section
        id="products"
        className="py-28 border-b border-stone-200 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          
          <span className="block text-[11px] font-bold uppercase tracking-[0.5em] text-stone-500 mb-8">
            Product Overview
          </span>

          <h1 className="text-5xl md:text-6xl font-black text-stone-900 mb-12">
            Engineered Netting Applications.
          </h1>

          <p className="max-w-4xl text-lg text-stone-600 font-light leading-relaxed mb-20">
            We manufacture a core range of netting solutions that are engineered
            differently based on application requirements. Variations in material formulation,
            GSM range, knitting structure, and width are tailored to meet the functional demands
            of each use case.
          </p>

          <div className="space-y-16">
            {productApplications.map((app, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-stone-100 p-12"
              >
                <h3 className="text-3xl font-bold text-stone-900 mb-4">
                  {app.name}
                </h3>

                <p className="text-stone-600 font-light leading-relaxed max-w-3xl mb-10">
                  {app.overview}
                </p>

                <div className="grid md:grid-cols-3 gap-10 mb-10">
                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-emerald-900 mb-2">
                      GSM Range
                    </span>
                    <p className="text-stone-700 font-medium">{app.gsm}</p>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-emerald-900 mb-2">
                      Material Engineering
                    </span>
                    <p className="text-stone-700 font-medium leading-relaxed">
                      {app.material}
                    </p>
                  </div>

                  <div>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-emerald-900 mb-2">
                      Width & Configuration
                    </span>
                    <p className="text-stone-700 font-medium leading-relaxed">
                      {app.width}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {app.highlights.map((h, hi) => (
                    <span
                      key={hi}
                      className="text-[10px] uppercase tracking-widest bg-stone-50 text-stone-600 px-4 py-2 border border-stone-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Guidance to Contact */}
          <div className="mt-24 max-w-4xl">
            <p className="text-stone-500 font-light leading-relaxed">
              Exact specifications including shade percentage, roll dimensions, color,
              additives, and compliance requirements are finalized based on application,
              deployment conditions, and order volumes. For technical discussions or
              project-specific requirements, please reach out through the Contact page.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};
