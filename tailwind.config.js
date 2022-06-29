/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '-5px 5px 0 0 rgba(0, 0, 0, 0.05)',
      },
      colors: {
        'cornflower-blue': '#91B9F5',
        'platinum-silver': '#CECECE',
        'wild-sand': '#F4F4F4',
        'mine-shaft': '#222222',
        'terminal-grey': '#C8C7C7',
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'inter': ['Inter'],
        'oswald': ['Oswald'],
        'open-sans': ['Open Sans'],
        'roboto-mono': ['Roboto Mono'],
        
      }
    },
  },
  plugins: [],
}
