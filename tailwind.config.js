/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily :{
        'Zilla' : ['Zilla Slab', 'serif'],
        'Monoton' : ['Monoton', 'cursive']
      }
    },
  },
  plugins: [],
}