"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ramesh Patil",
    location: "Pune, Maharashtra",
    type: "Residential",
    rating: 5,
    text: "Solaaris made the entire process incredibly smooth. From the first consultation to the final installation, the team was professional and transparent. My electricity bill dropped from ₹4,500 to under ₹400!",
    system: "3kW On-Grid System",
  },
  {
    name: "Sunita Deshmukh",
    location: "Nashik, Maharashtra",
    type: "Commercial",
    rating: 5,
    text: "We had a 15kW system installed for our manufacturing unit. The ROI calculation they provided was spot-on. The subsidy documentation was handled entirely by their team — zero headaches for us.",
    system: "15kW On-Grid System",
  },
  {
    name: "Anil Shinde",
    location: "Ahmednagar, Maharashtra",
    type: "Agricultural",
    rating: 5,
    text: "Running our water pump on solar has been a game changer. No more diesel costs, no more power cut issues. Bhardwaj bhai's team explained everything clearly. Highly recommended!",
    system: "5kW Off-Grid System",
  },
];

export default function Testimonials() {
  return (
    <section className="py-14 md:py-24 bg-solar-navy-light">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-4">
            <span className="text-xs font-semibold text-solar-gold tracking-widest uppercase">
              Testimonials
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            What Our Customers{" "}
            <span className="text-gold-gradient">Say About Us</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Real stories from homeowners and businesses who made the switch to
            solar with Solaaris.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <svg
                    key={j}
                    className="w-4 h-4 text-solar-gold"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path d="M8 1.3l1.8 3.6 4 .6-2.9 2.8.7 4L8 10.4l-3.6 1.9.7-4L2.2 5.5l4-.6L8 1.3z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-slate-300 leading-relaxed flex-1 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* System badge */}
              <div className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-solar-gold/10 text-solar-gold-light font-medium w-fit">
                {t.system}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-solar-gold/15 border border-solar-gold/20 flex items-center justify-center text-solar-gold font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.location}</div>
                </div>
                <span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
                  {t.type}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
