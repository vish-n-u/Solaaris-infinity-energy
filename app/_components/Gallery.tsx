"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type GalleryItem =
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string };

const galleryItems: GalleryItem[] = [
  {
    type: "image",
    src: "/work-proof/Images/WhatsApp%20Image%202026-05-31%20at%2012.05.41.jpeg",
    alt: "Solar panel rooftop installation",
  },
  {
    type: "video",
    src: "/work-proof/Videos/WhatsApp%20Video%202026-05-31%20at%2012.05.42.mp4",
  },
  {
    type: "image",
    src: "/work-proof/Images/WhatsApp%20Image%202026-05-31%20at%2012.05.42.jpeg",
    alt: "Commercial rooftop solar panels",
  },
  {
    type: "image",
    src: "/work-proof/Images/WhatsApp%20Image%202026-05-31%20at%2012.05.42%20%281%29.jpeg",
    alt: "Solar panel installation in progress",
  },
  {
    type: "video",
    src: "/work-proof/Videos/WhatsApp%20Video%202026-05-31%20at%2012.05.43%20%281%29.mp4",
  },
  {
    type: "image",
    src: "/work-proof/Images/WhatsApp%20Image%202026-05-31%20at%2012.05.43%20%283%29.jpeg",
    alt: "Rooftop solar system setup",
  },
];

const allItems = [...galleryItems, ...galleryItems];

export default function Gallery() {
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
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-slate-50 dark:from-solar-navy to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-slate-50 dark:from-solar-navy to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="gallery-track gap-4 flex">
            {allItems.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden relative glass-card">
                {item.type === "image" ? (
                  <>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="288px"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 dark:bg-solar-navy/20 hover:bg-transparent transition-colors duration-300" />
                  </>
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
