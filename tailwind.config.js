/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // or 'media' for automatic dark mode based on user's system preference
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}