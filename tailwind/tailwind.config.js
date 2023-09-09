/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary:{
          DEFAULT: '#1976d2',
          light:'#63a4ff',
          dark:'#004ba0'
        },
        secondary:{
          DEFAULT: '#ffcc80',
          light:'#ffffb0',
          dark:'#ca9b52'
        }
      }
    },
  },
  plugins: [],
};
