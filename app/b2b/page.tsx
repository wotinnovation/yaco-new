import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Global B2B Solutions – YACO Automotive",
  description:
    "We provide the backbone for your automotive accessory business with world-class infrastructure. Industrial strength manufacturing with 350+ daily output.",
};

const STATS = [
  { number: "350+", label: "Daily Output" },
  { number: "8+", label: "Global Markets" },
  { number: "60K", label: "Sq Ft Facility" },
  { number: "10+", label: "Years of Trust" },
];

const DIFFERENTIATORS = [
  {
    title: "Large-Scale Manufacturing",
    desc: "60,000 sq ft facility with 350+ daily production capacity for high-volume orders.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
  },
  {
    title: "Precision Turnaround",
    desc: "Advanced computerized Gerber Technology and laser cutting ensure rapid, flawless delivery.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" /></svg>
    ),
  },
  {
    title: "Certified Quality",
    desc: "ISO-compliant processes and rigorous QA protocols for consistent, premium output.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
    ),
  },
  {
    title: "Scalable Pricing",
    desc: "Tiered wholesale pricing models designed to boost your margins and competitiveness.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
  },
  {
    title: "Global Distribution",
    desc: "Seamless logistics serving 8+ countries across the Middle East, Africa, and beyond.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>
    ),
  },
  {
    title: "Partner Success",
    desc: "Dedicated account management providing technical and marketing support at every stage.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
  },
];

const PROGRAMS = [
  {
    title: "OEM Partnerships",
    desc: "Custom-fit accessories for vehicle manufacturers.",
    features: ["Exclusive Design Rights", "Bulk Production Scaling", "API Quality Integration", "JIT Supply Chain Management"],
    img: "/images/b2b/oem.jpg",
  },
  {
    title: "Dealership Programs",
    desc: "Premium accessory packages for dealers.",
    features: ["Tailored Brand Alignment", "On-site Technical Training", "Sales Support Materials", "Inventory Optimization"],
    img: "/images/b2b/dealership.jpg",
  },
  {
    title: "Fleet Solutions",
    desc: "Durable interiors for commercial fleets.",
    features: ["High-Durability Specs", "Bulk Maintenance Plans", "Standardized Fleet Look", "Rapid Deployment Service"],
    img: "/images/b2b/fleet.jpg",
  },
  {
    title: "Distribution Network",
    desc: "Join our certified global channel partners.",
    features: ["Exclusive Territory Rights", "Marketing Co-op Funds", "Stock Rotation Programs", "Quarterly Business Reviews"],
    img: "/images/b2b/destribution.jpg",
  },
];

const COLLABORATION = [
  {
    step: "01",
    title: "Consultation",
    desc: "Aligning our manufacturing capabilities with your business goals.",
  },
  {
    step: "02",
    title: "Design & Prototype",
    desc: "Rapid creation of custom specifications and physical samples.",
  },
  {
    step: "03",
    title: "Scale Production",
    desc: "Leveraging our 60,000 sq ft facility for high-volume output.",
  },
  {
    step: "04",
    title: "Global Delivery",
    desc: "Real-time tracking and logistics management to your doorstep.",
  },
];

