"use client";
import { capitalize } from "@/utils/helpers";
import React from "react";

type Props = {
	className?:string;
	name?:string;
	data:string;
	isActive?:boolean;
	isActiveStyles?:string;
	children:React.ReactNode
	onClick:any
}

const Icon = ({ className, name, data, isActive, isActiveStyles, ...props }:Props) => {
	return (
		<button
			data-val={data}
			onClick={props.onClick}
			className={` ${className ?? ""} ${
				isActive &&
				(isActiveStyles ??
					"border-zinc-300 bg-white text-zinc-950 shadow  transition-all dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-100")
			} focus-ring flex cursor-pointer items-center gap-1 rounded border border-gray-100 px-2 py-1  text-[0.65rem]  hover:bg-zinc-200/80  hover:text-sky-950  active:scale-[0.98] dark:border-transparent dark:text-zinc-400  dark:hover:bg-zinc-700 dark:hover:text-zinc-300 `}>
			{props.children}
			<span className='pointer-events-none max-md:hidden'>{capitalize(data)}</span>
		</button>
	);
};

export default Icon;
