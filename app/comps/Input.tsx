import React from "react";

const Input = () => {
	return (
		<div className='relative  w-full max-w-xs dark:text-gray-200/70'>
			<input
				id='email'
				type='email'
				className='peer w-full rounded border border-gray-400 bg-transparent px-3 py-2 text-gray-800 valid:text-black focus-visible:border-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-600 dark:border-gray-200/60 dark:valid:text-white dark:focus-visible:outline-gray-200/50'
			/>

			<label
				htmlFor='email'
				className='absolute inset-0 ml-2 h-fit w-fit -translate-y-4 bg-[#fafafa] px-1 text-gray-800 transition-transform peer-focus:font-semibold dark:bg-black dark:text-white dark:peer-focus:text-white'>
				Email
			</label>
		</div>
	);
};

export default Input;
