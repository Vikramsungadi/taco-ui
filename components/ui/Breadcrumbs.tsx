import Link from "next/link";
import React from "react";
import HomeIcon from "@/public/icons/HomeIcon";

type Props = {
	/**
	 * @description  [Label, path]
	 */
	Links: [string, string][];
};

const Breadcrumbs = ({ Links, ...props }: Props) => {
	return (
		<ul className='flex w-full flex-wrap items-center gap-1 text-zinc-900 dark:text-zinc-50 max-md:text-xs'>
			{Links.map(([name, link], idx) => {
				let lastItem = idx === Links.length - 1;
				let firstItem = idx === 0;
				return (
					<li
						key={name}
						className={`${
							lastItem ? "pointer-events-none  cursor-text md:ml-auto" : ""
						} flex items-center`}>
						<Link href={link} className='focus-ring inline-flex items-center gap-2'>
							{/* prettier-ignore */}
							<span>
              {firstItem && <HomeIcon />}
					    {!firstItem && <span className={`${idx === Links.length-1 ? "md:hidden" : ""} px-2`}>/</span>}
						</span>
							<span
								className={`${
									lastItem ? "text-lg font-semibold hover:no-underline md:text-4xl" : ""
								} hover:underline`}>
								{name}
							</span>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Breadcrumbs;
