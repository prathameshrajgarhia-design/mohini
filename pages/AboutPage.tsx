import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FAF7F2]">

      {/* ================= PRIMARY POSITIONING ================= */}
      <section id="about" className="pt-32 pb-24 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6">
          <span className="block text-[11px] font-bold uppercase tracking-[0.5em] text-emerald-900 mb-10">
            About the Manufacturer
          </span>

          <h1 className="text-5xl md:text-5xl font-black text-stone-900 leading-tight max-w-5xl">
            Engineered Manufacturing  
            <br />
            for High-Volume, High-Reliability Supply.
          </h1>

          <p className="mt-10 max-w-4xl text-lg text-stone-600 font-light leading-relaxed">
            Mohini Tradelink is a manufacturing-driven organization producing technical shading
            and netting solutions for agriculture, infrastructure, industrial safety, and
            export markets. Our operations are structured to support consistency, scale, and
            long-term supply commitments.
          </p>
        </div>
      </section>

      {/* ================= MANUFACTURING DISCIPLINE ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-black text-stone-900 mb-10 max-w-3xl">
            Manufacturing Discipline  
            <br />
            Over Intermediation.
          </h2>

          <div className="max-w-4xl text-stone-600 font-light leading-relaxed space-y-6 mb-16">
            <p>
              We do not operate as traders, resellers, or assemblers. All production is executed
              within controlled manufacturing environments, allowing us to govern material behavior,
              mechanical performance, and batch uniformity.
            </p>

            <p>
              This structure minimizes variability, reduces dependency risk, and ensures that
              technical specifications committed during order placement are met consistently
              across repeat consignments.
            </p>
          </div>

          {/* Capability List — LEFT ALIGNED */}
          <div className="max-w-4xl border-t border-stone-200 pt-10 space-y-6">
            {[
              "Polymer selection and formulation control",
              "High-speed knitting and stabilization lines",
              "Continuous 24/7 production scheduling",
              "Defined GSM, shade %, and tensile benchmarks",
              "Batch traceability and shipment consistency"
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-6 pb-4 border-b border-stone-200"
              >
                <span className="text-emerald-900 font-black text-sm pt-0.5 min-w-[32px]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-stone-800 font-medium leading-snug">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= EXPORT / SCALE STRIP ================= */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16 text-center">
          {[
            { value: "24×7", label: "Continuous Production" },
            { value: "Bulk", label: "Export Order Capability" },
            { value: "Consistent", label: "Specification Delivery" }
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-4xl font-black mb-3">{stat.value}</div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-stone-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PURPOSE & PRINCIPLES ================= */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12">
          
          <div className="bg-white p-12 border border-stone-100">
            <h3 className="text-[11px] font-black uppercase tracking-[0.35em] text-emerald-900 mb-6">
              Mission
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              To manufacture technically reliable shading and netting solutions that support
              large-scale deployment across events, agriculture, infrastructure, and industrial
              applications.
            </p>
          </div>

          <div className="bg-white p-12 border border-stone-100">
            <h3 className="text-[11px] font-black uppercase tracking-[0.35em] text-emerald-900 mb-6">
              Vision
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              To establish Mohini Tradelink as a dependable export-oriented manufacturing partner
              for buyers requiring predictable quality, scale, and long-term supply assurance.
            </p>
          </div>

          <div className="bg-white p-12 border border-stone-100">
            <h3 className="text-[11px] font-black uppercase tracking-[0.35em] text-emerald-900 mb-6">
              Operating Principles
            </h3>
            <p className="text-stone-600 font-light leading-relaxed">
              Process control over shortcuts, specification integrity over volume pressure,
              and transparency across production, pricing, and delivery timelines.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};
