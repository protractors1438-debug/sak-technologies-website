"use client";

import dynamic from "next/dynamic";
import { motion } from "motion/react";

// Dynamically import the 3D scene to prevent SSR issues
const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-accent-orange/20 border-t-accent-orange rounded-full animate-spin"></div>
    </div>
  ),
});

export default function HeroSection() {
  const scrollToPortfolio = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden bg-bg-primary">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-orange/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-amber/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{
              width: Math.random() * 4 + 2 + "px",
              height: Math.random() * 4 + 2 + "px",
              left: Math.random() * 100 + "%",
              bottom: "-10px",
              animation: `particle-float ${Math.random() * 10 + 10}s linear infinite`,
              animationDelay: `-${Math.random() * 20}s`,
              ["--drift" as string]: `${(Math.random() - 0.5) * 100}px`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 text-center mt-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 leading-tight"
        >
          Engineering{" "}
          <span className="gradient-text">Digital Experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium"
        >
          We build websites, applications, and digital systems that help businesses grow online.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button onClick={scrollToContact} className="btn-primary w-full sm:w-auto justify-center">
            Start Your Project
          </button>
          <button onClick={scrollToPortfolio} className="btn-secondary w-full sm:w-auto justify-center">
            View Our Work
          </button>
        </motion.div>
      </div>

      {/* Decorative floating UI elements */}
      <div className="absolute top-1/3 right-[5%] hidden lg:block animate-float-gentle" style={{ animationDelay: '0s' }}>
        <div className="glass-card p-4 rounded-xl flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-accent-orange/20 flex items-center justify-center">
            <svg className="w-4 h-4 text-accent-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="flex flex-col">
            <div className="h-2 w-16 bg-white/20 rounded mb-1"></div>
            <div className="h-2 w-10 bg-white/10 rounded"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-1/4 left-[5%] hidden lg:block animate-float-gentle" style={{ animationDelay: '-3s' }}>
        <div className="glass-card p-4 rounded-xl flex items-end gap-2 h-24">
          <div className="w-3 bg-accent-gold/40 rounded-t h-full"></div>
          <div className="w-3 bg-accent-amber/60 rounded-t h-2/3"></div>
          <div className="w-3 bg-accent-orange rounded-t h-4/5 glow-orange"></div>
        </div>
      </div>

      {/* 3D Scene Container */}
      <div className="relative w-full h-[400px] md:h-[500px] mt-auto">
        <HeroScene />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToPortfolio()}
      >
        <span className="text-xs text-text-tertiary tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 bg-accent-orange rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
