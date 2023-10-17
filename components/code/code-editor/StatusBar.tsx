"use client";
import srcCodeContext from "@/context/code-context";
import fetchCategories from "@/lib/fetchCategories";
import { CategoryResponse } from "@/types/apiTypes";
import { languages } from "@/types/types";
import { API_URL } from "@/utils/URL";
import cn from "@/utils/cn";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

interface Props {
	isFocused: Record<languages, boolean>;
	handleFocus: any;
	setAddingComponent: React.Dispatch<React.SetStateAction<boolean>>;
	edit?: boolean;
	id: string;
}

export default function StatusBar({
	handleFocus,
	isFocused: { html, css, javascript, react },
	...props
}: Props) {
	const router = useRouter();
	// STATES
	let { code, setCode } = useContext(srcCodeContext);
	let [categories, setCategories] = useState<CategoryResponse[] | null>(null);

	// HANDLERS
	async function addComponent() {
		props.setAddingComponent(true);
		await axios.post(`${API_URL}component`, {
			...code,
		});
		console.log("Added Successfully");
		props.setAddingComponent(false);
		// router.push(`/${code.category.toLowerCase()}`);
		router.push(`/admin/editor`);
	}
	async function updateComponent() {
		props.setAddingComponent(true);
		await axios.patch(`${API_URL}component/${props.id}`, {
			...code,
			// id: props.id,
		});
		console.log("Added Successfully");
		props.setAddingComponent(false);
		// router.push(`/${code.category.toLowerCase()}`);
		router.push(`/admin`);
	}

	// Component
	type ButtonProps = {
		className?: string;
		children?: React.ReactNode;
		onClick?: any;
		lang?: languages;
	};
	const Button = ({ className, onClick = handleFocus, lang, children }: ButtonProps) => (
		<button
			onClick={onClick}
			data-lang={lang}
			className={cn("bg-black px-6 py-3 text-xs text-white outline-none transition-colors", className)}>
			{children}
		</button>
	);
	useEffect(() => {
		async function getCategories() {
			const data = await fetchCategories();
			setCategories(data);
		}
		getCategories();
	}, []);

	return (
		<div className='flex'>
			<Button className={cn(html && " !bg-red-400")} lang='html'>
				HTML
			</Button>
			<Button className={cn(css && "!bg-blue-500 ")} lang='css'>
				CSS
			</Button>
			<Button className={cn(javascript && "!bg-amber-400 text-gray-100 ")} lang='javascript'>
				JAVASCRIPT
			</Button>
			<Button className={cn(react && "!bg-sky-400 text-gray-100 ")} lang='react'>
				REACT
			</Button>
			{props.edit ? (
				<Button className='ml-auto bg-sky-500 text-gray-100' onClick={updateComponent}>
					Update
				</Button>
			) : (
				<Button className='ml-auto bg-sky-500 text-gray-100' onClick={addComponent}>
					Submit
				</Button>
			)}
			<input
				type='text'
				className='mx-1 rounded-md border border-black px-2 focus-visible:outline-none'
				value={code.name}
				onInput={(e) => {
					setCode("name", e.currentTarget.value);
				}}
			/>
			<select
				value={code.category}
				onChange={(e) => {
					setCode("category", e.target.value);
				}}
				className='mx-1 bg-black py-3 pl-3  font-sans text-xs text-white'
				name='category'>
				{categories &&
					categories.map(({ _id, name }) => (
						<option key={_id} value={name}>
							{name}
						</option>
					))}
			</select>
			<input
				type='number'
				className='w-16 rounded-md border border-black px-2 focus-visible:outline-none'
				value={`${code.size.replace("rem", "")}`}
				onInput={(e) => {
					setCode("size", `${e.currentTarget.value}rem`);
				}}
			/>
			<select
				value={code.center}
				onChange={(e) => {
					setCode("center", e.target.value);
				}}
				className='mx-1 bg-black py-3 pl-3  font-sans text-xs text-white'
				name='category'>
				<option value='row'>Row</option>
				<option value='column'>Column</option>
				<option value='colStart'>ColStart</option>
				<option value='colEnd'>ColEnd</option>
				<option value='rowStart'>RowStart</option>
				<option value='rowEnd'>RowEnd</option>
			</select>
		</div>
	);
}
