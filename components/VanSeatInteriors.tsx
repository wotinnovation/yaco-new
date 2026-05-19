"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SLIDES = [
  {
    url: "/images/products/PASSENGER VAN/_MG_5694.JPG",
    alt: "Luxury Van Interior - Panoramic View"
  },
  {
    url: "/images/products/PASSENGER VAN/_MG_5696.JPG",
    alt: "Premium Van Seating - Comfort & Style"
  },
  {
    url: "/images/products/PASSENGER VAN/_MG_5697.JPG",
    alt: "High-End Fleet Solutions"
  },
  {
    url: "/images/products/PASSENGER VAN/_MG_5700.JPG",
    alt: "Customized Van Interior Craftsmanship"
  }
];

export default function VanSeatInteriors() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (textRef.current && imageContainerRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      gsap.fromTo(
        imageContainerRef.current,
        { x: 50, opacity: 0, scale: 0.95 },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div ref={textRef} className="w-full lg:w-1/2">
            <p className="text-[#e01c1c] text-sm font-semibold tracking-[0.2em] uppercase mb-4">
              Commercial Solutions
            </p>
            <h2 
              className="text-black text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-[1.1] mb-8 uppercase"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              Premium Van <br />
              <span className="text-[#e01c1c]">Seat Interiors</span>
            </h2>
            
            <div className="w-20 h-1 bg-black mb-8" />
            
            <p className="text-black/70 text-lg leading-relaxed mb-10 max-w-xl">
              Elevate the passenger experience with our specialized van interior solutions. 
              We combine ergonomic excellence with heavy-duty durability to create 
              spaces that are both luxurious and built to last.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Ergonomic Comfort", desc: "Contoured designs for long-distance travel support." },
                { title: "Durable Materials", desc: "High-traffic rated fabrics and premium synthetic leathers." },
                { title: "Custom Branding", desc: "Integrated logos and signature stitching for fleets." },
                { title: "Safety First", desc: "Fire-retardant materials meeting international standards." },
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <h4 className="text-black font-bold text-lg uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
                    {item.title}
                  </h4>
                  <p className="text-black/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content - Slider */}
          <div ref={imageContainerRef} className="w-full lg:w-1/2 relative h-[500px] md:h-[650px] rounded-[40px] overflow-hidden shadow-2xl shadow-black/10 group">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  i === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={slide.url}
                  alt={slide.alt}
                  fill
                  className={`object-cover transition-transform duration-[5000ms] ease-linear ${
                    i === activeSlide ? "scale-110" : "scale-100"
                  }`}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            ))}
            
            {/* Slider Controls */}
            <div className="absolute top-10 right-10 z-20 flex gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-12 h-1 rounded-full transition-all duration-300 ${
                    i === activeSlide ? "bg-[#e01c1c] w-16" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
            
            {/* Floating Badge */}
            <div className="absolute bottom-10 left-10 right-10 z-20 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl flex items-center justify-between transition-transform duration-500 group-hover:translate-y-[-5px]">
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                  Fleet Capacity
                </p>
                <p className="text-white font-bold text-xl uppercase" style={{ fontFamily: "var(--font-barlow)" }}>
                  {activeSlide === 0 ? "Unlimited Solutions" : 
                   activeSlide === 1 ? "Premium Comfort" : 
                   activeSlide === 2 ? "Durable Design" : "Master Craftsmanship"}
                </p>
              </div>
              <div className="w-12 h-12 rounded-full bg-[#e01c1c] flex items-center justify-center shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
