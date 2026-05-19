"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IG_IMAGES = [
  "/images/insta/insta1.jpg",
  "/images/insta/insta2.jpg",
  "/images/insta/insta3.jpg",
  "/images/insta/insta4.jpg",
  "/images/insta/insta5.jpg",
  "/images/insta/insta6.jpg",
  "/images/insta/insta7.jpg",
  "/images/insta/insta8.jpg",
];

export default function Instagram() {
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
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
  }, []);

  return (
    <section className="bg-white pt-12 pb-12 overflow-hidden border-t border-black/5">
      {/* Heading */}
      <div ref={headingRef} className="text-center mb-10 px-6">
        <p className="section-label mx-auto mb-4">OUR INSTAGRAM</p>
        <h2
          className="text-black text-[clamp(2rem,5vw,3.5rem)] font-bold mt-4"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          @yaco_automotive
        </h2>
      </div>

      {/* Scrolling image strip */}
      <div className="overflow-hidden">
        <div className="marquee-track gap-0">
          {[...IG_IMAGES, ...IG_IMAGES].map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-48 h-40 md:w-64 md:h-52 relative overflow-hidden group cursor-pointer"
            >
              <Image
                src={img}
                alt={`Instagram post ${i + 1}`}
                fill
                sizes="(max-width: 768px) 192px, 256px"
                className="object-cover brightness-80 group-hover:brightness-100 group-hover:scale-105 transition-all duration-500"
              />
              {/* Instagram overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-[#e01c1c]/80 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}