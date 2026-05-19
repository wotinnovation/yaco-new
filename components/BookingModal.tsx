"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
      
      // Animate in
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.fromTo(
        contentRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      );
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleClose = () => {
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, ease: "power2.in" });
    gsap.to(contentRef.current, {
      x: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in",
      onComplete: onClose,
    });
  };

  if (!isOpen) return null;

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-[9999] flex justify-end overflow-hidden"
    >
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 cursor-pointer"
        onClick={handleClose}
      />

      {/* Sidebar Content */}
      <div
        ref={contentRef}
        className="relative w-full max-w-[500px] h-full bg-[#0d0d0d] border-l border-white/5 shadow-2xl overflow-y-auto hide-scrollbar"
      >
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[#e01c1c] text-[10px] font-bold tracking-[0.2em] uppercase mb-2">Reserved Excellence</p>
              <h2 className="text-white text-3xl font-bold font-barlow">Book Your Slot</h2>
            </div>
            <button
              onClick={handleClose}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {[
                { label: "Full Name", placeholder: "e.g. Salim Ali", type: "text" },
                { label: "Phone Number", placeholder: "+971 50 000 0000", type: "tel" },
                { label: "Email Address", placeholder: "example@yaco.ae", type: "email" },
                { label: "Vehicle Model", placeholder: "e.g. Nissan Patrol Nismo", type: "text" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2.5">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full bg-[#141414] border border-white/20 rounded-xl px-5 py-4 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#e01c1c] focus:bg-[#1a1a1a] transition-all duration-300"
                  />
                </div>
              ))}

              <div>
                <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2.5">
                  Service Selection
                </label>
                <select className="w-full bg-[#141414] border border-white/20 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#e01c1c] transition-all duration-300 appearance-none cursor-pointer">
                  <option value="" className="bg-[#141414]">Choose a Category</option>
                  <option value="seat-covers" className="bg-[#141414]">Precision Tailored Seat Covers</option>
                  <option value="floor-mats" className="bg-[#141414]">Precision Molded Floor Mats</option>
                  <option value="upholstery" className="bg-[#141414]">Bespoke Interior Upholstery</option>
                  <option value="cleaning" className="bg-[#141414]">Advanced Deep Cleaning</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2.5">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="w-full bg-[#141414] border border-white/20 rounded-xl px-5 py-4 text-white text-sm focus:outline-none focus:border-[#e01c1c] transition-all duration-300 text-gray-300"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2.5">
                Special Requirements
              </label>
              <textarea
                rows={4}
                placeholder="Tell us about specific details or custom requests..."
                className="w-full bg-[#141414] border border-white/20 rounded-xl px-5 py-4 text-white text-sm placeholder-gray-400 focus:outline-none focus:border-[#e01c1c] resize-none transition-all duration-300"
              />
            </div>

            <button 
              className="w-full py-5 bg-[#e01c1c] text-white font-bold rounded-[10px] text-sm uppercase tracking-widest hover:bg-[#cc0000] hover:shadow-2xl hover:shadow-red-900/40 transition-all duration-500 flex items-center justify-center gap-2 group"
              onClick={() => {
                alert("Thank you! Our specialists will contact you shortly.");
                handleClose();
              }}
            >
              Confirm Reservation
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <p className="text-gray-600 text-[11px] text-center leading-relaxed px-4">
              By confirming, you agree to our terms of service. We will reach out within 2 hours to confirm your final timeline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
