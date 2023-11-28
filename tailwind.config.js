/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#fafcff',
      black: '#000000',
      blue: '#1769ff',
      redDark: '#A65454',
      red: '#b12704',
      bluex: '#1769ff',
      lightBlue: '#d1e1ff',
      lighterBlue: '#eff5ff',
      inputBlue: '#fcfdff',
      purple: '#3f3cbb',
      midnight: '#121063',
      metal: '#565584',
      tahiti: '#3ab7bf',
      silver: '#a3a3a3',
      'bubble-gum': '#ff77e9',
      bermuda: '#78dcca',
      greyBlue: '#7393B3',
      greyBrown: '#bba591',
      pink: '#ffa6b5',
      seaGreen: '#61e0e2',
      maroon: '#800000',
      sageGreen: '#59614c',
      darkKhaki: '#7b7c78',
      yellow: '#ffdd00',
      darkmode: '#041432',
      card: '#232C43',
    },
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }
      '1xl': { max: '1400px' },
      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      xs: { max: '575px' },
      '2xs': { max: '500px' },
      '3xs': { max: '400px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
