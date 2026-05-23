import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PRODUCTS, CATEGORIES } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Artisan Upholstery Services – YACO Automotive",
  description:
    "Interior Renaissance: From classic restorations to modern customizations, our upholstery studio delivers unmatched quality.",
};

const SERVICES = [
  {
    title: "Full Seat Restoration",
    desc: "Stripping worn materials to the foam and rebuilding with premium leather, vinyl, or specialized fabrics.",
    features: ["Complete foam repair", "Custom stitching designs", "Heating element integration", "Original pattern matching"],
    img: "/images/products/UPHOLSTERY/SEAT%20UP/IMG_2313.jpg",
  },
  {
    title: "Panel & Roof Lining",
    desc: "Revitalizing door panels, headliners, and pillars with matching or custom-contrast materials.",
    features: ["Sagging headliner fix", "Alcantara wrapping", "Pillar trim restoration", "Vibration dampening"],
    img: "/images/products/UPHOLSTERY/ROOF/civic-red-after.jpg",
  },
  {
    title: "Dash & Detail Wrap",
    desc: "Precision wrapping of dashboards, steering wheels, and center consoles for a cohesive luxury look.",
    features: ["Steering wheel hand-stitch", "Dashboard crack repair", "Armrest reupholstery", "Shift boot replacement"],
    img: "/images/products/UPHOLSTERY/DASH%20BOARD/DSC01785copy.jpg",
  },
];

const JOURNEY = [
  {
    stage: "Stage 1",
    title: "Extraction",
    desc: "Removal of all existing materials down to the structural frame.",
  },
  {
    stage: "Stage 2",
    title: "Structural Fix",
    desc: "Re-tensioning springs and injecting high-density orthopedic foam.",
  },
  {
    stage: "Stage 3",
    title: "Curation",
    desc: "Selection of hides or fabrics to match the original or custom spec.",
  },
  {
    stage: "Stage 4",
    title: "Calibration",
    desc: "Hand-fitting the new upholstery to ensure perfect ergonomics.",
  },
];

const BENCHMARKS = [
  { value: "45kg/m³", label: "Core Density", desc: "High-resilience foam prevents 'sinking' over time." },
  { value: "80kg+", label: "Tensile Force", desc: "Double-locked industrial stitching for seam security." },
  { value: "1000g/m²", label: "Breathability", desc: "Perforation patterns designed for active cooling." },
];

const VALUES = [
  {
    title: "Artisanal Stitching",
    desc: "Hand-crafted details using industrial-grade threads for durability and visual perfection.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
      </svg>
    ),
  },
  {
    title: "Bespoke Templates",
    desc: "We create custom patterns for every vehicle, ensuring a factory-perfect fit every time.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    title: "Full Restoration",
    desc: "Not just covers—we restore the comfort and structure of your vehicle interior.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
];

export default function UpholsteryPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <Image
          src="/images/service-grid/upholstry.jpg"
          alt="Upholstery Services Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-32 pb-20">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Artisan Restoration</p>
          <h1
            className="text-black text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.9] uppercase drop-shadow-sm mb-6"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            UPHOLSTERY SERVICES
          </h1>
          <p className="text-black/70 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            From classic restorations to modern customizations, our upholstery studio delivers unmatched quality.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      {(() => {
        const category = CATEGORIES.find(c => c.id === "upholstery");
        const catProducts = category
          ? category.products.map(slug => PRODUCTS.find(p => p.slug === slug)).filter(Boolean)
          : [];
        return (
          <section className="py-24 bg-gray-50 border-t border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Our Collection</p>
                <h2
                  className="text-black text-[clamp(2rem,4vw,3rem)] font-bold leading-tight"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  All Upholstery Services
                </h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {catProducts.map((product) => (
                  <Link
                    key={product!.slug}
                    href={`/products/${product!.slug}`}
                    className="group relative flex flex-col bg-white border border-black/5 rounded-2xl overflow-hidden hover:border-[#e01c1c]/40 hover:-translate-y-1 transition-all duration-500 shadow-md"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                      <Image
                        src={product!.image}
                        alt={product!.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-[#e01c1c] text-[10px] font-bold tracking-widest uppercase mb-2">{product!.style}</span>
                      <h3 className="text-black font-bold text-lg leading-snug mb-3">{product!.name}</h3>
                      <p className="text-black/60 text-sm leading-relaxed flex-1">{product!.description}</p>
                      <div className="mt-6 flex items-center gap-2 text-[#e01c1c] text-sm font-semibold">
                        View Details
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })()}

      {/* Services Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Interior Renaissance</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Complete Transformation
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {SERVICES.map((service, idx) => (
            <div
              key={service.title}
              className={`flex flex-col lg:flex-row gap-10 items-center ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative group border border-black/5 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent z-10" />
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-black text-3xl font-bold font-serif italic tracking-wide drop-shadow-sm">
                    {service.title}
                  </h3>
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 lg:px-8">
                <p className="text-black/80 text-lg leading-relaxed mb-8">{service.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-[#e01c1c] flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-black/70 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Restorative Journey / Process */}
      <section className="bg-gray-50 py-24 border-y border-black/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              The Restorative Journey
            </h2>
            <div className="w-16 h-1 bg-[#e01c1c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {JOURNEY.map((step, idx) => (
              <div key={step.stage} className="bg-white p-8 rounded-xl border border-black/5 group hover:border-[#e01c1c]/40 hover:bg-red-50/30 transition-all duration-300 relative overflow-hidden shadow-sm">
                <div className="absolute -top-6 -right-6 text-[100px] font-black text-black/5 group-hover:text-[#e01c1c]/5 transition-colors duration-300 pointer-events-none select-none">
                  0{idx + 1}
                </div>
                <h3 className="text-black font-bold text-xl mb-4 flex items-center gap-3">
                  <span className="text-[#e01c1c] text-sm">/ {step.stage}</span>
                </h3>
                <h4 className="text-black text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-black/70 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Benchmarks */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4 text-center">Quality Standards</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 text-center leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Engineered Comfort
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-12 gap-y-12">
          {BENCHMARKS.map((bench) => (
            <div key={bench.label} className="text-center max-w-[250px]">
              <div
                className="text-black text-4xl md:text-5xl font-extrabold mb-3 group"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
              >
                {bench.value}
              </div>
              <h3 className="text-[#e01c1c] text-sm font-bold uppercase tracking-wider mb-2">{bench.label}</h3>
              <p className="text-black/60 text-xs md:text-sm leading-relaxed">{bench.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Masterful Detailing */}
      <section className="bg-white py-24 relative overflow-hidden border-y border-black/5">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 skew-x-12 translate-x-32 hidden lg:block pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <h2
                className="text-black text-[clamp(2.5rem,4vw,3.5rem)] font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Masterful<br />
                <span className="text-[#e01c1c]">Detailing</span>
              </h2>
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {VALUES.map((item) => (
                <div key={item.title} className="flex flex-col">
                  <div className="w-12 h-12 bg-gray-50 border border-black/5 rounded-full flex items-center justify-center text-[#e01c1c] mb-6 shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-black font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-black/70 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      <Footer />
    </main>
  );
}
