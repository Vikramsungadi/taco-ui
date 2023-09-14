import ComponentsIcon from "@/icons/ComponentsIcon";
import HomeIcon from "@/icons/HomeIcon";
import NavbarIcon from "@/icons/HomeIcon";
import Link from "next/link";
import React from "react";
type Props = {
	className?: string;
};
const Breadcrumbs = (props: Props) => {
	return (
		<ul
			className={`flex items-center gap-3 text-zinc-900 dark:text-zinc-50 ${
				props.className ?? ""
			}`}>
			<li>
				<Link href='/' className='inline-flex items-center gap-2'>
					<span>
						<HomeIcon />
					</span>
					<span className='hover:underline'>Home</span>
				</Link>
			</li>
			<li>
				<Link href='/components' className='inline-flex items-center gap-1.5'>
					<span className='px-2 font-semibold'>&gt;</span>
					<span>
						<ComponentsIcon />
					</span>
					<span className='hover:underline'>Components</span>
				</Link>
			</li>
			<li>
				<Link href='/components/navbar' className='inline-flex items-center gap-1.5'>
					<span className='px-2 font-semibold'>&gt;</span>
					<span>
						<NavbarIcon />
					</span>
					<span className='hover:underline'>Navbar</span>
				</Link>
			</li>
		</ul>
	);
};

export default Breadcrumbs;
