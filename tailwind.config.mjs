/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	theme: {
		extend: {
			fontFamily: {
				'kalnia': ['kalnia', 'Georgia', 'serif'],
				'hubot': ['Hubot-Sans', 'Helvetica', 'sans-serif']
			}
		},
		colors: {
			'white': '#ffffff',
			'blue-violet': '#4A68F0',
			'yellow-chick': '#FFD121',
			'dark-blue': '#222831',
		},
	},
	plugins: [
		require('flowbite/plugin'),
		require('tailwindcss-animated')
	],
}
