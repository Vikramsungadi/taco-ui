"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Error = () => {
	const router = useRouter();
	return (
		<section className='group mx-auto flex h-[70vh] flex-col gap-10 py-6 text-center [--text-color:black] dark:[--text-color:white]'>
			<div className='relative isolate mx-auto mt-10 grid rounded-xl text-4xl font-bold text-[var(--text-color)] transition-[text-shadow] duration-500 dark:group-hover:[text-shadow:5px_5px_red,8px_8px_blue] md:mt-32 md:text-6xl lg:max-w-[15ch] lg:text-7xl'>
				Oops! Something went wrong
			</div>
			<p className='text-sm font-normal text-[var(--text-color)]  md:text-lg md:font-semibold '>
				If it is from our side. we will fix it asap
			</p>
			<div className='flex items-center justify-center gap-6 font-semibold'>
				<button
					onClick={() => {
						router.back();
					}}
					className='rounded px-[0.9rem] py-[0.35rem] pb-[0.45rem] text-base text-[var(--text-color)] transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-black/50 active:scale-95 dark:hover:bg-gray-200/10 dark:focus-visible:outline-white/40'>
					Go back
				</button>
				<button
					onClick={() => {
						router.push("/");
					}}
					className='rounded px-[0.9rem] py-[0.35rem] pb-[0.45rem] text-base text-[var(--text-color)] transition-colors hover:bg-gray-200 focus-visible:outline focus-visible:outline-black/50 active:scale-95 dark:hover:bg-gray-200/10 dark:focus-visible:outline-white/40'>
					Home
				</button>
			</div>
		</section>
	);
};

export default Error;
