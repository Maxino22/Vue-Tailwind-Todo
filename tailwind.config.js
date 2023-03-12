/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				// light theme
				veryLightGray: 'hsl(0, 0%, 98%)',
				veryLightGrayishBlue: 'hsl(236, 33%, 92%)',
				darkGrayishBlue: 'hsl(236, 9%, 61%)',
				veryDarkGreyishBlue: 'hsl(235, 19%, 35%)',

				// dark theme
				veryDarkBlue: 'hsl(235, 21%, 11%)',
				veryDarkDesaturatedBlue: ' hsl(235, 24%, 19%)',
				lightGrayishBlue: 'hsl(234, 39%, 85%)',
				lightGrayishBlueHover: 'hsl(236, 33%, 92%)',
				darkGrayishBlueDM: ' hsl(234, 11%, 52%)',
				veryDarkGreyishBlueDM: 'hsl(233, 14%, 35%)',
				TwoveryDarkGreyishBlueDM: 'hsl(237, 14%, 26%)',
			},
			fontFamily: {
				sans: ['Josefin Sans', 'sans-serif'],
			},
			backgroundImage: (theme) => ({
				'header-desktop-dark': "url('images/bg-desktop-dark.jpg')",
				'header-mobile-dark': "url('images/bg-mobile-dark.jpg')",
				'header-desktop-light': "url('images/bg-desktop-light.jpg')",
				'header-mobile-light': "url('images/bg-mobile-light.jpg')",
			}),
		},
	},
	variants: {
		extends: {
			backgroundImage: ['dark'],
		},
	},
	plugins: [],
}
