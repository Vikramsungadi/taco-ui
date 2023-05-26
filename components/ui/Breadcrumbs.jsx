import Link from "next/link";
import React from "react";

const Breadcrumbs = ({ Links, ...props }) => {
	return (
		<ul className='flex w-full flex-wrap items-center gap-1 text-zinc-900 dark:text-zinc-50 max-md:text-xs'>
			{Links.map(([name, link], idx) => {
				let lastItem = idx === Links.length - 1;
				let firstItem = idx === 0;
				return (
					<li key={name} className={`${lastItem ? "pointer-events-none  cursor-text md:ml-auto" : ""} flex items-center`}>
						<Link href={link} className='focus-ring inline-flex items-center gap-2'>
							{/* prettier-ignore */}
							<span>
              {firstItem && <svg xmlns='http://www.w3.org/2000/svg' className='aspect-square w-5' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round'> <path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' /> <polyline points='9 22 9 12 15 12 15 22' /> </svg>}
					    {!firstItem && <span className={`${idx === Links.length-1 ? "md:hidden" : ""} px-2`}>/</span>}
						</span>
							<span className={`${lastItem ? "text-lg font-semibold hover:no-underline md:text-4xl" : ""} hover:underline`}>
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
