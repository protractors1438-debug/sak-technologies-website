"use client";

import Image from "next/image";
import { motion } from "motion/react";

// Customized brand color mappings matching our premium orange-amber-cream palette
const innerRing = [
  { name: "React", color: "#FF8C42" },
  { name: "Next.js", color: "#FFF8F0" },
  { name: "Node.js", color: "#FFA726" },
];

const middleRing = [
  { name: "Python", color: "#FF6B35" },
  { name: "Tailwind CSS", color: "#FF8C42" },
  { name: "TypeScript", color: "#FFA726" },
];

const outerRing = [
  { name: "PostgreSQL", color: "#FF6B35" },
  { name: "MongoDB", color: "#FFA726" },
  { name: "AWS", color: "#FF8C42" },
  { name: "Docker", color: "#FF6B35" },
];

const allTech = [...innerRing, ...middleRing, ...outerRing];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="section-padding relative overflow-hidden bg-bg-primary">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[800px] bg-radial-glow pointer-events-none opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-accent-orange text-sm uppercase tracking-widest font-bold mb-4"
          >
            Our Arsenal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text"
          >
            Technologies We Master
          </motion.h2>
        </div>

        {/* Desktop Orbital Layout */}
        <div className="hidden md:flex relative justify-center items-center h-[700px] w-full max-w-[700px] mx-auto">
          {/* Central Logo */}
          <div className="absolute z-20 w-24 h-24 rounded-full gradient-border flex items-center justify-center bg-bg-primary animate-pulse-glow shadow-[0_0_50px_rgba(255,107,53,0.25)]">
            <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center p-4 backdrop-blur-md">
              <Image src="/favicon.png" alt="SAK Technologies" width={60} height={60} className="object-contain drop-shadow-[0_0_10px_rgba(255,107,53,0.4)]" />
            </div>
          </div>

          {/* Inner Ring (Radius: 150px) */}
          <div className="absolute w-[300px] h-[300px] border border-white/5 rounded-full animate-orbit" style={{ ["--orbit-duration" as string]: "20s" }}>
            {innerRing.map((tech, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${i * (360 / innerRing.length)}deg) translateX(150px)` 
                }}
              >
                <div 
                  className="flex flex-col items-center justify-center w-16 h-16 rounded-xl glass border-white/10 shadow-lg"
                  style={{ transform: `rotate(-${i * (360 / innerRing.length)}deg) rotate(calc(-1 * var(--rotation, 0deg)))` }}
                >
                   <div className="absolute inset-0 animate-orbit flex items-center justify-center w-full h-full" style={{ ["--orbit-duration" as string]: "20s", animationDirection: "reverse" }}>
                      <span className="text-[10px] font-bold text-center leading-tight px-1 drop-shadow-md" style={{ color: tech.color }}>
                        {tech.name}
                      </span>
                   </div>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Ring (Radius: 250px) */}
          <div className="absolute w-[500px] h-[500px] border border-white/5 rounded-full animate-orbit" style={{ ["--orbit-duration" as string]: "35s", animationDirection: "reverse" }}>
            {middleRing.map((tech, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${i * (360 / middleRing.length)}deg) translateX(250px)` 
                }}
              >
                <div className="absolute inset-0 animate-orbit flex items-center justify-center w-20 h-20 rounded-xl glass border-white/10 shadow-lg -ml-10 -mt-10" style={{ ["--orbit-duration" as string]: "35s", animationDirection: "normal" }}>
                    <span className="text-xs font-bold text-center leading-tight px-2 drop-shadow-md" style={{ color: tech.color }}>
                      {tech.name}
                    </span>
                </div>
              </div>
            ))}
          </div>

          {/* Outer Ring (Radius: 350px) */}
          <div className="absolute w-[700px] h-[700px] border border-white/5 rounded-full animate-orbit" style={{ ["--orbit-duration" as string]: "50s" }}>
             {outerRing.map((tech, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ 
                  transform: `translate(-50%, -50%) rotate(${i * (360 / outerRing.length)}deg) translateX(350px)` 
                }}
              >
                <div className="absolute inset-0 animate-orbit flex items-center justify-center w-24 h-24 rounded-xl glass border-white/10 shadow-lg -ml-12 -mt-12" style={{ ["--orbit-duration" as string]: "50s", animationDirection: "reverse" }}>
                    <span className="text-sm font-bold text-center leading-tight px-2 drop-shadow-md" style={{ color: tech.color }}>
                      {tech.name}
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Grid Layout */}
        <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
          {allTech.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className="glass-card rounded-xl p-4 flex flex-col items-center justify-center aspect-square text-center gap-2"
            >
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2" style={{ borderBottom: `2px solid ${tech.color}` }}>
                <span className="text-lg font-bold" style={{ color: tech.color }}>{tech.name.charAt(0)}</span>
              </div>
              <span className="text-sm font-semibold text-text-primary">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
