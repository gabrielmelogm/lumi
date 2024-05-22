import { Config } from 'tailwindcss'

const config = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
	theme: {
		colors: {
			green: '#023b21',
			gray: '#d9d9d9',
			'dark-gray': '#4d4d4d',
			white: '#ffffff',
		},
		extend: {
			gridTemplateColumns: {
				card: '1fr 2fr',
			},
		},
	},
	plugins: [],
} satisfies Config

export default config
