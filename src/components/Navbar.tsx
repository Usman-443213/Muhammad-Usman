"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "Journey", href: "#journey" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "AI Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Track active section
      const sections = navLinks.map(link => link.href.substring(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            currentSection = section;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-luxury-bg/85 backdrop-blur-md border-b border-luxury-border"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-3 group"
          id="nav-logo"
        >
          <div className="w-10 h-10 rounded-full border border-champagne-light flex items-center justify-center font-editorial font-bold text-champagne-light text-base tracking-wider relative overflow-hidden transition-transform duration-500 group-hover:scale-105">
            MU
          </div>
          <div className="leading-tight">
            <span className="font-sans font-bold text-luxury-text text-sm tracking-widest uppercase block">
              MUHAMMAD USMAN
            </span>
            <span className="font-editorial italic text-champagne-light text-[10px] tracking-wider block">
              Digital Visionary
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-xs uppercase tracking-[0.18em] transition-colors duration-300 font-semibold relative ${
                activeSection === link.href.substring(1)
                  ? "text-champagne-light font-bold"
                  : "text-luxury-desc hover:text-luxury-text"
              }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -bottom-1.5 left-0 w-full h-[1px] bg-champagne-light" />
              )}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-luxury-border hover:border-champagne-light bg-luxury-panel/40 text-xs font-bold tracking-widest uppercase text-luxury-text transition-all duration-300 hover:bg-champagne-light hover:text-luxury-bg"
          >
            LET'S WORK <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-luxury-text hover:text-champagne-light transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Sheet */}
      <div
        className={`fixed inset-y-0 right-0 w-80 bg-luxury-bg border-l border-luxury-border z-40 transform transition-transform duration-500 ease-in-out lg:hidden flex flex-col p-8 pt-24 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="text-[10px] tracking-[0.2em] uppercase text-champagne-light border-b border-luxury-border pb-2 mb-2 font-bold">
            Navigation Map
          </span>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm uppercase tracking-widest font-semibold transition-colors duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-champagne-light font-bold"
                  : "text-luxury-desc hover:text-luxury-text"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="mt-6 flex items-center justify-center gap-2 py-3 rounded-full bg-champagne-light text-luxury-bg text-xs font-bold tracking-widest uppercase transition-transform hover:scale-102"
          >
            GET IN TOUCH <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
        <div className="mt-auto border-t border-luxury-border pt-6 text-[10px] text-luxury-desc/50 uppercase tracking-widest leading-loose">
          © 2026 MUHAMMAD USMAN <br />
          ORBIT TECHNOLOGIES
        </div>
      </div>
    </header>
  );
}
