"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    
    // Simulate a cinematic luxury send transition
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after a few seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 2000);
  };

  const socials = [
    { label: "Upwork Profile", href: "https://www.upwork.com", detail: "Top Rated Creative" },
    { label: "Fiverr Pro", href: "https://www.fiverr.com", detail: "AI Cinematic Specialist" },
    { label: "GitHub Hub", href: "https://github.com", detail: "Development Repository" },
    { label: "LinkedIn", href: "https://linkedin.com", detail: "Professional Network" }
  ];

  return (
    <section id="contact" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Editorial Glowing Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-champagne-light/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Block */}
        <div className="mb-20 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-champagne-light/20 bg-champagne-light/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-champagne-light animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-champagne-light">
              INQUIRIES & COLLABORATIONS
            </span>
          </div>
          <h2 className="font-editorial text-4xl md:text-6xl text-luxury-text leading-tight mb-4">
            Let's Shape the <span className="italic text-champagne-light">Future</span> together.
          </h2>
          <p className="font-sans text-luxury-desc/80 text-sm md:text-base max-w-xl leading-relaxed">
            Have a project in mind, want to elevate your product commercials using AI, or looking to build a high-performance system? Reach out.
          </p>
        </div>

        {/* Dynamic Multi-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Column Left: High-End Brand Coordinates & Status */}
          <div className="lg:col-span-5 space-y-10">
            
            {/* Availability Box */}
            <div className="p-8 rounded-2xl bg-luxury-panel border border-luxury-border shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-champagne-light/5 rounded-bl-full group-hover:bg-champagne-light/10 transition-colors duration-500" />
              
              <div className="space-y-4">
                <span className="text-[10px] tracking-[0.2em] uppercase text-champagne-light font-bold block">
                  CURRENT AVAILABILITY
                </span>
                <h3 className="text-xl font-bold tracking-tight text-luxury-text">
                  Accepting Premium Client Contracts
                </h3>
                <p className="text-xs text-luxury-desc leading-relaxed">
                  Active in Creative AI commercial directions, full-stack software system architecture, and modern UX design workflows.
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-champagne-light uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  AVERAGE RESPONSE TIME: &lt; 12 HOURS
                </div>
              </div>
            </div>

            {/* Direct Connect Options */}
            <div className="space-y-6">
              <span className="text-[10px] tracking-[0.2em] uppercase text-champagne-light/60 font-bold block">
                DIRECT CHANNELS
              </span>
              
              <div className="space-y-4">
                <a 
                  href="mailto:usman.work@gmail.com" 
                  className="flex items-center gap-4 p-4 rounded-xl border border-luxury-border/50 hover:border-champagne-light/30 bg-luxury-panel/40 hover:bg-luxury-panel transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-champagne-light/5 border border-champagne-light/10 flex items-center justify-center text-champagne-light group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-luxury-desc/60 block uppercase tracking-wider font-semibold">EMAIL US</span>
                    <span className="text-sm font-semibold text-luxury-text group-hover:text-champagne-light transition-colors">usman.work@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl border border-luxury-border/50 bg-luxury-panel/40">
                  <div className="w-10 h-10 rounded-lg bg-champagne-light/5 border border-champagne-light/10 flex items-center justify-center text-champagne-light">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-luxury-desc/60 block uppercase tracking-wider font-semibold">HQ LOCATION</span>
                    <span className="text-sm font-semibold text-luxury-text">NUTECH University, Islamabad, PK</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Networks */}
            <div className="space-y-4">
              <span className="text-[10px] tracking-[0.2em] uppercase text-champagne-light/60 font-bold block">
                CREATIVE NETWORKS
              </span>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl border border-luxury-border bg-luxury-panel/20 hover:bg-luxury-panel/60 hover:border-champagne-light/30 transition-all duration-300 group flex flex-col justify-between h-24"
                  >
                    <div className="flex items-center justify-between w-full">
                      <span className="text-[11px] text-luxury-text font-bold uppercase tracking-wider">
                        {social.label.split(" ")[0]}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-luxury-desc/60 group-hover:text-champagne-light group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <span className="text-[10px] text-luxury-desc/50 font-medium">
                      {social.detail}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Column Right: Premium Email Form */}
          <div className="lg:col-span-7 bg-luxury-panel border border-luxury-border rounded-2xl p-8 md:p-12 shadow-2xl relative">
            
            {isSubmitted ? (
              <div className="py-16 text-center space-y-6 flex flex-col items-center animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-champagne-light/10 border border-champagne-light/20 flex items-center justify-center text-champagne-light mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-editorial text-3xl text-luxury-text">
                  Transmission Received
                </h3>
                <p className="text-sm text-luxury-desc max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out. Muhammad Usman will review your inquiry and initiate contact within the next 12 hours.
                </p>
                <div className="w-24 h-[1px] bg-luxury-border/60 my-4" />
                <span className="text-[10px] tracking-[0.2em] uppercase text-champagne-light/60 font-bold">
                  ORBIT TECHNOLOGIES SECURED CHANNEL
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="border-b border-luxury-border pb-4 mb-4">
                  <h3 className="text-xl font-bold tracking-tight text-luxury-text">
                    Digital Transmission
                  </h3>
                  <p className="text-xs text-luxury-desc">
                    All communications are routed through secure enterprise channels.
                  </p>
                </div>

                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-luxury-border hover:border-luxury-desc/50 focus:border-champagne-light focus:outline-none py-3 text-sm text-luxury-text transition-all duration-300"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none text-xs tracking-wider uppercase font-bold ${
                      focusedField === "name" || formData.name
                        ? "-top-4 text-[10px] text-champagne-light"
                        : "top-3 text-luxury-desc/50"
                    }`}
                  >
                    Your Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-luxury-border hover:border-luxury-desc/50 focus:border-champagne-light focus:outline-none py-3 text-sm text-luxury-text transition-all duration-300"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none text-xs tracking-wider uppercase font-bold ${
                      focusedField === "email" || formData.email
                        ? "-top-4 text-[10px] text-champagne-light"
                        : "top-3 text-luxury-desc/50"
                    }`}
                  >
                    Your Email Address
                  </label>
                </div>

                {/* Subject Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    onFocus={() => setFocusedField("subject")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-luxury-border hover:border-luxury-desc/50 focus:border-champagne-light focus:outline-none py-3 text-sm text-luxury-text transition-all duration-300"
                  />
                  <label
                    htmlFor="subject"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none text-xs tracking-wider uppercase font-bold ${
                      focusedField === "subject" || formData.subject
                        ? "-top-4 text-[10px] text-champagne-light"
                        : "top-3 text-luxury-desc/50"
                    }`}
                  >
                    Inquiry Subject (Optional)
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-transparent border-b border-luxury-border hover:border-luxury-desc/50 focus:border-champagne-light focus:outline-none py-3 text-sm text-luxury-text transition-all duration-300 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-0 transition-all duration-300 pointer-events-none text-xs tracking-wider uppercase font-bold ${
                      focusedField === "message" || formData.message
                        ? "-top-4 text-[10px] text-champagne-light"
                        : "top-3 text-luxury-desc/50"
                    }`}
                  >
                    Briefly describe your concept or scope
                  </label>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
                  className="w-full group/btn flex items-center justify-center gap-2 py-4 rounded-xl bg-champagne-light hover:bg-champagne-dark text-luxury-bg text-xs font-bold tracking-widest uppercase transition-all duration-500 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(214,194,161,0.25)] relative overflow-hidden"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      INIECTING SIGNAL...
                    </>
                  ) : (
                    <>
                      TRANSMIT MESSAGE
                      <Send className="w-3.5 h-3.5 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
