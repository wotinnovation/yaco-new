import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    
  },
  // Fix for the root directory inference issue and dev warnings
  
};

export default nextConfig; 
