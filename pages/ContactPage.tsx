import React, { useState } from "react";

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xzdepjwz", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Submission failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#FAF7F2] py-32">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-28 items-start">

        {/* LEFT CONTENT */}
        <div className="pt-6">
          <h1 className="text-[52px] font-black text-stone-900 leading-[1.05] mb-8">
            Lets Discuss<br />Our Collaboration.
          </h1>

          <p className="text-stone-600 max-w-md leading-relaxed mb-16">
            Our manufacturing unit is geared for bulk procurement and
            high-volume orders. Reach out with defined specifications
            for a rapid technical evaluation. Submissions with
            unrealistic quantities may not be evaluated.
          </p>

          <div className="space-y-10">
            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] text-emerald-800 mb-3">
                MANUFACTURING LOCATION
              </p>
              <p className="text-stone-900 text-sm leading-relaxed">
                Mohini Tradelink<br />
                Phase-1, GIDC<br />
                Vapi, Gujarat, India
              </p>
            </div>

            <div>
              <p className="text-[11px] font-bold tracking-[0.35em] text-emerald-800 mb-3">
                EXPORT & TECHNICAL DESK
              </p>
              <p className="text-stone-900 text-sm leading-relaxed">
                mohinitradelink@yahoo.com<br />
                +91 94291 17406
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white border border-stone-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)] p-16">
          {!submitted ? (
            <>
              <h2 className="text-2xl font-bold text-stone-900 mb-14">
                Submit Requirement
              </h2>

              <form onSubmit={handleSubmit} className="space-y-12">

                {/* ROW 1 */}
                <div className="grid grid-cols-2 gap-10">
                  <Field label="Company Name *">
                    <input name="company" required />
                  </Field>
                  <Field label="Contact Person *">
                    <input name="name" required />
                  </Field>
                </div>

                {/* ROW 2 */}
                <div className="grid grid-cols-3 gap-10">
                  <Field label="Country *">
                    <input name="country" required />
                  </Field>
                  <Field label="State">
                    <input name="state" />
                  </Field>
                  <Field label="City">
                    <input name="city" />
                  </Field>
                </div>

                {/* ROW 3 */}
                <div className="grid grid-cols-2 gap-10">
                  <Field label="Email *">
                    <input type="email" name="email" required />
                  </Field>
                  <Field label="Phone Number *">
                    <input name="phone" required />
                  </Field>
                </div>

                {/* ROW 4 */}
                <div className="grid grid-cols-3 gap-10">
                  <Field label="GSM (optional)">
                    <input name="gsm" />
                  </Field>
                  <Field label="Shading % (optional)">
                    <input name="shading" />
                  </Field>
                  <Field label="Colour">
                    <input name="colour" />
                  </Field>
                </div>

                {/* Quantity */}
                <Field label="Quantity (kg / sqm) *">
                  <input name="quantity" required />
                </Field>

                {/* Frequency */}
                <Field label="Approximate Order Frequency *">
                  <select name="order_frequency" required>
                    <option value="">Select frequency</option>
                    <option value="one-time">One-time</option>
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="ongoing">Ongoing Supply</option>
                  </select>
                </Field>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-6 bg-stone-900 text-white py-6 text-[11px] font-black tracking-[0.35em] hover:bg-emerald-900 transition-all"
                >
                  {loading ? "SUBMITTING…" : "SUBMIT INQUIRY"}
                </button>
              </form>
            </>
          ) : (
            <div className="py-24 text-center">
              <h3 className="text-3xl font-black text-stone-900 mb-4">
                Request Submitted
              </h3>
              <p className="text-stone-600">
                Our technical team will evaluate your requirement and
                respond shortly.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* Reusable Field Wrapper */
const Field: React.FC<{ label: string; children: React.ReactNode }> = ({
  label,
  children,
}) => (
  <div>
    <label className="block text-[10px] font-bold tracking-[0.25em] text-stone-400 mb-3 uppercase">
      {label}
    </label>
    <div className="relative">
      {React.cloneElement(children as any, {
        className:
          "w-full bg-transparent border-b border-stone-300 pb-2 text-sm text-stone-900 focus:outline-none focus:border-stone-900 transition-colors",
      })}
    </div>
  </div>
);
