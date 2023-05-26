export const Frames = {
	rotateColor: {
		"0%": { filter: "hue-rotate(0deg)" },
		"100%": { filter: "hue-rotate(var(--hue-color))" },
	},
	opacityFrames: {
		"0%": { opacity: 1 },
		"100%": { opacity: 0.2 },
	},
	skewFrames: {
		"0%": { transform: "skewY(90deg)" },
		"100%": { transform: "skewY(0deg)" },
	},
	scaleFrames: {
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
	scrollFrames: {
		"0%": { transform: "translateX(-200%)" },
		"100%": { transform: "translateX(0%)" },
	},
	scrollFramesReverse: {
		"0%": { transform: "translateX(100%)" },
		"100%": { transform: "translateX(0%)" },
	},
	ping2: {
		"75%,100%": { transform: "scale(1.2)" },
	},
	slideFromRightFrames: {
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

export const Animations = {
	"filter-color": "rotateColor var(--hue-dur) var(--delay) ease 2 alternate",
	opacity: "opacityFrames 1s ease alternate-reverse var(--delay) backwards",
	skew: "skewFrames 5s ease backwards",
	scale: "scaleFrames 5s ease backwards",
	scaleX: "scaleX 5s ease backwards",
	scaleXY: "scaleXY 5s ease backwards infinite alternate",
	ping2: "ping 2s cubic-bezier(0, 0, 0.2, 1)",
	scroll: "scrollFrames var(--dur) linear infinite",
	trans: "trans 3s ease-out infinite forwards",
	scrollRev: "scrollFramesReverse 150s ease-out",
	slideToLeft: "slideToLeft 4s ease-out forwards 1s",
	spin2: "spin 1s ease-out var(--repeat)",
	slideToRight: "slideToRight 4s ease-out forwards 1s",
	slideFromTop: "slideFromTop 0.55s cubic-bezier(0.6, 1.1, 0.5, 1.4)",
	slideFromRight: "slideFromRightFrames 0.5s ease-out var(--delay) backwards",
};
