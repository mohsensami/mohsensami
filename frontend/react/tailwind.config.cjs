/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "theme-f1": ['"Oswald"', "sans-serif"],
      "theme-f2": ['"Lora"', "serif"],
      "theme-f3": ['"Bebas Kai"', "sans-serif"],
      "theme-f4": ['"Open Sans"', "sans-serif"],
    },
    extend: {
      fontSize: {
        "7xl": "7rem",
      },
      colors: {
        yellow: "#ffc107",
        "theme-c1-b": "#6c8213",
        "theme-c2": "#000000",
        "theme-c3": "#ffffff",
      },
    },
  },
  plugins: [],
};
