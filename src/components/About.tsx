"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Video, Rocket } from "lucide-react";

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  const milestones = [
    {
      icon: <GraduationCap className="w-5 h-5 text-champagne-light" />,
      title: "Software Engineering",
      subtitle: "NUTECH Islamabad",
      desc: "Harnessing academic rigor at the National University of Technology, Islamabad, building complex full-stack web applications and robust software architectures."
    },
    {
      icon: <Rocket className="w-5 h-5 text-champagne-light" />,
      title: "AI Development",
      subtitle: "DeepSeek & LLM Integrations",
      desc: "Integrating advanced reasoning APIs, facial recognition systems, and database technologies (MongoDB) to build automated, highly intelligent software systems."
    },
    {
      icon: <Video className="w-5 h-5 text-champagne-light" />,
      title: "Cinematic AI Creator",
      subtitle: "Veo 3 & Runway ML Specialist",
      desc: "A digital storyteller pushing the limits of generative video. Leveraging Google's closed beta Veo 3 and Runway to create scroll-stopping visual commercials."
    },
    {
      icon: <Award className="w-5 h-5 text-champagne-light" />,
      title: "Elite Freelancing",
      subtitle: "Fiverr & Upwork Specialist",
      desc: "Managing high-value digital campaigns, branding, and video ads for international businesses, delivering state-of-the-art creativity with 48-hour turnarounds."
    }
  ];

  return (
    <section
      id="journey"
      className="relative py-28 lg:py-36 bg-luxury-bg border-b border-luxury-border overflow-hidden"
    >
      {/* Background soft lighting glow */}
      <div className="absolute right-0 bottom-0 w-[50vw] h-[50vh] rounded-full opacity-10 filter blur-[150px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #D6C2A1 0%, transparent 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Heading & Narrative Intro */}
          <div className="lg:col-span-5 sticky top-28">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-4">
              THE STORYTELLER'S PATH
            </span>
            <h2 className="font-editorial font-bold text-4xl md:text-5xl leading-tight text-luxury-text mb-8">
              A Modern Digital Visionary operating on a different level.
            </h2>
            <div className="h-[1px] w-12 bg-champagne-light mb-8" />
            <p className="text-sm md:text-base font-light text-luxury-desc leading-relaxed mb-6">
              I am a 20-year-old creator and software engineering student who merges the logical structure of engineering with the limitless imagination of artificial intelligence.
            </p>
            <p className="text-sm md:text-base font-light text-luxury-desc leading-relaxed">
              My mission is to create scroll-stopping digital assets, high-converting commercial advertisements, and robust web applications that leave a lasting emotional impact on the viewer.
            </p>

            {/* Quick Experience Badge */}
            <div className="mt-10 p-6 rounded-2xl bg-luxury-panel/40 border border-luxury-border flex items-center gap-6">
              <div>
                <span className="font-editorial text-4xl font-black text-champagne-light block leading-none">
                  20y
                </span>
                <span className="text-[9px] uppercase tracking-widest text-luxury-desc/50 font-bold block mt-1.5">
                  Age
                </span>
              </div>
              <div className="w-[1px] h-10 bg-luxury-border" />
              <div>
                <span className="font-editorial text-4xl font-black text-champagne-light block leading-none">
                  Veo3
                </span>
                <span className="text-[9px] uppercase tracking-widest text-luxury-desc/50 font-bold block mt-1.5">
                  Private Access
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: MileStone Grid Layout */}
          <div className="lg:col-span-7 space-y-6">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="glass-card p-8 rounded-2xl flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-luxury-panel border border-luxury-border shrink-0">
                  {milestone.icon}
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-light/70 block">
                    {milestone.subtitle}
                  </span>
                  <h3 className="font-sans font-bold text-lg text-luxury-text">
                    {milestone.title}
                  </h3>
                  <p className="text-xs md:text-sm font-light text-luxury-desc leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
