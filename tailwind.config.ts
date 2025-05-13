import { color } from "motion/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
      fontFamily: {
        sans: "var(--font-roboto-mono)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
        },
      },
      colors: {
        // "red-orange": {
        //   500: "#f55a2a",
        // },
        stainless: {
          500: "#b4bdc7", // stainless
        },
      },
    },
  },
  plugins: [],
};
export default config;
