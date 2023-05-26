import React from "react";

const Breadcrumbs = (props) => {
	return (
		<ul className={`flex items-center gap-3 text-zinc-900 dark:text-zinc-50 ${props.className ?? ""}`}>
			<li>
				<a className='inline-flex items-center gap-2'>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='aspect-square w-5'
							viewBox='0 0 24 24'
							fill='none'
							stroke='currentColor'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'>
							{" "}
							<path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' /> <polyline points='9 22 9 12 15 12 15 22' />{" "}
						</svg>{" "}
					</span>
					<span className='hover:underline'>Home</span>
				</a>
			</li>
			<li>
				<a href='#' className='inline-flex items-center gap-1.5'>
					<span className='px-2 font-semibold'>&gt;</span>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='aspect-square w-6'
							width='44'
							height='44'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'>
							{" "}
							<path stroke='none' d='M0 0h24v24H0z' fill='none' />{" "}
							<path d='M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z' />{" "}
							<path d='M12 12l4 -2.25l4 -2.25' /> <line x1='12' y1='12' x2='12' y2='21' /> <path d='M12 12l-4 -2.25l-4 -2.25' />{" "}
							<path d='M20 12l-4 2v4.75' /> <path d='M4 12l4 2l0 4.75' /> <path d='M8 5.25l4 2.25l4 -2.25' />{" "}
						</svg>
					</span>
					<span className='hover:underline'>Components</span>
				</a>
			</li>
			<li>
				<a href='#' className='inline-flex items-center gap-1.5'>
					<span className='px-2 font-semibold'>&gt;</span>
					<span>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='aspect-square w-6'
							width='44'
							height='44'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							fill='none'
							strokeLinecap='round'
							strokeLinejoin='round'>
							{" "}
							<path stroke='none' d='M0 0h24v24H0z' fill='none' /> <rect x='4' y='4' width='16' height='16' rx='2' />{" "}
							<line x1='4' y1='9' x2='20' y2='9' />
						</svg>
					</span>
					<span className='hover:underline'>Navbar</span>
				</a>
			</li>
		</ul>
	);
};

export default Breadcrumbs;
