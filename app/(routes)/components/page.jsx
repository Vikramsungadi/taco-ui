import Image from "next/image";
import React from "react";
import alerts from "@/public/Banners-SVG/banner-alerts.svg";
import avatars from "@/public/Banners-SVG/banner-avatars.svg";
import breadcrumbs from "@/public/Banners-SVG/banner-breadcrumbs.svg";
import searchbars from "@/public/Banners-SVG/banner-searchbar.svg";
import buttons from "@/public/Banners-SVG/banner-buttons.svg";
import cards from "@/public/Banners-SVG/banner-card.svg";
import footers from "@/public/Banners-SVG/banner-footer.svg";
import input from "@/public/Banners-SVG/banner-input.svg";
import navbar from "@/public/Banners-SVG/banner-navbar.svg";
import pricing from "@/public/Banners-SVG/banner-pricing.svg";
import sidebar from "@/public/Banners-SVG/banner-sidebar.svg";
import signup from "@/public/Banners-SVG/banner-signin.svg";
import signin from "@/public/Banners-SVG/banner-signup.svg";
import banner404 from "@/public/Banners-SVG/banner-404.svg";
import faq from "@/public/Banners-SVG/banner-faq.svg";
import Features from "@/public/Banners-SVG/banner-Features.svg";
import Gridlayout from "@/public/Banners-SVG/banner-Gridlayout.svg";
import newsletter from "@/public/Banners-SVG/banner-Newsletter.svg";
import testimonials from "@/public/Banners-SVG/banner-Testimonial.svg";
import toggle from "@/public/Banners-SVG/banner-toggle.svg";
import hero from "@/public/Banners-SVG/banner-hero.svg";
import logoclouds from "@/public/Banners-SVG/banner-logoclouds.svg";

import Link from "next/link";
import fetchCategories from "@/lib/fetchCategories";
import { capitalize, unSlugify } from "@/utils/helpers";
import { SITE_URL } from "@/utils/URL";

export const metadata = {
	title: "50+ Components: Taco Component Library",
	description: "20+ component categories and 50+ tailwind components",
	openGraph: {
		title: "Component Categories - Taco Component Library",
		description: "Beautiful and Responsive ui components in categories.",
		url: `${SITE_URL}/components`,
		siteName: "taco",
		type: "website",
	},
};

const Page = async () => {
	//prettier-ignore
	const images = {
		alerts, avatars, breadcrumbs, buttons, cards, footers, navbar, pricing, sidebar,
		searchbars, faq, testimonials, newsletter, hero,
		"logo-clouds":logoclouds,
		"form-inputs": input,
		"sign-in": signin,
		"sign-up": signup,
		"features-section":Features,
		"grid-layout":Gridlayout,
		"toggle-buttons":toggle,
		"error":banner404,

	};
	const categories = await fetchCategories();
	categories.sort((a, b) => a.name.localeCompare(b.name));

	const NavLinks =
		categories &&
		categories.map(({ _id, name }) => (
			<Link
				key={_id}
				aria-label={`explore more ${name} components`}
				href={`/components/${name.toLowerCase()}`}
				className='mt-1 inline-block max-w-[20ch] cursor-pointer rounded-md p-2 text-[0.8rem] font-semibold text-zinc-900 transition-colors duration-300 hover:bg-sky-200 hover:text-sky-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'>
				{unSlugify(name)}
			</Link>
		));

	return (
		<>
			<main className='mx-auto mt-10 grid scroll-smooth px-3 max-lg:mx-auto max-lg:grid-cols-1 max-sm:px-0 lg:grid-cols-[1fr_auto]'>
				<section className='my-3 grid grid-cols-[repeat(auto-fit,minmax(0,18rem))] items-center justify-center gap-6 p-3 max-lg:grid-cols-[repeat(auto-fit,minmax(15rem,0.9fr))]'>
					{categories &&
						categories.map(({ _id, name }, index) => (
							<Link key={_id} href={`/components/${name.toLowerCase()}`}>
								<div
									// style={{ "--delay": `${index * 0.1}s` }} animate-slideFromRight
									className='group relative flex  cursor-pointer flex-col gap-3 rounded-lg bg-white p-2  transition-transform before:absolute before:inset-0 before:-z-10 before:h-[101%] before:w-[101%] before:-translate-x-[0.5%] before:-translate-y-[0.5%] before:rounded-lg before:bg-gradient-to-tr before:from-zinc-200  before:via-zinc-50   before:to-zinc-200 before:p-2 before:opacity-0 before:transition-[opacity,transform]  hover:before:opacity-100 hover:before:shadow-[0_0_15px_#fafafa] dark:bg-zinc-900  dark:before:bg-gradient-radial  dark:before:from-neutral-700   dark:before:via-neutral-400/90 dark:before:to-neutral-900   dark:hover:before:shadow-[0_0_15px_#111] max-sm:mx-2 '>
									<div className='w-full overflow-hidden'>
										<Image
											src={images[name.toLowerCase()]}
											alt={`${name} banner`}
											className='aspect-[852/615] w-full rounded-t-md  bg-gradient-to-tr  from-cyan-200/60 to-fuchsia-200/60  object-cover    group-hover:!bg-blend-color-burn dark:from-zinc-200 dark:to-zinc-300 dark:group-hover:from-zinc-100 dark:group-hover:to-zinc-100 '
										/>
									</div>
									<h2 className='origin-left rounded-md px-2 py-1 font-medium text-zinc-500 transition-transform group-hover:scale-110 group-hover:font-bold dark:text-zinc-400 dark:group-hover:text-zinc-100'>
										{capitalize(name)}
									</h2>
								</div>
							</Link>
						))}
				</section>
				<nav
					aria-label='Component category navigation links'
					role='navigation'
					className='scrollbar-thin sticky top-0 m-4 flex h-fit max-h-[calc(100vh-(72.8px+48px))] flex-col overflow-y-auto  rounded-md px-2 py-2 text-[0.6rem]  max-lg:hidden'>
					{NavLinks ?? ""}
				</nav>
			</main>
		</>
	);
};

export default Page;
// aspect-[852/615] w-full rounded-t-md  bg-gradient-to-tr  from-cyan-100 to-fuchsia-100  object-cover transition-colors   group-hover:!bg-blend-color-burn dark:from-zinc-200 dark:to-zinc-300 dark:group-hover:from-zinc-100 dark:group-hover:to-zinc-100
