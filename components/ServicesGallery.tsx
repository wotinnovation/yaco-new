"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GALLERY_SERVICES = [
  {
    id: "01",
    title: "Exterior Hand Wash & Wax",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
  },
  {
    id: "02",
    title: "Interior Deep Cleaning",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    id: "03",
    title: "Paint Correction",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80",
  },
  {
    id: "04",
    title: "Ceramic Coating Protection",
    image: "https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&q=80",
  },
  {
    id: "05",
    title: "Engine Bay Detailing",
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
  },
  {
    id: "06",
    title: "Headlight Restoration",
    image: "https://images.unsplash.com/photo-1493238792000-8113da705763?w=800&q=80",
  },
];

export default function ServicesGallery() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const cards = sectionRef.current?.querySelectorAll(".gallery-card");
    if (!cards) return;

    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { scale: 0.92, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          delay: (i % 3) * 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="bg-[#0a0a0a] py-4 px-4">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {GALLERY_SERVICES.map((svc) => (
            <div
              key={svc.id}
              className="gallery-card service-card relative rounded-lg overflow-hidden group cursor-pointer"
              style={{ aspectRatio: "4/3" }}
            >
              <Image
                src={svc.image}
                alt={svc.title}
                fill
                className="object-cover brightness-75 group-hover:brightness-90 transition-all duration-500"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Number */}
              <div className="absolute top-4 left-4 z-10">
                <span
                  className="text-white/80 text-lg font-semibold group-hover:text-[#e01c1c] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.08em" }}
                >
                  {svc.id}
                </span>
              </div>

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                <h3
                  className="text-white font-bold text-[15px] tracking-wide group-hover:text-[#e01c1c] transition-colors duration-300"
                >
                  {svc.title}
                </h3>
              </div>

              {/* Red line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#e01c1c] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}