import React, { forwardRef } from "react";

type Props = {
	children?: React.ReactNode;
	className?: string;
};

const SearchBar = forwardRef(function SearchBar({ children, className, ...props }: Props, ref: any) {
	return (
		<div
			className={`flex grow-0 items-center justify-start gap-2 rounded-md border border-gray-300 bg-white py-0 pl-3 pr-1 shadow-sm peer-focus-within:outline-slate-400 ${className}`}>
			{children}
			<input
				ref={ref}
				type='search'
				role='searchbox'
				className='peer w-[70%] bg-transparent px-1 text-primary outline-none'
				{...props}
			/>
		</div>
	);
});

export default SearchBar;
