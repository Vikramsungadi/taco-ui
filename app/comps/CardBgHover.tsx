import React from "react";

const CardBgHover = () => {
	return (
		<div className='group group isolate z-20 grid w-full max-w-sm gap-5 rounded-lg bg-white px-4 pb-6 pt-5 text-zinc-950 shadow-md ring-1 ring-zinc-200 backdrop-blur-sm before:absolute before:-z-10 before:h-full before:w-full before:rounded-lg before:bg-blue-500/10 before:transition-transform after:absolute after:z-10 after:h-full after:w-full after:rounded-lg after:bg-white hover:ring-zinc-300 hover:before:rotate-6 dark:bg-black dark:text-zinc-50 dark:ring-zinc-800 dark:after:bg-black dark:hover:ring-zinc-700'>
			<div className='z-20 flex flex-col gap-3'>
				{/* prettier-ignore */}
				<span className='w-fit rounded-full bg-blue-300/20 p-2 shadow-sm transition-colors group-hover:bg-blue-500/20 dark:bg-blue-500/10'> <svg className='h-8 w-8' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor'> <path strokeLinecap='round' strokeLinejoin='round' d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5' /> </svg> </span>
				<span className='text-xl font-semibold'>Super Fast</span>
			</div>
			<p className='z-20 text-base/7 opacity-70'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem architecto quidem nulla
			</p>
		</div>
	);
};

export default CardBgHover;
