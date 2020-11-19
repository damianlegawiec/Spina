const colors = require("tailwindcss/colors")

module.exports = {
  purge: {
    content: [
      './app/**/*.html.erb',
      './app/components/**/*.rb',
      './app/helpers/**/*.rb',
      './app/javascript/**/*.js'
    ]
  },
  theme: {
    fontFamily: {
      body: ['Metropolis']
    },
    extend: {
      colors: {
        spina: {
          light: '#797ab8',
          DEFAULT: '#6865b4',
          dark: '#3a3a70'
        }
      }
    }
  },
  variants: {
    boxShadow: ['active']
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
