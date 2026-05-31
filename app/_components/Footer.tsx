const footerLinks = {
  Services: [
    { label: "Rooftop Installation", href: "#services" },
    { label: "Savings Consultation", href: "#services" },
    { label: "Subsidy Assistance", href: "#subsidy" },
    { label: "Project Management", href: "#services" },
  ],
  "Solar Systems": [
    { label: "On-Grid System", href: "#" },
    { label: "Off-Grid System", href: "#" },
    { label: "Hybrid System", href: "#" },
  ],
  Company: [
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Our Projects", href: "#gallery" },
    { label: "Testimonials", href: "#" },
    { label: "Contact Us", href: "#contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-solar-navy-light border-t border-white/5">
      <div className="section-container py-14">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9">
                <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9">
                  <circle cx="18" cy="18" r="17" stroke="#F5A623" strokeWidth="1.5" opacity="0.3" />
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
                <span className="font-extrabold text-lg tracking-wider text-white">
                  SOLAARIS
                </span>
                <span className="text-[10px] tracking-[0.2em] text-slate-400 font-medium">
                  INFINITY ENERGY
                </span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              Your trusted solar solutions partner for residential, commercial,
              and rural properties across Maharashtra.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="tel:8446888294"
                className="text-slate-400 hover:text-solar-gold transition-colors"
              >
                📞 8446888294 (Bhardwaj)
              </a>
              <a
                href="tel:7558410811"
                className="text-slate-400 hover:text-solar-gold transition-colors"
              >
                📞 7558410811 (Adarsha)
              </a>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/918446888294"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-solar-gold/30 transition-colors text-base"
                aria-label="WhatsApp"
              >
                💬
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-solar-gold/30 transition-colors text-base"
                aria-label="Instagram"
              >
                📸
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">
                {section}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-solar-gold transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Solaaris Infinity Energy. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-600">
            <span>Founder: Bhardwaj Tandel</span>
            <span className="mx-2">|</span>
            <span>Co-Founder: Adarsha Tandel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
