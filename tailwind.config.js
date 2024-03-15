/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sora': ["Sora", 'sans-serif']
    },
    colors: {
      'white': '#FFFFFF',
      'white-200': '#FAFAF9',
      'white-300': '#D4D4D8',
      'black-700': '#18181B',
      'black-600': '#52525A',
      'yellow': '#F5C044'
    },
    extend: {},
  },
  plugins: [],
}

