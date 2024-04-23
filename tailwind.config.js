/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 420px)'},
      },
      colors: {
        'primary': '#f2f2f2',
        'frameworkBackground': '#00b36b',
        'frameworkText': '#bef5df',
        'subtleText': '#bfbfbf',
        'mainBackground': '',

      }
    },
  },
  plugins: [],
}

