import React from "react";
import Image from "next/image";
import Link from "next/link";
// prettier-ignore
import {
	alerts, avatars, breadcrumbs, searchbars, buttons, cards, footers, input, navbar, pricing,
	sidebar, signup, signin, banner404, faq, Features, Gridlayout, newsletter, testimonials, 
	toggle, hero, logoclouds
} from "@/public/Banners";

import { capitalize, unSlugify } from "@/utils/helpers";
import { SITE_URL } from "@/utils/URL";
import Render from "@/components/ui/Render";
import { CategoryResponse } from "@/types/apiTypes";
import fetchCategories from "@/lib/fetchCategories";

export const metadata = {
	title: "50+ Components: Taco Component Library",
	description: "20+ categories and 50+ components",
	openGraph: {
		title: "Taco - Components",
		description: "Beautiful and Responsive UI components in categories.",
		url: `${SITE_URL}/components`,
		siteName: "taco",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Taco - Components",
		description: "Beautiful and Responsive UI components in categories.",
		creator: "@sungadivikram1",
	},
};

const Page = async () => {
	//prettier-ignore
	const images = {
		alerts, avatars, breadcrumbs, buttons, cards, footers, navbar, 
		pricing, sidebar, searchbars, faq, testimonials, newsletter, hero,
		"logo-clouds": logoclouds,
		"form-inputs": input,
		"sign-in": signin,
		"sign-up": signup,
		"features-section": Features,
		"grid-layout": Gridlayout,
		"toggle-buttons": toggle,
		"error": banner404,

	} as const;

	const categories: CategoryResponse[] = await fetchCategories();
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
		<main className='mx-auto mt-10 grid scroll-smooth px-3 max-lg:mx-auto max-lg:grid-cols-1 max-sm:px-0 lg:grid-cols-[1fr_auto]'>
			<section className='my-3 grid grid-cols-[repeat(auto-fit,minmax(0,18rem))] items-center justify-center gap-6 p-3 max-lg:grid-cols-[repeat(auto-fit,minmax(15rem,0.9fr))]'>
				<Render if={categories.length > 0}>
					{categories.map(({ _id, name }, index) => (
						<Link key={_id} href={`/components/${name.toLowerCase()}`}>
							<div className='group relative flex  cursor-pointer flex-col gap-3 rounded-lg bg-white p-2  transition-transform before:absolute before:inset-0 before:-z-10 before:h-[101%] before:w-[101%] before:-translate-x-[0.5%] before:-translate-y-[0.5%] before:rounded-lg before:bg-gradient-to-tr before:from-zinc-200  before:via-zinc-50   before:to-zinc-200 before:p-2 before:opacity-0 before:transition-[opacity,transform]  hover:before:opacity-100 hover:before:shadow-[0_0_15px_#fafafa] dark:bg-zinc-900  dark:before:bg-gradient-radial  dark:before:from-neutral-700   dark:before:via-neutral-400/90 dark:before:to-neutral-900   dark:hover:before:shadow-[0_0_15px_#111] max-sm:mx-2 '>
								<div className='w-full overflow-hidden'>
									<Image
										src={images[name.toLowerCase() as keyof typeof images]}
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
				</Render>
			</section>
			<nav
				aria-label='Component category navigation links'
				role='navigation'
				className='scrollbar-thin sticky top-0 m-4 flex h-fit max-h-[calc(100vh-(72.8px-40px))] flex-col overflow-y-auto  rounded-md px-2 py-2 text-[0.6rem]  max-lg:hidden'>
				{NavLinks ?? ""}
			</nav>
		</main>
	);
};

export default Page;
