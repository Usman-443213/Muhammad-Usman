"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Laptop, Film, Palette, Sparkles, Megaphone, Compass } from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      icon: <Laptop className="w-6 h-6 text-champagne-light" />,
      title: "Web Development",
      tools: ["Next.js 15", "TypeScript", "Tailwind", "GSAP"],
      desc: "Architecting high-performance, responsive single-page web experiences. Combining clean frontend architectures with complex interactive animations to ensure optimal load times and smooth visuals."
    },
    {
      icon: <Film className="w-6 h-6 text-champagne-light" />,
      title: "AI Video Creation",
      tools: ["Google Veo 3", "Runway Gen-3", "Pika Labs"],
      desc: "Creating scroll-stopping cinematic commercials, social media Reels, and product advertisements. Leveraging state-of-the-art generative video models to craft photo-realistic narratives."
    },
    {
      icon: <Palette className="w-6 h-6 text-champagne-light" />,
      title: "Graphic Design",
      tools: ["Canva Pro", "Photoshop", "Illustrator"],
      desc: "Crafting modern, premium branding assets, social media templates, and marketing collateral. Delivering elegant, minimalist visuals optimized for strong brand consistency."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-champagne-light" />,
      title: "Branding & Identity",
      tools: ["Creative Direction", "Color Systems", "Logos"],
      desc: "Formulating cohesive digital identity experiences. Defining primary palettes, modern typography scales, and structural guidelines that establish premium brand positioning."
    },
    {
      icon: <Megaphone className="w-6 h-6 text-champagne-light" />,
      title: "Digital Marketing",
      tools: ["Ad Campaigns", "Engagement", "Analytics"],
      desc: "Designing high-engagement marketing strategies tailored for conversions. Integrating visual storytelling with targeted distribution to optimize customer acquisition."
    },
    {
      icon: <Compass className="w-6 h-6 text-champagne-light" />,
      title: "Creative Direction",
      tools: ["Art Direction", "Storyboards", "Curation"],
      desc: "Overseeing the full visual lifecycle of digital projects. Blending technical engineering intelligence with elite visual curation to align product features with artistic vision."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const elements = containerRef.current.querySelectorAll(".service-scroll-block");
      let activeIndex = 0;

      elements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2) {
          activeIndex = index;
        }
      });

      setActiveTab(activeIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (index: number) => {
    if (!containerRef.current) return;
    const elements = containerRef.current.querySelectorAll(".service-scroll-block");
    if (elements[index]) {
      elements[index].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative py-28 lg:py-36 bg-luxury-bg border-b border-luxury-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Sticky Left Column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-4">
                SPECIALIZATION & VALUE
              </span>
              <h2 className="font-editorial font-bold text-4xl md:text-5xl leading-tight text-luxury-text mb-6">
                Unleashing digital craftsmanship.
              </h2>
              <p className="text-sm font-light text-luxury-desc leading-relaxed max-w-sm">
                Each service is tailored to deliver maximum impact, merging advanced technological automation with elegant design.
              </p>
            </div>

            {/* Sidebar Active Navigation */}
            <div className="hidden lg:flex flex-col gap-3 border-l border-luxury-border pl-6 relative">
              {/* Dynamic scroll progress indicator */}
              <div 
                className="absolute left-0 top-0 w-[2px] bg-champagne-light transition-all duration-300"
                style={{
                  height: "28px",
                  transform: `translateY(${activeTab * 40}px)`
                }}
              />
              {services.map((service, index) => (
                <button
                  key={service.title}
                  onClick={() => handleTabClick(index)}
                  className={`text-left text-xs uppercase tracking-widest font-semibold transition-colors duration-300 h-7 flex items-center ${
                    activeTab === index ? "text-champagne-light font-bold" : "text-luxury-desc/50 hover:text-luxury-text"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Right Scrollable Column */}
          <div className="lg:col-span-7 space-y-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="service-scroll-block glass-card p-10 rounded-3xl border border-luxury-border flex flex-col gap-6 relative overflow-hidden"
              >
                {/* Floating ambient glow in background */}
                <div 
                  className={`absolute right-0 bottom-0 w-44 h-44 rounded-full filter blur-[80px] pointer-events-none transition-opacity duration-1000 ${
                    activeTab === index ? "opacity-20" : "opacity-0"
                  }`}
                  style={{
                    background: "radial-gradient(circle, #D6C2A1 0%, transparent 100%)"
                  }}
                />

                <div className="flex justify-between items-start border-b border-luxury-border/50 pb-6">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-luxury-panel border border-luxury-border text-champagne-light">
                    {service.icon}
                  </div>
                  <span className="font-editorial italic font-black text-6xl text-luxury-border">
                    0{index + 1}
                  </span>
                </div>

                <div className="space-y-4">
                  <h3 className="font-editorial text-2xl font-bold text-luxury-text">
                    {service.title}
                  </h3>
                  
                  {/* Tool Badges */}
                  <div className="flex flex-wrap gap-2">
                    {service.tools.map(tool => (
                      <span
                        key={tool}
                        className="text-[9px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-luxury-border bg-luxury-panel/40 text-champagne-light"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm font-light text-luxury-desc leading-relaxed pt-2">
                    {service.desc}
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
