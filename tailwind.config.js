/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['bg-skysoft', 'bg-peach', 'text-text', 'text-muted'],
  theme: {
    extend: {
      colors: {
        skysoft: 'rgb(193, 222, 232)',
        peach: 'rgb(251, 217, 185)',
        text: '#111111',
        muted: '#555555',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
