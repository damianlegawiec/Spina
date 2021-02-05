module.exports = {
  purge: {
    content: [
      './app/**/*.html.erb',
      './app/components/**/*.rb',
      './app/helpers/**/*.rb',
      './app/**/controllers/*.js',
      './app/**/tailwind/custom.css'
    ]
  },
  theme: {
    fontFamily: {
      body: ['Metropolis'],
      mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', "Liberation Mono", "Courier New", 'monospace']
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
    boxShadow: ['active'],
    extend: {
      backgroundColor: ['even', 'checked']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
}
