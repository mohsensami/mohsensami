/** @type {import('tailwindcss').Config} */ 
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1000px',
        '2xl': '1600px',
      },
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
      center: true
    },
    extend: {
      colors: {
        'red-light': '#fa5252',
        'red-dark': '#dd2476',
      },
    },
  },
  plugins: [],
}