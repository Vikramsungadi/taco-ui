import React from "react";
import { BsSun, BsMoonFill, BsFillEyeFill } from "react-icons/bs";
import ThemeButton from "@/utils/ThemeButton";
import { IoIosResize } from "react-icons/io";
import { MdOutlineCopyAll, MdTimer } from "react-icons/md";
import { GiSettingsKnobs } from "react-icons/gi";

const Features = () => {
	const features = [
		{
			title: "Dark Mode",
			description: (
				<p className='pr-4 text-sm/6 text-neutral-950 opacity-70 transition-opacity group-hover:opacity-100 dark:text-neutral-200'>
					Easily adopts to dark mode according to user settings or you can set manually. Checkout&nbsp;
					<span>
						<a
							href='https://tailwindcss.com/docs/dark-mode'
							target='_blank'
							className='group-hover:underline'>
							tailwind docs
						</a>
					</span>
					&nbsp;for more info.
				</p>
			),
			icon: (
				<ThemeButton>
					<BsMoonFill className='hidden h-full w-full -translate-y-[0.15rem] group-hover:text-slate-300 dark:inline-block' />
					<BsSun className='inline-block h-full w-full -translate-y-[0.15rem]  dark:hidden' />
				</ThemeButton>
			),
		},
		{
			title: "Responsive",
			description: "Every component is fully responsive and made to look good any screen",
			icon: <IoIosResize />,
		},
		{
			title: "Time Saving",
			description:
				"By using pre-built components, you can save time and effort in building and styling components from scratch.",
			icon: <MdTimer />,
		},
		{
			title: "Live Preview",
			icon: <BsFillEyeFill />,
			description:
				"Preview components in different screen sizes and toggle theme to view how it looks in dark mode.",
		},
		{
			title: "Easy Customization",
			icon: <GiSettingsKnobs />,
			description:
				"taco stands for tailwind-components, every component is built with tailwind. You can easily customise to match your design system. ",
		},
		{
			title: "Copy Paste",
			icon: <MdOutlineCopyAll />,
			description: "Copy code easily with copy option instead of selecting manually. ",
		},
	];

	return (
		<section className='mx-auto selection:bg-sky-400/80 selection:text-sky-950 dark:selection:bg-zinc-200 dark:selection:text-zinc-950'>
			<h2 className='group/title clip zinc-grad3 relative  mx-auto my-24 w-fit bg-zinc-950  font-sans text-6xl font-bold  max-sm:my-12'>
				Features
				<span className='clip absolute left-[25%] top-0 -translate-x-1/3 -translate-y-[40%] bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-[10rem] font-bold  opacity-0 transition-opacity duration-500 dark:group-hover/title:opacity-[0.25]'>
					taco
				</span>
			</h2>
			<div className='grid grid-cols-[repeat(auto-fit,minmax(auto,1fr))] justify-center gap-4  md:grid-cols-[repeat(auto-fit,minmax(0,22rem))]'>
				{features.map(({ title, icon, description }) => (
					<div key={title} className='feature-card group'>
						<div className='m-2 flex w-full flex-col gap-5'>
							<div className='flex items-center gap-4 '>
								<span className='aspect-square w-10 rounded-md border border-transparent p-2 shadow-sm transition-colors group-hover:border-zinc-50  group-hover:shadow dark:bg-black/20 dark:group-hover:border-neutral-700  [&>*]:h-full [&>*]:w-full'>
									{icon}
								</span>
								<h2 className='origin-left font-semibold transition-transform group-hover:scale-110 group-hover:font-bold'>
									{title}
								</h2>
							</div>
							{typeof description !== "string" ? (
								description
							) : (
								<p className='pr-4 text-sm/6 text-neutral-950 opacity-70 transition-opacity group-hover:opacity-100 dark:text-neutral-200'>
									{description}
								</p>
							)}
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Features;
