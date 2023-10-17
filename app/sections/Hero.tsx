import Link from "next/link";
import React, { CSSProperties } from "react";
import { Fira_Code } from "next/font/google";
import cn from "@/utils/cn";
const fira = Fira_Code({ subsets: ["latin"] });

const Hero = () => {
	let hueAnimVars = {
		"--hue-color": "60deg",
		"--hue-dur": "4s",
		"--delay": "0.5s",
	} as CSSProperties;

	const Span = ({
		children,
		delay,
		className,
	}: {
		children?: React.ReactNode;
		delay?: string;
		className?: string;
	}) => (
		<span
			style={{ "--delay": `${delay ?? ""}s` } as CSSProperties}
			className={cn("md:animate-opacity", "text-sky-700 dark:text-sky-500", className, fira.className)}>
			{children}
		</span>
	);
	return (
		<section
			style={hueAnimVars}
			className='relative z-10 flex flex-col items-center  justify-center gap-6 text-center max-md:py-14 md:animate-filter-color md:py-16 lg:py-[5.25rem]'>
			<h1
				className='z-10 mx-4 max-w-3xl text-[4rem]/[4rem]  font-bold max-md:text-5xl'
				style={{ textWrap: "balance" } as CSSProperties}>
				<span className='clip zinc-grad2 text-center'>
					Rapidly build <wbr /> websites with &nbsp;
				</span>
				<span className='clip color-grad1 animate-filter-color'>
					<wbr />
					pre-built <br /> components
				</span>
			</h1>

			<p className='mx-8 text-center text-lg opacity-80 max-md:text-base  max-sm:mt-4 max-sm:text-[0.9rem]'>
				A library packed with&nbsp;
				<Span className='!text-fuchsia-600 dark:!text-fuchsia-400'>tailwind components</Span> like
				<Span delay='0.5'>
					<Link
						className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500'
						href='/components/buttons'>
						&nbsp;buttons
					</Link>
					,
				</Span>
				<Span delay='2'>
					<Link
						className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500'
						href='/components/navbar'>
						&nbsp;navbars
					</Link>
					,
				</Span>
				<Span delay='1'>
					<Link
						className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500'
						href='/components/cards'>
						&nbsp;cards
					</Link>
					,
				</Span>
				<Span delay='2.5'>
					<Link
						className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500'
						href='/components/hero'>
						&nbsp;hero-sections&nbsp;
					</Link>
				</Span>
				and <br />
				<Span delay='3' className='!text-fuchsia-600 dark:!text-fuchsia-400'>
					<Link
						className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500'
						href='/components/features-section'>
						much more&nbsp;
					</Link>
				</Span>
				to build visually stunning websites quickly.
			</p>
			<div className=' explore z-0 mx-4 flex flex-wrap justify-center gap-8 py-4'>
				<Link className='btn max-sm:my-3' href={"/components"}>
					View Components
				</Link>
			</div>
		</section>
	);
};

export default Hero;
