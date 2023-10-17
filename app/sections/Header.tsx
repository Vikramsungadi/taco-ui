import Logo from "@/public/Logo";
import ThemeButton from "@/utils/ThemeButton";
import Link from "next/link";
import { BsSunFill, BsMoonStarsFill } from "react-icons/bs";

const Nav = () => {
	return (
		<header
			className='relative isolate z-10 flex items-center justify-between  border-b  px-8  py-5 backdrop-blur-lg  dark:border-zinc-800  dark:text-zinc-300  dark:hover:text-zinc-100    [&>*]:relative [&>*]:z-20'
			role='banner'
			aria-label='main navigation'>
			<Link href='/' aria-label='navigate to home' className='-translate-y-1'>
				<Logo className='aspect-[97/33] h-6 translate-y-0.5 sm:h-8' />
			</Link>
			<nav className='group flex items-center justify-center gap-6 text-sm font-semibold '>
				<Link
					href='/components'
					className='cursor-pointer transition-colors hover:text-sky-500 dark:hover:text-zinc-50 '>
					Components
				</Link>
				<ThemeButton>
					<BsMoonStarsFill className='hidden animate-spin2 dark:inline-block' />
					<BsSunFill className='inline-block animate-spin2 [--repeat:2] dark:hidden' />
				</ThemeButton>
			</nav>
		</header>
	);
};

export default Nav;
