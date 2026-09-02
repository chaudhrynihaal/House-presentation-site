import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: "#1a1714",
          light: "#242019",
          lighter: "#2f2a22",
        },
        offwhite: "#f4f1ea",
        gold: {
          DEFAULT: "#d4c4a8",
          dark: "#b8a582",
          light: "#e6dcc8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.2em",
      },
    },
  },
};

export default config;
