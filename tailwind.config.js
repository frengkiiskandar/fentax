/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f1b1c',
        secondary: '#69573b',
        choco: '#69573b',
        accent: '#d9b87c',
        buttonClr : 'rgba(226, 192, 127, 0.55)',
        lightcoco: 'rgba(228, 202, 153, 0.55)'
      },
      fontFamily:{
        sans: ['Epilogue', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}
