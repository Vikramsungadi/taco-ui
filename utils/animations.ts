export const Frames = {
	"filter-color": {
		"0%": { filter: "hue-rotate(0deg)" },
		"100%": { filter: "hue-rotate(var(--hue-color))" },
	},
	opacity: {
		"0%": { opacity: 1 },
		"100%": { opacity: 0.2 },
	},
	skew: {
		"0%": { transform: "skewY(90deg)" },
		"100%": { transform: "skewY(0deg)" },
	},
	scale: {
		"0%": { transform: "scale(0)" },
		"100%": { transform: "scale(1)" },
	},
	scaleX: {
		"0%": { transform: "scaleX(0)" },
		"100%": { transform: "scaleX(1)" },
	},
	scaleXY: {
		"0%": { transform: "scaleX(0.75) scaleY(0.75)" },
		"100%": { transform: "scaleX(1) scaleY(1)" },
	},
	scroll: {
		"0%": { transform: "translateX(-200%)" },
		"100%": { transform: "translateX(0%)" },
	},
	scrollReverse: {
		"0%": { transform: "translateX(100%)" },
		"100%": { transform: "translateX(0%)" },
	},
	ping2: {
		"75%,100%": { transform: "scale(1.2)" },
	},
	slideFromRight: {
		"0%": { transform: "translate(0,2rem)", opacity: "0" },
		"100%": { transform: "translate(0,0)", opacity: "1" },
	},
	slideToRight: {
		"0%": { transform: "translateX(50%)", opacity: "1" },
		"100%": { transform: "translateX(100%)", opacity: "0.9" },
	},
	slideToLeft: {
		"0%": { transform: "translateX(-50%)", opacity: "1" },
		"100%": { transform: "translateX(-100%)", opacity: "0.9" },
	},
	slideFromTop: {
		"0%": { transform: "translateY(-6rem)", opacity: "0" },
		"100%": { transform: "translateY(0)", opacity: "1" },
	},

	trans: {
		"0%": { opacity: "0" },
		"24%": { opacity: "0", width: "0" },
		"50%": { transform: "translateX(0)", opacity: "1" },
		"62.5%": { width: "100%" },
		"75%": { transform: "translateX(calc(90rem - 100%))", opacity: "1", width: "0" },
		"74%": { opacity: "0" },
		"100%": { opacity: "0" },
	},
};

export const Animations: Record<keyof typeof Frames, string> = {
	"filter-color": "rotateColor var(--hue-dur) var(--delay) ease 2 alternate",
	opacity: "opacity 1s ease alternate-reverse var(--delay) backwards",
	skew: "skew 5s ease backwards",
	scale: "scale 5s ease backwards",
	scaleX: "scaleX 5s ease backwards",
	scaleXY: "scaleXY 5s ease backwards infinite alternate",
	scroll: "scroll var(--dur) linear infinite",
	scrollReverse: "scrollReverse 150s ease-out",
	ping2: "ping 2s cubic-bezier(0, 0, 0.2, 1)",
	slideFromRight: "slideFromRight 0.5s ease-out var(--delay) backwards",
	slideToRight: "slideToRight 4s ease-out forwards 1s",
	slideToLeft: "slideToLeft 4s ease-out forwards 1s",
	slideFromTop: "slideFromTop 0.55s cubic-bezier(0.6, 1.1, 0.5, 1.4)",
	trans: "trans 3s ease-out infinite forwards",
};

export const Animations2 = {
	spin2: "spin 1s ease-out var(--repeat)",
};
