"use client";
import { useRouter } from "next/navigation";

const NotFound = () => {
	const router = useRouter();
	return (
		<section className='group mx-auto  flex flex-col gap-10 py-6 text-center [--text-color:black] dark:[--text-color:white]'>
			<div className='relative isolate mt-32 rounded-xl text-9xl font-bold text-[var(--text-color)] transition-[text-shadow] duration-500 dark:group-hover:[text-shadow:5px_5px_red,8px_8px_blue]'>
				404
			</div>
			<p className='text-lg font-semibold text-[var(--text-color)]'>
				Page you&apos;re looking for is not found
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

export default NotFound;
