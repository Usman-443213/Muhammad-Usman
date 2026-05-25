"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Cpu, Bot, CloudSun, Eye } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      num: "01",
      title: "AI-Powered Attendance System",
      icon: <Cpu className="w-5 h-5 text-champagne-light" />,
      tagline: "Biometric Automation & Facial Recognition",
      desc: "An advanced academic group collaboration designed to completely automate attendance tracking. The application detects and matches faces using advanced neural face detection APIs, immediately recording updates in a cloud MongoDB database. Reduces tracking errors and eliminates manual auditing completely.",
      tags: ["Artificial Intelligence", "Face APIs", "MongoDB", "Python Backend"],
      mockupBg: "linear-gradient(135deg, #1E1B18 0%, #0A0A0A 100%)",
      mockupVisual: (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          {/* Abstract Attendance Dashboard Mockup */}
          <div className="w-full max-w-[280px] rounded-xl border border-luxury-border bg-luxury-panel/80 p-4 space-y-4 shadow-2xl relative overflow-hidden">
            <div className="flex justify-between items-center border-b border-luxury-border/60 pb-2">
              <span className="text-[8px] uppercase tracking-widest text-champagne-light font-bold">Face Scan Active</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            </div>
            {/* Visual camera box placeholder */}
            <div className="aspect-[4/3] rounded-lg bg-luxury-bg border border-luxury-border flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute inset-2 rounded border border-dashed border-champagne-light/30 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-champagne-light/50 flex items-center justify-center text-champagne-light/75 text-[10px] font-bold">
                  98%
                </div>
              </div>
              <span className="text-[7px] uppercase tracking-widest text-luxury-desc/40 mt-12 font-bold">Matching ID...</span>
            </div>
            <div className="flex justify-between items-center text-[8px] text-luxury-desc">
              <span>Verified: Usman Bhatti</span>
              <span className="text-champagne-light">Saved to DB</span>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "02",
      title: "Personal AI Chatbot",
      icon: <Bot className="w-5 h-5 text-champagne-light" />,
      tagline: "Conversational Intelligence & Reasoning",
      desc: "A premium conversational assistant custom-integrated with the DeepSeek API. Engineered to process complex queries, write clean code, and provide detailed analytical answers in real-time. Features an elegant markdown parser and smooth typing animations optimized for a seamless interactive UX.",
      tags: ["DeepSeek API", "Next.js", "Tailwind CSS", "Prompt Engineering"],
      mockupBg: "linear-gradient(135deg, #111A1E 0%, #0A0A0A 100%)",
      mockupVisual: (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          {/* Abstract Chat Mockup */}
          <div className="w-full max-w-[280px] rounded-xl border border-luxury-border bg-luxury-panel/80 p-4 space-y-3 shadow-2xl relative">
            <div className="flex items-center gap-2 border-b border-luxury-border/60 pb-2">
              <div className="w-2 h-2 rounded-full bg-champagne-light" />
              <span className="text-[8px] uppercase tracking-widest text-luxury-text font-bold">DeepSeek Assistant</span>
            </div>
            <div className="space-y-2">
              <div className="bg-luxury-bg border border-luxury-border p-2 rounded-lg text-[8px] text-luxury-desc max-w-[85%]">
                How do I implement a GSAP ScrollTrigger timeline?
              </div>
              <div className="bg-champagne-light/10 border border-champagne-light/20 p-2 rounded-lg text-[8px] text-champagne-light max-w-[85%] self-end ml-auto">
                Use <span className="font-mono">gsap.timeline()</span> with scrollTrigger params to lock section scrolling...
              </div>
            </div>
            <div className="h-6 rounded-md bg-luxury-bg border border-luxury-border flex items-center px-2 justify-between">
              <span className="text-[7px] text-luxury-desc/50">Type your message...</span>
              <ArrowUpRight className="w-3 h-3 text-champagne-light" />
            </div>
          </div>
        </div>
      )
    },
    {
      num: "03",
      title: "Weather Web Application",
      icon: <CloudSun className="w-5 h-5 text-champagne-light" />,
      tagline: "Dynamic API Integration & Live Data",
      desc: "A minimalist weather forecasting interface displaying real-time atmospheric data for any global location. Integrates directly with open weather API nodes to deliver wind metrics, humidity vectors, thermal thresholds, and a clean, responsive layout built entirely in optimized HTML5/Tailwind.",
      tags: ["REST APIs", "HTML5", "Responsive Web", "Live Dashboard"],
      mockupBg: "linear-gradient(135deg, #151C1A 0%, #0A0A0A 100%)",
      mockupVisual: (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          {/* Abstract Weather Mockup */}
          <div className="w-full max-w-[280px] rounded-xl border border-luxury-border bg-luxury-panel/80 p-4 space-y-4 shadow-2xl">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="text-[10px] font-bold text-luxury-text">Islamabad, PK</h4>
                <p className="text-[7px] text-luxury-desc">Scattered Clouds</p>
              </div>
              <span className="font-editorial italic text-2xl font-bold text-champagne-light">32°</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-luxury-bg border border-luxury-border p-2 rounded-lg text-center">
                <span className="text-[6px] uppercase tracking-wider text-luxury-desc/40 block font-bold">Wind</span>
                <span className="text-[8px] text-luxury-text font-bold mt-1 block">12 km/h</span>
              </div>
              <div className="bg-luxury-bg border border-luxury-border p-2 rounded-lg text-center">
                <span className="text-[6px] uppercase tracking-wider text-luxury-desc/40 block font-bold">Humidity</span>
                <span className="text-[8px] text-luxury-text font-bold mt-1 block">45%</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      num: "04",
      title: "Image Text Extractor",
      icon: <Eye className="w-5 h-5 text-champagne-light" />,
      tagline: "Optical Character Recognition (OCR) Engine",
      desc: "A custom Python-powered OCR engine. Solves manual data entry challenges by instantly reading text coordinates from uploaded JPG/PNG files, applying digital contrast normalization, and converting spatial letters into clean raw text templates in under 2 seconds.",
      tags: ["Python OCR", "Image Processing", "Data Digitization", "Clean UX"],
      mockupBg: "linear-gradient(135deg, #1E1218 0%, #0A0A0A 100%)",
      mockupVisual: (
        <div className="relative w-full h-full flex items-center justify-center p-6">
          {/* Abstract OCR Mockup */}
          <div className="w-full max-w-[280px] rounded-xl border border-luxury-border bg-luxury-panel/80 p-4 space-y-3 shadow-2xl">
            <div className="border border-dashed border-luxury-border rounded-lg p-2 flex flex-col items-center bg-luxury-bg/50">
              <span className="text-[6px] uppercase tracking-widest text-luxury-desc/40 font-bold">Uploaded File</span>
              <span className="text-[7px] text-champagne-light mt-1 font-semibold">invoice_2026.png</span>
            </div>
            <div className="h-1 bg-luxury-border rounded relative overflow-hidden">
              <motion.div
                animate={{
                  left: ["-100%", "100%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-y-0 w-1/3 bg-champagne-light"
              />
            </div>
            <div className="bg-luxury-bg border border-luxury-border p-2 rounded-lg text-[6px] font-mono text-luxury-desc whitespace-pre">
              INVOICE #949320<br />
              TOTAL DUE: $1,250.00<br />
              DUE DATE: 25-05-2026
            </div>
          </div>
        </div>
      )
    }
  ];

  const caseVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section
      id="projects"
      className="relative py-28 lg:py-36 bg-luxury-bg border-b border-luxury-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-4">
            SELECTED CASE STUDIES
          </span>
          <h2 className="font-editorial font-bold text-4xl md:text-5xl leading-tight text-luxury-text mb-6">
            Pioneering solutions with precision architecture.
          </h2>
          <p className="text-sm md:text-base font-light text-luxury-desc max-w-xl leading-relaxed">
            A showcase of developmental logic and interface design. Challenging traditional parameters by combining API integrations, custom algorithms, and robust cloud services.
          </p>
        </div>

        {/* Stack of Case Studies */}
        <div className="space-y-24 lg:space-y-36">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={caseVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Left Side: Case Metadata & Text */}
              <div className={`lg:col-span-6 space-y-6 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-4 border-b border-luxury-border/60 pb-4">
                  <span className="font-editorial italic font-black text-4xl text-champagne-light/50">
                    {project.num}
                  </span>
                  <div className="w-[1px] h-6 bg-luxury-border" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-champagne-light">
                    {project.tagline}
                  </span>
                </div>

                <h3 className="font-editorial text-3xl font-bold text-luxury-text tracking-tight">
                  {project.title}
                </h3>

                <p className="text-sm font-light text-luxury-desc leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-[9px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-luxury-border bg-luxury-panel/40 text-luxury-desc"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: High-End Case Mockup Panel */}
              <div 
                className={`lg:col-span-6 aspect-video rounded-3xl border border-luxury-border relative overflow-hidden flex items-center justify-center ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
                style={{
                  background: project.mockupBg,
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Visual rendering placeholder inside the case mockup */}
                {project.mockupVisual}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
