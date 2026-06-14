"use client";

import { motion } from "motion/react";

const steps = [
  {
    title: "Discovery",
    description: "Understanding your vision, goals, and target audience through deep research.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    title: "Planning",
    description: "Crafting detailed roadmaps, wireframes, and technical architecture.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    )
  },
  {
    title: "Design",
    description: "Creating stunning UI/UX designs that captivate and convert.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    )
  },
  {
    title: "Development",
    description: "Building with cutting-edge technology and clean, scalable code.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    title: "Testing",
    description: "Rigorous QA testing across devices, browsers, and edge cases.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Launch",
    description: "Deploying to production with monitoring, analytics, and ongoing support.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding relative overflow-hidden bg-bg-secondary">
      <div className="absolute inset-0 bg-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-radial-glow-purple pointer-events-none opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-accent-orange text-sm uppercase tracking-widest font-bold mb-4"
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text"
          >
            From Vision to Launch
          </motion.h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative flex lg:flex-col items-start lg:items-center gap-6 lg:gap-8 group"
              >
                {/* Station Node */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full glass flex items-center justify-center border border-white/20 group-hover:border-accent-orange transition-colors duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_25px_rgba(255,107,53,0.25)] bg-bg-secondary">
                  <div className="text-white/80 group-hover:text-accent-orange transition-colors duration-300">
                    {step.icon}
                  </div>
                  {/* Number Badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-br from-accent-orange to-accent-gold text-bg-primary text-xs font-bold flex items-center justify-center shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Connecting Arrows */}
                {index < steps.length - 1 && (
                  <>
                    {/* Desktop Arrow */}
                    <div className="hidden lg:flex absolute top-8 -right-4 w-8 justify-center items-center text-accent-orange/40 translate-x-1/2 -translate-y-1/2 z-0">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    {/* Mobile Arrow */}
                    <div className="lg:hidden absolute top-[100%] left-8 h-8 flex justify-center items-center text-accent-orange/40 -translate-x-1/2 -translate-y-1/2 z-0">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </>
                )}

                {/* Content Card */}
                <div className="glass-card p-5 rounded-2xl flex-grow lg:text-center w-full group-hover:translate-y-[-4px] transition-transform duration-300 mt-2 lg:mt-0">
                  <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] mb-2 group-hover:text-accent-orange transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed font-medium">
                    {step.description}
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
