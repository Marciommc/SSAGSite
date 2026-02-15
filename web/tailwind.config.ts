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
          DEFAULT: "#37517e", // Dark Blue
          light: "#47b2e4",   // Light Blue (Secondary)
          dark: "#2c3e50",    // Darker Blue/Grey
        },
        accent: {
          DEFAULT: "#ffd700", // Yellow
          hover: "#e6b800",
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
