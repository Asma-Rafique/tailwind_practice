/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile':{'max': '575px'},
        'tablet': '768px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '992px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      fontSize: {
        'responsive-xl': 'calc(1.5rem + 1vw)',
        'custom-xxl':['64px' ,{ lineHeight: '77px', fontWeight: '700' }],
        'custom-xl':['48px' ,{ lineHeight: '58px', fontWeight: '800' }],
        'custom-l': ['40px' ,{ lineHeight: '48px', fontWeight: '800' }],
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        // san:['Work' ,'Sans'],
      },
      height:{
        'testinomial-h':'390px'
      },
      borderRadius:{
        'custom-radius': '32px',
      },
      lineHeight:{
        'custom-h':'58px',
      },
      padding:{
        'padding-left':'600px'
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

