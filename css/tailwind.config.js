module.exports = {
  purge: [
    '../src/main/resources/html/**/*html',
    './src/**/*.html'
  ],
  darkMode: false,
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
