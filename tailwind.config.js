const colors = require('tailwindcss/colors')

module.exports = {
  mode:'aot',
  prefix: '',
  purge: {
    content: [
      './src/**/*.{html,ts}',
    ]
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
       margin: ['hover', 'focus'],
  },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      teal:colors.teal,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      black: colors.black
    }, 
    padding:{

    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
