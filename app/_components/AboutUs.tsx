"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const founders = [
  {
    name: "Bhardwaj Tandel",
    role: "Founder & Director",
    initial: "B",
    image: "/Bharadwaj.jpeg",
    bio: "Driving the vision behind Solaaris, Bhardwaj brings deep expertise in solar energy systems and a passion for making clean energy accessible to every household and business across Maharashtra.",
  },
  {
    name: "Adarsha Tandel",
    role: "Co-Founder",
    initial: "A",
    image: "/Adarsha.jpeg",
    bio: "Adarsha oversees operations and client relationships, ensuring every installation meets the highest standards of quality, safety, and long-term performance.",
  },
];

export default function AboutUs() {
  return (
    <section id="about" className="py-14 md:py-24 bg-white dark:bg-solar-navy-light">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-5">
              <span className="text-xs font-semibold text-solar-gold-dark dark:text-solar-gold tracking-widest uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-5 leading-tight">
              Powering Maharashtra with{" "}
              <span className="text-gold-gradient">Clean Solar Energy</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-4">
              Solaaris Infinity Energy was founded with a single mission — to make
              solar power simple, affordable, and accessible for every home,
              business, and farm across Maharashtra.
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
              We handle everything end-to-end: site assessment, system design,
              government subsidy paperwork, installation, and after-sales support.
              Our clients don't just save on electricity bills — they invest in a
              cleaner, energy-independent future.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "10+", label: "Installations Completed" },
                { value: "50kW+", label: "Total Capacity Installed" },
                { value: "₹78k", label: "Max Govt. Subsidy" },
                { value: "25 Yrs", label: "Panel Lifespan" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-4"
                >
                  <div className="text-2xl font-extrabold text-solar-gold-dark dark:text-solar-gold mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Founders */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5"
          >
            <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">
              Meet the Founders
            </p>

            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className="glass-card rounded-2xl p-6 flex gap-5 items-start"
              >
                <div className="w-14 h-14 rounded-2xl border border-solar-gold/25 flex-shrink-0 overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="font-extrabold text-slate-900 dark:text-white text-base">
                    {founder.name}
                  </div>
                  <div className="text-xs text-solar-gold-dark dark:text-solar-gold font-semibold uppercase tracking-wider mb-2">
                    {founder.role}
                  </div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </motion.div>
            ))}

            <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-solar-gold/15 border border-solar-gold/25 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-solar-gold-dark dark:text-solar-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Maharashtra-Based, Customer-First
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Serving residential, commercial &amp; agricultural properties across the state
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
