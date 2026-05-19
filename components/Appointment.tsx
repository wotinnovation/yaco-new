"use client";

import { useRef } from "react";

export default function Appointment() {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="appointment"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a0a0a 50%, #0f0f0f 100%)",
      }}
    >
      {/* Decorative red line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e01c1c] to-transparent opacity-40" />

      <div className="max-w-[900px] mx-auto px-6">
        <div className="text-center mb-12">
          <p className="section-label mx-auto mb-5">BOOK NOW</p>
          <h2
            className="text-white text-[clamp(2rem,4vw,3rem)] font-bold mt-5"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Make an Appointment
          </h2>
          <p className="text-gray-400 text-sm mt-4">
            Schedule your detailing service today and give your car the care it deserves.
          </p>
        </div>

        <div ref={formRef} className="bg-[#151515] border border-white/5 rounded-2xl p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { label: "Full Name", placeholder: "John Doe", type: "text" },
              { label: "Phone Number", placeholder: "+1 (555) 000-0000", type: "tel" },
              { label: "Email Address", placeholder: "john@example.com", type: "email" },
              { label: "Vehicle Model", placeholder: "e.g. BMW M3 2022", type: "text" },
            ].map((field) => (
              <div key={field.label}>
                <label className="block text-gray-400 text-xs font-medium tracking-wide mb-2 uppercase">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full bg-[#1f1f1f] border border-white/8 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e01c1c]/50 focus:bg-[#222] transition-all duration-200"
                />
              </div>
            ))}

            <div>
              <label className="block text-gray-400 text-xs font-medium tracking-wide mb-2 uppercase">
                Service Type
              </label>
              <select className="w-full bg-[#1f1f1f] border border-white/8 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e01c1c]/50 transition-all duration-200 appearance-none cursor-pointer">
                <option value="" className="bg-[#1f1f1f]">Select a service</option>
                <option value="wash" className="bg-[#1f1f1f]">Exterior Hand Wash & Wax</option>
                <option value="interior" className="bg-[#1f1f1f]">Interior Deep Cleaning</option>
                <option value="paint" className="bg-[#1f1f1f]">Paint Correction</option>
                <option value="ceramic" className="bg-[#1f1f1f]">Ceramic Coating Protection</option>
                <option value="engine" className="bg-[#1f1f1f]">Engine Bay Detailing</option>
                <option value="headlight" className="bg-[#1f1f1f]">Headlight Restoration</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 text-xs font-medium tracking-wide mb-2 uppercase">
                Preferred Date
              </label>
              <input
                type="date"
                className="w-full bg-[#1f1f1f] border border-white/8 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e01c1c]/50 transition-all duration-200"
              />
            </div>
          </div>

          <div className="mt-5">
            <label className="block text-gray-400 text-xs font-medium tracking-wide mb-2 uppercase">
              Additional Notes
            </label>
            <textarea
              rows={3}
              placeholder="Any special requirements or notes about your vehicle..."
              className="w-full bg-[#1f1f1f] border border-white/8 rounded-lg px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#e01c1c]/50 resize-none transition-all duration-200"
            />
          </div>

          <button className="mt-6 w-full bg-[#e01c1c] hover:bg-[#cc0000] text-white font-semibold py-4 rounded-[10px] text-[14px] tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-red-900/30 hover:-translate-y-0.5 active:translate-y-0">
            Book Appointment
          </button>
        </div>
      </div>

      {/* Bottom decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e01c1c] to-transparent opacity-20" />
    </section>
  );
}