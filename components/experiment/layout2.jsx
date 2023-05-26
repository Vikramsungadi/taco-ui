// import { categories } from "@/data";
import Link from "next/link";
import SideBar from "@/components/ui/StyledDiv";
import { baseUrl } from "@/utils/baseurl";

const Componentlayout = async ({ children, params, ...props }) => {
	const data = await fetch(`${baseUrl}/category`);
	const categories = await data.json();
	// console.log(categories);

	const NavLinks = categories.map(({ _id, name }) => (
		<SideBar className='nav-item flex flex-col' params={params} key={_id}>
			<Link href={`/${name.toLowerCase()}`}>{name.charAt(0) + name.substring(1).toLowerCase().split("-").join(" ")}</Link>
		</SideBar>
	));

	return (
		<main className='mx-auto grid grid-cols-[auto_1fr] gap-6 px-3 max-sm:grid-cols-1'>
			<nav className='sticky top-4 m-4 h-fit rounded-md  px-3 py-2 backdrop-blur-sm'>{NavLinks}</nav>
			{children}
		</main>
	);
};

export default Componentlayout;
// <SideBar className='nav-item flex flex-col' params={params} key={category}>
// 	<a>{category}</a>
// 	{items.map((item) => (
// 		<Link key={item} href={`/${item.toLowerCase()}`}>
// 			{item}
// 		</Link>
// 	))}
// </SideBar>;
