/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,svelte}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        lg: '4rem',
        sm: '3rem',
      },
    },
    extend: {},
  },
  plugins: [],
}