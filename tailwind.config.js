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
			},
			animation: {
				'shimmer-slide': 'shimmer-slide var(--speed) ease-in-out infinite alternate',
				'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
				marquee: 'marquee var(--duration) infinite linear',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
			},
			keyframes: {
				'shimmer-slide': {
					to: {
						transform: 'translate(calc(100cqw - 100%), 0)'
					}
				},
				'spin-around': {
					'0%': {
						transform: 'translateZ(0) rotate(0)'
					},
					'15%, 35%': {
						transform: 'translateZ(0) rotate(90deg)'
					},
					'65%, 85%': {
						transform: 'translateZ(0) rotate(270deg)'
					},
					'100%': {
						transform: 'translateZ(0) rotate(360deg)'
					}
				},
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				}
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

/**
 * backgroundImage: {
				world: "url('/src/assets/loginWorld.svg')",
				looking: "url('/src/assets/looking.svg')",
				sprinkle: "url('/src/assets/SprinkleBg.svg')",
				volunteer: "url('/src/assets/volunteer.jpg')",
				harvesting: "url('/src/assets/foodharvest.svg')"
			},
 */