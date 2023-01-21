/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: "jit",
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			sans: ["'Rubik'"],
			serif: ["'Rubik'"],
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
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

