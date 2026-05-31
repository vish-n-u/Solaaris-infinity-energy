"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="relative w-9 h-9 rounded-lg flex items-center justify-center transition-colors duration-200
        bg-slate-100 hover:bg-slate-200 border border-slate-200
        dark:bg-white/8 dark:hover:bg-white/12 dark:border-white/10"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="w-4.5 h-4.5 text-solar-gold"
            viewBox="0 0 20 20"
            fill="none"
          >
            <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.8" />
            <line x1="10" y1="2" x2="10" y2="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="10" y1="16" x2="10" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="2" y1="10" x2="4" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="16" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="14.36" y1="14.36" x2="15.78" y2="15.78" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="15.78" y1="4.22" x2="14.36" y2="5.64" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="5.64" y1="14.36" x2="4.22" y2="15.78" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.2 }}
            className="w-4 h-4 text-solar-navy"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
