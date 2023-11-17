/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/**/*.hbs',
    './public/**/*.html',
    './public/**/*.js',],
  theme: {
    container: {
      center: true,
      screens: {
        lg: '1140px',
        xl: '1140px',
        '2xl': '1140px',
      }
    },
    extend: {
      fontFamily: {
        gemunu: ['Gemunu Libre', 'sans-serif'],
        open: ['Open Sans', 'sans-serif']
      },
      colors: {
        'cocktail_chronicles-pink': '#D504D9',
        'cocktail_chronicles-purple': '#8149A6',
        'cocktail_chronicles-green': '#027373',//purple-700
        'cocktail_chronicles-sgreen': '#04BFAD',//teal-500
        'cocktail_chronicles-grey': '#DDDDDD',
      },

      spacing: {
        128: '50rem', // main section
      },
    },
  },
  plugins: [],
}

