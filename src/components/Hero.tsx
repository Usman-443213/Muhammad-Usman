"use client";

import { motion } from "framer-motion";
import { ArrowDown, Video, Play, Phone } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const // Apple smooth ease-out
      }
    }
  };

  const lineRevealVariants = {
    hidden: { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", y: 40 },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 bg-luxury-bg"
    >
      {/* Cinematic Subtle Radial Gradient Ambient Lighting */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[60vh] rounded-full opacity-20 filter blur-[120px] transition-transform duration-[6000ms] animate-pulse-slow"
          style={{
            background: "radial-gradient(circle, #D6C2A1 0%, rgba(203, 184, 157, 0.1) 70%, transparent 100%)"
          }}
        />
        {/* Fine Architectural Grid Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px"
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Identity Label */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-luxury-border bg-luxury-panel/40 mb-8"
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full bg-champagne-light animate-ping opacity-75"></span>
              <span className="relative rounded-full w-1.5 h-1.5 bg-champagne-light"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light">
              AI Creator • Developer • Digital Visionary
            </span>
          </motion.div>

          {/* Huge Cinematic Typography */}
          <div className="overflow-hidden mb-6 py-2">
            <motion.h1
              variants={lineRevealVariants}
              className="font-editorial font-black leading-[1.05] text-luxury-text text-5xl md:text-8xl tracking-tight"
            >
              Muhammad Usman
            </motion.h1>
          </div>

          {/* Luxury Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg font-light leading-relaxed text-luxury-desc max-w-2xl mb-12 tracking-wide"
          >
            Building high-end, immersive digital experiences through advanced{" "}
            <span className="text-luxury-text font-medium">Artificial Intelligence</span>, custom{" "}
            <span className="text-luxury-text font-medium">Software Engineering</span>, and modern, cinematic digital storytelling.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 justify-center items-center mb-16"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-champagne-light text-luxury-bg text-xs font-bold tracking-widest uppercase transition-all duration-300 hover:bg-champagne-dark hover:scale-102"
            >
              VIEW PROJECTS
            </button>
            <button
              onClick={() => handleScrollTo("gallery")}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-luxury-border hover:border-champagne-light bg-luxury-panel/30 text-xs font-bold tracking-widest uppercase text-luxury-text transition-all duration-300 hover:bg-luxury-card"
            >
              <Video className="w-3.5 h-3.5 text-champagne-light" /> EXPLORE AI GALLERY
            </button>
            <button
              onClick={() => handleScrollTo("contact")}
              className="flex items-center gap-2 px-8 py-4 rounded-full border border-transparent hover:border-luxury-border text-xs font-bold tracking-widest uppercase text-luxury-desc hover:text-luxury-text transition-all duration-300"
            >
              <Phone className="w-3.5 h-3.5" /> CONTACT ME
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll to Explore Indicator */}
      <div 
        onClick={() => handleScrollTo("journey")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2.5 cursor-pointer group pointer-events-auto"
      >
        <span className="text-[9px] text-luxury-desc/40 uppercase tracking-[0.25em] font-semibold transition-colors duration-300 group-hover:text-champagne-light">
          Scroll to explore
        </span>
        <div className="w-6 h-10 rounded-full border border-luxury-border flex justify-center p-1.5 transition-colors duration-300 group-hover:border-champagne-light">
          <motion.div 
            animate={{
              y: [0, 10, 0]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-champagne-light"
          />
        </div>
      </div>
    </section>
  );
}
