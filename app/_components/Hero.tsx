"use client";

import { motion } from "framer-motion";

const trustBadges = [
  { icon: "🏠", label: "Residential" },
  { icon: "🏭", label: "Commercial" },
  { icon: "🌾", label: "Rural" },
];

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-solar-navy">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/work-proof/Videos/WhatsApp%20Video%202026-05-31%20at%2012.05.42.mp4"
        />
        <div className="absolute inset-0 bg-[#060F1E]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(245,166,35,0.15),transparent)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#060F1E] to-transparent" />
      </div>

      <div className="section-container relative z-10 pt-20 sm:pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card-gold mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-solar-gold-dark dark:bg-solar-gold animate-pulse" />
              <span className="text-sm font-medium text-solar-gold-dark dark:text-solar-gold-light">
                #1 Solar Partner in Maharashtra
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4 sm:mb-6 text-white"
            >
              Power Your Future
              <br />
              <span className="text-gold-gradient">With Solar Energy</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8 max-w-lg"
            >
              From initial consultation to final installation — we make solar
              simple, affordable, and hassle-free for homes and businesses across
              Maharashtra.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <button
                onClick={scrollToContact}
                className="px-7 py-3.5 bg-solar-gold text-[#060F1E] font-bold rounded-xl hover:bg-solar-gold-light transition-all duration-200 gold-glow hover:scale-105 text-base"
              >
                Get Free Quote
              </button>
              <button
                onClick={scrollToServices}
                className="px-7 py-3.5 border border-white/25 text-white font-semibold rounded-xl hover:border-solar-gold hover:text-solar-gold transition-all duration-200 text-base"
              >
                Explore Services
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 px-4 py-2 glass-card rounded-full"
                >
                  <span>{badge.icon}</span>
                  <span className="text-sm font-medium text-slate-200">
                    {badge.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — decorative solar card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-md">
              <div className="glass-card rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-solar-gold/10 rounded-full blur-3xl" />
                <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-solar-gold/8 rounded-full blur-3xl" />

                <div className="relative z-10 flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-solar-gold/10 border border-solar-gold/20 flex items-center justify-center">
                    <svg viewBox="0 0 48 48" className="w-12 h-12 text-solar-gold-dark dark:text-solar-gold" fill="none">
                      <circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2.5" fill="rgba(245,166,35,0.15)" />
                      <line x1="24" y1="4" x2="24" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="24" y1="36" x2="24" y2="44" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="4" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="36" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="8.69" y1="8.69" x2="14.34" y2="14.34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="33.66" y1="33.66" x2="39.31" y2="39.31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="39.31" y1="8.69" x2="33.66" y2="14.34" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      <line x1="14.34" y1="33.66" x2="8.69" y2="39.31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                <h3 className="text-center text-xl font-bold text-slate-900 dark:text-white mb-2">
                  Smart Solar Investment
                </h3>
                <p className="text-center text-slate-500 dark:text-slate-400 text-sm mb-6">
                  Start saving from day one
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "10+", label: "Projects" },
                    { value: "25yr", label: "Panel Life" },
                    { value: "₹78k", label: "Max Subsidy" },
                  ].map((stat) => (
                    <div key={stat.label} className="text-center p-3 rounded-xl bg-slate-100 dark:bg-white/5">
                      <div className="text-lg font-extrabold text-solar-gold-dark dark:text-solar-gold">
                        {stat.value}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-5 -left-6 glass-card-gold rounded-2xl px-4 py-2.5"
              >
                <div className="text-xs text-solar-gold-dark dark:text-solar-gold-light font-semibold">Bill Savings</div>
                <div className="text-xl font-extrabold text-solar-gold-dark dark:text-solar-gold">90%</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-6 glass-card rounded-2xl px-4 py-2.5"
              >
                <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold">Payback Period</div>
                <div className="text-xl font-extrabold text-slate-900 dark:text-white">3-5 Yrs</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-400 dark:text-slate-500 tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 border border-slate-300 dark:border-white/20 rounded-full flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-solar-gold rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
