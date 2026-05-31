"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "50+", label: "Installations Completed" },
  { value: "500kW+", label: "Total Capacity Installed" },
  { value: "100+", label: "Happy Customers" },
  { value: "3+", label: "Years of Experience" },
];

export default function StatsBar() {
  return (
    <section className="py-10 bg-solar-navy-light border-y border-white/5">
      <div className="section-container">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-8 px-4 bg-solar-navy-light"
            >
              <span className="text-3xl lg:text-4xl font-extrabold text-solar-gold">
                {stat.value}
              </span>
              <span className="text-sm text-slate-400 mt-1 text-center font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
