"use client";

import Image from "next/image";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-bg-secondary pt-16 relative">
      {/* Top Gradient Divider */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-orange to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <Image 
              src="/logo.png" 
              alt="SAK Technologies Logo" 
              width={150} 
              height={50} 
              className="h-10 w-auto"
            />
            <p className="text-text-tertiary text-sm leading-relaxed pr-4 font-medium">
              Building high-performance websites, web applications, and digital platforms that help businesses scale faster in the modern world.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="text-text-tertiary hover:text-accent-orange transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="text-text-tertiary hover:text-accent-orange transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="text-text-tertiary hover:text-accent-orange transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => scrollToSection('services')} className="text-text-tertiary hover:text-accent-orange transition-colors">Services</button></li>
              <li><button onClick={() => scrollToSection('portfolio')} className="text-text-tertiary hover:text-accent-orange transition-colors">Portfolio</button></li>
              <li><button onClick={() => scrollToSection('process')} className="text-text-tertiary hover:text-accent-orange transition-colors">Our Process</button></li>
              <li><button onClick={() => scrollToSection('tech-stack')} className="text-text-tertiary hover:text-accent-orange transition-colors">Tech Stack</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="text-text-tertiary hover:text-accent-orange transition-colors">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">Services</h4>
            <ul className="space-y-3 text-sm text-text-tertiary font-medium">
              <li>Custom Website Development</li>
              <li>E-Commerce Solutions</li>
              <li>Web Applications</li>
              <li>UI/UX Design</li>
              <li>SEO Optimization</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 font-[family-name:var(--font-space-grotesk)]">Contact</h4>
            <ul className="space-y-4 text-sm text-text-tertiary font-medium">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:hello@saktechnologies.com" className="hover:text-accent-orange transition-colors">hello@saktechnologies.com</a>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-accent-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Digital-First, Global Reach</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-tertiary text-sm text-center md:text-left font-medium">
            &copy; {new Date().getFullYear()} SAK Technologies. All rights reserved. <br className="md:hidden" />
            <span className="hidden md:inline"> | </span> Engineering the future, one pixel at a time.
          </p>
          
          <button 
            onClick={() => scrollToSection('top')}
            className="flex items-center gap-2 text-sm text-text-tertiary hover:text-accent-orange transition-colors font-semibold"
          >
            Back to Top
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
