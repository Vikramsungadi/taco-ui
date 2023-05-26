import React from "react";

const Alerts = (props) => {
	return (
		<div
			className={`flex  w-full max-w-md items-center justify-center gap-4 rounded-md border border-sky-500 p-3 px-4 text-lg text-sky-500 dark:border-sky-700/60 dark:text-sky-700 max-sm:text-base max-[350px]:flex-col ${
				props.className ?? ""
			}`}>
			<span>
				{" "}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='aspect-square w-8 max-sm:w-6'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					fill='none'
					style={{ strokeLinecap: "round", strokeLinejoin: "round" }}>
					{" "}
					<path stroke='none' d='M0 0h24v24H0z' fill='none' /> <circle cx='12' cy='12' r='9' />{" "}
					<line x1='12' y1='8' x2='12' y2='12' /> <line x1='12' y1='16' x2='12.01' y2='16' />{" "}
				</svg>{" "}
			</span>
			This shows information
			<span className='ml-auto'>
				{" "}
				<svg
					xmlns='http://www.w3.org/2000/svg'
					className='aspect-square w-8 max-sm:w-6'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					fill='none'
					style={{ strokeLinecap: "round", strokeLinejoin: "round" }}>
					{" "}
					<path stroke='none' d='M0 0h24v24H0z' fill='none' /> <circle cx='12' cy='12' r='9' /> <path d='M10 10l4 4m0 -4l-4 4' />{" "}
				</svg>{" "}
			</span>
		</div>
	);
};

export default Alerts;
