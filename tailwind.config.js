/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        softPink:'#FF2E65'
      },
      fontFamily:{
        body:['Montserrat']
      },
    },
  },
  plugins: [],
}

