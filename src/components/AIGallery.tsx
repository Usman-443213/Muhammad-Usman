"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ArrowUpRight, Film, HelpCircle } from "lucide-react";
import { videoGalleryData, galleryCategories, VideoItem } from "@/data/videoGallery";

export default function AIGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalVideo, setActiveModalVideo] = useState<VideoItem | null>(null);

  // Helper to extract YouTube ID for loading cover thumbnail
  const getYouTubeId = (url: string) => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    } catch (e) {
      return null;
    }
  };

  const filteredVideos = selectedCategory === "All"
    ? videoGalleryData
    : videoGalleryData.filter(v => v.category === selectedCategory);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.4 }
    }
  };

  return (
    <section
      id="gallery"
      className="relative py-28 lg:py-36 bg-luxury-panel border-b border-luxury-border"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-champagne-light block mb-4">
              CREATIVE MEDIA STUDIO
            </span>
            <h2 className="font-editorial font-bold text-4xl md:text-5xl leading-tight text-luxury-text mb-6">
              Futuristic storytelling gallery.
            </h2>
            <p className="text-sm font-light text-luxury-desc leading-relaxed">
              Preserving a diverse catalogue of AI-generated visuals, corporate ads, customized avatars, and vlogging shorts. Hover to explore production frameworks and click to watch in cinema view.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full border border-luxury-border bg-luxury-bg/50">
            <Film className="w-4 h-4 text-champagne-light animate-pulse" />
            <span className="text-[9px] uppercase tracking-widest font-bold text-luxury-desc">
              {videoGalleryData.length} PRESERVED REELS
            </span>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="flex overflow-x-auto gap-3 pb-8 mb-12 scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0">
          {galleryCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-widest transition-all duration-300 border ${
                selectedCategory === category
                  ? "bg-champagne-light border-champagne-light text-luxury-bg font-bold shadow-lg"
                  : "bg-luxury-bg/30 border-luxury-border text-luxury-desc hover:border-champagne-light hover:text-luxury-text"
              }`}
            >
              {category === "All" ? "ALL PROJECTS" : category.replace(" Videos", "")}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredVideos.map((video) => {
              const ytId = getYouTubeId(video.embedUrl);
              const thumbUrl = ytId 
                ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
                : "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&q=80";

              return (
                <motion.div
                  key={video.id}
                  layout
                  variants={itemVariants}
                  onClick={() => setActiveModalVideo(video)}
                  className="group cursor-pointer flex flex-col gap-4 relative"
                >
                  {/* Thumbnail Card Panel */}
                  <div
                    className={`relative w-full rounded-2xl overflow-hidden border border-luxury-border bg-luxury-bg/90 shadow-lg ${
                      video.aspectRatio === "vertical" ? "aspect-[9/16] max-h-[520px] mx-auto md:w-4/5" : "aspect-video"
                    }`}
                  >
                    {/* Dark gradient cover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-500 opacity-60 group-hover:opacity-80" />
                    
                    {/* Full Visual Background Cover */}
                    <img
                      src={thumbUrl}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />

                    {/* Centered Premium Play Icon */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <div className="w-14 h-14 rounded-full bg-luxury-bg/90 border border-champagne-light/50 flex items-center justify-center transition-all duration-300 scale-90 group-hover:scale-100 group-hover:bg-champagne-light shadow-xl">
                        <Play className="w-5 h-5 text-champagne-light ml-1 fill-current group-hover:text-luxury-bg group-hover:fill-current transition-colors" />
                      </div>
                    </div>

                    {/* Bottom floating Category Label */}
                    <div className="absolute bottom-4 left-4 z-20">
                      <span className="text-[9px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border border-luxury-border/60 bg-luxury-panel/85 text-champagne-light shadow-md">
                        {video.category.replace(" Videos", "")}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tool Indicators */}
                  <div className={`space-y-1.5 ${video.aspectRatio === "vertical" ? "md:w-4/5 mx-auto" : ""}`}>
                    <div className="flex flex-wrap gap-1.5">
                      {video.tools.map(t => (
                        <span key={t} className="text-[7.5px] uppercase tracking-widest text-luxury-desc/50 font-bold">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-editorial text-lg font-bold text-luxury-text group-hover:text-champagne-light transition-colors duration-300 flex items-center justify-between">
                      {video.title} <ArrowUpRight className="w-4 h-4 text-luxury-border group-hover:text-champagne-light transition-colors" />
                    </h3>
                    <p className="text-xs font-light text-luxury-desc/80 leading-relaxed line-clamp-2">
                      {video.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* High-Fidelity Fullscreen Cinema Player Modal */}
      <AnimatePresence>
        {activeModalVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-luxury-bg/95 backdrop-blur-md flex items-center justify-center p-6 lg:p-12 overflow-y-auto"
          >
            {/* Modal Closer Backdrop Trigger */}
            <div
              className="absolute inset-0 z-0 cursor-zoom-out"
              onClick={() => setActiveModalVideo(null)}
            />

            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative z-10 w-full max-w-5xl rounded-3xl border border-luxury-border bg-luxury-panel p-6 lg:p-10 shadow-2xl flex flex-col gap-6"
            >
              {/* Close Button Header */}
              <div className="flex justify-between items-center border-b border-luxury-border pb-4">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] uppercase tracking-widest text-champagne-light font-bold">
                    {activeModalVideo.category}
                  </span>
                  <h2 className="font-editorial text-xl lg:text-2xl font-bold text-luxury-text">
                    {activeModalVideo.title}
                  </h2>
                </div>
                <button
                  onClick={() => setActiveModalVideo(null)}
                  className="p-2.5 rounded-full border border-luxury-border hover:border-champagne-light hover:bg-luxury-card text-luxury-text transition-colors"
                  aria-label="Close media player"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Cinema Aspect Video Player container */}
              <div
                className={`relative w-full rounded-2xl overflow-hidden border border-luxury-border bg-black shadow-inner ${
                  activeModalVideo.aspectRatio === "vertical"
                    ? "aspect-[9/16] max-h-[60vh] max-w-[340px] mx-auto"
                    : "aspect-video"
                }`}
              >
                <iframe
                  src={`${activeModalVideo.embedUrl}${
                    activeModalVideo.embedUrl.includes("?") ? "&" : "?"
                  }autoplay=1&rel=0&modestbranding=1`}
                  title={activeModalVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full border-none"
                />
              </div>

              {/* Bottom Metadata & Description */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  <span className="text-[9px] uppercase tracking-wider font-bold text-luxury-desc/50 self-center">
                    Production Framework:
                  </span>
                  {activeModalVideo.tools.map(t => (
                    <span
                      key={t}
                      className="text-[9px] uppercase tracking-wider font-semibold px-3 py-1 rounded-full border border-luxury-border bg-luxury-bg/50 text-champagne-light"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs md:text-sm font-light text-luxury-desc leading-relaxed">
                  {activeModalVideo.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
