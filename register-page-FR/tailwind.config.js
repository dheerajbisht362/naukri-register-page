/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      whitebg: '#FEFEFF',
      lightbluebg: '#698CFF',
      lightbluebg2: '#FBFBFF',
    }
  },
  plugins: [],
}