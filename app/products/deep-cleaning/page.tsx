import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pristine Deep Cleaning – Coming Soon | YACO Automotive",
  description:
    "Clinical level interior detailing and restorative cleaning services. Coming soon to YACO Automotive.",
};

export default function DeepCleaningPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col">
      <Navbar />

      <section className="relative flex-1 flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Background */}
        <Image
          src="/images/service-grid/CLEANING.jpg"
          alt="Deep Cleaning Background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
          <div className="inline-block px-4 py-1.5 bg-[#e01c1c]/10 border border-[#e01c1c]/20 rounded-full mb-8">
            <p className="text-[#e01c1c] text-xs font-bold tracking-[0.2em] uppercase">Service Under Development</p>
          </div>
          
          <h1
            className="text-black text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[0.9] uppercase mb-8"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            COMING<br />
            <span className="text-[#e01c1c]">SOON</span>
          </h1>
          
          <div className="w-24 h-1 bg-black/10 mx-auto mb-10" />
          
          <h2 className="text-black text-2xl md:text-3xl font-bold mb-6 uppercase tracking-wider" style={{ fontFamily: "var(--font-barlow)" }}>
            Advanced Interior Deep Cleaning
          </h2>
          
          <p className="text-black/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
            We are refining our clinical approach to interior detailing. Our medical-grade steam extraction and ozone molecular decontamination services will be launching shortly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="/contact"
              className="bg-black text-white text-sm font-bold px-10 py-4 uppercase tracking-widest hover:bg-[#e01c1c] transition-all duration-300 rounded-[10px]"
            >
              Get Notified
            </a>
            <a 
              href="/products/seat-covers"
              className="text-black/40 hover:text-black text-sm font-bold uppercase tracking-widest transition-colors duration-300"
            >
              View Other Collections
            </a>
          </div>
        </div>

        {/* Floating elements for aesthetics */}
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-black/5 rounded-full animate-pulse hidden lg:block" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-[#e01c1c]/5 rounded-full animate-pulse delay-700 hidden lg:block" />
      </section>

      <Footer />
    </main>
  );
}
