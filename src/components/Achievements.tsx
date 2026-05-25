"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, Users, Star } from "lucide-react";

export default function Achievements() {
  const achievements = [
    {
      metric: "100+",
      label: "Fiverr & Upwork Projects",
      icon: <Briefcase className="w-5 h-5 text-champagne-light" />,
      desc: "Delivering state-of-the-art AI video ads, custom chatbot interfaces, and branding assets to global clients with a flawless track record."
    },
    {
      metric: "5.0",
      label: "Client Rating Average",
      icon: <Star className="w-5 h-5 text-champagne-light" fill="currentColor" />,
      desc: "Exceeding expectations in execution speed, prompt communication, and technical ingenuity. Trusted by international brands and marketing agencies."
    },
    {
      metric: "10K+",
      label: "Mascot Subscriptions",
      icon: <Users className="w-5 h-5 text-champagne-light" />,
      desc: "Developing and launching adorable AI cat-character animations and Mascot stories, building high-engagement channels across social platforms."
    },
    {
      metric: "50+",
      label: "AI-Powered Visuals",
      icon: <Award className="w-5 h-5 text-champagne-light" />,
      desc: "Beta-testing advanced generative models like Google Veo 3 and Runway Gen-3 to deliver ultra-realistic, scroll-stopping video commercials."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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

  return (
    <section
      id="achievements"
      className="relative py-28 lg:py-36 bg-luxury-bg border-b border-luxury-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-4">
            MILESTONES & RECOGNITION
          </span>
          <h2 className="font-editorial font-bold text-4xl md:text-5xl leading-tight text-luxury-text mb-6">
            Establishing an international creative footprint.
          </h2>
          <p className="text-sm md:text-base font-light text-luxury-desc max-w-xl leading-relaxed">
            Delivering high-value visual campaigns and automated systems to a diverse roster of clients, translating complex technical logic into premium marketing assets.
          </p>
        </div>

        {/* 4-Column Grid of Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.label}
              variants={cardVariants}
              className="glass-card p-8 rounded-3xl border border-luxury-border flex flex-col gap-6 relative group overflow-hidden"
            >
              {/* Subtle top shimmer bar */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-champagne-light/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              
              <div className="flex justify-between items-center">
                <div className="w-10 h-10 rounded-xl bg-luxury-panel border border-luxury-border flex items-center justify-center">
                  {item.icon}
                </div>
                <span className="font-editorial font-black text-3xl text-champagne-light">
                  {item.metric}
                </span>
              </div>

              <div className="space-y-2 mt-2">
                <h3 className="font-sans font-bold text-sm text-luxury-text group-hover:text-champagne-light transition-colors duration-300">
                  {item.label}
                </h3>
                <p className="text-xs font-light text-luxury-desc leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
