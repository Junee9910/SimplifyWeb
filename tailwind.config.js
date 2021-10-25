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
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
