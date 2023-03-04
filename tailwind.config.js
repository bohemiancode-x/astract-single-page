/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost']
      },
      colors: {
        bgColor: '#1f2335'
      }
    },
  },
  plugins: [],
}
