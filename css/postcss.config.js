module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-fail-on-warn'),
    require('postcss-import'),
    require('autoprefixer'),
    require('cssnano'),
  ]
}
