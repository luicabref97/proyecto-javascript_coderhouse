/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fontPrincipal:['Outfit', 'sans-serif'],
        fontText:['Inter', 'sans-serif']
      },
      screens: {
        'lg': '1184px'
      },
    },
  },
  plugins: [],
}
