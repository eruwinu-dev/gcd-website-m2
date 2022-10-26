/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: "jit",
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["'Rubik'"],
			serif: ["'Rubik'"],
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("tailwind-scrollbar")({ nocompatible: true }),
		require("@tailwindcss/line-clamp"),
	],
}

