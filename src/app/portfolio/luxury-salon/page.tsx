"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export default function LuxurySalon() {
  const [activePage, setActivePage] = useState("home");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1); // 1 = form, 2 = loading, 3 = success
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Signature Haircut & Style",
    date: "",
    time: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.date || !formData.time) {
      alert("Please fill in all required fields.");
      return;
    }
    setBookingStep(2); // Show loading
    setTimeout(() => {
      setBookingStep(3); // Show success
    }, 2000);
  };

  const resetBooking = () => {
    setBookingStep(1);
    setIsBookingOpen(false);
    setFormData({
      name: "",
      phone: "",
      service: "Signature Haircut & Style",
      date: "",
      time: "",
    });
  };

  const servicesList = [
    {
      category: "Haircuts & Styling",
      items: [
        { name: "Signature Haircut & Style", price: "$120", desc: "Consultation, custom cut, wash, and blow-dry by a senior stylist." },
        { name: "Gentleman's Grooming Cut", price: "$90", desc: "Tailored scissor or clipper cut with a hot towel finish." },
        { name: "Editorial Blowout", price: "$85", desc: "Signature wash, structural blowout, and refined heat styling." },
        { name: "Event & Updo Styling", price: "$145", desc: "Sophisticated styling or updos custom-crafted for formal events." },
      ],
    },
    {
      category: "Color & Technical",
      items: [
        { name: "Full Balayage & Glaze", price: "$280", desc: "Hand-painted highlights for natural, sun-kissed dimension and shine." },
        { name: "Signature Half-Head Highlights", price: "$210", desc: "Refined foil highlights focused around the crown and face-framing areas." },
        { name: "Single Process Color", price: "$150", desc: "Root touch-up or full solid-tone permanent coloring." },
        { name: "Color Correction", price: "Upon Inquiry", desc: "Restorative coloring and tone re-balancing. Requires consultation." },
      ],
    },
    {
      category: "Therapies & Shaves",
      items: [
        { name: "Scalp Detoxing Ritual", price: "$110", desc: "Exfoliating scrub, clarifying massage, and deep restoration serum." },
        { name: "Olaplex Restorative Treatment", price: "$125", desc: "Bond-building treatment designed to repair damaged hair structures." },
        { name: "Classic Hot Towel Shave", price: "$75", desc: "Straight-razor shave with warm lather, essential oils, and ice-massage." },
        { name: "Gold Leaf Conditioning Mask", price: "$240", desc: "Ultra-luxury infusion of 24k gold extracts for absolute softness and radiance." },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFDF9] text-[#111111] font-sans antialiased selection:bg-[#C5A880]/30 flex flex-col justify-between">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 bg-[#FFFDF9]/95 backdrop-blur-md border-b border-[#B3A394]/10 py-5 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => setActivePage("home")} 
            className="flex flex-col text-left group"
          >
            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-light text-[#111111] group-hover:text-[#C5A880] transition-colors">
              ÉLAN
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#B3A394] font-medium -mt-1">
              STUDIO
            </span>
          </button>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold tracking-[0.15em] uppercase text-[#B3A394]">
            {["home", "about", "services", "gallery", "testimonials", "contact"].map((page) => (
              <button
                key={page}
                onClick={() => setActivePage(page)}
                className={`transition-colors hover:text-[#111111] ${
                  activePage === page ? "text-[#C5A880] border-b border-[#C5A880]/40 pb-1" : ""
                }`}
              >
                {page}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <button
            onClick={() => setIsBookingOpen(true)}
            className="border border-[#C5A880] text-[#111111] hover:bg-[#C5A880] hover:text-[#FFFDF9] transition-all duration-300 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em]"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Nav Link Drawer */}
        <div className="md:hidden flex justify-center gap-4 border-t border-[#B3A394]/5 mt-4 pt-3 text-[10px] font-bold uppercase tracking-wider text-[#B3A394]">
          {["home", "about", "services", "gallery", "testimonials", "contact"].map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              className={`hover:text-[#111111] ${activePage === page ? "text-[#C5A880]" : ""}`}
            >
              {page}
            </button>
          ))}
        </div>
      </header>

      {/* 2. Main Body Content Switcher */}
      <main className="flex-grow">
        
        {/* ==================== HOME PAGE ==================== */}
        {activePage === "home" && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center py-20 px-6 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <Image
                  src="/portfolio/salon_hero.png"
                  alt="ÉLAN Studio Luxury Salon Interior"
                  fill
                  className="object-cover brightness-[0.7]"
                  priority
                />
                <div className="absolute inset-0 bg-[#111111]/30"></div>
              </div>

              <div className="relative z-10 max-w-4xl mx-auto text-center text-[#FFFDF9] px-4">
                <p className="text-[#C5A880] text-sm md:text-base tracking-[0.3em] uppercase font-bold mb-4 drop-shadow-sm">
                  Refined Grooming. Timeless Style.
                </p>
                <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light mb-8 tracking-wide leading-tight drop-shadow">
                  ÉLAN STUDIO
                </h1>
                <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                  A sanctuary of absolute refinement, engineered for those seeking high-end hairstyling, premium beard grooming, and restorative aesthetic therapies.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => setIsBookingOpen(true)}
                    className="bg-[#C5A880] hover:bg-[#B59A72] text-[#FFFDF9] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-300"
                  >
                    Reserve Session
                  </button>
                  <button
                    onClick={() => setActivePage("services")}
                    className="border border-[#FFFDF9]/60 hover:border-[#FFFDF9] hover:bg-[#FFFDF9]/10 text-[#FFFDF9] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300"
                  >
                    Explore Services
                  </button>
                </div>
              </div>
            </section>

            {/* Quick Intro Feature */}
            <section className="py-20 px-6 max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-[#111111] leading-tight">
                    A Curated Journey into <br />
                    <span className="italic text-[#C5A880]">Absolute Refinement</span>
                  </h2>
                  <p className="text-[#B3A394] leading-relaxed mb-6 font-medium">
                    At ÉLAN Studio, we treat grooming as a high-fidelity art form. Our salon is built upon the pillars of personalized consultations, meticulous attention to structural styling, and advanced botanical hair care.
                  </p>
                  <p className="text-[#B3A394] leading-relaxed mb-8 font-medium">
                    Step inside our private, warm cream-toned lounge to escape the city bustle, and trust our veteran stylists to realize your individual aesthetic vision.
                  </p>
                  <button 
                    onClick={() => setActivePage("about")}
                    className="text-xs font-bold uppercase tracking-[0.15em] text-[#C5A880] border-b border-[#C5A880] pb-1 hover:text-[#111111] hover:border-[#111111] transition-colors"
                  >
                    Our Philosophy
                  </button>
                </div>
                <div className="relative h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-xl border border-[#B3A394]/10">
                  <Image
                    src="/portfolio/salon_interior.png"
                    alt="Luxury Spa Lounge"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ==================== ABOUT PAGE ==================== */}
        {activePage === "about" && (
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto animate-fadeIn">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <p className="text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-3">Heritage & Vision</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#111111] mb-6">Our Narrative</h2>
              <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <div className="relative h-[450px] md:h-[550px] rounded-xl overflow-hidden shadow-lg border border-[#B3A394]/10">
                <Image
                  src="/portfolio/salon_styling.png"
                  alt="Styling Hair Art"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-6">
                <h3 className="font-serif text-2xl font-light text-[#111111]">The Philosophy</h3>
                <p className="text-[#B3A394] leading-relaxed font-medium">
                  Founded in 2020 by master stylist Marcus Sterling, ÉLAN Studio was built to provide an alternative to the crowded, loud salons of the modern city. We set out to design a spacious, quiet sanctuary where the focus remains on the client.
                </p>
                <p className="text-[#B3A394] leading-relaxed font-medium">
                  We believe grooming is an extension of personal identity. Our methods respect natural hair flow, hair health, and classic design structures while integrating modern editorial trends.
                </p>
                <div className="border-l-2 border-[#C5A880] pl-6 py-2 italic text-[#111111] text-lg font-serif">
                  "True style does not shout; it commands attention through subtle refinement."
                </div>
              </div>
            </div>

            {/* Founder Block */}
            <div className="bg-[#FFF8F0] rounded-2xl p-8 md:p-12 lg:p-16 border border-[#B3A394]/10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden mx-auto shadow-md border-4 border-white">
                  <Image
                    src="/portfolio/salon_founder.png"
                    alt="Marcus Sterling - Founder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="lg:col-span-2 space-y-4 text-center lg:text-left">
                  <span className="text-[#C5A880] text-xs font-bold uppercase tracking-wider">The Founder</span>
                  <h3 className="font-serif text-3xl font-light text-[#111111]">Marcus Sterling</h3>
                  <p className="text-[#B3A394] leading-relaxed font-medium text-sm md:text-base">
                    With over 15 years of experience styling in London and New York, Marcus has styled for high-end fashion shows, editorial magazines, and celebrity portfolios. Today, he leads ÉLAN Studio, training every junior stylist in the signature ÉLAN cut technique.
                  </p>
                  <p className="text-[#111111] text-xs font-bold uppercase tracking-widest pt-2">
                    Marcus Sterling — Creative Director
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ==================== SERVICES PAGE ==================== */}
        {activePage === "services" && (
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto animate-fadeIn">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <p className="text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-3">The Menu</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#111111] mb-6">Our Services</h2>
              <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {servicesList.map((category, idx) => (
                <div key={idx} className="space-y-8">
                  <h3 className="font-serif text-2xl font-light text-[#111111] border-b border-[#B3A394]/20 pb-3 tracking-wide">
                    {category.category}
                  </h3>
                  
                  <div className="space-y-6">
                    {category.items.map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className="group border border-[#B3A394]/5 hover:border-[#C5A880]/30 rounded-xl p-4 bg-[#FFFDF9] transition-all duration-300 hover:shadow-[0_8px_30px_rgb(197,168,128,0.05)]"
                      >
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="font-serif text-lg text-[#111111] group-hover:text-[#C5A880] transition-colors">
                            {item.name}
                          </h4>
                          <span className="font-serif font-bold text-[#C5A880] text-lg pl-4">
                            {item.price}
                          </span>
                        </div>
                        <p className="text-xs text-[#B3A394] leading-relaxed font-semibold">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="bg-[#C5A880] hover:bg-[#B59A72] text-[#FFFDF9] px-8 py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors"
              >
                Schedule A Treatment
              </button>
            </div>
          </section>
        )}

        {/* ==================== GALLERY PAGE ==================== */}
        {activePage === "gallery" && (
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto animate-fadeIn">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <p className="text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-3">Inside the Studio</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#111111] mb-6">Gallery</h2>
              <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
            </div>

            {/* Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md group">
                <Image
                  src="/portfolio/salon_hero.png"
                  alt="Studio Interior View"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#080808]/10 group-hover:bg-[#080808]/20 transition-all duration-300"></div>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md group md:col-span-2 lg:col-span-1">
                <Image
                  src="/portfolio/salon_styling.png"
                  alt="Styling Hair Session"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#080808]/10 group-hover:bg-[#080808]/20 transition-all duration-300"></div>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md group">
                <Image
                  src="/portfolio/salon_interior.png"
                  alt="Lounge Chairs"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#080808]/10 group-hover:bg-[#080808]/20 transition-all duration-300"></div>
              </div>

              <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-md group lg:col-span-2">
                <Image
                  src="/portfolio/salon_hero.png"
                  alt="Styling Mirror Details"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#080808]/10 group-hover:bg-[#080808]/20 transition-all duration-300"></div>
              </div>

            </div>
          </section>
        )}

        {/* ==================== TESTIMONIALS PAGE ==================== */}
        {activePage === "testimonials" && (
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto animate-fadeIn">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <p className="text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-3">Guest Experiences</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#111111] mb-6">Testimonials</h2>
              <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "The best grooming experience I have ever had. Marcus has a true gift for structure and details. The quiet lounge is therapeutic.",
                  author: "Charles Vance",
                  role: "Real Estate Developer",
                },
                {
                  quote: "ÉLAN Studio is the definition of quiet luxury. No loud chatter or rushing. The Hot Towel Shave is an absolute masterpiece.",
                  author: "Helena Rose",
                  role: "Fashion Designer",
                },
                {
                  quote: "A sanctuary of style. I trust their stylists implicitly with both my haircuts and color. Every detail feels completely tailored.",
                  author: "Julian Croft",
                  role: "Creative Director",
                },
              ].map((test, index) => (
                <div 
                  key={index}
                  className="glass-card rounded-2xl p-8 border border-[#B3A394]/10 relative flex flex-col justify-between"
                >
                  <div className="absolute top-6 right-8 text-5xl text-[#C5A880]/15 font-serif select-none">
                    “
                  </div>
                  
                  <div className="flex gap-0.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#C5A880]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-sm md:text-base italic text-[#555555] leading-relaxed mb-8 font-medium">
                    "{test.quote}"
                  </p>

                  <div className="border-t border-[#B3A394]/10 pt-4 flex flex-col">
                    <span className="font-serif font-bold text-[#111111]">{test.author}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#B3A394] font-bold mt-1">{test.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ==================== CONTACT PAGE ==================== */}
        {activePage === "contact" && (
          <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto animate-fadeIn">
            <div className="text-center mb-16 max-w-xl mx-auto">
              <p className="text-[#C5A880] text-xs font-bold uppercase tracking-widest mb-3">Reservations</p>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#111111] mb-6">Contact Us</h2>
              <div className="w-12 h-[1px] bg-[#C5A880] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form Column */}
              <div className="bg-[#FFF8F0] rounded-2xl p-8 md:p-12 border border-[#B3A394]/10 shadow-sm">
                <h3 className="font-serif text-2xl font-light mb-6 text-[#111111]">Appointment Request</h3>
                
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Charlotte Vance" 
                      className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-3 focus:outline-none focus:border-[#C5A880] transition-colors placeholder:text-[#B3A394]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +1 (555) 0199" 
                      className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-3 focus:outline-none focus:border-[#C5A880] transition-colors placeholder:text-[#B3A394]"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Select Service *</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-3 focus:outline-none focus:border-[#C5A880] transition-colors"
                    >
                      <option value="Signature Haircut & Style">Signature Haircut & Style ($120)</option>
                      <option value="Gentleman's Grooming Cut">Gentleman's Grooming Cut ($90)</option>
                      <option value="Editorial Blowout">Editorial Blowout ($85)</option>
                      <option value="Event & Updo Styling">Event & Updo Styling ($145)</option>
                      <option value="Full Balayage & Glaze">Full Balayage & Glaze ($280)</option>
                      <option value="Gold Leaf Conditioning Mask">Gold Leaf Conditioning Mask ($240)</option>
                      <option value="Classic Hot Towel Shave">Classic Hot Towel Shave ($75)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="date" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Select Date *</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-3 focus:outline-none focus:border-[#C5A880] transition-colors text-xs font-semibold"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="time" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Select Time *</label>
                      <input 
                        type="time" 
                        id="time" 
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-3 focus:outline-none focus:border-[#C5A880] transition-colors text-xs font-semibold"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-[#C5A880] hover:bg-[#B59A72] text-[#FFFDF9] py-4 text-xs font-bold uppercase tracking-[0.15em] transition-colors rounded-md shadow-md mt-4"
                  >
                    Reserve Session
                  </button>
                </form>
              </div>

              {/* Info Column */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h3 className="font-serif text-3xl font-light text-[#111111]">Studio Location</h3>
                  <p className="text-[#B3A394] leading-relaxed font-medium">
                    1042 Fifth Avenue, Manhattan <br />
                    New York, NY 10028
                  </p>
                  <p className="text-xs text-[#C5A880] font-bold uppercase tracking-[0.1em]">
                    T: +1 (212) 555-0199 | E: reserve@elanstudio.com
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="font-serif text-2xl font-light text-[#111111]">Business Hours</h3>
                  <div className="border-t border-[#B3A394]/10 divide-y divide-[#B3A394]/10 text-sm">
                    <div className="flex justify-between py-3">
                      <span className="text-[#B3A394] font-medium">Monday — Friday</span>
                      <span className="text-[#111111] font-semibold">9:00 AM — 8:00 PM</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-[#B3A394] font-medium">Saturday</span>
                      <span className="text-[#111111] font-semibold">10:00 AM — 6:00 PM</span>
                    </div>
                    <div className="flex justify-between py-3">
                      <span className="text-[#B3A394] font-medium">Sunday</span>
                      <span className="text-[#C5A880] font-bold">Closed</span>
                    </div>
                  </div>
                </div>

                {/* Map Mockup */}
                <div className="relative h-[250px] w-full rounded-xl overflow-hidden border border-[#B3A394]/20 shadow-md">
                  <div className="absolute inset-0 bg-[#FFF8F0] flex flex-col items-center justify-center p-6 text-center">
                    <svg className="w-8 h-8 text-[#C5A880] mb-2 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-serif font-bold text-lg text-[#111111]">Interactive Map Mockup</span>
                    <span className="text-xs text-[#B3A394] font-medium mt-1">Upper East Side, Fifth Ave & 85th St</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

      </main>

      {/* 3. Booking Overlay Modal Dialog */}
      <AnimatePresence>
        {isBookingOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Modal Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetBooking} 
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            ></motion.div>

            {/* Modal Box */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative z-10 w-full max-w-lg bg-[#FFFDF9] rounded-2xl border border-[#C5A880]/20 shadow-2xl overflow-hidden p-8"
            >
              
              {/* Close Button */}
              <button 
                onClick={resetBooking}
                className="absolute top-6 right-6 text-[#B3A394] hover:text-[#111111] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {bookingStep === 1 && (
                <div>
                  <h3 className="font-serif text-3xl font-light text-[#111111] mb-2 pr-6">Appointment Request</h3>
                  <p className="text-xs text-[#B3A394] uppercase tracking-wider mb-6 font-semibold">Reserve your spot at ÉLAN Studio</p>

                  <form onSubmit={handleBookingSubmit} className="space-y-5">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="modal-name" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Full Name *</label>
                      <input 
                        type="text" 
                        id="modal-name" 
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe" 
                        className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="modal-phone" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="modal-phone" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 0199" 
                        className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#C5A880] transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="modal-service" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Select Service *</label>
                      <select 
                        id="modal-service" 
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#C5A880] transition-colors"
                      >
                        <option value="Signature Haircut & Style">Signature Haircut & Style ($120)</option>
                        <option value="Gentleman's Grooming Cut">Gentleman's Grooming Cut ($90)</option>
                        <option value="Editorial Blowout">Editorial Blowout ($85)</option>
                        <option value="Event & Updo Styling">Event & Updo Styling ($145)</option>
                        <option value="Full Balayage & Glaze">Full Balayage & Glaze ($280)</option>
                        <option value="Gold Leaf Conditioning Mask">Gold Leaf Conditioning Mask ($240)</option>
                        <option value="Classic Hot Towel Shave">Classic Hot Towel Shave ($75)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="modal-date" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Select Date *</label>
                        <input 
                          type="date" 
                          id="modal-date" 
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#C5A880] transition-colors text-xs font-semibold"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="modal-time" className="text-xs font-bold uppercase tracking-wider text-[#B3A394]">Select Time *</label>
                        <input 
                          type="time" 
                          id="modal-time" 
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="bg-white border border-[#B3A394]/25 rounded-md px-4 py-2.5 focus:outline-none focus:border-[#C5A880] transition-colors text-xs font-semibold"
                        />
                      </div>
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-[#C5A880] hover:bg-[#B59A72] text-[#FFFDF9] py-3 text-xs font-bold uppercase tracking-[0.15em] transition-colors rounded-md shadow-md mt-3"
                    >
                      Book Appointment
                    </button>
                  </form>
                </div>
              )}

              {bookingStep === 2 && (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 border-4 border-[#C5A880]/20 border-t-[#C5A880] rounded-full animate-spin mb-6"></div>
                  <h4 className="font-serif text-2xl font-light text-[#111111] mb-2">Securing Appointment...</h4>
                  <p className="text-sm text-[#B3A394] font-medium">Verifying schedule availability at the studio.</p>
                </div>
              )}

              {bookingStep === 3 && (
                <div className="py-8 flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-[#C5A880] rounded-full flex items-center justify-center mb-6 text-white shadow-lg shadow-[#C5A880]/20">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="font-serif text-3xl font-light text-[#111111] mb-3">Booking Confirmed!</h4>
                  <p className="text-[#B3A394] leading-relaxed mb-6 font-medium text-sm">
                    Thank you, <span className="text-[#111111] font-bold">{formData.name}</span>. Your slot for <span className="text-[#111111] font-bold">{formData.service}</span> on <span className="text-[#111111] font-bold">{formData.date}</span> at <span className="text-[#111111] font-bold">{formData.time}</span> has been secured.
                  </p>
                  <div className="bg-[#FFF8F0] border border-[#B3A394]/10 rounded-lg p-4 mb-8 text-xs text-[#C5A880] font-bold uppercase tracking-wide">
                    Confirmation text sent to: {formData.phone}
                  </div>
                  <button 
                    onClick={resetBooking}
                    className="border border-[#C5A880] hover:bg-[#C5A880] hover:text-[#FFFDF9] text-[#111111] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all duration-300"
                  >
                    Close Window
                  </button>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 4. SAK Technologies Banner & Footer */}
      <footer className="bg-[#111111] text-[#B3A394] py-8 px-6 text-center border-t border-[#B3A394]/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-widest">
          <div>
            &copy; {new Date().getFullYear()} ÉLAN STUDIO. All rights reserved.
          </div>
          <div className="text-[10px] text-white/50 border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 hover:border-[#C5A880] transition-colors">
            <span>Designed and Developed by</span>
            <a href="/" className="text-[#C5A880] font-bold hover:underline">SAK Technologies</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
