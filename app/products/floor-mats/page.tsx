import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PRODUCTS, CATEGORIES } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Perfect Floor Armor – Floor Mats by YACO Automotive",
  description:
    "Our floor mats combine ultra-modern aesthetics with heavy-duty capability. All-Weather Armor, Executive Carpet, and 3D Elite Liners for maximum protection.",
};

const MATERIALS = [
  {
    title: "All-Weather Armor",
    desc: "Ultra-durable TPE construction designed to trap mud, sand, and liquid spills indefinitely.",
    features: ["100% Waterproof", "Deep-channel grooves", "Odorless material", "High-pressure washable"],
    img: "/images/products/7D%20FLOOR%20MATS/0002.jpg",
  },
  {
    title: "Executive Carpet",
    desc: "High-density plush nylon fibers providing a soft, luxurious feel with maximum durability.",
    features: ["Heel-pad reinforcement", "Noise reduction", "Custom color matching", "Anti-slip foundation"],
    img: "/images/products/2D%20MAT%20OEM%20CARPET/beige-p-01.jpg",
  },
  {
    title: "3D Elite Liners",
    desc: "Digitally scanned for edge-to-edge coverage, ensuring no part of your carpet is exposed.",
    features: ["Raised-wall containment", "Seamless integration", "Premium leatherette look", "Perfect locking fit"],
    img: "/images/products/7D%20FLOOR%20MATS/IMG_2291.JPG",
  },
];

const LAYERS = [
  {
    layer: "01",
    title: "TPE Armor Layer",
    desc: "Thermoplastic Elastomer provides a non-slip, high-friction surface that resists heat up to 80°C.",
  },
  {
    layer: "02",
    title: "XPE Cushion Core",
    desc: "Cross-linked Polyethylene reduces road noise and provides a comfortable, supportive feel.",
  },
  {
    layer: "03",
    title: "MAX-FLO Anti-Skid",
    desc: "Patented 'claw' backing ensures the mat remains securely anchored without damaging original carpet.",
  },
];

const BENCHMARKS = [
  { value: "3D", label: "Full Floor Scan Accuracy", desc: "Perfect factory fitment" },
  { value: "0.05mm", label: "Tolerance Level", desc: "During digital cutting process" },
  { value: "80°C", label: "Heat Resistance", desc: "Withstands extreme UAE summers" },
  { value: "100%", label: "Waterproof", desc: "Zero liquid penetration" },
];

