const { Frames, Animations, Animations2 } = require("./utils/animations");

/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: "class",
	content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				...Frames,
			},
			animation: {
				...Animations,
				...Animations2
			},
			colors: {
				primary: "#0f172a",
			},
			screens: {
				xs: "360px",
			},
		},
	},
	plugins: [],
};
