/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'cursive'],
        future: ['Orbitron', 'sans-serif'],
      },
      fontSize: {
        '64px': '64px',
        '32px': '32px',
        '24px': '24px',
        '20px': '20px',
        '18px': '18px',
        '16px': '16px',
        '14px': '14px',
      },
    },
  },
  plugins: [],
};