/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{jsx,tsx}', './src/components/**/*.{jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          300: '#00B37E',
          500: '#00875F',
        },
        gray: {
          100: '#e1e1e6',
          300: '#c4c4cc',
          400: '#8d8d99',
          600: '#323238',
          700: '#29292e',
          800: '#202024',
          900: '#121214',
        },
        red: {
          300: '#F75A68',
        },
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
