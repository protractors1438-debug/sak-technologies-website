"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

const portfolioItems = [
  {
    title: "Protractors Studio",
    category: "Architecture & Design",
    image: "/portfolio/protractors.png",
    link: "https://protractors.studio/",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Saloon and spa",
    category: "Web Design & Development",
    image: "/portfolio/salon_hero.png",
    link: "/portfolio/luxury-salon",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "Fintech Dashboard",
    category: "Web Application",
    image: "/portfolio/fintech.png",
    link: "#",
    color: "from-amber-500 to-orange-600",
  },
  {
    title: "Lumina Residences",
    category: "Luxury Real Estate",
    image: "/portfolio/luxury-real-estate.png",
    link: "#",
    color: "from-orange-600 to-gold-500",
  },
  {
    title: "Maison Éclat",
    category: "High-End Fashion",
    image: "/portfolio/luxury-fashion.png",
    link: "#",
    color: "from-amber-500 to-gold-400",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

function ProjectCard({ item }: { item: typeof portfolioItems[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div variants={itemVariants} className="h-full">
      <a 
        href={item.link} 
        target={item.link !== "#" ? "_blank" : undefined}
        rel={item.link !== "#" ? "noopener noreferrer" : undefined}
        className={`block h-full ${item.link !== "#" ? "cursor-pointer" : "cursor-default"}`}
        onClick={(e) => { if (item.link === "#") e.preventDefault(); }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="relative h-[400px] md:h-[450px] w-full rounded-2xl glass-strong p-2 transition-all duration-300 preserve-3d"
          style={{
            transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Card Content Wrapper */}
          <div className="absolute inset-2 rounded-xl overflow-hidden bg-bg-primary border border-white/10 group">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Overlay Gradient (fade to Rich Black) */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
            </div>

            {/* Browser Chrome Mockup */}
            <div className="absolute top-0 left-0 w-full h-8 bg-black/40 backdrop-blur-md border-b border-white/10 flex items-center px-4 gap-2 z-20">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>

            {/* Content Text */}
            <div 
              className="absolute bottom-0 left-0 w-full p-6 lg:p-8 flex flex-col justify-end z-20"
              style={{ transform: "translateZ(30px)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-accent-amber">
                  {item.category}
                </span>
                <span className="w-8 h-[1px] bg-white/20"></span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-2 group-hover:text-accent-orange transition-colors">
                {item.title}
              </h3>
              
              {/* Hover indicator */}
              {item.link !== "#" && (
                <div className="flex items-center gap-2 text-sm text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform font-semibold">
                  <span>View Live Project</span>
                  <svg className="w-4 h-4 text-accent-orange animate-pulse-glow" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              )}
            </div>

            {/* Hover Glow Effect */}
            <div 
              className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none z-10"
              style={{
                opacity: isHovered ? 0.35 : 0,
                background: `radial-gradient(circle at ${rotation.y * 10 + 50}% ${rotation.x * 10 + 50}%, rgba(255,107,53,0.25) 0%, transparent 50%)`
              }}
            ></div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section-padding relative bg-bg-primary z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-accent-orange text-sm uppercase tracking-widest font-bold mb-4"
            >
              Featured Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text"
            >
              Digital Masterpieces
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <button className="flex items-center gap-2 text-text-secondary hover:text-accent-orange transition-colors group font-semibold">
              View All Projects
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {portfolioItems.map((item, index) => (
            <ProjectCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
