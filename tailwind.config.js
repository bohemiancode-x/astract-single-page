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
        bgColor: '#1f2335',
        PeterObi: '#0aa83f',
        Tinubu: '#64ccff',
        Atiku: '#d62b3c'
      }
    },
  },
  plugins: [],
}
