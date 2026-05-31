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
    <footer className="bg-white dark:bg-solar-navy-light border-t mt-4 pt-6 border-slate-200 dark:border-white/5">
      <div className="section-container pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
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
                <span className="font-extrabold text-lg tracking-wider text-solar-navy dark:text-white">
                  SOLAARIS
                </span>
                <span className="text-[10px] tracking-[0.2em] text-slate-400 font-medium">
                  INFINITY ENERGY
                </span>
              </div>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Your trusted solar solutions partner for residential, commercial,
              and rural properties across Maharashtra.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-3 text-sm">
              <a
                href="tel:7558410811"
                className="text-slate-500 hover:text-solar-gold-dark dark:text-slate-400 dark:hover:text-solar-gold transition-colors"
              >
                📞 7558410811 (Bhardwaj)
              </a>
              <a
                href="tel:8446888294"
                className="text-slate-500 hover:text-solar-gold-dark dark:text-slate-400 dark:hover:text-solar-gold transition-colors"
              >
                📞 8446888294 (Adarsha)
              </a>
            </div>
           
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-widest mb-5">
                {section}
              </h4>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-solar-gold-dark dark:hover:text-solar-gold transition-colors duration-200"
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
      <div className="border-t border-slate-200 dark:border-white/5">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-400 dark:text-slate-600">
            &copy; {new Date().getFullYear()} Solaaris Infinity Energy. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-600">
            <span>Founder: Bhardwaj Tandel</span>
            <span className="mx-2">|</span>
            <span>Co-Founder: Adarsha Tandel</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
