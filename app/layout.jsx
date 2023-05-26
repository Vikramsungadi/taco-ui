import Nav from "@/app/sections/Nav";
import "./globals.css";
import "../scss/index.scss";
import { Inter } from "next/font/google";
import { CodeProvider } from "@/context/code-context";
import Footer from "./sections/Footer";
import ThemeDetector from "@/lib/ThemeDetector";
import { SITE_URL } from "@/utils/URL";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Taco - Component Library",
	description: "tailwindcss components to buid websites rapidly.",
	openGraph: {
		title: "Taco - Component Library",
		description: "Rapidly build websites with pre-built components",
		url: SITE_URL,
		siteName: "taco",
		type: "website",
	},
};

export default function RootLayout({ children }) {
	return (
		<CodeProvider>
			<html lang='en' className='dark'>
				<body
					className={`${inter.className} relative mx-auto max-w-[90rem]  bg-gradient-to-r from-sky-200/30 via-white   to-fuchsia-200/30  bg-repeat-y  pb-10 backdrop-blur-lg  selection:bg-fuchsia-500 selection:text-fuchsia-50 dark:bg-gradient-to-br  dark:from-zinc-950 dark:to-zinc-950 max-lg:[&>*]:overflow-x-hidden  `}>
					<Nav />
					<ThemeDetector />
					{children}
					<Footer />
				</body>
			</html>
		</CodeProvider>
	);
}
