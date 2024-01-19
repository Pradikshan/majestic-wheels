/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['Libre Baskerville', 'sans'] ,
        titillium: ['Titillium Web'],
        manrope: ['Manrope'],
        quicksand: ['Quicksand']
      },
    },
  },
  plugins: [],
}

