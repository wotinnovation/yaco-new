"use client";

import { useEffect, useRef, useState, use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PRODUCTS } from "@/lib/products-data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { Phone, MessageCircle, ChevronRight, Check, ArrowLeft, Shield, Clock, Star } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = PRODUCTS.find((p) => p.slug === slug);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeImgIdx, setActiveImgIdx] = useState(0);

  if (!product) return notFound();

  // Dynamic gallery based on category
  const getGalleryImages = () => {
    if (product.gallery && product.gallery.length > 0) {
      return product.gallery;
    }
    const base = [product.image];
    const categoryPrefixes: Record<string, string> = {
      "seat-covers": "seat",
      "floor-mats": "mat",
      "deep-cleaning": "clean",
      "upholstery": "up"
    };
    
    const prefix = categoryPrefixes[product.category] || "seat";
    // Add 3 random-ish but specific relative images from our seat directory
    return [
      ...base,
      `/images/seat/${prefix}1.jpg`,
      `/images/seat/${prefix}2.jpg`,
      `/images/seat/${prefix}3.jpg`
    ];
  };

  const galleryImages = getGalleryImages();

  // Animations refs
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!product) return;

    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-content > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });

      // Image entrance
      gsap.from(".product-image-container", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
      });

      // Scroll animations
      gsap.from(".feature-item", {
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
      });

      gsap.from(".spec-item", {
        scrollTrigger: {
          trigger: ".specs-grid",
          start: "top 80%",
        },
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    });

    return () => ctx.revert();
  }, [product]);

  if (!product) {
    notFound();
  }

  const whatsappUrl = `https://wa.me/971549956577?text=Hi YACO, I'm interested in the ${product.name}. Can you provide more details?`;
  const phoneUrl = "tel:+971549956577";

  return (
    <main className="bg-white min-h-screen text-black">
      <Navbar onBookingClick={() => setIsBookingOpen(true)} />

      {/* Back to Home Button */}
      <div className="pt-36 pb-4 px-6 max-w-7xl mx-auto">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-sm font-bold text-black/50 hover:text-[#e01c1c] transition-all group"
        >
          <div className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center group-hover:border-[#e01c1c] group-hover:bg-[#e01c1c]/10 transition-all">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="uppercase tracking-widest">Back to Home</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-12 lg:py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="hero-content order-2 lg:order-1">
            <span className="inline-block px-3 py-1 bg-[#e01c1c]/10 border border-[#e01c1c]/20 text-[#e01c1c] text-xs font-bold tracking-widest uppercase rounded-full mb-6 relative">
              {product.style}
            </span>
            <h1 
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] mb-8 uppercase text-black"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              {product.name}
            </h1>
            <p className="text-black/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
              {product.description}
            </p>

            {/* Quick Action Buttons - Hidden on mobile as we have floating bar */}
            <div className="hidden lg:flex flex-wrap gap-4 mb-12">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-8 py-4 rounded-xl font-bold transition-all hover:scale-105 shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Enquiry
              </a>
              <a 
                href={phoneUrl}
                className="flex items-center gap-2 bg-gray-50 hover:bg-gray-100 border border-black/10 text-black px-8 py-4 rounded-xl font-bold transition-all shadow-sm"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-black/5">
               <div className="flex flex-col gap-2">
                 <Shield className="w-6 h-6 text-[#e01c1c]" />
                 <span className="text-xs font-bold uppercase tracking-tight text-black/50">Premium Quality</span>
               </div>
               <div className="flex flex-col gap-2">
                 <Clock className="w-6 h-6 text-[#e01c1c]" />
                 <span className="text-xs font-bold uppercase tracking-tight text-black/50">Expert Install</span>
               </div>
               <div className="flex flex-col gap-2">
                 <Star className="w-6 h-6 text-[#e01c1c]" />
                 <span className="text-xs font-bold uppercase tracking-tight text-black/50">UAE Standards</span>
               </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="order-1 lg:order-2">
            <div className="product-image-container relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-black/5 shadow-xl bg-black mb-6">
              <Image 
                src={galleryImages[activeImgIdx]}
                alt={product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain transition-all duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, i) => (
                <div 
                  key={i} 
                  onClick={() => setActiveImgIdx(i)}
                  className={`aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all duration-300 bg-gray-100 relative group ${
                    activeImgIdx === i ? "border-[#e01c1c] shadow-md scale-[0.98]" : "border-black/5 hover:border-black/20"
                  }`}
                >
                  <Image 
                    src={img}
                    alt={`${product.name} view ${i + 1}`}
                    fill
                    sizes="(max-width: 1024px) 25vw, 12vw"
                    className={`object-contain transition-opacity duration-300 ${
                      activeImgIdx === i ? "opacity-100" : "opacity-60 group-hover:opacity-100"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Detailed Info */}
      <section className="py-24 bg-gray-50 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Long Description */}
          <div className="lg:col-span-7">
            <h2 
              className="text-4xl text-black font-bold mb-8 uppercase" 
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              The Science of <span className="text-[#e01c1c]">Excellence</span>
            </h2>
            <div className="prose max-w-none">
              <p className="text-black/70 text-lg leading-relaxed mb-8">
                {product.longDescription}
              </p>
            </div>

            <div className="features-grid grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
              {product.features.map((feature, i) => (
                <div key={i} className="feature-item flex items-center gap-3 bg-white p-4 rounded-xl border border-black/5 shadow-sm hover:border-[#e01c1c]/20 transition-colors">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e01c1c]/10 flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#e01c1c]" />
                  </div>
                  <span className="text-sm font-medium text-black/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Specifications */}
          <div className="lg:col-span-5">
            <div className="bg-white p-8 lg:p-10 rounded-[2rem] border border-black/10 shadow-sm sticky top-32">
              <h3 className="text-2xl text-black font-bold mb-8 uppercase tracking-tight">Technical Standards</h3>
              <div className="specs-grid space-y-6">
                {product.specifications.map((spec, i) => (
                  <div key={i} className="spec-item flex justify-between items-center py-4 border-b border-black/5 last:border-0">
                    <span className="text-black/50 text-sm font-bold uppercase tracking-wider">{spec.label}</span>
                    <span className="text-black text-sm font-semibold">{spec.value}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => setIsBookingOpen(true)}
                className="w-full mt-10 bg-[#e01c1c] hover:bg-[#cc0000] text-white py-4 rounded-[10px] font-bold transition-all hover:shadow-lg hover:shadow-red-900/20"
              >
                Book Your Appointment
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Floating Mobile Bar */}
      <div className="fixed bottom-6 left-6 right-6 z-50 lg:hidden pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
           <a 
            href={whatsappUrl}
            className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-4 rounded-2xl font-bold shadow-xl shadow-black/20"
           >
             <MessageCircle className="w-5 h-5" />
             WhatsApp
           </a>
           <a 
            href={phoneUrl}
            className="w-16 flex items-center justify-center bg-gray-900 text-white py-4 rounded-2xl font-bold shadow-xl shadow-black/20"
           >
             <Phone className="w-5 h-5" />
           </a>
        </div>
      </div>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
