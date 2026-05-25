"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Journey", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "AI Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-[#080808] border-t border-luxury-border py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: Signature & Navigation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 items-start">
          
          {/* Logo Nameplate */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="font-editorial text-2xl md:text-3xl text-luxury-text tracking-tight font-bold">
                MUHAMMAD USMAN
              </h3>
              <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-champagne-light font-bold">
                SOFTWARE ENGINEER & AI CREATOR
              </p>
            </div>
            <p className="text-xs text-luxury-desc/60 max-w-sm leading-relaxed">
              Operating at the bleeding edge of visual intelligence and software engineering. Architecting premium digital systems and storytelling experiences.
            </p>
          </div>

          {/* Quick Links Map */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-champagne-light/50 font-bold block">
              NAVIGATIONAL INDEX
            </span>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(link.href);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-xs text-luxury-desc hover:text-champagne-light transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Tech Ecosystem Details */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[10px] tracking-[0.2em] uppercase text-champagne-light/50 font-bold block">
              ECOSYSTEM TECH
            </span>
            <p className="text-[11px] text-luxury-desc/50 leading-relaxed uppercase tracking-wider">
              Next.js 15 • React 19 • Tailwind CSS v4 • Framer Motion • GSAP ScrollTrigger • Lenis Deceleration
            </p>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-luxury-border my-8" />

        {/* Bottom Section: Copyrights & Back to Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Copyrights and sub-brand */}
          <div className="text-[10px] text-luxury-desc/40 uppercase tracking-[0.15em] text-center md:text-left leading-loose">
            <div>© {new Date().getFullYear()} MUHAMMAD USMAN. ALL RIGHTS RESERVED.</div>
            <div className="mt-1">
              POWRED BY{" "}
              <span className="text-champagne-light font-semibold">ORBIT TECHNOLOGIES</span>
            </div>
          </div>

          {/* Back to top CTA */}
          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-luxury-border hover:border-champagne-light bg-luxury-panel/40 text-[10px] font-bold tracking-widest uppercase text-luxury-text transition-all duration-300 hover:bg-champagne-light hover:text-luxury-bg group"
            aria-label="Scroll back to top"
          >
            BACK TO SUMMIT 
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>

        </div>

      </div>
    </footer>
  );
}
