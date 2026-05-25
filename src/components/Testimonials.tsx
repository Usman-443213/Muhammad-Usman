"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Alex Mercer",
      company: "Voxel Media, NY",
      role: "Creative Director",
      review: "Usman operates on a completely different level. His AI video ads are indistinguishable from elite CGI production. He delivered a full 4K visual ad campaign for our tech products in less than 48 hours. Absolute genius."
    },
    {
      name: "Sarah Chen",
      company: "Aurora Tech",
      role: "Founder & CEO",
      review: "Finding a developer who understands robust database logic (MongoDB) and also has an Awwwards-level visual eye is rare. Usman integrated our conversational DeepSeek APIs and animated the layout flawlessly."
    },
    {
      name: "Marcus Vance",
      company: "Apex Channels",
      role: "Digital Agency Lead",
      review: "Usman is the definition of a modern digital visionary. His animated AI mascot characters built our social channels over 10K subscribers in a matter of weeks. Highly communicative, structured, and extremely talented."
    }
  ];

  return (
    <section
      id="testimonials"
      className="relative py-28 lg:py-36 bg-luxury-bg border-b border-luxury-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-4">
            CLIENT FEEDBACK
          </span>
          <h2 className="font-editorial font-bold text-4xl md:text-5xl leading-tight text-luxury-text mb-6">
            Trusted by global visionaries.
          </h2>
          <p className="text-sm md:text-base font-light text-luxury-desc max-w-xl leading-relaxed">
            Read reviews from international agency leads, creative directors, and start-up founders who have experienced Usman's state-of-the-art visual curation and development execution.
          </p>
        </div>

        {/* 3-Column Testimonials Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="glass-card p-10 rounded-3xl border border-luxury-border flex flex-col justify-between gap-8 relative overflow-hidden group"
            >
              {/* Absoluted Quotation graphic */}
              <Quote className="absolute right-6 top-6 w-14 h-14 text-luxury-border/30 group-hover:text-champagne-light/10 transition-colors duration-500" />
              
              {/* Rating and Quote Text */}
              <div className="space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-champagne-light fill-current" />
                  ))}
                </div>
                <p className="text-sm font-light text-luxury-desc leading-relaxed italic relative z-10">
                  “{review.review}”
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-luxury-border/60">
                <div className="w-10 h-10 rounded-full bg-luxury-panel border border-luxury-border flex items-center justify-center font-editorial font-bold text-champagne-light text-sm">
                  {review.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <h4 className="font-sans font-bold text-sm text-luxury-text">
                    {review.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider text-luxury-desc/50 font-bold">
                    {review.role} · {review.company}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
