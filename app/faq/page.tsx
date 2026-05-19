"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Image from "next/image";
import { ChevronDown, HelpCircle, Shield, Truck, CreditCard, PenTool } from "lucide-react";

const FAQS = [
  {
    category: "Services",
    icon: <PenTool className="w-5 h-5" />,
    items: [
      {
        q: "What is car detailing?",
        a: "Car detailing is a thorough cleaning, restoration, and finishing of a vehicle to produce a show-quality level of detail. It goes far beyond a standard car wash, covering automotive aesthetics and protection.",
      },
      {
        q: "Will detailing remove scratches and stains?",
        a: "Light scratches and swirl marks can often be removed or significantly reduced with paint correction. Most interior stains can be removed with professional-grade steam cleaning and specialized chemicals.",
      },
    ]
  },
  {
    category: "Booking & Timing",
    icon: <HelpCircle className="w-5 h-5" />,
    items: [
      {
        q: "How often should I get my car detailed?",
        a: "For most drivers, a full detail every 4–6 months is ideal to maintain the vehicle's condition and resale value.",
      },
      {
        q: "How long does a full detailing service take?",
        a: "A basic interior detail typically takes 2–4 hours. A full bespoke transformation can take 8–16 hours depending on the vehicle size and condition.",
      },
    ]
  },
  {
    category: "Products & Warranty",
    icon: <Shield className="w-5 h-5" />,
    items: [
      {
        q: "Are the seat covers custom made?",
        a: "Yes, all our seat covers and floor mats are precision-tailored specifically for your vehicle's make and model to ensure an OEM-like fit.",
      },
      {
        q: "Do you offer any warranty?",
        a: "We offer a 1-year warranty on all our custom upholstery and precision-molded products against manufacturing defects.",
      },
    ]
  }
];

export default function FAQPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<string | null>("Services-0");

  const toggle = (id: string) => {
    setOpenIdx(openIdx === id ? null : id);
  };

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />

      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/parallex.jpg"
          alt="YACO FAQ"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.25]"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#e01c1c] text-sm font-bold tracking-[0.3em] uppercase mb-4">Support Center</p>
          <h1 
            className="text-white text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Frequently Asked Questions
          </h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {FAQS.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-12 last:mb-0">
              <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
                <div className="text-[#e01c1c]">{group.icon}</div>
                <h2 className="text-white text-xl font-bold font-barlow tracking-wide uppercase">{group.category}</h2>
              </div>

              <div className="space-y-4">
                {group.items.map((item, itemIdx) => {
                  const id = `${group.category}-${itemIdx}`;
                  const isOpen = openIdx === id;
                  return (
                    <div 
                      key={id} 
                      className={`group border border-white/5 rounded-2xl transition-all duration-300 ${isOpen ? "bg-[#111] border-white/10 shadow-lg" : "hover:border-white/10"}`}
                    >
                      <button
                        className="w-full flex items-center justify-between p-6 text-left"
                        onClick={() => toggle(id)}
                      >
                        <span className={`font-semibold text-[15px] transition-colors ${isOpen ? "text-white" : "text-gray-300"}`}>
                          {item.q}
                        </span>
                        <ChevronDown className={`w-5 h-5 text-[#e01c1c] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      <div 
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"}`}
                      >
                        <div className="p-6 pt-0 text-gray-400 text-sm leading-relaxed">
                          {item.a}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          {/* Contact CTA */}
          <div className="mt-20 p-12 bg-gradient-to-r from-[#111] to-[#0d0d0d] rounded-3xl border border-white/5 text-center">
            <h3 className="text-white text-2xl font-bold mb-4 font-barlow">Still have questions?</h3>
            <p className="text-gray-400 mb-8">If you can&apos;t find what you&apos;re looking for, our team is always here to help.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/contact" className="px-8 py-4 bg-[#e01c1c] text-white font-bold rounded-[10px] text-xs uppercase tracking-widest hover:bg-[#cc0000] transition-all">Contact Us</a>
              <a href="https://wa.me/971549956577" className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl text-xs uppercase tracking-widest hover:bg-white/10 transition-all">Chat on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
