"use client";
import React, { useEffect } from "react";

const ThemeDetector = () => {
	useEffect(() => {
		let hasTheme = localStorage.getItem("taco-theme");

		if (hasTheme) {
			document.documentElement.className = hasTheme;
		} else {
			document.documentElement.className = "dark";
		}
	}, []);
	return <></>;
};

export default ThemeDetector;
