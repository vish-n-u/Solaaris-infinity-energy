"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80",
    alt: "Solar panels on rooftop",
  },
  {
    src: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=600&q=80",
    alt: "Commercial solar installation",
  },
  {
    src: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",
    alt: "Solar farm",
  },
  {
    src: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?w=600&q=80",
    alt: "Rooftop solar panels",
  },
  {
    src: "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80",
    alt: "Solar installation team",
  },
  {
    src: "https://images.unsplash.com/photo-1521618755572-156ae0cdd74d?w=600&q=80",
    alt: "Solar panels field",
  },
  {
    src: "https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?w=600&q=80",
    alt: "Residential solar system",
  },
  {
    src: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?w=600&q=80",
    alt: "Solar energy installation",
  },
];

// Duplicate for seamless loop
const allImages = [...galleryImages, ...galleryImages];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-28 bg-solar-navy overflow-hidden">
      <div className="section-container mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card-gold mb-4">
            <span className="text-xs font-semibold text-solar-gold tracking-widest uppercase">
              Our Projects
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Real Installations,{" "}
            <span className="text-gold-gradient">Real Results</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            A glimpse of the solar systems we have installed across homes,
            businesses, and agricultural properties.
          </p>
        </motion.div>
      </div>

      {/* Gallery strip — full width */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-solar-navy to-transparent z-10" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-solar-navy to-transparent z-10" />

        <div className="overflow-hidden">
          <div className="gallery-track gap-4 flex">
            {allImages.map((img, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 h-48 rounded-2xl overflow-hidden relative glass-card"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="288px"
                />
                <div className="absolute inset-0 bg-solar-navy/20 hover:bg-transparent transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
