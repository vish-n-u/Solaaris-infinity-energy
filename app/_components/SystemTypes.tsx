"use client";

import { motion } from "framer-motion";

const systems = [
  {
    type: "On-Grid",
    subtitle: "Grid-Connected System",
    description: "Connected to the utility grid. Excess power is exported back, earning you credits. No battery required — most cost-effective option.",
    bestFor: "Homes & businesses with reliable grid power",
    pros: ["Lowest upfront cost", "Net metering credits", "Eligible for full subsidy"],
    borderColor: "border-blue-200 dark:border-blue-500/20",
    badgeColor: "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-300",
    icon: "🔌",
  },
  {
    type: "Hybrid",
    subtitle: "Grid + Battery Backup",
    description: "Best of both worlds — connected to the grid with battery backup for power cuts. Store excess solar energy and use it at night.",
    bestFor: "Areas with frequent power outages",
    pros: ["24/7 power availability", "Battery backup", "Maximum self-consumption"],
    borderColor: "border-amber-300 dark:border-solar-gold/30",
    badgeColor: "bg-amber-50 text-amber-700 dark:bg-solar-gold/10 dark:text-solar-gold-light",
    icon: "⚡",
    popular: true,
  },
  {
    type: "Off-Grid",
    subtitle: "Fully Independent System",
    description: "Completely independent from the utility grid. Runs entirely on solar + battery. Ideal where grid connection is unavailable.",
    bestFor: "Rural areas & agricultural pumps",
    pros: ["No grid dependency", "Ideal for remote locations", "Energy independence"],
    borderColor: "border-green-200 dark:border-green-500/20",
    badgeColor: "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-300",
    icon: "🌿",
  },
];

export default function SystemTypes() {
  return (
    <section className="py-14 md:py-24 bg-slate-50 dark:bg-solar-navy">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-4">
            <span className="text-xs font-semibold text-solar-gold-dark dark:text-solar-gold tracking-widest uppercase">
              Solar Systems
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Choose the Right{" "}
            <span className="text-gold-gradient">Solar System</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-base">
            We assess your energy needs, location, and budget to recommend the
            perfect solar system type for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {systems.map((system, i) => (
            <motion.div
              key={system.type}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative glass-card rounded-2xl p-7 flex flex-col gap-5 border ${system.borderColor} transition-all duration-300 hover:-translate-y-1`}
            >
              {system.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-solar-gold rounded-full text-[#060F1E] text-xs font-bold tracking-wide">
                  Most Popular
                </div>
              )}

              <div>
                <div className="text-3xl mb-3">{system.icon}</div>
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${system.badgeColor}`}>
                  {system.subtitle}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">{system.type}</h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{system.description}</p>

              <div className="flex flex-col gap-2">
                {system.pros.map((pro) => (
                  <div key={pro} className="flex items-center gap-2.5">
                    <svg className="w-4 h-4 text-solar-gold-dark dark:text-solar-gold flex-shrink-0" fill="none" viewBox="0 0 16 16">
                      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M5 8L7 10L11 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{pro}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-white/8">
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Best for:</span>{" "}
                  {system.bestFor}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
