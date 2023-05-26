"use client";

const ThemeButton = ({ children, ...props }) => {
	return (
		<button
			{...props}
			aria-label='change theme'
			onClick={() => {
				if (document.documentElement.classList.contains("light")) {
					document.documentElement.className = "dark";
					localStorage.setItem("taco-theme", "dark");
				} else {
					document.documentElement.className = "light";
					localStorage.setItem("taco-theme", "light");
				}
			}}>
			{children}
		</button>
	);
};

export default ThemeButton;
