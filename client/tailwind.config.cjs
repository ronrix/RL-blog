/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'content': ['Labrada', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('tailwind-scrollbar')({ nocompatible: true })],
}
