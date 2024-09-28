import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#0B0909',   // Dark base color for backgrounds, headers, or key elements
        secondary: '#8C8C8C', // Medium grey for supporting elements like headings, buttons
        accent: '#D6D6D6',    // Light grey for subtle highlights, form inputs, or accents
        neutral: '#44444C',   // Dark grey for background sections or muted text
      },
      fontFamily: {
        "mont": "var(--font-mont)",
        "bebas": "var(--font-bebas)",
      }
    },
  },
  plugins: [],
};
export default config;
