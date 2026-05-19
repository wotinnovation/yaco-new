"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SERVICES = [
  {
    id: "01",
    title: "Seat Covers",
    slug: "seat-covers",
    desc: "Custom-fit premium seat covers tailored to perfection",
    image: "/images/service-grid/seat-cover.jpg",
    imageAlt: "Seat covers interior",
  },
  {
    id: "02",
    title: "Floor Mats",
    slug: "floor-mats",
    desc: "Luxury protection for your vehicle floor",
    image: "/images/service-grid/floormat.jpg",
    imageAlt: "Car floor mats interior",
  },
  {
    id: "03",
    title: "Upholstery",
    slug: "upholstery",
    desc: "Complete interior restoration and customization",
    image: "/images/service-grid/upholstry.jpg",
    imageAlt: "Car upholstery work",
  },
  {
    id: "04",
    title: "Deep Cleaning",
    slug: "deep-cleaning",
    desc: "Professional interior detailing service",
    image: "/images/service-grid/CLEANING.jpg",
    imageAlt: "Interior deep cleaning",
  },
];

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cells = sectionRef.current?.querySelectorAll(".grid-cell");
    if (!cells) return;

    // Entrance animation for cards
    cells.forEach((cell, i) => {
      gsap.fromTo(
        cell,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: (i % 2) * 0.15,
          scrollTrigger: {
            trigger: cell,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // Section background is now static white — no GSAP bg transition needed
  }, []);

  return (
    <section ref={sectionRef} id="services" className="relative bg-white">
      {/* Removed Top Overlay as it's cleaner without it in a card row */}

      <div className="w-[92vw] mx-auto px-4 sm:px-6 pt-4 pb-12 md:pb-16 z-10 relative">
        {/* Horizontal 4 Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {SERVICES.map((service) => (
            <Link
              key={service.id}
              href={`/products/${service.slug}`}
              className="grid-cell group relative overflow-hidden rounded-2xl sm:rounded-3xl h-[280px] sm:h-[400px] xl:h-[500px] cursor-pointer"
            >
              <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover brightness-[0.7] group-hover:brightness-[0.4] group-hover:scale-105 transition-all duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end">
                  <span className="text-[#e01c1c] text-[10px] sm:text-sm font-bold tracking-widest uppercase mb-1 sm:mb-2 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500">
                    {service.id}
                  </span>
                  <h3 className="text-white text-lg sm:text-2xl xl:text-3xl font-bold mb-1 sm:mb-3 transform md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {service.title}
                  </h3>
                  <p className="hidden sm:block text-white/80 text-sm xl:text-base leading-relaxed md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {service.desc}
                  </p>

                  {/* Arrow icon shown on hover - hidden on mobile */}
                  <div className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-[#e01c1c] text-white hidden sm:flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-150">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}