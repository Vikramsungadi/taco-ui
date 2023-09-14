"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface Props {
	children?: React.ReactNode;
}
const ThemeButton = ({ children, ...props }: Props) => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	function toggleTheme() {
		if (theme === "light") return setTheme("dark");
		setTheme("light");
	}

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<button {...props} aria-label='change theme'>
				{children}
			</button>
		);
	}

	return (
		<button {...props} aria-label='change theme' onClick={toggleTheme}>
			{children}
		</button>
	);
};

export default ThemeButton;
