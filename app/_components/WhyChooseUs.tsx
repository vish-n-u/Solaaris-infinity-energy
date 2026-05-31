"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: "💰",
    title: "Save Big on Electricity Bills",
    description:
      "Slash your electricity costs by up to 90%. Solar energy locks in your power rate for 25+ years, protecting you from rising tariffs.",
    highlight: "Up to 90% savings",
  },
  {
    icon: "🏠",
    title: "Increase Your Property Value",
    description:
      "Solar installations increase property resale value by 4–8%. It's not just an energy upgrade — it's a smart real estate investment.",
    highlight: "4–8% property value boost",
  },
  {
    icon: "🤝",
    title: "Trusted Local Solar Experts",
    description:
      "We are a local team with deep expertise in Maharashtra's grid, MSEDCL processes, and government subsidy requirements.",
    highlight: "MNRE & MSEDCL authorized",
  },
  {
    icon: "⚡",
    title: "Fast & Hassle-Free Installation",
    description:
      "Our end-to-end project management means you sign once and we handle the rest — permits, installation, inspection, and activation.",
    highlight: "Zero-hassle execution",
  },
  {
    icon: "📋",
    title: "Subsidy Documentation Support",
    description:
      "Navigating government subsidy paperwork is complex. We handle all documentation, filings, and follow-ups on your behalf.",
    highlight: "Up to ₹78,000 subsidy",
  },
  {
    icon: "🔧",
    title: "After-Sales Service & Support",
    description:
      "Our relationship doesn't end at installation. We provide ongoing monitoring support and maintenance guidance for your system.",
    highlight: "Long-term partnership",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-solar-navy-light">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-4">
            <span className="text-xs font-semibold text-solar-gold tracking-widest uppercase">
              Why Solaaris
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Why Homeowners & Businesses{" "}
            <span className="text-gold-gradient">Choose Us</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            We are not just solar installers — we are your long-term energy
            partners committed to your savings and peace of mind.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card rounded-2xl p-6 group hover:border-solar-gold/25 transition-all duration-300"
            >
              <div className="text-3xl mb-4">{reason.icon}</div>
              <h3 className="text-base font-bold text-white mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                {reason.description}
              </p>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-solar-gold">
                <span className="w-4 h-px bg-solar-gold" />
                {reason.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
