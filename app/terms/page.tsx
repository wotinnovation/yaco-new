"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { ScrollText, Gavel, ShieldCheck, CreditCard, AlertTriangle, Scale } from "lucide-react";

export default function TermsPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const sections = [
    {
      title: "1. Service Agreement",
      icon: <ScrollText className="w-5 h-5 text-[#e01c1c]" />,
      content: "By accessing or using YACO Automotive services, you agree to be bound by these terms. YACO provides premium automotive accessories including custom seat covers, floor mats, and interior upholstery. All services are subject to vehicle suitability and material availability."
    },
    {
      title: "2. Booking & Cancellation",
      icon: <Gavel className="w-5 h-5 text-[#e01c1c]" />,
      content: "Appointments must be booked at least 24 hours in advance. Cancellations made less than 12 hours before the scheduled time may be subject to a rescheduling fee. YACO reserves the right to reschedule appointments due to unforeseen technical or logistical constraints."
    },
    {
      title: "3. Pricing & Payment",
      icon: <CreditCard className="w-5 h-5 text-[#e01c1c]" />,
      content: "All prices are quoted in UAE Dirhams (AED). A deposit may be required for bespoke or specialized material orders. Final payment is due upon completion of the service and inspection by the client."
    },
    {
      title: "4. Quality Guarantee & Warranty",
      icon: <ShieldCheck className="w-5 h-5 text-[#e01c1c]" />,
      content: "We provide a 1-year warranty on manufacturing defects for our custom interior products. This warranty does not cover normal wear and tear, intentional damage, or improper cleaning methods by the client."
    },
    {
      title: "5. Limitation of Liability",
      icon: <AlertTriangle className="w-5 h-5 text-[#e01c1c]" />,
      content: "YACO Automotive is not liable for existing mechanical or electronic issues of the vehicle. Our services focus solely on aesthetic and comfort enhancements. We ensure the highest level of care, but we are not responsible for items left inside the vehicle during service."
    },
    {
      title: "6. Governing Law",
      icon: <Scale className="w-5 h-5 text-[#e01c1c]" />,
      content: "These terms are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes shall be subject to the exclusive jurisdiction of the courts of Dubai."
    }
  ];

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#e01c1c] text-sm font-bold tracking-[0.3em] uppercase mb-4">Legal Framework</p>
          <h1 
            className="text-white text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-6 font-barlow"
          >
            Terms & Conditions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Last updated: April 2026. Please read these terms carefully before engaging our services.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {sections.map((section, idx) => (
            <div key={idx} className="group">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-[#e01c1c]/10 transition-colors">
                  {section.icon}
                </div>
                <h2 className="text-white text-2xl font-bold font-barlow">{section.title}</h2>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed pl-4 border-l border-[#e01c1c]/20">
                {section.content}
              </p>
            </div>
          ))}

          <div className="mt-24 p-10 bg-[#111] rounded-3xl border border-white/5 border-dashed">
            <p className="text-gray-500 text-sm text-center italic">
              YACO Automotive reserves the right to update these terms at any time. Continued use of our site or services constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
