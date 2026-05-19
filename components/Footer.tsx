"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const QUICK_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Seat Covers", href: "/products/seat-covers" },
  { label: "Floor Mats", href: "/products/floor-mats" },
  { label: "Upholstery", href: "/products/upholstery" },
  { label: "B2B Solutions", href: "/b2b" },
];

const SUPPORT_LINKS = [
  { label: "Book Appointment", href: "/appointment" },
  { label: "Contact Us", href: "/contact" },
  { label: "FAQs", href: "/#faq" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      <div className="max-w-[1300px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <Image
                src="/images/logo/logo.png"
                alt="YACO Logo"
                width={300}
                height={120}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-black/60 text-base leading-relaxed mb-8">
              Premium automotive interior solutions manufacturer based in Ajman, UAE. Custom-fit seat covers, floor mats, and upholstery since 2014.
            </p>
            {/* Social Links */}
            <div>
              <h4 className="text-black font-semibold text-lg mb-4 tracking-wide">Follow Us</h4>
              <div className="flex items-center gap-3">
                {[
                  // Facebook
                  <svg key="fb" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
                  // Twitter/X
                  <svg key="x" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                  // WhatsApp
                  <svg key="wa" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
                  // Instagram
                  <svg key="ig" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>,
                  // YouTube
                  <svg key="yt" className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>,
                ].map((icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded border border-black/10 flex items-center justify-center text-black/40 hover:text-white hover:border-[#e01c1c] hover:bg-[#e01c1c] transition-all duration-300"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-black font-semibold text-lg mb-5 tracking-wide uppercase">Quick Links</h4>
            <ul className="space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/60 text-base hover:text-[#e01c1c] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support - Hidden on mobile */}
          <div className="hidden md:block col-span-1">
            <h4 className="text-black font-semibold text-lg mb-5 tracking-wide uppercase">Support</h4>
            <ul className="space-y-3">
              {SUPPORT_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-black/60 text-base hover:text-[#e01c1c] hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h4 className="text-black font-semibold text-lg mb-5 tracking-wide uppercase">Contact Info</h4>
            <div className="space-y-5">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-[#e01c1c] w-5 h-5" />
                  <span className="text-black text-base font-medium">Head Office</span>
                </div>
                <p className="text-black/60 text-base pl-6">Ajman Industrial Area 2, UAE</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="text-[#e01c1c] w-5 h-5" />
                  <span className="text-black text-base font-medium">Call Us</span>
                </div>
                <div className="text-black/60 text-base pl-6 space-y-1">
                  <p>+971 54 995 6577</p>
                  <p>+971 55 968 8171</p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Mail className="text-[#e01c1c] w-5 h-5" />
                  <span className="text-black text-base font-medium">Email Us</span>
                </div>
                <p className="text-black/60 text-base pl-6">info@yaco.ae</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-black/5 mt-4 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-black/50 text-sm">
            © {new Date().getFullYear()} - YACO Automotive & developed by <a href="https://wot.ae" className="text-[#e01c1c] hover:text-black transition-colors">WOT</a>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-black/50 text-sm hover:text-[#e01c1c] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/privacy" className="text-black/50 text-sm hover:text-[#e01c1c] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}