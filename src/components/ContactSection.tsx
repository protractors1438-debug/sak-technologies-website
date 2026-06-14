"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "website",
    budget: "5k-10k",
    message: "",
    honeyPotField: "", // Honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setIsSubmitting(true);
    
    // Basic frontend validation
    if (!formData.name || !formData.phone || !formData.email || !formData.message) {
      setErrorMsg("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    if (formData.phone.length < 8) {
      setErrorMsg("Please enter a valid phone number.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form.");
      }

      setIsSuccess(true);
      
      // WhatsApp Redirection Logic
      const whatsappNumber = "918074015211";
      const messageText = `🚀 *New Website Inquiry from SAK Technologies*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
${formData.company ? `*Company:* ${formData.company}` : ''}

*Service Required:* ${formData.service}
*Budget Range:* ${formData.budget}

*Project Description:*
${formData.message}

Please contact me regarding my project.`;

      const encodedMessage = encodeURIComponent(messageText);
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

      // Redirect after 3 seconds
      setTimeout(() => {
        window.location.href = whatsappUrl;
      }, 3000);

    } catch (err: any) {
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-bg-primary z-10">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-glow pointer-events-none opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-accent-orange text-sm uppercase tracking-widest font-bold mb-4"
          >
            Get In Touch
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] gradient-text"
          >
            Let&apos;s Build Something Extraordinary.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] mb-6 text-white leading-tight">
              Ready to elevate your digital presence?
            </h3>
            <p className="text-text-secondary text-lg mb-10 leading-relaxed font-medium">
              Whether you need a cutting-edge web application, a high-converting e-commerce platform, or a complete digital transformation, our team of experts is ready to turn your vision into reality.
            </p>

            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-accent-orange border border-white/10 shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-text-tertiary uppercase tracking-wider font-bold mb-1">Email Us</h4>
                  <a href="mailto:hello@saktechnologies.com" className="text-lg font-medium text-white hover:text-accent-orange transition-colors">hello@saktechnologies.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 text-accent-amber border border-white/10 shadow-lg">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm text-text-tertiary uppercase tracking-wider font-bold mb-1">Location</h4>
                  <p className="text-lg font-medium text-white">Digital-First, Global Reach</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
              {/* Form background glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-orange/5 rounded-full blur-[80px] pointer-events-none"></div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, type: "spring" }}
                    className="h-full min-h-[500px] flex flex-col items-center justify-center text-center relative z-10"
                  >
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-24 h-24 bg-gradient-to-br from-accent-orange to-accent-gold rounded-full flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,107,53,0.4)]"
                    >
                      <svg className="w-12 h-12 text-[#080808]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={3} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                    </motion.div>
                    <h3 className="text-3xl font-bold font-[family-name:var(--font-space-grotesk)] text-white mb-4">Lead Secured!</h3>
                    <p className="text-text-secondary text-lg mb-8 max-w-[280px]">
                      Thank you for contacting SAK Technologies. Redirecting you to WhatsApp...
                    </p>

                    {/* Progress Bar */}
                    <div className="w-48 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 3, ease: "linear" }}
                        className="h-full bg-gradient-to-r from-accent-orange to-accent-amber"
                      />
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="relative z-10"
                  >
                    <motion.div variants={formVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                      
                      {errorMsg && (
                        <motion.div 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 mb-6 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400 text-sm text-center"
                        >
                          {errorMsg}
                        </motion.div>
                      )}

                      {/* Honeypot Field - Hidden from real users */}
                      <div className="absolute opacity-0 -z-50 pointer-events-none" aria-hidden="true">
                        <label htmlFor="honeyPotField">Do not fill this out</label>
                        <input type="text" id="honeyPotField" value={formData.honeyPotField} onChange={handleInputChange} tabIndex={-1} autoComplete="off" />
                      </div>

                      <div className="grid grid-cols-1 gap-6 mb-6">
                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                          <label htmlFor="name" className="text-sm font-semibold text-text-secondary ml-1">Full Name *</label>
                          <input type="text" id="name" value={formData.name} onChange={handleInputChange} required placeholder="John Doe" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white placeholder-text-tertiary" />
                        </motion.div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                          <label htmlFor="email" className="text-sm font-semibold text-text-secondary ml-1">Email Address *</label>
                          <input type="email" id="email" value={formData.email} onChange={handleInputChange} required placeholder="john@example.com" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white placeholder-text-tertiary" />
                        </motion.div>
                        
                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                          <label htmlFor="phone" className="text-sm font-semibold text-text-secondary ml-1">Phone Number *</label>
                          <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} required placeholder="+1 234 567 8900" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white placeholder-text-tertiary" />
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants} className="flex flex-col gap-2 mb-6">
                        <label htmlFor="company" className="text-sm font-semibold text-text-secondary ml-1">Company Name (Optional)</label>
                        <input type="text" id="company" value={formData.company} onChange={handleInputChange} placeholder="Your Company Ltd." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white placeholder-text-tertiary" />
                      </motion.div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                          <label htmlFor="service" className="text-sm font-semibold text-text-secondary ml-1">Service Required *</label>
                          <select id="service" value={formData.service} onChange={handleInputChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white appearance-none [&>option]:bg-bg-primary">
                            <option value="Website Development">Website Development</option>
                            <option value="Web Application">Web Application</option>
                            <option value="E-Commerce">E-Commerce</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Digital Transformation">Digital Transformation</option>
                            <option value="Other">Other</option>
                          </select>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex flex-col gap-2">
                          <label htmlFor="budget" className="text-sm font-semibold text-text-secondary ml-1">Budget Range (Optional)</label>
                          <select id="budget" value={formData.budget} onChange={handleInputChange} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white appearance-none [&>option]:bg-bg-primary">
                            <option value="Not Sure Yet">Not Sure Yet</option>
                            <option value="5k-10k">$5k - $10k</option>
                            <option value="10k-25k">$10k - $25k</option>
                            <option value="25k-50k">$25k - $50k</option>
                            <option value="50k+">$50k+</option>
                          </select>
                        </motion.div>
                      </div>

                      <motion.div variants={itemVariants} className="flex flex-col gap-2 mb-8">
                        <label htmlFor="message" className="text-sm font-semibold text-text-secondary ml-1">Project Description *</label>
                        <textarea id="message" value={formData.message} onChange={handleInputChange} required rows={4} placeholder="Tell us about your project goals..." className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-orange focus:ring-1 focus:ring-accent-orange/50 transition-all text-white placeholder-text-tertiary resize-none font-medium"></textarea>
                      </motion.div>

                      <motion.button 
                        variants={itemVariants}
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn-primary w-full justify-center group py-4 relative overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#080808]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            <>
                              Get Free Consultation
                              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </>
                          )}
                        </span>
                      </motion.button>
                    </motion.div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
