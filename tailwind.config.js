/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],

  content:[  'node_modules/preline/dist/*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [ require('preline/plugin'),    require('@tailwindcss/line-clamp'),
  ],
}
