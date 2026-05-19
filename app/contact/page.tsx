"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <main className="bg-[#0a0a0a] min-h-screen">
      <Navbar onBookingClick={() => setIsBookingModalOpen(true)} />

      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden pt-20">
        <Image
          src="/images/b2banner.jpg"
          alt="Contact YACO"
          fill  
          priority
          sizes="100vw"
          className="object-cover brightness-[0.2]"
        />
        <div className="relative z-10 text-center px-6">
          <p className="text-[#e01c1c] text-sm font-bold tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h1 
            className="text-white text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-tight uppercase"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Contact Information
          </h1>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Details */} 
            <div className="space-y-12">
              <div>
                <p className="section-label mb-5 font-bold">REACH US DIRECTLY</p>
                <h2 className="text-white text-4xl font-bold mb-8 font-barlow">Let&apos;s Discuss Your Vision</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                  Visit our boutique studio or reach out through any of our channels. Our specialists are ready to help you craft the perfect interior for your vehicle.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#e01c1c]/30 transition-all group">
                  <div className="w-12 h-12 bg-[#e01c1c]/10 text-[#e01c1c] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Phone</h3>
                  <p className="text-gray-400 text-sm mb-4">+971 54 995 6577</p>
                  <a href="tel:+971549956577" className="text-[#e01c1c] text-xs font-bold uppercase tracking-widest">Call Now</a>
                </div>

                <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#e01c1c]/30 transition-all group">
                  <div className="w-12 h-12 bg-[#e01c1c]/10 text-[#e01c1c] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold mb-2">WhatsApp</h3>
                  <p className="text-gray-400 text-sm mb-4">Chat with our team</p>
                  <a href="https://wa.me/971549956577" target="_blank" className="text-[#e01c1c] text-xs font-bold uppercase tracking-widest">Open Chat</a>
                </div>

                <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#e01c1c]/30 transition-all group">
                  <div className="w-12 h-12 bg-[#e01c1c]/10 text-[#e01c1c] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Location</h3>
                  <p className="text-gray-400 text-sm mb-4">Dubai, United Arab Emirates</p>
                  <span className="text-[#e01c1c] text-xs font-bold uppercase tracking-widest cursor-pointer">View Map</span>
                </div>

                <div className="bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-[#e01c1c]/30 transition-all group">
                  <div className="w-12 h-12 bg-[#e01c1c]/10 text-[#e01c1c] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="text-white font-bold mb-2">Business Hours</h3>
                  <p className="text-gray-400 text-sm mb-1">Mon - Sat: 9:00 AM - 9:00 PM</p>
                  <p className="text-gray-400 text-sm">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#111] border border-white/5 rounded-[40px] p-8 md:p-12 shadow-2xl">
              <h3 className="text-white text-2xl font-bold mb-8 font-barlow">Send Us a Message</h3>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message sent!"); }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Name</label>
                    <input type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#e01c1c] outline-none transition-all" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Email</label>
                    <input type="email" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#e01c1c] outline-none transition-all" placeholder="Enter your email" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Subject</label>
                  <input type="text" required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#e01c1c] outline-none transition-all" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-2">Message</label>
                  <textarea rows={6} required className="w-full bg-black/40 border border-white/10 rounded-xl px-5 py-4 text-white text-sm focus:border-[#e01c1c] outline-none transition-all resize-none" placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="w-full py-5 bg-[#e01c1c] text-white font-bold rounded-[10px] text-sm uppercase tracking-widest hover:bg-[#cc0000] hover:shadow-xl transition-all flex items-center justify-center gap-3">
                  Send Message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </main>
  );
}
