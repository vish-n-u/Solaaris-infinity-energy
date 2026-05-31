"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const propertyTypes = [
  "Residential Home",
  "Commercial Building",
  "Agricultural / Rural",
  "Industrial / Factory",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    bill: "",
    type: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim() || form.name.trim().length < 2) e.name = "Enter your full name";
    if (!/^[0-9]{10}$/.test(form.phone)) e.phone = "Enter a valid 10-digit mobile number";
    if (!form.city.trim()) e.city = "Enter your city";
    if (!form.bill || Number(form.bill) <= 0) e.bill = "Enter a valid monthly bill amount";
    if (!form.type) e.type = "Please select a property type";
    return e;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const { name, phone, city, bill, type } = form;

    const message = encodeURIComponent(
      `Hello Solaaris! I'm interested in a solar consultation.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `City: ${city}\n` +
        `Monthly Bill: ₹${bill}\n` +
        `Property Type: ${type}\n\n` +
        `Please get in touch with me.`
    );

    window.open(`https://wa.me/9920439118?text=${message}`, "_blank");
  };

  const isValid = form.name && form.phone && form.city && form.bill && form.type;

  return (
    <section id="contact" className="py-14 md:py-24 bg-slate-50 dark:bg-solar-navy relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(212,137,30,0.05),transparent)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(245,166,35,0.07),transparent)]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start text-left">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-5">
              <span className="text-xs font-semibold text-solar-gold-dark dark:text-solar-gold tracking-widest uppercase">
                Free Consultation
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              Get Your Free
              <br />
              <span className="text-gold-gradient">Solar Quote Today</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              Tell us about your property and energy needs. Our solar experts
              will get back to you within 24 hours with a customised savings
              estimate and system recommendation — completely free.
            </p>

            {/* What you get */}
            <div className="flex flex-col gap-3">
              {[
                "Personalised electricity bill analysis",
                "Recommended system size & type",
                "ROI & payback period calculation",
                "Full subsidy eligibility check",
                "No-obligation quotation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-solar-gold/15 border border-solar-gold/30 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-solar-gold-dark dark:text-solar-gold"
                      fill="none"
                      viewBox="0 0 12 12"
                    >
                      <path
                        d="M2 6L5 9L10 3"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-700 dark:text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            {/* Contact direct */}
            <div className="mt-8 flex flex-col gap-3">
              <a
                href="tel:7558410811"
                className="flex items-center gap-3 glass-card rounded-xl px-5 py-3.5 hover:border-solar-gold/30 transition-colors group"
              >
                <span className="text-xl">📞</span>
                <div>
                  <div className="text-xs text-slate-500">Call Bhardwaj Tandel</div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-solar-gold-dark dark:group-hover:text-solar-gold transition-colors">
                    7558410811
                  </div>
                </div>
              </a>
              <a
                href="tel:8446888294"
                className="flex items-center gap-3 glass-card rounded-xl px-5 py-3.5 hover:border-solar-gold/30 transition-colors group"
              >
                <span className="text-xl">📞</span>
                <div>
                  <div className="text-xs text-slate-500">Call Adarsha Tandel</div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-solar-gold-dark dark:group-hover:text-solar-gold transition-colors">
                    8446888294
                  </div>
                </div>
              </a>
              <a
                href="mailto:info.solaarisinfinityenergy@gmail.com"
                className="flex items-center gap-3 glass-card rounded-xl px-5 py-3.5 hover:border-solar-gold/30 transition-colors group"
              >
                <span className="text-xl">✉️</span>
                <div>
                  <div className="text-xs text-slate-500">Email Us</div>
                  <div className="font-bold text-slate-900 dark:text-white group-hover:text-solar-gold-dark dark:group-hover:text-solar-gold transition-colors text-sm">
                    info.solaarisinfinityenergy@gmail.com
                  </div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col gap-5"
            >
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Request Free Solar Quote
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full bg-slate-100 dark:bg-white/5 border rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:bg-white dark:focus:bg-white/8 transition-all ${errors.name ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-white/10 focus:border-solar-gold-dark dark:focus:border-solar-gold/50"}`}
                    style={{ fontSize: "16px" }}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-0.5">{errors.name}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit number"
                    type="tel"
                    maxLength={10}
                    className={`w-full bg-slate-100 dark:bg-white/5 border rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:bg-white dark:focus:bg-white/8 transition-all ${errors.phone ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-white/10 focus:border-solar-gold-dark dark:focus:border-solar-gold/50"}`}
                    style={{ fontSize: "16px" }}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-0.5">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    City *
                  </label>
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Your city"
                    className={`w-full bg-slate-100 dark:bg-white/5 border rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:bg-white dark:focus:bg-white/8 transition-all ${errors.city ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-white/10 focus:border-solar-gold-dark dark:focus:border-solar-gold/50"}`}
                    style={{ fontSize: "16px" }}
                  />
                  {errors.city && <p className="text-xs text-red-500 mt-0.5">{errors.city}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
                    Monthly Bill (₹) *
                  </label>
                  <input
                    name="bill"
                    value={form.bill}
                    onChange={handleChange}
                    placeholder="e.g. 3000"
                    type="number"
                    min="1"
                    className={`w-full bg-slate-100 dark:bg-white/5 border rounded-xl px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 text-sm focus:outline-none focus:bg-white dark:focus:bg-white/8 transition-all ${errors.bill ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-white/10 focus:border-solar-gold-dark dark:focus:border-solar-gold/50"}`}
                    style={{ fontSize: "16px" }}
                  />
                  {errors.bill && <p className="text-xs text-red-500 mt-0.5">{errors.bill}</p>}
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                  Property Type *
                </label>
                <div className="relative">
                  <select
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className={`w-full bg-slate-100 dark:bg-solar-navy border rounded-xl px-4 py-3 pr-10 text-slate-900 dark:text-white text-sm focus:outline-none transition-all appearance-none cursor-pointer ${errors.type ? "border-red-400 dark:border-red-500" : "border-slate-200 dark:border-white/10 focus:border-solar-gold-dark dark:focus:border-solar-gold/50"}`}
                    style={{ fontSize: "16px" }}
                  >
                    <option value="" disabled>
                      Select property type
                    </option>
                    {propertyTypes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                {errors.type && <p className="text-xs text-red-500 mt-0.5">{errors.type}</p>}
              </div>

              <button
                type="submit"
                disabled={!isValid}
                className="w-full py-4 bg-solar-gold text-[#060F1E] font-bold rounded-xl hover:bg-solar-gold-light transition-all duration-200 gold-glow hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:scale-100 text-base"
              >
                Get My Free Quote via WhatsApp
              </button>

              <p className="text-xs text-slate-500 text-center">
                By submitting, you agree to be contacted by our solar experts.
                No spam — ever.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