const CRAFTSMANSHIP = [
  {
    title: "Total Protection",
    desc: "Guard against UAE sand, mud, and liquid accidents with ease.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Digital Precision",
    desc: "Every mat is laser-cut to the exact millimeter of your car floor.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    title: "Safety Lock",
    desc: "Advanced anti-skid backing ensures the mat never moves during driving.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

export default function FloorMatsPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <Image
          src="/images/service-grid/floormat.jpg"
          alt="Floor Mats Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-32 pb-20">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Perfect Floor Armor</p>
          <h1
            className="text-black text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] uppercase drop-shadow-sm mb-6"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            FLOOR MATS
          </h1>
          <p className="text-black/70 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Revolutionary protection that combines ultra-modern aesthetics with heavy-duty capability.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      {(() => {
        const category = CATEGORIES.find(c => c.id === "floor-mats");
        if (!category) return null;

        return (
          <section className="py-24 bg-gray-50 border-t border-black/5">
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="text-center mb-16">
                <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Our Collection</p>
                <h2
                  className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold leading-tight"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Premium Floor Armor Series
                </h2>
              </div>

              {category.subCategories?.map((sub) => (
                <div key={sub.id} className="mb-20 last:mb-0">
                  <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-black/10 pb-6">
                    <div className="max-w-2xl">
                      <h3 className="text-black text-3xl font-bold mb-2 uppercase" style={{ fontFamily: "var(--font-bebas)" }}>{sub.name}</h3>
                      <p className="text-black/60 text-base">{sub.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
                    {sub.products.map(slug => {
                      const product = PRODUCTS.find(p => p.slug === slug);
                      if (!product) return null;
                      return (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="group relative flex flex-col bg-white border border-black/5 rounded-2xl overflow-hidden hover:border-[#e01c1c]/40 hover:-translate-y-1 transition-all duration-500 shadow-md"
                        >
                          <div className="relative w-full aspect-[4/3] overflow-hidden bg-black">
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              sizes="(max-width: 768px) 50vw, 33vw"
                              className="object-contain opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <span className="text-[#e01c1c] text-[10px] font-bold tracking-widest uppercase mb-2">{product.style}</span>
                            <h4 className="text-black font-bold text-lg leading-snug mb-3">{product.name}</h4>
                            <p className="text-black/60 text-sm leading-relaxed flex-1">{product.description}</p>
                            <div className="mt-6 flex items-center gap-2 text-[#e01c1c] text-sm font-semibold">
                              View Details
                              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        );
      })()}

      {/* Categories Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Designed to Protect</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Aesthetics Meet Capability
          </h2>
        </div>

        <div className="space-y-16 lg:space-y-24">
          {MATERIALS.map((mat, idx) => (
            <div
              key={mat.title}
              className={`flex flex-col lg:flex-row gap-10 items-center ${
                idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden relative group border border-black/5 shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent z-10" />
                <Image
                  src={mat.img}
                  alt={mat.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-black text-3xl font-bold font-serif italic tracking-wide drop-shadow-sm">
                    {mat.title}
                  </h3>
                </div>
              </div>

              {/* Text */}
              <div className="w-full lg:w-1/2 lg:px-8">
                <p className="text-black/80 text-lg leading-relaxed mb-8">{mat.desc}</p>
                <div className="grid grid-cols-2 gap-4">
                  {mat.features.map((feature) => (
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

      {/* Layer Architecture */}
      <section className="bg-gray-50 py-24 border-y border-black/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Preservation Science
            </h2>
            <p className="text-black/70 text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Beyond the surface, our mats utilize a sophisticated multi-layer architecture engineered for the extreme Middle Eastern environment.
            </p>
            <div className="w-16 h-1 bg-[#e01c1c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LAYERS.map((step) => (
              <div key={step.layer} className="bg-white p-8 rounded-xl border border-black/5 group hover:border-[#e01c1c]/40 hover:bg-red-50/30 transition-all duration-300 relative overflow-hidden shadow-sm">
                <div className="absolute -top-6 -right-6 text-[100px] font-black text-black/5 group-hover:text-[#e01c1c]/5 transition-colors duration-300 pointer-events-none select-none">
                  {step.layer}
                </div>
                <h3 className="text-black font-bold text-xl mb-4 flex items-center gap-3">
                  <span className="text-[#e01c1c] text-sm">/ LAYER</span> {step.title}
                </h3>
                <p className="text-black/70 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Benchmarks */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4 text-center">3D Scanning Technology</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 text-center leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Digital Precision
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {BENCHMARKS.map((bench) => (
            <div key={bench.label} className="text-center">
              <div
                className="text-black text-4xl md:text-5xl font-extrabold mb-3 group"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
              >
                {bench.value}
              </div>
              <h3 className="text-[#e01c1c] text-sm font-bold uppercase tracking-wider mb-2">{bench.label}</h3>
              <p className="text-black/60 text-xs md:text-sm leading-relaxed max-w-[200px] mx-auto">{bench.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Unyielding Durability */}
      <section className="bg-white py-24 border-y border-black/5 relative overflow-hidden">
        {/* Abstract design elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 skew-x-12 translate-x-32 hidden lg:block pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/3">
              <h2
                className="text-black text-[clamp(2.5rem,4vw,3.5rem)] font-bold mb-6 leading-tight"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                Unyielding<br />
                <span className="text-[#e01c1c]">Durability</span>
              </h2>
            </div>
            
            <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {CRAFTSMANSHIP.map((item) => (
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
