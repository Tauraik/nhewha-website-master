/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        primaryBlack: '#050501',
        primaryRed: '#FF1E57',
        primaryYellow: '#FFDD59',
        secondaryLightBrown: '#AD963F',
        secondaryDarkBrown: '#4B4324',
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base',
    }),
  ],
};
