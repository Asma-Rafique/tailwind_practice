/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'custom-xl': '40px',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        // san:['Work' ,'Sans'],
      },
      colors: {
        bg: '#FFFFFF',
        primary: {
          50: '#EBFAE7',
          200: '#C2F1B6',
          500: '#85E36E',
          600: '#427137',
          700: '#6FBD5C',
          800: '#2C4C25',
        },
        'text-grey1': {
          500: '#64748B',
          600: '#334155',
          700: '#020617',
        },
        neutral: {
          50: '#F9FAFB',
        },
        'border-n300': '#CBD5E1',
      },
    },
  },
  plugins: [],
}

