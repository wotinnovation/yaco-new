import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-bebas",
});

export const metadata: Metadata = {
  title: "YACO – Automotive Accessories",
  description:
    "YACO offers efficient, reliable automotive accessories that enhances your vehicle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${barlow.variable} ${barlowCondensed.variable} text-lg`}>
        {children}
      </body>
    </html>
  );
}