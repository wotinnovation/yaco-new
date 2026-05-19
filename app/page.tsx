"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import WhyChoose from "@/components/WhyChoose";
import BusSeatInteriors from "@/components/BusSeatInteriors";
import FAQ from "@/components/faq";
import ProductsComponent from "@/components/ProductsComponent";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import Instagram from "@/components/Instagram";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="bg-white min-h-screen">
      <Navbar onBookingClick={() => setIsBookingOpen(true)} />
      <Hero onBookingClick={() => setIsBookingOpen(true)} />
      <ServicesGrid />
      <ProductsComponent />
      <BusSeatInteriors />
      <WhyChoose />
      <FAQ />
      <Instagram />
      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}