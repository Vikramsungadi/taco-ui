import Link from "next/link";
import React from "react";
import { Fira_Code } from "next/font/google";
const fira = Fira_Code({ subsets: ["latin"] });

const Hero = () => {
	let hueAnimVars = {
		"--hue-color": "60deg",
		"--hue-dur": "4s",
		"--delay": "0.5s",
	};

	const Span = ({ children, delay, className }) => (
		<span
			style={{ "--delay": `${delay ?? ""}s` }}
			className={`animate-opacity ${fira.className} font-medium text-sky-700 dark:text-sky-500  ${className ?? ""}`}>
			{children}
		</span>
	);
	return (
		<div
			style={hueAnimVars}
			className='relative z-10 flex animate-filter-color flex-col items-center justify-center gap-6 text-center   max-md:py-14 md:py-16 lg:py-[5.25rem]'>
			<h1 className='z-10 mx-4 max-w-3xl text-[4rem]/[4rem]  font-bold max-md:text-5xl' style={{ textWrap: "balance" }}>
				<span className='clip zinc-grad2 text-center'>
					Rapidly build <wbr /> websites with a&nbsp;
				</span>
				<span className='clip color-grad1 animate-filter-color'>
					<wbr />
					pre-built <br /> components
				</span>
			</h1>

			<p className='mx-8 text-center text-lg  opacity-80  max-md:text-base max-sm:text-[0.9rem]'>
				A library packed with components like
				<Span delay='0.5'>
					<Link className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500' href='/components/buttons'>
						&nbsp;buttons
					</Link>
					,
				</Span>
				<Span delay='2'>
					<Link className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500' href='/components/navbar'>
						&nbsp;navbars
					</Link>
					,
				</Span>
				<Span delay='1'>
					<Link className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500' href='/components/cards'>
						&nbsp;cards
					</Link>
					,
				</Span>
				<Span delay='2.5'>
					<Link className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500' href='/components/hero'>
						&nbsp;hero-sections&nbsp;
					</Link>
				</Span>
				and <br />
				<Span delay='3' className='!text-fuchsia-600 dark:!text-fuchsia-400'>
					<Link className='focus-visible:ring-sky-700 dark:focus-visible:ring-sky-500' href='/components/features-section'>
						much more&nbsp;
					</Link>
				</Span>
				to build modern websites quickly with modern designs
			</p>
			<div className=' explore z-0 mx-4 flex flex-wrap justify-center gap-8 py-4'>
				<Link className='btn  max-sm:my-3' href={"/components"}>
					Components
				</Link>
				{/* <SearchBar placeholder='Search for components '>
						<BsSearch className='text-lg text-gray-400' />
					</SearchBar> */}
			</div>
		</div>
	);
};

export default Hero;
