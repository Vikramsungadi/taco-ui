"use client";
import Code from "@/components/code/code-editor/CodeMirror";
import Frame from "@/components/code/code-editor/Frame";
import React, { useEffect, useRef, useState } from "react";
import ActionBar from "./ActionBar";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsMoonFill, BsSun } from "react-icons/bs";

const CodeComponent = (props) => {
	const frameRef = useRef(null);
	const [height, setHeight] = useState(null);
	let [screens, setScreen] = useState({
		mobile: false,
		tab: false,
		desktop: true,
	});
	// useEffect(() => {

	// 	console.log(frameRef.current.contentWindow.document.documentElement.offsetHeight);
	// 	setHeight(frameRef.current.contentWindow.document.documentElement.offsetHeight);
	// }, [screens]);

	let [dark, setDark] = useState(true);
	let [show, setShow] = useState({ code: false, preview: true });
	let [copied, setCopied] = useState(false);
	let [codeDisplay, setCodeDisplay] = useState({ html: true, react: false });
	let [fullScreen, setFullScreen] = useState(false);
	function handleToggle(e, handleFunction) {
		let selectedOption = e.target.dataset["val"];

		handleFunction((prev) => {
			let finalState = {};
			for (let item of Object.keys(prev)) {
				finalState[item] = false;
			}

			return { ...finalState, [selectedOption]: true };
		});
	}

	function handleScreen(e) {
		handleToggle(e, setScreen);
	}
	function handleShow(e) {
		handleToggle(e, setShow);
	}
	function handleShowCode(e) {
		handleToggle(e, setCodeDisplay);
	}
	function changeTheme() {
		setDark((prev) => !prev);
	}
	function handleCopy() {
		navigator.clipboard.writeText(props.html).then(() => {
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 3000);
		});
	}

	const { mobile, desktop, tab } = screens;
	const size = mobile ? "max-w-[420px]" : tab ? "max-w-[800px]" : desktop && "";

	return (
		<>
			{/* max-w-[75rem] */}
			<div className={`mx-auto flex w-full flex-col  ${props.className ?? ""} `}>
				<ActionBar
					className={`${show.code && "sticky py-4 "}  top-0 z-[9999999999]`}
					screens={screens}
					actions={{ show, codeDisplay, copied }}
					handlers={{ handleCopy, handleScreen, handleShow, handleShowCode }}
					react={props.react}
					javascript={props.javascript}
				/>

				<div
					className={`component-wrapper relative flex h-full w-full overflow-auto rounded-lg   bg-gray-300  ring-1 ring-neutral-300 dark:bg-zinc-950/95 dark:ring-zinc-800
					  ${show.preview && " items-center justify-center"}`}>
					{/* prettier-ignore */}
					<div className={`absolute right-0 top-0 mx-5 my-2 flex gap-4 ${show.code && "hidden"} cursor-pointer`}>
						<AiOutlineFullscreen
							onClick={(e) => {
								e.target.parentElement.nextElementSibling.requestFullscreen();
								setFullScreen(true);
							}}
						/>
						{dark ? ( <BsMoonFill onClick={changeTheme} /> ) : ( <BsSun onClick={changeTheme} /> )}
					</div>
					<Frame
						// ref={frameRef}
						// style={{ minHeight: !!height ? `${height}px` : props.size }}
						// style={{ height: `${height}px` }}
						style={{ minHeight: props.size }}
						className={`hidden  ${
							show.preview && "!block"
						} ${size} rounded-md ring-1 ring-zinc-100 dark:shadow-zinc-600 dark:ring-zinc-950`}
						{...props}
						dark={dark}
					/>
					<Code
						readOnly
						style={{ borderRadius: "0 0 0.75rem 0.75rem" }}
						className={`hide-gutters hidden h-fit w-full ${show.code && codeDisplay.html && "!block"}`}>
						{props.html}
					</Code>
					<Code
						readOnly
						style={{ borderRadius: "0 0 0.75rem 0.75rem" }}
						className={`hide-gutters hidden h-fit w-full ${show.code && codeDisplay.react && "!block"}`}>
						{props.react}
					</Code>
					<Code
						readOnly
						lang='javascript'
						style={{ borderRadius: "0 0 0.75rem 0.75rem" }}
						className={`hide-gutters hidden h-fit w-full ${show.code && codeDisplay.javascript && "!block"}`}>
						{props.javascript}
					</Code>
				</div>
			</div>
		</>
	);
};

export default CodeComponent;

// const onChange = React.useCallback(value => {
// 	setCode(value);
// }, []);
