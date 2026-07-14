/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f1f8f3',
          100: '#ddeff0',
          200: '#bededf',
          300: '#91c2c3',
          400: '#5fa1a3',
          500: '#3d7e80', // organic teal-green
          600: '#346b6e',
          700: '#2d585b',
          800: '#274a4d',
          900: '#233f42',
          950: '#142628',
        },
        sage: {
          50: '#f5f7f5',
          100: '#e5e9e5',
          200: '#ccd4cc',
          300: '#a7b4a7',
          400: '#7e917e',
          500: '#5e725e', // deep sage
          600: '#4a5b4a',
          700: '#3c4a3c',
          800: '#323d32',
          900: '#2a332a',
        },
        warm: {
          50: '#fbfaf7',
          100: '#f6f2eb',
          200: '#eae2d3',
          300: '#d7cbb3',
          400: '#beae8d',
          500: '#a8946e',
          600: '#94805c',
          700: '#7b694b',
          800: '#64553d',
          900: '#524533',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
