"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect
          x="2"
          y="10"
          width="28"
          height="16"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(245,166,35,0.1)"
        />
        <line
          x1="2"
          y1="16"
          x2="30"
          y2="16"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="11"
          y1="10"
          x2="11"
          y2="26"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <line
          x1="21"
          y1="10"
          x2="21"
          y2="26"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M12 6L16 2L20 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Rooftop Solar Installation",
    description:
      "Complete solar system setup for homes and businesses. We handle everything from site assessment to final commissioning.",
    tags: ["On-Grid", "Off-Grid", "Hybrid"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <path
          d="M4 26L10 16L16 20L22 10L28 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="10" cy="16" r="2" fill="currentColor" />
        <circle cx="16" cy="20" r="2" fill="currentColor" />
        <circle cx="22" cy="10" r="2" fill="currentColor" />
        <rect
          x="2"
          y="24"
          width="28"
          height="2"
          rx="1"
          fill="rgba(245,166,35,0.2)"
        />
      </svg>
    ),
    title: "Solar Savings Consultation",
    description:
      "In-depth electricity bill analysis, ROI calculation, payback period estimation, and system size recommendations.",
    tags: ["Bill Analysis", "ROI Calc", "Free Consult"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <rect
          x="4"
          y="8"
          width="24"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(245,166,35,0.1)"
        />
        <path
          d="M10 8V6C10 4.9 10.9 4 12 4H20C21.1 4 22 4.9 22 6V8"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M16 14V22M12 18H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Government Subsidy Assistance",
    description:
      "Complete guidance on PM Surya Ghar scheme — up to ₹78,000 subsidy. We handle all documentation and filings for you.",
    tags: ["PM Surya Ghar", "₹78k Subsidy", "Doc Support"],
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" className="w-7 h-7">
        <circle
          cx="16"
          cy="16"
          r="12"
          stroke="currentColor"
          strokeWidth="2"
          fill="rgba(245,166,35,0.1)"
        />
        <path
          d="M16 8V16L21 19"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "End-to-End Project Management",
    description:
      "From site survey to installation and post-installation support — a single point of contact for your entire solar journey.",
    tags: ["Site Survey", "Installation", "After-Sales"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-solar-navy">
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
              Our Services
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Everything Solar,{" "}
            <span className="text-gold-gradient">Under One Roof</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            We provide comprehensive solar solutions tailored to your energy
            needs and budget — with zero-hassle execution.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4 group hover:border-solar-gold/30 transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-solar-gold/10 border border-solar-gold/20 flex items-center justify-center text-solar-gold group-hover:bg-solar-gold/15 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {service.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full bg-solar-gold/10 text-solar-gold-light font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
