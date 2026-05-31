"use client";

import { motion } from "framer-motion";

const subsidySlabs = [
  { size: "1 kW", subsidy: "₹30,000", highlight: false },
  { size: "2 kW", subsidy: "₹60,000", highlight: false },
  { size: "3 kW+", subsidy: "₹78,000", highlight: true },
];

const steps = [
  { step: "01", title: "Site Assessment", desc: "We evaluate your rooftop, shadow analysis, and power requirements." },
  { step: "02", title: "Application Filing", desc: "We submit your PM Surya Ghar application with complete documentation." },
  { step: "03", title: "Approval & Installation", desc: "After DISCOM approval, installation begins — we manage it all." },
  { step: "04", title: "Subsidy Disbursement", desc: "Subsidy amount is credited directly to your bank account." },
];

export default function SubsidySection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="subsidy" className="py-20 md:py-28 bg-solar-navy-light relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,rgba(245,166,35,0.08),transparent)]" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-5">
              <span className="text-xs font-semibold text-solar-gold tracking-widest uppercase">
                Government Subsidy
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              Save Up to{" "}
              <span className="text-gold-gradient">₹78,000</span>
              <br />
              With PM Surya Ghar
            </h2>
            <p className="text-slate-400 text-base leading-relaxed mb-8">
              The Government of India's PM Surya Ghar Muft Bijli Yojana offers
              substantial subsidies for rooftop solar installations. We guide you
              through every step to ensure you receive the maximum benefit.
            </p>

            {/* Subsidy slabs */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {subsidySlabs.map((slab) => (
                <div
                  key={slab.size}
                  className={`rounded-xl p-4 text-center border transition-all ${
                    slab.highlight
                      ? "glass-card-gold border-solar-gold/30"
                      : "glass-card border-white/8"
                  }`}
                >
                  <div
                    className={`text-xl font-extrabold mb-1 ${
                      slab.highlight ? "text-solar-gold" : "text-white"
                    }`}
                  >
                    {slab.subsidy}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {slab.size} System
                  </div>
                  {slab.highlight && (
                    <div className="text-[10px] text-solar-gold-light mt-1 font-semibold">
                      Maximum
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="px-7 py-3.5 bg-solar-gold text-[#060F1E] font-bold rounded-xl hover:bg-solar-gold-light transition-all duration-200 gold-glow hover:scale-105"
            >
              Check My Subsidy Eligibility
            </button>
          </motion.div>

          {/* Right — Steps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-white mb-6">
              How We Handle the Subsidy Process
            </h3>
            <div className="flex flex-col gap-5">
              {steps.map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-solar-gold/10 border border-solar-gold/20 flex items-center justify-center text-solar-gold font-extrabold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Disclaimer */}
            <div className="mt-6 p-4 glass-card rounded-xl">
              <p className="text-xs text-slate-500 leading-relaxed">
                <span className="text-slate-400 font-medium">Note:</span> Subsidy
                amounts are subject to government guidelines and DISCOM approval.
                Solaaris Infinity Energy assists with documentation and filing —
                subsidy is disbursed directly by the government.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
