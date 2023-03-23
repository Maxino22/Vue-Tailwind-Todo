/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			gradientColorStops: {
				checkGrad: ['hsl(192, 100%, 67%)', 'hsl(280, 87%, 65%)'],
			},
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
				'header-desktop-dark':
					"url('https://res.cloudinary.com/maxino/image/upload/v1679576446/Todo/bg-desktop-dark_aislu7.jpg')",
				'header-mobile-dark':
					"url('https://res.cloudinary.com/maxino/image/upload/v1679576446/Todo/bg-mobile-light_ifew6z.jpg')",
				'header-desktop-light':
					"url('https://res.cloudinary.com/maxino/image/upload/v1679576446/Todo/bg-desktop-light_xifcwj.jpg')",
				'header-mobile-light':
					"url('https://res.cloudinary.com/maxino/image/upload/v1679576446/Todo/bg-mobile-dark_crfktd.jpg')",
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
