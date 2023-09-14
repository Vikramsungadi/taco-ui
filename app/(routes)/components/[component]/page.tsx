import CodeComponent from "@/components/code/code-component/CodeComponent";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import fetchCategories from "@/lib/fetchCategories";
import { fetchComponentsByFilter } from "@/lib/fetchComponent";
import { SITE_URL } from "@/utils/URL";
import { CapsWord, capitalize, unSlugify } from "@/utils/helpers";

export async function generateMetadata({ params }:{params:Params}) {
	let lastIndex = params.component.length - 1;
	let lastChar = params.component.charAt(lastIndex);
	let component = lastChar === "s" ? CapsWord(params.component.substring(0, lastIndex)) : CapsWord(params.component);
	return {
		title: `${component} Components: Taco Component Library`,
		description: `Responsive ${component} components made with tailwind css and supports dark mode`,
		openGraph: {
			title: `${component} Components  - Taco Component Library`,
			description: `Beautiful and Responsive ${component} components.`,
			url: `${SITE_URL}/components/${params.component}`,
			siteName: "taco",
		},
		twitter: {
			card: "summary_large_image",
			title: `${component} Components`,
			description: `Beautiful and Responsive ${component} components.`,
			creator: "@sungadivikram1",
		},
	};
}
const Page = async ({ params, ...props }:{params:Params}) => {
	const filteredData = await fetchComponentsByFilter({ category: params.component });

	if (filteredData.length === 0) throw new Error("No data found.");

	// const NavLinks = filteredData.map(({ _id, name }) => (
	// 	<a
	// 		key={_id}
	// 		aria-label={`Scroll to ${name} component`}
	// 		href={`#${name.toLowerCase()}`}
	// 		className='mt-1 inline-block max-w-[20ch] cursor-pointer rounded-md p-2 text-[0.8rem] font-semibold text-zinc-900 transition-colors duration-300 hover:bg-sky-200 hover:text-sky-800 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-50'>
	// 		{unSlugify(name)}
	// 	</a>
	// ));

	return (
		<main>
			<nav className='mb-6 mt-12 p-2 ' role='navigation' aria-label='breadcrumbs'>
				<Breadcrumbs
					Links={[
						["Home", "/"],
						["Components", "/components"],
						[capitalize(unSlugify(params.component)), `/components/${params.component}`],
					]}
				/>
			</nav>
			<section className='mx-auto grid  scroll-smooth px-3 max-lg:mx-auto max-lg:grid-cols-1 max-sm:px-0 lg:grid-cols-[1fr_auto]'>
				<div className='component mx-auto flex w-full  flex-col gap-14 !scroll-smooth  transition-all '>
					{filteredData.map((props:any) => (
						<div className='my-2 first-of-type:pt-2  max-lg:px-2' id={props.name.toLowerCase()} key={props._id}>
							<label className='w-fit  text-base font-medium '>{props.name}</label>
							<CodeComponent {...props} />
						</div>
					))}
				</div>
				{/* <nav className='sticky top-0 m-4 flex h-fit flex-col rounded-md px-2 py-2 text-[0.6rem]  max-lg:hidden'>
				{NavLinks ?? ""}
			</nav> */}
			</section>
		</main>
	);
};

export default Page;
export async function generateStaticParams() {
	const data = await fetchCategories();
	return data.map(({ name }: { name: string }):Params  => ({ component: name }));
};

type Params = { component: string; }