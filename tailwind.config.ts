import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#090A0F",
        surface: "#10121A",
        "surface-card": "#141722",
        "surface-hover": "#1C2030",
        border: "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(225, 29, 72, 0.25)",
        primary: {
          DEFAULT: "#E11D48", // Crimson Red
          hover: "#BE123C",
          light: "#FB7185",
          dark: "#9F1239",
          glow: "rgba(225, 29, 72, 0.35)",
        },
        muted: {
          DEFAULT: "#94A3B8",
          dark: "#64748B",
          light: "#CBD5E1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
