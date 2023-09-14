import React from "react";

const Input2 = () => {
	return (
		<div className='grid w-full max-w-sm gap-1 dark:text-gray-200'>
			<label htmlFor='email'>Email</label>
			<input
				id='email'
				type='email'
				className='rounded border border-gray-500 bg-transparent px-3 py-2 placeholder:font-normal placeholder:text-gray-500 focus-visible:border-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-gray-600 dark:border-gray-200/60 dark:focus-visible:outline-gray-200/50'
				placeholder='Email'
			/>
			<p className='text-black/70 dark:text-gray-300/70'>Enter email address</p>
		</div>
	);
};

export default Input2;
