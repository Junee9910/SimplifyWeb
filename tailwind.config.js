const colors = require('tailwindcss/colors')

module.exports = {
  mode:'aot',
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal:colors.teal,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
