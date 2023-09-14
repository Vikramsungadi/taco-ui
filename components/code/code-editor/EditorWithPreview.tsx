"use client";
import srcCodeContext from "@/context/code-context";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Code from "./CodeMirror";
import Frame from "./Frame";
import Split from "react-split";
import StatusBar from "./StatusBar";
import axios from "axios";
import { fetchComponent } from "@/lib/fetchComponent";
import { ComponentResponse } from "@/types/apiTypes";
import { ViewUpdate } from "@uiw/react-codemirror";
import { languages } from "@/types/types";

interface Props {
	params: { id: string; edit: boolean };
}
const EditorWithPreview = ({ params }: Props) => {
	// STATE
	let { code, setCode } = useContext(srcCodeContext);

	let [isFocused, setIsFocused] = useState<Record<languages, boolean>>({
		html: true,
		css: false,
		javascript: false,
		react: false,
	});
	let [addingComponent, setAddingComponent] = useState(false);

	async function fillCode(id: string) {
		const data: ComponentResponse = await fetchComponent(id);
		const { html, css, javascript, react, category, size, center, name } = data;
		// console.log(data);

		setCode("html", html);
		setCode("css", css);
		setCode("javascript", javascript);
		setCode("react", react);
		setCode("category", category);
		setCode("size", size);
		setCode("center", center);
		setCode("name", name);
	}

	let { html, css, javascript, react } = isFocused;

	// HANDLERS
	function handleFocus(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		let lang = e.currentTarget.dataset["lang"] as keyof typeof isFocused;
		setIsFocused((prev: typeof isFocused) => {
			let final = {} as typeof isFocused;
			Object.keys(prev).forEach((lang) => {
				final[lang as keyof typeof isFocused] = false;
			});
			return { ...final, [lang]: true };
		});
	}

	const onChange = React.useCallback(
		(value: string, viewUpdate: ViewUpdate) => {
			let language = viewUpdate?.view?.contentDOM?.dataset.language as languages;
			setCode(language, value);
		},
		[setCode],
	);

	useEffect(() => {
		if (params.id) fillCode(params.id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (addingComponent) return <div className='mx-auto my-auto h-full w-full'>Adding...</div>;

	return (
		<>
			<StatusBar
				handleFocus={handleFocus}
				isFocused={isFocused}
				setAddingComponent={setAddingComponent}
				edit={params.edit}
				id={params.id}
			/>

			<Split
				sizes={[50, 50]}
				minSize={100}
				expandToMin={false}
				gutterAlign='center'
				snapOffset={30}
				dragInterval={1}
				direction='horizontal'
				cursor='col-resize'
				className='flex h-[calc(100vh-116px)]'>
				<section>
					<Code className={`hidden h-full ${html && "!block"}`} onChange={onChange} lang='html'>
						{code.html}
					</Code>
					<Code className={`hidden h-full ${css && "!block"}`} onChange={onChange} lang='css'>
						{code.css}
					</Code>
					<Code
						className={`hidden h-full ${javascript && "!block"}`}
						onChange={onChange}
						lang='javascript'>
						{code.javascript}
					</Code>

					<Code className={`hidden h-full ${react && "!block"}`} onChange={onChange} lang='react'>
						{code.react}
					</Code>
				</section>
				<Frame
					html={code.html}
					css={code.css}
					javascript={code.javascript}
					center={code.center}
					className={"resize-x border border-gray-400"}
					style={{ height: code.size }}
				/>
			</Split>
		</>
	);
};

export default EditorWithPreview;
