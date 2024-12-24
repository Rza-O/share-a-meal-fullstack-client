/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				lobster: 'Lobster Two',
				shrimp: 'Nunito'
			},
			colors: {
				primary: '#244034',
				secondary: '#d0f04b',
				accent: '#f2f9d8'
			},
			backgroundImage: {
				world: "url('/src/assets/loginWorld.svg')",
				looking: "url('/src/assets/looking.svg')",
				sprinkle: "url('/src/assets/SprinkleBg.svg')",
				volunteer: "url('/src/assets/volunteer.jpg')",
				harvesting: "url('/src/assets/foodharvest.svg')"
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			}
		}
	},
	plugins: [
		require('daisyui'),
		require("tailwindcss-animate")
	],
}

/**
 * 69247C
DA498D
FAC67A
F9E6CF
4B4B4B
 */