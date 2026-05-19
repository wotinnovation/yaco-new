import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { PRODUCTS, CATEGORIES } from "@/lib/products-data";

export const metadata: Metadata = {
  title: "Precision Tailored Seat Covers – YACO Automotive",
  description:
    "We source only the finest automotive-grade textiles, engineered for both indulgence and endurance. Genuine Leather, Nappa Synthetic, and Premium Fabrics.",
};

const MATERIALS = [
  {
    title: "Genuine Leather",
    desc: "Hand-selected full-grain hides for ultimate luxury and breathability.",
    features: ["Long-lasting", "Luxury feel", "Natural aging", "High durability"],
    img: "/images/products/SEAT%20COVER/YACO%20PRIME/DSC00037.JPG",
  },
  {
    title: "Nappa Synthetic",
    desc: "Superior PU leather offering a smooth finish and excellent wear resistance.",
    features: ["Water-resistant", "Eco-friendly", "UV protection", "Low maintenance"],
    img: "/images/products/SEAT%20COVER/YACO%20PLUS/_MG_6126.JPG",
  },
  {
    title: "Premium Fabric",
    desc: "Advanced technical fabrics engineered for comfort and daily intensity.",
    features: ["Breathable", "Kid-friendly", "Stain-resistant", "Cool styling"],
    img: "/images/products/SEAT%20COVER/SEATX%20STANDARD%20COLLECTION/CLOTH%20EM/DSC01804.JPG",
  },
];

const FIT_PROCESS = [
  {
    step: "01",
    title: "3D Laser Scan",
    desc: "We capture every curve of your vehicle's seats with 0.1mm precision.",
  },
  {
    step: "02",
    title: "Digital CAD",
    desc: "Custom patterns are generated to ensure active airbag compatibility.",
  },
  {
    step: "03",
    title: "Precision Cut",
    desc: "Automated CNC cutters ensure edges that never fray or deviate.",
  },
  {
    step: "04",
    title: "Master Wrap",
    desc: "Hand-stretched and anchored for a skin-tight, factory-fresh finish.",
  },
];

const BENCHMARKS = [
  { value: "2500N+", label: "Tensile Strength", desc: "High-tenacity bonded threads" },
  { value: "Grade 7+", label: "UV Resistance", desc: "Maximum protection from UAE sun" },
  { value: "FMVSS 302", label: "Flammability", desc: "International safety certified" },
  { value: "100k Cycles", label: "Abrasion", desc: "Martindale heavy-duty rating" },
];

const CRAFTSMANSHIP = [
  {
    title: "Precision Fit",
    desc: "Digital laser measurements ensure every cover fits like an original skin.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
      </svg>
    ),
  },
  {
    title: "Fire Lamination",
    desc: "Our signature bonding technology prevents peeling and ensures a flawless finish.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
      </svg>
    ),
  },
  {
    title: "Bespoke Design",
    desc: "Choose from hundreds of stitching patterns, piping colors, and textures.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
];

export default function SeatCoversPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <Image
          src="/images/service-grid/seat-cover.jpg"
          alt="Seat Covers Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center pt-32 pb-20">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Precision Tailored</p>
          <h1
            className="text-black text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] uppercase drop-shadow-sm mb-6"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            SEAT COVERS
          </h1>
          <p className="text-black/70 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Ultimate luxury and protection for your vehicle&apos;s interior, crafted with uncompromising precision.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      {(() => {
        const category = CATEGORIES.find(c => c.id === "seat-covers");
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
                  Bespoke Seat Cover Series
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
                              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
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

      {/* Materials Section */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Masterpiece Materials</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Engineered for Indulgence
          </h2>
          <p className="text-black/70 text-base max-w-2xl mx-auto leading-relaxed">
            We source only the finest automotive-grade textiles, engineered for both indulgence and endurance.
          </p>
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
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
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

      {/* The Alchemy of Fit */}
      <section className="bg-gray-50 py-24 border-y border-black/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              The Alchemy of Fit
            </h2>
            <div className="w-16 h-1 bg-[#e01c1c] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FIT_PROCESS.map((step) => (
              <div key={step.step} className="bg-white p-8 rounded-xl border border-black/5 group hover:border-[#e01c1c]/40 hover:bg-red-50/30 transition-all duration-300 relative overflow-hidden shadow-sm">
                <div className="absolute -top-6 -right-6 text-[100px] font-black text-black/5 group-hover:text-[#e01c1c]/5 transition-colors duration-300 pointer-events-none select-none">
                  {step.step}
                </div>
                <h3 className="text-black font-bold text-xl mb-4 flex items-center gap-3">
                  <span className="text-[#e01c1c] text-sm">/ {step.step}</span> {step.title}
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
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4 text-center">Certified Excellence</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 text-center leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Technical Benchmarks
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

      {/* Craftsmanship */}
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
                Craftsmanship<br />
                <span className="text-[#e01c1c]">Without<br />Compromise</span>
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
