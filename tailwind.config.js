/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0E13',
        card: '#0E1218',
        border: '#1A1F2B',
        textPrimary: '#EAEAEA',
        textSecondary: '#A1A8B5',
        accent1: '#00E0FF',
        accent2: '#14FFEC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};