const colors = require('tailwindcss/colors')

module.exports = {
  mode:'aot',
  purge: ['./src/**/*.{ts,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal:colors.teal
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
