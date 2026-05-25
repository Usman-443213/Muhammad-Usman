"use client";

import { motion } from "framer-motion";

export default function Skills() {
  const creativeSkills = [
    { name: "AI Content Creation", level: "Expert" },
    { name: "Google Veo 3", level: "Closed Beta Access" },
    { name: "Graphic Design", level: "Advanced" },
    { name: "Video Editing", level: "Advanced" },
    { name: "Prompt Engineering", level: "Expert" },
    { name: "Branding & Identity", level: "Advanced" },
    { name: "UI/UX Architecture", level: "Professional" }
  ];

  const devSkills = [
    { name: "Web Development", level: "Full-Stack" },
    { name: "React / Next.js", level: "Expert" },
    { name: "Three.js", level: "Experimental" },
    { name: "GSAP & ScrollTrigger", level: "Advanced" },
    { name: "DeepSeek APIs", level: "Expert" },
    { name: "Gemini APIs", level: "Expert" },
    { name: "MongoDB", level: "Database Architect" },
    { name: "AI Workflows & Automation", level: "Expert" }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section
      id="skills"
      className="relative py-28 lg:py-36 bg-luxury-bg border-b border-luxury-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-4">
            CRAFTSMANSHIP & ARSENAL
          </span>
          <h2 className="font-editorial font-bold text-4xl md:text-5xl leading-tight text-luxury-text mb-6">
            Blending cognitive APIs with creative direction.
          </h2>
          <p className="text-sm md:text-base font-light text-luxury-desc max-w-xl leading-relaxed">
            Operating at the threshold of advanced engineering and cinematic production. Every skill is honed to deliver state-of-the-art visual assets and intelligent systems.
          </p>
        </div>

        {/* Two Columns: Creative vs Tech */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Column 1: Creative AI & Design */}
          <div>
            <div className="flex items-center justify-between border-b border-luxury-border pb-4 mb-8">
              <h3 className="font-editorial italic font-bold text-xl text-champagne-light">
                Creative AI &amp; Directing
              </h3>
              <span className="text-[9px] uppercase tracking-widest text-luxury-desc/40 font-bold">
                07 Disciplines
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {creativeSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="glass-card p-6 rounded-xl flex flex-col gap-3 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-champagne-light transition-all duration-300 group-hover:h-full" />
                  <span className="text-[9px] uppercase tracking-widest text-champagne-light/60 font-semibold">
                    {skill.level}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-luxury-text group-hover:text-champagne-light transition-colors duration-300">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Column 2: Tech, Dev & APIs */}
          <div>
            <div className="flex items-center justify-between border-b border-luxury-border pb-4 mb-8">
              <h3 className="font-editorial italic font-bold text-xl text-champagne-light">
                Engineering &amp; Automation
              </h3>
              <span className="text-[9px] uppercase tracking-widest text-luxury-desc/40 font-bold">
                08 Disciplines
              </span>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {devSkills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="glass-card p-6 rounded-xl flex flex-col gap-3 group relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-1 h-0 bg-champagne-light transition-all duration-300 group-hover:h-full" />
                  <span className="text-[9px] uppercase tracking-widest text-champagne-light/60 font-semibold">
                    {skill.level}
                  </span>
                  <h4 className="font-sans font-bold text-sm text-luxury-text group-hover:text-champagne-light transition-colors duration-300">
                    {skill.name}
                  </h4>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
