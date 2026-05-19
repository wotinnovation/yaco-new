import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – YACO Automotive",
  description:
    "Learn about YACO Automotive — a UAE-based manufacturer of premium custom seat covers, floor mats, and upholstery since 2014.",
};

const TIMELINE = [
  {
    year: "2014",
    title: "Founded in Ajman",
    desc: "YACO Automotive was established in Ajman Industrial Area 2, UAE, starting as a 20,000 sq. ft custom seat cover manufacturing unit.",
  },
  {
    year: "2017",
    title: "Fire Lamination Technology",
    desc: "We introduced fire lamination technology, cutting fitting time while dramatically enhancing the style and durability of our seat covers.",
  },
  {
    year: "2019",
    title: "Gerber Precision Cutting",
    desc: "We invested in a Computerized Cutting Machine from Gerber Technology USA, bringing new levels of precision to every cut.",
  },
  {
    year: "2021",
    title: "Expanded to 60,000 Sq Ft",
    desc: "Demand pushed us to triple our manufacturing capacity at Ajman Al Jurf Industrial 1 — now a state-of-the-art facility.",
  },
  {
    year: "2024",
    title: "Serving 8+ Countries",
    desc: "Today our products reach the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Iraq, India, and Africa.",
  },
];

const STATS = [
  { number: "10+", label: "Years Experience" },
  { number: "60K", label: "Sq Ft Facility" },
  { number: "400+", label: "Daily Production" },
  { number: "8+", label: "Countries Served" },
];

const VALUES = [
  {
    title: "Superior Quality",
    desc: "Premium materials and meticulous craftsmanship in every detail.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Precision Technology",
    desc: "Advanced computerized cutting and fire lamination for a perfect fit.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    desc: "Trusted by customers across the Middle East, India, and Africa.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Customer First",
    desc: "Dedicated support and customized solutions for every driver.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen">
      <Navbar />

      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20">
        {/* Background */}
        <Image
          src="/images/about/interior.jpg"
          alt="About YACO Background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-20 pt-52">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">About YACO</p>
          <h1
            className="text-black text-[clamp(3rem,7vw,6rem)] font-bold leading-[0.9] uppercase"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
          >
            Our Journey of<br />Excellence
          </h1>
          <p className="text-black/70 text-lg mt-6 max-w-2xl leading-relaxed">
            Premium automotive interior solutions manufacturer based in Ajman, UAE. Custom-fit seat covers, floor mats, and upholstery since 2014.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-50 border-y border-black/5">
        <div className="max-w-[1200px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-black font-extrabold text-5xl md:text-6xl mb-2"
                style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.02em" }}
              >
                {s.number.replace("+", "")}<span className="text-[#e01c1c]">{s.number.includes("+") ? "+" : ""}</span>
              </div>
              <p className="text-black/60 text-sm tracking-wide uppercase font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Images */}
        <div className="flex gap-4 items-stretch">
          <div className="w-1/2 rounded-xl overflow-hidden shadow-lg border border-black/5 relative" style={{ minHeight: "460px" }}>
            <Image
              src="/images/seat/seat1.jpg"
              alt="YACO premium seat cover craftsmanship"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
          <div className="w-1/2 self-end rounded-xl overflow-hidden shadow-lg border border-black/5 relative" style={{ height: "340px" }}>
            <Image
              src="/images/seat/up1.jpg"
              alt="YACO luxury upholstery interior"
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Our Story</p>
          <h2
            className="text-black text-[clamp(2rem,4vw,3rem)] font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Crafting Excellence<br />Since 2014
          </h2>
          <div className="space-y-5 text-black/70 text-base leading-relaxed">
            <p>
              Located in Ajman, UAE, YACO Automotive has pioneered custom-made seat covers since 2014. What began as a modest 20,000 sq. ft facility has grown into a 60,000 sq. ft state-of-the-art manufacturing unit at Ajman Al Jurf Industrial 1.
            </p>
            <p>
              We introduced fire lamination technology that reduced fitting time while enhancing style. Our Computerized Cutting Machine from Gerber Technology USA ensures precision in every cut.
            </p>
            <p>
              Our products reach customers across the UAE, Saudi Arabia, Qatar, Kuwait, Oman, Iraq, India, and Africa. No matter where you are, experience the perfect blend of protection, comfort, and style.
            </p>
          </div>
          <a
            href="/services"
            className="inline-flex items-center gap-2 bg-[#e01c1c] hover:bg-[#cc0000] text-white text-sm font-semibold px-8 py-4 mt-10 transition-all duration-300 hover:shadow-lg hover:shadow-red-900/30 hover:-translate-y-0.5 rounded-[10px]"
          >
            Explore Our Products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-24 border-t border-black/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Milestones</p>
            <h2
              className="text-black text-[clamp(2rem,4vw,3rem)] font-bold"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              A Decade of Growth
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-black/10 hidden md:block" />

            <div className="space-y-12">
              {TIMELINE.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Text half */}
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <span className="text-[#e01c1c] text-xs font-bold tracking-widest uppercase">{item.year}</span>
                    <h3 className="text-black text-xl font-bold mt-1 mb-2">{item.title}</h3>
                    <p className="text-black/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#e01c1c] border-4 border-white ring-1 ring-[#e01c1c]/50 z-10" />
                  </div>

                  {/* Empty half */}
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 max-w-[1200px] mx-auto px-6 border-t border-black/5">
        <div className="text-center mb-16">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Why YACO</p>
          <h2
            className="text-black text-[clamp(2rem,4vw,3rem)] font-bold"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            What Sets Us Apart
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="bg-gray-50 border border-black/5 rounded-xl p-8 hover:border-[#e01c1c]/30 hover:bg-red-50/50 transition-all duration-300 group shadow-sm"
            >
              <div className="w-14 h-14 rounded-xl bg-[#e01c1c]/10 border border-[#e01c1c]/20 flex items-center justify-center text-[#e01c1c] mb-6 group-hover:bg-[#e01c1c] group-hover:text-white transition-all duration-300">
                {v.icon}
              </div>
              <h3 className="text-black text-lg font-bold mb-3">{v.title}</h3>
              <p className="text-black/60 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative overflow-hidden border-t border-black/5">
        <Image
          src="/images/about/interior.jpg"
          alt="About CTA Background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        {/* Light Overlay */}
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-24 text-center">
          <p className="text-[#e01c1c] text-sm font-bold tracking-widest uppercase mb-4">Get In Touch</p>
          <h2
            className="text-black text-[clamp(2.5rem,5vw,4rem)] font-bold mb-6"
            style={{ fontFamily: "var(--font-bebas)", letterSpacing: "0.03em" }}
          >
            Ready to Transform Your Interior?
          </h2>
          <p className="text-black/70 text-lg max-w-xl mx-auto mb-10">
            Contact YACO today to get a custom quote for your vehicle. Premium quality, perfect fit — guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971549956577"
              className="inline-flex items-center justify-center gap-2 bg-[#e01c1c] hover:bg-[#cc0000] text-white font-semibold px-10 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-900/40 rounded-[10px]"
            >
              Call Us Now
            </a>
            <a
              href="mailto:info@yaco.ae"
              className="inline-flex items-center justify-center gap-2 border border-black text-black hover:bg-black hover:text-white font-semibold px-10 py-4 transition-all duration-300 rounded-[10px]"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
