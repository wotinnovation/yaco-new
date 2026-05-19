import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          500: "#e01c1c",
          600: "#cc0000",
          700: "#aa0000",
        },
        dark: {
          900: "#0a0a0a",
          800: "#111111",
          700: "#1a1a1a",
          600: "#222222",
          500: "#2a2a2a",
          400: "#333333",
        },
      },
      fontFamily: {
        sans: ["var(--font-barlow)", "sans-serif"],
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.3em",
      },
    },
  },
  plugins: [],
};
export default config;