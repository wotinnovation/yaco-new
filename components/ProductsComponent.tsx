"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

import { PRODUCTS, CATEGORIES } from "@/lib/products-data";

// Map CATEGORIES to include full product objects for the UI
const SHOWCASE_DATA = CATEGORIES.map(cat => ({
  ...cat,
  products: cat.products.map(slug => {
    const p = PRODUCTS.find(prod => prod.slug === slug);
    return p || { name: slug, style: "Unknown", slug: slug, image: "" };
  })
}));

function ShowcaseBlock({ category }: { category: typeof SHOWCASE_DATA[0] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imagesRef.current && containerRef.current) {
      gsap.fromTo(
        imagesRef.current,
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }
    if (textRef.current && containerRef.current) {
      gsap.fromTo(
        textRef.current,
        { x: 50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="py-12 border-t border-gray-100 last:border-b-0 first:border-none">
      <div className="relative z-10 w-[92vw] max-w-none mx-auto">

        {/* Header */}
        <div className="mb-8 text-center md:text-left">
          <p className="section-label mb-4">{category.label}</p>
          <h2
            className="text-gray-900 text-[clamp(2rem,4vw,3rem)] font-bold leading-tight uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            {category.title}
          </h2>
        </div>

        <div className="flex flex-col gap-8 mt-2">
          {/* 5 Products Horizontal Row (Aligned Grid Layout) */}
          <div
            ref={imagesRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6 pb-8 pt-4 w-full"
          >
            {category.products.slice(0, 6).map((product, i) => (
              <Link
                href={`/products/${product.slug}`}
                key={i}
                className={`w-full h-[280px] sm:h-[400px] lg:h-[480px] flex-col bg-white border border-gray-100 rounded-2xl sm:rounded-3xl hover:bg-gray-50 hover:border-[#e01c1c]/30 hover:-translate-y-2 transition-all duration-500 cursor-pointer group shadow-lg sm:shadow-xl relative overflow-hidden ${i === 5 ? "flex lg:hidden" : "flex"
                  }`}
              >
                {/* Card Image */}
                <div className="w-full h-[70%] sm:h-[75%] relative overflow-hidden bg-black">
                  <Image
                    src={product.image || category.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 20vw"
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 w-full flex-1 flex flex-col justify-end bg-white group-hover:bg-gray-50 transition-colors duration-500">
                  <span className="text-[#e01c1c] text-[9px] sm:text-xs font-bold tracking-widest uppercase mb-1 sm:mb-2 block">{product.style}</span>
                  <h4 className="text-gray-900 font-bold text-sm sm:text-lg leading-tight group-hover:text-black transition-colors duration-300">{product.name}</h4>
                </div>

                {/* Arrow icon - hidden on smallest screens */}
                <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#e01c1c] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500 delay-100 shadow-lg hidden sm:flex">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>



          {/* CTA below products grid */}
          <div className="flex justify-end pb-4 mt-6">
            <Link
              href={category.href}
              className="inline-flex items-center gap-2 bg-[#e01c1c] hover:bg-[#cc0000] text-white text-[13px] font-semibold px-8 py-4 rounded-[10px] transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5"
            >
              Explore {category.title.replace("Precision Tailored ", "").replace("Bespoke ", "").replace("Precision Molded ", "").replace("Advanced ", "")}
              <svg className="w-4 h-4 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default function ProductsComponent() {
  const sectionRef = useRef<HTMLElement>(null);
  const parallaxBgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (parallaxBgRef.current) {
      gsap.to(parallaxBgRef.current, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Smoothly transition background back to black when 80% of the section is scrolled
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        backgroundColor: "#ffffffff",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "80% top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="pt-8 pb-12 relative overflow-hidden bg-white">
      {/* Parallax Background Map/Grid */}
      <div
        ref={parallaxBgRef}
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
      >
        <div
          className="w-full h-[150%] opacity-20"
          style={{
            backgroundImage: `linear-gradient(to right, #ccc 1px, transparent 1px), linear-gradient(to bottom, #ccc 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#e01c1c]/5 blur-[80px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-20 flex flex-col">
        {SHOWCASE_DATA.map((category) => (
          <ShowcaseBlock key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}