export default function B2BPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="relative min-h-[65vh] flex items-center overflow-hidden pt-20">
        {/* Background */}
        <Image
          src="/images/b2banner.jpg"
          alt="Global B2B Solutions Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 pt-32 pb-20">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Global B2B Solutions</p>
          <h1
            className="text-black text-[clamp(3.5rem,8vw,7rem)] font-bold leading-[0.9] uppercase drop-shadow-sm mb-6"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            INDUSTRIAL<br />STRENGTH
          </h1>
          <p className="text-black/70 text-lg sm:text-xl mt-6 max-w-xl leading-relaxed">
            We provide the backbone for your automotive accessory business with world-class infrastructure and scale.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 border-y border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="font-extrabold text-5xl md:text-6xl mb-2 text-black"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
              >
                {s.number}
              </div>
              <p className="text-black/60 text-sm font-bold tracking-widest uppercase uppercase">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Differentiators */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">World-Class Infrastructure</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Manufacturing Differentiators
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.title}
              className="bg-white border border-black/5 rounded-xl p-8 hover:border-[#e01c1c]/30 hover:bg-gray-50 transition-all duration-300 group shadow-sm shadow-black/5"
            >
              <div className="w-14 h-14 rounded-xl bg-[#e01c1c]/10 border border-[#e01c1c]/20 flex items-center justify-center text-[#e01c1c] mb-6 group-hover:bg-[#e01c1c] group-hover:text-white transition-all duration-300">
                {diff.icon}
              </div>
              <h3 className="text-black text-xl font-bold mb-3">{diff.title}</h3>
              <p className="text-black/70 text-sm leading-relaxed">{diff.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Targeted Programs */}
      <section className="bg-gray-50 py-24 border-y border-black/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Targeted Programs
            </h2>
            <p className="text-black/70 text-base max-w-2xl mx-auto leading-relaxed mb-8">
              Strategic solutions designed specifically for your business model.
            </p>
            <div className="w-16 h-1 bg-[#e01c1c] mx-auto" />
          </div>

          <div className="space-y-16">
            {PROGRAMS.map((prog, idx) => (
              <div
                key={prog.title}
                className={`flex flex-col lg:flex-row gap-10 items-center ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 aspect-[16/9] rounded-2xl overflow-hidden relative group shadow-md border border-black/5">
                  <div className="absolute inset-0 bg-gradient-to-t from-white/70 to-transparent z-10 pointer-events-none" />
                  <Image
                    src={prog.img}
                    alt={prog.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <h3 className="text-black text-3xl font-bold font-serif italic tracking-wide">
                      {prog.title}
                    </h3>
                  </div>
                </div>

                {/* Text */}
                <div className="w-full lg:w-1/2 lg:px-8">
                  <p className="text-black/80 text-lg leading-relaxed mb-8">{prog.desc}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {prog.features.map((feature) => (
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
        </div>
      </section>

      {/* Streamlined Collaboration */}
      <section className="relative py-24 overflow-hidden border-y border-black/5">
        <Image
          src="/images/parallex.jpg"
          alt="Parallax Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-white/90" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Onboarding Process</p>
            <h2
              className="text-black text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-6 leading-tight"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Streamlined Collaboration
            </h2>
            <p className="text-black/70 text-base max-w-2xl mx-auto leading-relaxed">
              We’ve perfected our partnership onboarding process to get your orders moving faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {COLLABORATION.map((step) => (
              <div key={step.step} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl border border-black/10 relative overflow-hidden group hover:border-[#e01c1c]/40 transition-all duration-300 shadow-sm">
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-200 group-hover:bg-[#e01c1c] transition-colors duration-300" />
                <div className="absolute -top-4 -right-4 text-[80px] font-black text-black/5 group-hover:text-[#e01c1c]/10 transition-colors duration-300 pointer-events-none select-none">
                  {step.step}
                </div>
                <h3 className="text-black font-bold text-xl mb-4 mt-2 flex items-center gap-3">
                  <span className="text-[#e01c1c] text-sm">/ {step.step}</span>
                </h3>
                <h4 className="text-black text-lg font-bold mb-3">{step.title}</h4>
                <p className="text-black/70 text-sm leading-relaxed relative z-10">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden border-t border-black/5 py-24">
        <Image
          src="/images/about/interior.jpg"
          alt="B2B Partnership Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

        <div className="relative z-10 max-w-[800px] mx-auto px-6 text-center">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Partnership</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Ready to Scale Your Business?
          </h2>
          <p className="text-black/70 text-lg mx-auto mb-10 leading-relaxed">
            Connect with our dedicated B2B account team to start your partnership journey today and unlock wholesale efficiency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:b2b@yaco.ae"
              className="inline-flex items-center justify-center gap-2 bg-[#e01c1c] hover:bg-[#cc0000] text-white font-semibold px-10 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-900/40 rounded-[10px]"
            >
              Get a Quote
            </a>
            <a
              href="tel:+971549956577"
              className="inline-flex items-center justify-center gap-2 border border-black text-black hover:bg-black hover:text-white font-semibold px-10 py-5 transition-all duration-300 rounded-[10px]"
            >
              Talk to Sales
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
