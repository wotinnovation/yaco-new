"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FEATURES = [
  {
    title: "Superior Quality",
    desc: "Premium materials and meticulous craftsmanship in every detail.",
  },
  {
    title: "Precision Tech",
    desc: "Advanced computerized cutting and fire lamination for a perfect fit.",
  },
  {
    title: "Global Reach",
    desc: "Trusted by customers across the Middle East, India, and Africa.",
  },
  {
    title: "Customer First",
    desc: "Dedicated support and customized solutions for every driver.",
  },
];

// SVG brand logos (simplified)
const BRANDS = [
  {
    name: "Rolls Royce",
    svg: (
      <svg viewBox="0 0 60 60" fill="currentColor" className="w-12 h-12">
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="28" fontWeight="bold" fontFamily="serif">ℛℛ</text>
      </svg>
    ),
  },
  {
    name: "Suzuki",
    svg: (
      <svg viewBox="0 0 60 60" fill="currentColor" className="w-12 h-12">
        <polygon points="30,5 55,45 5,45" fill="none" stroke="currentColor" strokeWidth="3"/>
        <line x1="5" y1="45" x2="55" y2="45" stroke="currentColor" strokeWidth="3"/>
        <text x="50%" y="58%" textAnchor="middle" dominantBaseline="middle" fontSize="14" fontWeight="bold">S</text>
      </svg>
    ),
  },
  {
    name: "Tesla",
    svg: (
      <svg viewBox="0 0 60 60" fill="currentColor" className="w-12 h-12">
        <path d="M30 10 L50 18 L43 22 Q40 14 30 14 Q20 14 17 22 L10 18 Z M28 22 L28 50 L30 52 L32 50 L32 22 Z"/>
      </svg>
    ),
  },
  {
    name: "Volkswagen",
    svg: (
      <svg viewBox="0 0 60 60" fill="currentColor" className="w-12 h-12">
        <circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="22" fontWeight="bold">VW</text>
      </svg>
    ),
  },
  {
    name: "Volvo",
    svg: (
      <svg viewBox="0 0 60 60" fill="currentColor" className="w-12 h-12">
        <circle cx="30" cy="30" r="24" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="13" fontWeight="bold" letterSpacing="1">VOLVO</text>
      </svg>
    ),
  },
  {
    name: "Bugatti",
    svg: (
      <svg viewBox="0 0 60 60" fill="currentColor" className="w-12 h-12">
        <rect x="8" y="20" width="44" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="2.5"/>
        <text x="50%" y="55%" textAnchor="middle" dominantBaseline="middle" fontSize="18" fontWeight="bold" letterSpacing="1">EB</text>
      </svg>
    ),
  },
];

export default function WhyChoose() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll(".feature-card");
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 80%",
          },
        }
      );
    }

    if (cards) {
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-12">
      {/* Brand logos marquee */}
      <div className="overflow-hidden border-y border-black/5 py-6 mb-12">
        <div className="marquee-track">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div
              key={i}
              className="mx-14 text-black/20 hover:text-black/60 transition-colors duration-300 flex-shrink-0"
            >
              {brand.svg}
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-10">
          <p className="section-label mx-auto mb-3">WHY YACO</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight mt-6"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Why Choose YACO?
          </h2>
          <p className="text-black/50 text-base mt-5 max-w-xl mx-auto leading-relaxed">
            Setting the standard in automotive interior luxury and protection.
          </p>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {FEATURES.map((feat) => (
            <div
              key={feat.title}
              className="feature-card min-h-[220px] flex flex-col justify-start bg-gray-50 border border-black/5 rounded-lg p-7 hover:border-[#e01c1c]/40 hover:bg-red-50/30 transition-all duration-400 group"
            >
              <div className="w-8 h-0.5 bg-[#e01c1c] mb-5 group-hover:w-12 transition-all duration-300" />
              <h3 className="text-black font-semibold text-lg mb-3">
                {feat.title}
              </h3>
              <p className="text-black/50 text-base leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}