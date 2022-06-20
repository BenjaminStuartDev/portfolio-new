/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cornflower-blue': '#91B9F5',
        'platinum-silver': '#CECECE',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'inter': ['Inter'],
      }
    },
  },
  plugins: [],
}
