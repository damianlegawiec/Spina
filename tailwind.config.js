const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
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
          default: '#6865b4',
          dark: '#3a3a70'
        }
      }
    },
  },
  variants: {
    boxShadow: ['active']
  },
  plugins: [
    require('@tailwindcss/ui')
  ]
}
