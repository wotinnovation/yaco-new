"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import gsap from "gsap";
import Image from "next/image";

export default function AppointmentPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );
  }, []);

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />

      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/about/interior.jpg"
          alt="Luxury car interior"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.2]"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#e01c1c] text-sm font-bold tracking-[0.3em] uppercase mb-4">Reservation</p>
          <h1 
            className="text-white text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Book Your Appointment
          </h1>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 px-6 relative z-10">
        <div ref={contentRef} className="max-w-[800px] mx-auto bg-[#111] border border-white/5 rounded-[40px] p-8 md:p-16 shadow-2xl">
          <div className="mb-12 text-center">
            <h2 className="text-white text-3xl font-bold mb-4 font-barlow">Secure Your Exclusive Slot</h2>
            <p className="text-gray-400 text-lg">Tell us about your vehicle and the services you require.</p>
          </div>

          <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Our specialists will contact you shortly."); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { label: "Full Name", placeholder: "e.g. Salim Ali", type: "text" },
                { label: "Phone Number", placeholder: "+971 50 000 0000", type: "tel" },
                { label: "Email Address", placeholder: "example@yaco.ae", type: "email" },
                { label: "Vehicle Model", placeholder: "e.g. Nissan Patrol Nismo", type: "text" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    placeholder={field.placeholder}
                    className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e01c1c] transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-3">
                  Service Selection
                </label>
                <div className="relative">
                  <select className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#e01c1c] transition-all duration-300 appearance-none cursor-pointer">
                    <option value="" className="bg-[#111]">Choose a Category</option>
                    <option value="seat-covers" className="bg-[#111]">Precision Tailored Seat Covers</option>
                    <option value="floor-mats" className="bg-[#111]">Precision Molded Floor Mats</option>
                    <option value="upholstery" className="bg-[#111]">Bespoke Interior Upholstery</option>
                    <option value="cleaning" className="bg-[#111]">Advanced Deep Cleaning</option>
                  </select>
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-3">
                  Preferred Date
                </label>
                <input
                  type="date"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#e01c1c] transition-all duration-300 text-gray-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-3">
                Special Requirements
              </label>
              <textarea
                rows={5}
                placeholder="Tell us about specific details or custom requests..."
                className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-4 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e01c1c] resize-none transition-all duration-300"
              />
            </div>

            <button 
              type="submit"
              className="w-full py-6 bg-[#e01c1c] text-white font-bold rounded-2xl text-sm uppercase tracking-[0.2em] hover:bg-[#cc0000] hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-500 flex items-center justify-center gap-3 group"
            >
              Confirm Reservation
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <p className="text-gray-500 text-xs text-center leading-relaxed max-w-md mx-auto">
              By confirming, you agree to our terms of service. Our executive team will contact you within 2 business hours.
            </p>
          </form>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
