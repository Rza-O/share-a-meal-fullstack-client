/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lobster: "Lobster Two",
        shrimp: "Nunito"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

