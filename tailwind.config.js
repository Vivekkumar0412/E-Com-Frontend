/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        "vivek-red" : "#ea2e0e",
        "test-blue" : "#0000FF"
      }
    },
  },
  plugins: [],
}