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
      },
      colors: {
        'primary': '#69247C',
        'secondary': '#DA498D',
        'accent': '#FAC67A',
        'background': '#F9E6CF'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

/**
 * 69247C
DA498D
FAC67A
F9E6CF
4B4B4B
 */