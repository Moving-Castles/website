/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'cornell': '#B3001B',
        'picton': '#00A2FF',
        'schoolbus': '#FFDD00',
      }
    },
  },
  plugins: [],
}

