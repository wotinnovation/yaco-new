"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Lock, Eye, Database, Share2, ClipboardCheck, PhoneCall } from "lucide-react";

export default function PrivacyPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const sections = [
    {
      title: "Data Collection",
      icon: <Database className="w-5 h-5 text-[#e01c1c]" />,
      content: "We collect information you provide directly to us through our booking forms, contact forms, and direct communications. This includes your name, phone number, email address, vehicle model, and any specific service requirements."
    },
    {
      title: "How We Use Your Data",
      icon: <ClipboardCheck className="w-5 h-5 text-[#e01c1c]" />,
      content: "Your data is primarily used to manage your appointments, provide customer support, and personalize our services for your vehicle. We may also use your contact information to keep you informed about our latest products or service status."
    },
    {
      title: "Information Disclosure",
      icon: <Share2 className="w-5 h-5 text-[#e01c1c]" />,
      content: "YACO Automotive does not sell or lease your personal information to third parties. We only share data with service providers who assist in our operations, such as payment processors or logistics partners, and only as required by UAE law."
    },
    {
      title: "Data Security",
      icon: <Lock className="w-5 h-5 text-[#e01c1c]" />,
      content: "We implement rigorous security measures to protect your information and prevent unauthorized access or disclosure. Our digital architecture uses encrypted protocols for all customer data transmissions."
    },
    {
      title: "Your Privacy Rights",
      icon: <Eye className="w-5 h-5 text-[#e01c1c]" />,
      content: "You have the right to request access to the personal data we hold about you, to correct any inaccuracies, or to request deletion of your data from our systems, provided there are no legal requirements for its retention."
    },
    {
      title: "Contact Us Regarding Privacy",
      icon: <PhoneCall className="w-5 h-5 text-[#e01c1c]" />,
      content: "If you have any questions or concerns about our privacy practices, please reach out to us at contact@yaco.ae or through our official business phone +971 54 995 6577."
    }
  ];

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />

      {/* Header */}
      <section className="pt-40 pb-20 px-6 border-b border-white/5 bg-gradient-to-b from-[#111] to-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto text-center">
          <p className="text-[#e01c1c] text-sm font-bold tracking-[0.3em] uppercase mb-4">Confidentiality</p>
          <h1 
            className="text-white text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-6 font-barlow"
          >
            Privacy Policy
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Commitment to protecting your personal information and ensuring transparency in how we provide our services.</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {sections.map((section, idx) => (
              <div key={idx} className="group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-white/5 rounded-xl group-hover:bg-[#e01c1c]/10 transition-all">
                    {section.icon}
                  </div>
                  <h2 className="text-white text-xl font-bold font-barlow tracking-wide uppercase">{section.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-[#111] rounded-[40px] border border-white/5 text-center">
            <h3 className="text-white text-2xl font-bold mb-4 font-barlow">Acceptance of Policy</h3>
            <p className="text-gray-500 mb-0">
              By using our website and services, you signify your acceptance of this policy. We periodically review our privacy practices to ensure alignment with international standards and UAE regulations.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
