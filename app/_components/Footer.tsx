import Image from "next/image";

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
            <div className="mb-5">
              <div className="bg-white rounded-xl px-3 py-2 inline-block">
                <Image
                  src="/logo.png"
                  alt="Solaaris Infinity Energy"
                  width={120}
                  height={152}
                  className="h-20 w-auto object-contain"
                />
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
                📞 7558410811 (Bhardwaj Tandel)
              </a>
              <a
                href="tel:8446888294"
                className="text-slate-500 hover:text-solar-gold-dark dark:text-slate-400 dark:hover:text-solar-gold transition-colors"
              >
                📞 8446888294 (Adarsha Tandel)
              </a>
              <a
                href="mailto:info.solaarisinfinityenergy@gmail.com"
                className="text-slate-500 hover:text-solar-gold-dark dark:text-slate-400 dark:hover:text-solar-gold transition-colors"
              >
                ✉️ info.solaarisinfinityenergy@gmail.com
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
