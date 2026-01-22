import React from 'react';

export const ContactPage: React.FC = () => {
  return (
    <div className="pb-32 bg-[#FAF7F2]">
      <section
        id="contact"
        className="py-28 scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24">

            {/* LEFT — CONTEXT */}
            <div>
              <h1 className="text-5xl md:text-5xl font-black text-stone-900 mb-8 leading-tight">
                Lets Discuss <br /> Our Collaboration.
              </h1>

              <p className="text-lg text-stone-600 font-light mb-12 leading-relaxed max-w-xl">
                Our manufacturing unit is geared for bulk procurement and high-volume orders. 
                Reach out with your inquiries for a rapid quote.
                Submissions with incomplete or unrealistic quantities
                may not be evaluated.
              </p>

              <div className="space-y-10">
                <div>
                  <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.3em] mb-4">
                    Manufacturing Location
                  </h4>
                  <p className="text-stone-900 font-medium leading-relaxed">
                    Mohini Tradelink <br />
                    Phase-1, GIDC <br />
                    Vapi, Gujarat, India
                  </p>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.3em] mb-4">
                    Export & Technical Desk
                  </h4>
                  <p className="text-stone-900 font-medium">
                    mohinitradelink@yahoo.com <br />
                    +91 9429117406
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="bg-white p-12 border border-stone-100 shadow-2xl shadow-stone-900/5">
              <h3 className="text-xl font-bold mb-8">
                Submit Requirement
              </h3>

              <form
                action="https://formspree.io/f/xzdepjwz"
                method="POST"
                className="space-y-8"
              >
                {/* Hidden Subject */}
                <input
                  type="hidden"
                  name="_subject"
                  value="New Inquiry – Mohini Tradelink"
                />
                <input
                  type="hidden"
                  name="_redirect"
                  value="https://mohinitradelink.com/contact?submitted=true"
                />

                {/* Company & Person */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="company_name"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      name="person_name"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>
                </div>

                {/* Location */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      Country *
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>
                </div>

                {/* Technical Parameters */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      GSM (Optional)
                    </label>
                    <input
                      type="text"
                      name="gsm"
                      placeholder="e.g. 120"
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      Shading % (Optional)
                    </label>
                    <input
                      type="text"
                      name="shading_percentage"
                      placeholder="e.g. 75%"
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                      Colour
                    </label>
                    <input
                      type="text"
                      name="colour"
                      className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                    />
                  </div>
                </div>

                {/* Quantity */}
                <div>
                  <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                    Quantity (kg / sqm) *
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    required
                    placeholder="e.g. 25,000 sqm or 3000 kg"
                    className="w-full border-b border-stone-200 py-3 focus:border-emerald-800 outline-none"
                  />
                </div>

                {/* ORDER FREQUENCY — NEW */}
                <div>
                  <label className="text-[10px] font-bold uppercase text-stone-400 block mb-2">
                    Approximate Order Frequency *
                  </label>
                  <select
                    name="order_frequency"
                    required
                    className="w-full border-b border-stone-200 py-3 bg-transparent focus:border-emerald-800 outline-none"
                  >
                    <option value="">Select frequency</option>
                    <option value="One-time">One-time</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Ongoing supply">Ongoing supply</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-stone-900 text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-emerald-800 transition-all"
                >
                  Submit Technical Inquiry
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
