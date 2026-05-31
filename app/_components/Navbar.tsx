"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Subsidy", href: "#subsidy" },
  { label: "Projects", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060F1E]/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9">
              <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
                <circle
                  cx="18"
                  cy="18"
                  r="17"
                  stroke="#F5A623"
                  strokeWidth="1.5"
                  opacity="0.3"
                />
                <path
                  d="M10 18C10 14.5 12.5 12 15 12C17.5 12 18 14 18 14C18 14 18.5 10 21 10C23.5 10 26 12.5 26 16C26 19.5 23.5 22 21 22C18.5 22 18 20 18 20C18 20 17.5 24 15 24C12.5 24 10 21.5 10 18Z"
                  stroke="#F5A623"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                />
                <circle cx="18" cy="6" r="2" fill="#F5A623" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-lg tracking-wider text-white group-hover:text-solar-gold transition-colors duration-200">
                SOLAARIS
              </span>
              <span className="text-[10px] tracking-[0.2em] text-slate-400 font-medium">
                INFINITY ENERGY
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-300 hover:text-solar-gold transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-solar-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:8446888294"
              className="text-sm font-medium text-slate-300 hover:text-solar-gold transition-colors duration-200"
            >
              8446888294
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 bg-solar-gold text-[#060F1E] text-sm font-bold rounded-lg hover:bg-solar-gold-light transition-all duration-200 gold-glow hover:scale-105"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#060F1E]/98 backdrop-blur-md border-t border-white/5"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-slate-300 hover:text-solar-gold hover:bg-white/5 rounded-lg transition-colors duration-150 font-medium"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="mt-2 mx-4 py-3 bg-solar-gold text-[#060F1E] font-bold rounded-lg hover:bg-solar-gold-light transition-colors"
              >
                Get Free Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
