import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "../styles/index.scss";
import "./globals.css";

import { CodeProvider } from "@/context/code-context";
import ThemeProvider from "@/components/ui/ThemeProvider";

import { SITE_URL } from "@/utils/URL";
import Footer from "@/app/sections/Footer";
import Header from "@/app/sections/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Taco - Component Library",
	description: "Tailwind component library to build websites rapidly",
	openGraph: {
		title: "Taco",
		description: "Tailwind component library to build websites rapidly",
		url: SITE_URL,
		siteName: "taco",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Taco",
		description: "Tailwind component library to build websites rapidly",
		creator: "@sungadivikram1",
	},
};

type Props = {
	children?: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<CodeProvider>
			<html lang='en' className='dark'>
				<body
					className={`${inter.className} relative mx-auto max-w-[90rem]  bg-gradient-to-r from-sky-200/30 via-white   to-fuchsia-200/30  bg-repeat-y  pb-10 backdrop-blur-lg  selection:bg-fuchsia-500 selection:text-fuchsia-50 dark:bg-gradient-to-br  dark:from-zinc-950 dark:to-zinc-950 max-lg:[&>*]:overflow-x-hidden  `}>
					<ThemeProvider>
						<Header />
						{children}
						<Footer />
					</ThemeProvider>
					<Analytics />
				</body>
			</html>
		</CodeProvider>
	);
}
