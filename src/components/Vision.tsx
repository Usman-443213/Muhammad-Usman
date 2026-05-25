"use client";

import { motion } from "framer-motion";
import { Compass, Eye, Sparkles } from "lucide-react";

export default function Vision() {
  const pillars = [
    {
      icon: <Sparkles className="w-4 h-4 text-champagne-light" />,
      title: "Synthesize Art & Logic",
      desc: "Challenging the false dichotomy between strict engineering logic and artistic visual storytelling."
    },
    {
      icon: <Compass className="w-4 h-4 text-champagne-light" />,
      title: "Pioneer Cognitive UX",
      desc: "Creating web interfaces that feel alive, responding smoothly to user interactions and sensory triggers."
    },
    {
      icon: <Eye className="w-4 h-4 text-champagne-light" />,
      title: "Cinematic Creator Future",
      desc: "Harnessing the maximum capacity of models like Google Veo 3 to write, direct, and compile complete visual brands."
    }
  ];

  return (
    <section
      id="vision"
      className="relative py-28 lg:py-36 bg-luxury-panel border-b border-luxury-border overflow-hidden"
    >
      {/* Dynamic ambient halo background light */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[50vh] rounded-full opacity-10 filter blur-[130px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #D6C2A1 0%, transparent 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        
        {/* Subtitle Eyebrow */}
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-8">
          VISION &amp; FUTURE PHILOSOPHY
        </span>

        {/* Large Editorial Visual Quote Statement */}
        <div className="max-w-4xl mb-20">
          <p className="font-editorial italic font-black text-3xl md:text-5xl lg:text-6xl text-luxury-text leading-[1.15] tracking-tight">
            “The future belongs to those who merge the absolute structure of engineering with the limitless imagination of AI.”
          </p>
        </div>

        {/* 3-Column Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl mt-4">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="glass-card p-8 rounded-3xl border border-luxury-border/60 text-left flex flex-col gap-4 relative group"
            >
              <div className="w-10 h-10 rounded-xl bg-luxury-bg border border-luxury-border flex items-center justify-center text-champagne-light">
                {pillar.icon}
              </div>
              <h3 className="font-sans font-bold text-sm text-luxury-text group-hover:text-champagne-light transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-xs font-light text-luxury-desc leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
