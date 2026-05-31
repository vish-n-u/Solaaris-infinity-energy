"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

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
          ? "bg-white/95 backdrop-blur-md shadow-sm shadow-slate-200/80 dark:bg-[#060F1E]/95 dark:shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a href="#" className="flex items-center group">
            <div className="bg-white rounded-xl px-2 py-1 transition-opacity duration-200 group-hover:opacity-85">
              <Image
                src="/logo.png"
                alt="Solaaris Infinity Energy"
                width={100}
                height={126}
                className="h-14 w-auto object-contain"
                priority
              />
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-slate-600 hover:text-solar-gold-dark dark:text-slate-300 dark:hover:text-solar-gold transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-solar-gold-dark dark:bg-solar-gold group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:7558410811"
              className="text-sm font-medium text-slate-600 hover:text-solar-gold-dark dark:text-slate-300 dark:hover:text-solar-gold transition-colors duration-200"
            >
              7558410811
            </a>
            <ThemeToggle />
            <button
              onClick={() => handleNavClick("#contact")}
              className="px-5 py-2.5 bg-solar-gold text-[#060F1E] text-sm font-bold rounded-lg hover:bg-solar-gold-light transition-all duration-200 gold-glow hover:scale-105"
            >
              Get Free Quote
            </button>
          </div>

          {/* Mobile right */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="flex flex-col gap-1.5 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-slate-700 dark:bg-white origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-6 h-0.5 bg-slate-700 dark:bg-white"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-slate-700 dark:bg-white origin-center"
              />
            </button>
          </div>
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
            className="md:hidden bg-white/98 backdrop-blur-md border-t border-slate-200 dark:bg-[#060F1E]/98 dark:border-white/5"
          >
            <div className="section-container py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 text-slate-600 hover:text-solar-gold-dark hover:bg-slate-50 dark:text-slate-300 dark:hover:text-solar-gold dark:hover:bg-white/5 rounded-lg transition-colors duration-150 font-medium"
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
