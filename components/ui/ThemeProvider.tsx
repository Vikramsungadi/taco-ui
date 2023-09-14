"use client";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface Props {
	children?: React.ReactNode;
}

const ThemeProvider = (props: Props) => {
	return (
		<NextThemeProvider attribute='class' storageKey='taco-theme' disableTransitionOnChange>
			{props.children}
		</NextThemeProvider>
	);
};

export default ThemeProvider;
