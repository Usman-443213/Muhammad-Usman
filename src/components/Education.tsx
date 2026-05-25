"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Layers } from "lucide-react";

export default function Education() {
  const cards = [
    {
      icon: <GraduationCap className="w-5 h-5 text-champagne-light" />,
      title: "BSc in Software Engineering",
      institution: "NUTECH, Islamabad",
      period: "In Progress",
      desc: "Deeply engaged in structural software engineering methodologies, studying database modeling, high-level algorithms, visual architectures, and cognitive computing models."
    },
    {
      icon: <BookOpen className="w-5 h-5 text-champagne-light" />,
      title: "Continuous Learning Paradigm",
      institution: "Autonomous Curation",
      period: "Lifelong Pursuit",
      desc: "Aggressively expanding competencies in prompt orchestration, vector embeddings, advanced generative video modeling (Veo 3 beta-tests), and smooth micro-interaction UX."
    }
  ];

  return (
    <section
      id="education"
      className="relative py-28 lg:py-36 bg-luxury-bg border-b border-luxury-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Context Text */}
          <div className="lg:col-span-5">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-4">
              ACADEMIC FOUNDATION
            </span>
            <h2 className="font-editorial font-bold text-4xl md:text-5xl leading-tight text-luxury-text mb-6">
              Rigorous research meets real execution.
            </h2>
            <p className="text-sm font-light text-luxury-desc leading-relaxed max-w-sm mb-6">
              My engineering background at NUTECH, Islamabad provides the structural blueprint for my creativity, ensuring that every AI solution or interface is grounded in robust logic.
            </p>
            
            {/* Elegant detail list */}
            <ul className="space-y-4 text-xs font-semibold text-luxury-desc uppercase tracking-widest pt-2">
              <li className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-champagne-light" /> DATA STRUCTURES &amp; LOGIC
              </li>
              <li className="flex items-center gap-3">
                <Layers className="w-4 h-4 text-champagne-light" /> COGNITIVE INTERFACE DESIGN
              </li>
            </ul>
          </div>

          {/* Right Column: Cards */}
          <div className="lg:col-span-7 space-y-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="glass-card p-8 rounded-3xl border border-luxury-border flex flex-col sm:flex-row gap-6"
              >
                <div className="w-12 h-12 rounded-2xl bg-luxury-panel border border-luxury-border flex items-center justify-center shrink-0">
                  {card.icon}
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap justify-between items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-light">
                      {card.institution}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-semibold px-2.5 py-0.5 rounded border border-luxury-border text-luxury-desc/60 bg-luxury-panel/40">
                      {card.period}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-lg text-luxury-text">
                    {card.title}
                  </h3>
                  <p className="text-xs md:text-sm font-light text-luxury-desc leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
