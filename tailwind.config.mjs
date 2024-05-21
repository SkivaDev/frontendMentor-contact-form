/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				'light-green': 'hsl(148, 38%, 91%)',
				'green': 'hsl(169, 82%, 27%)',
				'red': 'hsl(0, 66%, 56%)',
				'medium-gray': 'hsl(186, 15%, 59%)',
				'dark-gray': 'hsl(187, 24%, 22%)',
			},
			colors: {
				'light-green': 'hsl(148, 38%, 91%)',
				'green': 'hsl(169, 82%, 27%)',
				'red': 'hsl(0, 66%, 56%)',
				'medium-gray': 'hsl(186, 15%, 59%)',
				'dark-gray': 'hsl(187, 24%, 22%)',
			},
			borderColor: {
				'light-green': 'hsl(148, 38%, 91%)',
				'green': 'hsl(169, 82%, 27%)',
				'red': 'hsl(0, 66%, 56%)',
				'medium-gray': 'hsl(186, 15%, 59%)',
				'dark-gray': 'hsl(187, 24%, 22%)',
			}
		},
	},
	plugins: [],
}
