"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const testimonials = [
  {
    quote: "SAK Technologies transformed our digital presence completely. The attention to detail and performance optimization exceeded our expectations.",
    author: "Arjun Patel",
    role: "CEO",
    company: "NovaTech Solutions",
    initials: "AP",
    color: "from-orange-500 to-amber-500",
  },
  {
    quote: "Working with SAK was a game-changer. Our e-commerce revenue increased by 340% within six months of launch.",
    author: "Sarah Mitchell",
    role: "Founder",
    company: "Stellar Fashion",
    initials: "SM",
    color: "from-amber-500 to-gold-500",
  },
  {
    quote: "The team delivered a complex healthcare platform ahead of schedule. Their technical expertise is unmatched.",
    author: "Dr. James Wilson",
    role: "CTO",
    company: "MedConnect Health",
    initials: "JW",
    color: "from-orange-600 to-amber-500",
  },
  {
    quote: "The bespoke digital platform built by SAK for ÉLAN Studio has elevated our booking experience. We've seen a 45% increase in online reservations, and the design perfectly mirrors our luxury salon's aesthetic.",
    author: "Marcus Sterling",
    role: "Founder & Creative Director",
    company: "ÉLAN Studio",
    initials: "MS",
    color: "from-amber-600 to-gold-400",
  },
  {
    quote: "Our AI automation platform handles 10x the workload thanks to SAK's brilliant architecture.",
    author: "Michael Chen",
    role: "VP Engineering",
    company: "AutoFlow Systems",
    initials: "MC",
    color: "from-orange-500 to-gold-500",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsToShow, setItemsToShow] = useState(1);

  // Handle responsive items to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(3);
      } else if (window.innerWidth >= 768) {
        setItemsToShow(2);
      } else {
        setItemsToShow(1);
      }
    };
    
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-rotate
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % Math.max(1, testimonials.length - itemsToShow + 1)
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered, itemsToShow]);

  const maxIndex = Math.max(0, testimonials.length - itemsToShow);

  const visibleTestimonials = testimonials.slice(
    currentIndex, 
    currentIndex + itemsToShow
  );

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-bg-secondary">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-radial-glow pointer-events-none opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-accent-orange text-sm uppercase tracking-widest font-bold mb-4"
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text"
          >
            What Our Clients Say
          </motion.h2>
        </div>

        <div 
          className="relative px-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex gap-6 overflow-hidden min-h-[300px] justify-center">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="w-full lg:w-[calc(33.333%-1rem)] md:w-[calc(50%-0.75rem)] flex-shrink-0"
                >
                  <div className="glass-card rounded-3xl p-8 h-full flex flex-col relative group">
                    {/* Floating quote mark */}
                    <div className="absolute top-6 right-8 text-6xl text-white/5 font-serif leading-none group-hover:text-accent-orange/20 transition-colors duration-500">
                      "
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-accent-gold drop-shadow-[0_0_5px_rgba(255,167,38,0.4)]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <p className="text-lg italic text-text-secondary leading-relaxed mb-8 flex-grow font-medium">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-bg-primary font-bold text-lg shadow-lg`}>
                        {testimonial.initials}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.author}</h4>
                        <p className="text-sm text-text-tertiary font-semibold">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-3 mt-10">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === i 
                    ? "bg-accent-orange w-8" 
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
