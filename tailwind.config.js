/** @type {import('tailwindcss').Config} */

const withMT=require("@material-tailwind/react/utils/withMT")
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        bgBtn:'#FFD688',
        colorTitle:'#2C4875'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    rtl: true, 
  }
})
