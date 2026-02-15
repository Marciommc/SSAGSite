import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3e4e62", // Stacked Dark Blue (Nav)
          light: "#5a6b82",   // Lighter shade
          dark: "#2d3a4b",    // Darker shade (Content BG)
        },
        secondary: {
          DEFAULT: "#fa5252", // Stacked Red (Accents/Buttons)
          hover: "#d43d3d",
        },
        accent: {
          DEFAULT: "#fa5252", // Unified with secondary
          hover: "#d43d3d",
        },
        text: {
          DEFAULT: "#444444",
          light: "#848484",
        },
        bg: {
          light: "#f3f5fa",
        },
        success: "#25d366", // WhatsApp Green
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
