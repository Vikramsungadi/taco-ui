"use client";

import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";

import { githubDark, githubLight } from "@uiw/codemirror-theme-github";
import React, { useContext, useEffect } from "react";

function Code({ children, className, lang = "html", style, ...props }) {
	let configs = {
		html: [html({ selfClosingTags: true })],
		javascript: [javascript({ jsx: true })],
		react: [javascript({ jsx: true })],
		css: [css()],
	};
	// let { code, setCode } = useContext(srcCodeContext);
	// const onChange = React.useCallback(
	// 	(value, viewUpdate) => {
	// 		setCode(lang, value);
	// 		console.log(lang, value);
	// 	},
	// 	[setCode, lang]
	// );
	let theme = githubDark;
	// if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
	// 	theme = githubDark;
	// } else {
	// 	theme = githubLight;
	// }
	return (
		<CodeMirror
			className={`${className ?? ""}  max-w-[90rem]`}
			readOnly={props.readOnly ? true : false}
			value={children}
			extensions={configs[lang]}
			theme={theme}
			onChange={props.onChange}
			basicSetup={{
				foldGutter: true,
				dropCursor: false,
				allowMultipleSelections: true,
				indentOnInput: true,
			}}
		/>
	);
}
export default Code;
