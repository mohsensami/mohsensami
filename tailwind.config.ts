import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom blue theme based on #537FE7
        primary: {
          50: "#EBF2FE",
          100: "#D7E5FD",
          200: "#AFCBFB",
          300: "#87B1F9",
          400: "#6B95F0",
          500: "#537FE7", // Main color
          600: "#3D6AD6",
          700: "#2D54C5",
          800: "#2343A3",
          900: "#1A3282",
          950: "#0F1E52",
        },
      },
    },
  },
  plugins: [],
};

export default config;
