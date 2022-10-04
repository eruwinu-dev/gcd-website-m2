/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: "jit",
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["'Merriweather Sans'"],
			serif: ["'Merriweather Sans'"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("tailwind-scrollbar")({ nocompatible: true })],
}

