/** @type {import('tailwindcss').Config} */
module.exports = {
  content:['./src/**/*.{js,jsx,ts,tsx}','node_modules/preline/dist/*.js',],
  theme: {
    extend: {

    },
  },
  variants: {
    extend: {},
  },
  plugins: [ require('preline/plugin'),    require('@tailwindcss/line-clamp'),
  ],
}
