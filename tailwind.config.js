/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector', // <-- TOTO JE TEN MAGICKÝ RIADOK
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}