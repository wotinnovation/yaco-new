"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const FAQS = [
  {
    q: "What is car detailing?",
    a: "Car detailing is a thorough cleaning, restoration, and finishing of a vehicle to produce a show-quality level of detail. It goes far beyond a standard car wash, covering every inch of the vehicle inside and out.",
  },
  {
    q: "How often should I get my car detailed?",
    a: "For most drivers, a full detail every 4–6 months is ideal. However, if you drive frequently or park outdoors, quarterly detailing helps maintain your vehicle's condition and resale value.",
  },
  {
    q: "What's included in a full detailing service?",
    a: "A full detail includes exterior hand wash, clay bar treatment, paint correction, wax/sealant application, interior vacuuming, leather/fabric cleaning, dashboard polish, window cleaning, and tire dressing.",
  },
  {
    q: "Will detailing remove scratches and stains?",
    a: "Light scratches and swirl marks can often be removed or significantly reduced with paint correction. Deep scratches may require touch-up paint. Most interior stains can be removed with professional-grade products and techniques.",
  },
  {
    q: "How long does a full detailing service take?",
    a: "A basic detail typically takes 2–4 hours. A full detail with paint correction and ceramic coating can take 8–16 hours depending on the vehicle size and condition.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.9,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }
  }, []);

  const toggle = (i: number) => {
    setOpenIdx(openIdx === i ? null : i);
  };

  return (
    <section ref={sectionRef} id="faq" className="bg-white overflow-hidden pb-12">
      {/* Full-width car interior image */}
      <div 
        className="relative w-full h-[55vh]"
      >
        <Image
          src="/images/parallex.jpg"
          alt="FAQ Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* White overlay for light theme */}
        <div className="absolute inset-0 bg-white/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/70 to-white" />
      </div>

      {/* FAQ Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left heading */}
          <div>
            <p className="section-label mb-5">EVERYTHING YOU NEED TO KNOW</p>
            <h2
              className="text-black text-[clamp(2rem,3.5vw,2.8rem)] font-bold leading-tight mt-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Frequently Asked
              <br />
              Questions
            </h2>
            
            <div className="mt-12 lg:mt-16 bg-gray-50 border border-black/5 p-8 rounded-2xl">
              <h3 className="text-black font-bold text-xl mb-3">Join Our Newsletter</h3>
              <p className="text-black/60 text-sm mb-6 leading-relaxed">
                Subscribe for exclusive updates, early access to new products, and premium automotive styling tips.
              </p>
              <form 
                className="flex flex-col xl:flex-row gap-3" 
                onSubmit={(e) => { e.preventDefault(); alert('Subscribed to newsletter!'); }}
              >
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  required
                  className="flex-1 bg-white border border-black/10 rounded-[10px] px-4 py-3.5 text-sm focus:outline-none focus:border-[#e01c1c] transition-colors"
                />
                <button 
                  type="submit" 
                  className="bg-[#e01c1c] text-white font-bold text-[11px] uppercase tracking-wider py-3.5 px-6 rounded-[10px] hover:bg-[#cc0000] hover:-translate-y-0.5 transition-all shadow-md"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right accordion */}
          <div ref={contentRef} className="space-y-0">
            {FAQS.map((faq, i) => (
              <div key={i} className="faq-item">
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => toggle(i)}
                >
                  <span
                    className={`text-[14px] font-semibold transition-colors duration-200 ${
                      openIdx === i ? "text-black" : "text-black/60 group-hover:text-black"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`ml-4 flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      openIdx === i
                        ? "border-[#e01c1c] bg-[#e01c1c] text-white rotate-180"
                        : "border-black/10 text-black/40"
                    }`}
                  >
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>

                <div
                  className="overflow-hidden transition-all duration-400 ease-in-out"
                  style={{
                    maxHeight: openIdx === i ? "200px" : "0",
                    opacity: openIdx === i ? 1 : 0,
                  }}
                >
                  <p className="text-black/60 text-[14px] leading-relaxed pb-5 pr-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}