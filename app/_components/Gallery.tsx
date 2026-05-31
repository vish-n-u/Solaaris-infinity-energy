"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

const galleryItems: GalleryItem[] = [
  { type: "image", src: "/work-proof/Images/WhatsApp%20Image%202026-05-31%20at%2012.05.41.jpeg", alt: "Solar panel rooftop installation" },
  { type: "video", src: "/work-proof/Videos/WhatsApp%20Video%202026-05-31%20at%2012.05.42.mp4" },
  { type: "image", src: "/work-proof/Images/WhatsApp%20Image%202026-05-31%20at%2012.05.42.jpeg", alt: "Commercial rooftop solar panels" },
  { type: "image", src: "/work-proof/Images/WhatsApp%20Image%202026-05-31%20at%2012.05.42%20%281%29.jpeg", alt: "Solar panel installation in progress" },
  { type: "video", src: "/work-proof/Videos/WhatsApp%20Video%202026-05-31%20at%2012.05.43%20%281%29.mp4" },
  { type: "image", src: "/work-proof/Images/WhatsApp%20Image%202026-05-31%20at%2012.05.43%20%283%29.jpeg", alt: "Rooftop solar system setup" },
];

const allItems = [...galleryItems, ...galleryItems];

export default function Gallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const isTouching = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!isTouching.current) {
        el.scrollLeft += 0.5;
      }
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft -= el.scrollWidth / 2;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onTouchStart = () => {
      isTouching.current = true;
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };

    const onTouchEnd = () => {
      resumeTimer.current = setTimeout(() => {
        isTouching.current = false;
      }, 800);
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      if (resumeTimer.current !== null) clearTimeout(resumeTimer.current);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
    };
  }, []);

  return (
    <section id="gallery" className="py-14 md:py-24 bg-slate-50 dark:bg-solar-navy overflow-hidden">
      <div className="section-container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-4">
            <span className="text-xs font-semibold text-solar-gold-dark dark:text-solar-gold tracking-widest uppercase">
              Our Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Real Installations,{" "}
            <span className="text-gold-gradient">Real Results</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mb-6 mx-auto text-base">
            A glimpse of the solar systems we have installed across homes,
            businesses, and agricultural properties.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-r from-slate-50 dark:from-solar-navy to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 md:w-16 bg-gradient-to-l from-slate-50 dark:from-solar-navy to-transparent z-10 pointer-events-none" />

        <div
          ref={trackRef}
          className="flex gap-4 overflow-x-auto px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {allItems.map((item, i) => (
            <div key={i} className="flex-shrink-0 w-[78vw] sm:w-72 h-48 sm:h-48 rounded-2xl overflow-hidden relative glass-card">
              {item.type === "image" ? (
                <>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 78vw, 288px"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 dark:bg-solar-navy/20 hover:bg-transparent transition-colors duration-300" />
                </>
              ) : (
                <video src={item.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
