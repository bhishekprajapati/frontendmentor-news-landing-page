/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      'orange-lighter': 'hsl(35, 77%, 62%)',
      'red-lighter': 'hsl(5, 85%, 63%)',
      light: 'hsl(36, 100%, 99%)',
      'grayish-blue': 'hsl(233, 8%, 79%)',
      'grayish-blue-dark': 'hsl(236, 13%, 42%)',
      'blue-darker': 'hsl(240, 100%, 5%)',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
