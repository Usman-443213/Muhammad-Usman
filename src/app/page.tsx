import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Achievements from "@/components/Achievements";
import Projects from "@/components/Projects";
import AIGallery from "@/components/AIGallery";
import Education from "@/components/Education";
import Vision from "@/components/Vision";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="bg-luxury-bg text-luxury-text min-h-screen relative flex flex-col font-sans selection:bg-champagne-light selection:text-luxury-bg">
        {/* Floating Luxury Navigation */}
        <Navbar />

        {/* Global Cinematic Backdrop Glows */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-champagne-light/3 blur-[140px] animate-pulse-slow" />
          <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-champagne-light/2 blur-[120px]" />
        </div>

        {/* Content Sections */}
        <main className="flex-grow z-10">
          {/* 1. Hero Landing */}
          <Hero />

          {/* 2. Journey/Narrative */}
          <About />

          {/* 3. Specialized Skill Grids */}
          <Skills />

          {/* 4. Interactive Storytelling Services */}
          <Services />

          {/* 5. Metrics & Credentials */}
          <Achievements />

          {/* 6. Asymmetric Case Studies */}
          <Projects />

          {/* 7. Preserved AI Video Showcase */}
          <AIGallery />

          {/* 8. Academics Detail */}
          <Education />

          {/* 9. Core Vision Quotes */}
          <Vision />

          {/* 10. Industry Testimonials */}
          <Testimonials />

          {/* 11. Immersive Form & Channels */}
          <Contact />
        </main>

        {/* 12. Corporate Footer with Sub-branding */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
