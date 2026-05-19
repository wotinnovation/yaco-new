"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "#products",
    hasDropdown: true,
    dropdown: [
      { label: "Seat Covers", href: "/products/seat-covers" },
      { label: "Floor Mats", href: "/products/floor-mats" },
      { label: "Upholstery", href: "/products/upholstery" },
      { label: "Deep Cleaning", href: "/products/deep-cleaning" },
    ],
  },
  { label: "B2B Solutions", href: "/b2b" },
];

export default function Navbar({ onBookingClick }: { onBookingClick?: () => void }) {
  const topBarRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Animate in on load
    gsap.fromTo(
      topBarRef.current,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
    );
    gsap.fromTo(
      navRef.current,
      { y: -60, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, delay: 0.2, ease: "power2.out" }
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div
        ref={topBarRef}
        className={`fixed top-0 left-0 right-0 z-50 bg-[#f5f5f5] border-b border-black/10 transition-transform duration-500 ${scrolled ? "-translate-y-full" : "translate-y-0"
          }`}
      >
        <div className="w-[92vw] mx-auto px-4 sm:px-6 py-2  flex items-center justify-between text-[12px] text-gray-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 text-[#e01c1c]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Premium Automotive Accessories Since 2014</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="/about" className="font-bold hover:text-[#e01c1c] transition-colors cursor-pointer tracking-wider uppercase text-[11px]">
              About Us
            </a>
            <a href="/contact" className="font-bold hover:text-[#e01c1c] transition-colors cursor-pointer tracking-wider uppercase text-[11px]">
              Contact Us
            </a>
            <div className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-[#e01c1c]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>Call us: +971 54 995 6577</span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-3.5 h-3.5 text-[#e01c1c]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@yaco.ae</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        ref={navRef}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "top-0 bg-white/95 backdrop-blur-md shadow-lg shadow-black/10 border-b border-black/10"
          : "top-[37px] bg-white border-b border-black/10"
          }`}
      >
        <div className="w-[92vw] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center group">
            <Image
              src="/images/logo/logo.webp"
              alt="YACO Logo"
              width={300}
              height={120}
              priority
              className="h-20 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setDropdownOpen(false)}
              >
                <a
                  href={link.href}
                  className="text-[14px] font-semibold text-gray-700 hover:text-black transition-colors duration-200 flex items-center gap-1 group relative uppercase tracking-wider"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <svg
                      className={`w-3 h-3 text-gray-400 group-hover:text-black transition-all duration-200 ${dropdownOpen ? "rotate-180" : ""
                        }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                  <span className="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-[#e01c1c] transition-all duration-300 group-hover:w-full" />
                </a>

                {/* Dropdown */}
                {link.hasDropdown && link.dropdown && dropdownOpen && (
                  <div className="absolute top-full left-0 pt-2 w-48">
                    <div className="bg-white border border-black/10 rounded-lg overflow-hidden shadow-2xl shadow-black/15">
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="block px-5 py-3 text-[13px] text-gray-600 hover:text-black hover:bg-gray-50 transition-colors duration-200 border-b border-black/5 last:border-0"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onBookingClick}
              className="bg-[#e01c1c] hover:bg-[#cc0000] text-white text-[13px] font-bold px-6 py-2 uppercase transition-all duration-300 hover:shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5 active:translate-y-0 rounded-[10px]"
            >
              Book Your Slot
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-gray-800 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-black/10 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <div key={link.label}>
                <a
                  href={link.href}
                  className="block py-3 text-gray-600 hover:text-black border-b border-black/5 text-sm"
                  onClick={() => !link.hasDropdown && setMenuOpen(false)}
                >
                  {link.label}
                </a>
                {/* Mobile dropdown items */}
                {link.hasDropdown && link.dropdown && (
                  <div className="pl-4">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block py-2.5 text-gray-500 hover:text-black text-[13px] border-b border-black/5 last:border-0"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                onBookingClick?.();
              }}
              className="w-full mt-4 bg-[#e01c1c] text-center text-white text-sm font-semibold px-5 py-3 rounded-[10px]"
            >
              Book Your Slot
            </button>
          </div>
        )}
      </nav>
    </>
  );
}