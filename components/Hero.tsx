"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero({ onBookingClick }: { onBookingClick?: () => void }) {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out" }
    )
      .fromTo(
        titleRef.current,
        { y: 80, opacity: 0, skewY: 3 },
        { y: 0, opacity: 1, skewY: 0, duration: 1, ease: "power3.out" },
        "-=0.6"
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.4"
      )
      .fromTo(
        btnRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "-=0.3"
      );

    // We removed the subtle background zoom GSAP since the video bg was removed
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col justify-center bg-white pt-40 pb-4 h-[75vh] md:h-auto md:min-h-0 overflow-hidden"
    >
      {/* Mobile Background Image */}
      <div className="md:hidden absolute inset-0 z-0">
        <Image
          src="/images/service-grid/seat-cover.jpg"
          alt="YACO Interiors Mobile BG"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white/40" />
      </div>

      <div className="relative z-10 w-[92vw] mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[70vh]">

          {/* LEFT CARD */}
          <div className="w-full md:w-1/2 h-[75vh] md:h-full bg-transparent md:bg-white border border-black/5 rounded-3xl p-8 lg:p-14 flex flex-col justify-center relative overflow-hidden group shadow-sm">
            {/* Desktop Background glow */}
            <div className="hidden md:block absolute top-0 right-0 w-64 h-64 bg-[#e01c1c]/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="flex flex-col gap-6 md:gap-8">
              <div ref={overlayRef}>
                <p className="text-[#e01c1c] text-sm font-semibold tracking-widest uppercase mb-4 drop-shadow-md">
                  Premium Automotive Accessories
                </p>
                <h1
                  ref={titleRef}
                  className="text-[clamp(2.5rem,5vw,5.5rem)] font-semibold text-black leading-[0.95] tracking-tight uppercase"
                  style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
                >
                  YOUR VEHICLE,<br />OUR PASSION
                </h1>
              </div>

              <div className="flex flex-col">
                <div className="w-12 h-1 bg-[#e01c1c] mb-6 hidden md:block" />
                <p
                  ref={subtitleRef}
                  className="text-black/70 font-normal text-[15px] sm:text-[16px] leading-relaxed max-w-md mb-8"
                >
                  Premium custom seat covers, floor mats, and upholstery crafted with precision. Experience luxury redefined through artisanal craftsmanship and cutting-edge technology.
                </p>

                <div ref={btnRef} className="flex items-center justify-center md:justify-start gap-4">
                  <button
                    onClick={onBookingClick}
                    className="inline-flex items-center justify-center bg-[#e01c1c] hover:bg-[#cc0000] text-white text-[13px] font-semibold px-10 py-4 rounded-[10px] transition-all shadow-lg shadow-red-900/20 active:translate-y-0.5 uppercase tracking-wider"
                  >
                    Book Your Slot Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="hidden md:block w-full md:w-1/2 h-[50vh] md:h-full rounded-3xl relative overflow-hidden group">
            <Image
              src="/images/service-grid/seat-cover.jpg"
              alt="YACO Interiors"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-8 left-8 right-8 flex flex-wrap gap-3 text-white/90 text-xs font-semibold tracking-wide uppercase">
              <span className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e01c1c]"></span> Since 2014
              </span>
              <span className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e01c1c]"></span> UAE & Middle East
              </span>
              <span className="flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded border border-white/10 shadow-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-[#e01c1c]"></span> Premium Quality
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}