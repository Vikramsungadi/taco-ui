"use client";
import Code from "@/components/code/code-editor/CodeMirror";
import Frame, { AlignmentProps } from "@/components/code/code-editor/Frame";
import React, { useRef, useState } from "react";
import ActionBar from "./ActionBar";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsMoonFill, BsSun } from "react-icons/bs";
import { CodeDisplayProps, languages } from "@/types/types";
import cn from "@/utils/cn";

type ClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
interface Props extends Record<CodeDisplayProps, string> {
	className?: string;
	center: AlignmentProps;
}
const CodeComponent = (props: Props) => {
	const frameRef = useRef(null);
	let [screens, setScreen] = useState({
		mobile: false,
		tab: false,
		desktop: true,
	});
	// const [height, setHeight] = useState(null);
	// useEffect(() => {

	// 	console.log(frameRef.current.contentWindow.document.documentElement.offsetHeight);
	// 	setHeight(frameRef.current.contentWindow.document.documentElement.offsetHeight);
	// }, [screens]);

	let [dark, setDark] = useState(true);
	let [show, setShow] = useState({ code: false, preview: true });
	let [copied, setCopied] = useState(false);
	let [codeDisplay, setCodeDisplay] = useState<Record<languages, boolean>>({
		html: true,
		react: false,
		css: false,
		javascript: false,
	});
	let [fullScreen, setFullScreen] = useState(false);

	function handleToggle<
		T extends React.MouseEvent<HTMLButtonElement, MouseEvent>,
		K extends React.Dispatch<React.SetStateAction<any>>,
	>(e: T, handleFunction: K) {
		let selectedOption = e.currentTarget.dataset["val"] as keyof ReturnType<K>;

		handleFunction((prev: any) => {
			let finalState = {};
			for (let item of Object.keys(prev)) {
				// @ts-ignore
				finalState[item] = false;
			}

			return { ...finalState, [selectedOption]: true };
		});
	}

	const handleScreen: ClickHandler = (e) => {
		handleToggle(e, setScreen);
	};
	const handleShow: ClickHandler = (e) => {
		handleToggle(e, setShow);
	};
	const handleShowCode: ClickHandler = (e) => {
		handleToggle(e, setCodeDisplay);
	};
	const changeTheme = () => {
		setDark((prev) => !prev);
	};
	const handleCopy = () => {
		navigator.clipboard.writeText(props.html).then(() => {
			setCopied(true);
			setTimeout(() => {
				setCopied(false);
			}, 3000);
		});
	};

	const { mobile, desktop, tab } = screens;
	const size = mobile ? "max-w-[420px]" : tab ? "max-w-[800px]" : desktop && "";

	return (
		<>
			<div className={`mx-auto flex w-full flex-col  ${props.className ?? ""} `}>
				<ActionBar
					className={`${show.code && "sticky"} top-0 z-[9999999999]`}
					screens={screens}
					actions={{ show, codeDisplay, copied }}
					handlers={{ handleCopy, handleScreen, handleShow, handleShowCode }}
					react={props.react}
					javascript={props.javascript}
				/>

				<div
					className={cn(
						"component-wrapper relative flex h-full w-full overflow-auto rounded-lg bg-gray-300 ring-1 ring-neutral-300 dark:bg-zinc-950/95 dark:ring-zinc-800",
						show.preview && " items-center justify-center",
					)}>
					<div
						className={cn(
							"absolute right-0  top-0 mx-5 my-2 flex cursor-pointer gap-4",
							show.code && "hidden",
						)}>
						<AiOutlineFullscreen
							onClick={(e) => {
								e.currentTarget.parentElement!.nextElementSibling!.requestFullscreen();
								setFullScreen(true);
							}}
						/>
						{dark ? <BsMoonFill onClick={changeTheme} /> : <BsSun onClick={changeTheme} />}
					</div>
					<Frame
						// ref={frameRef}
						// style={{ minHeight: !!height ? `${height}px` : props.size }}
						// style={{ height: `${height}px` }}
						style={{ minHeight: props.size }}
						className={cn(
							"hidden  rounded-md ring-1 ring-zinc-100 dark:shadow-zinc-600 dark:ring-zinc-950",
							show.preview && "!block",
							size,
						)}
						{...props}
						dark={dark}
					/>
					<Code
						readOnly
						className={cn(
							"hide-gutters hidden h-fit w-full rounded-[0_0_0.75rem_0.75rem]",
							show.code && codeDisplay.html && "block",
						)}>
						{props.html}
					</Code>
					<Code
						readOnly
						className={cn(
							"hide-gutters hidden h-fit w-full rounded-[0_0_0.75rem_0.75rem]",
							show.code && codeDisplay.react && "block",
						)}>
						{props.react}
					</Code>
					<Code
						readOnly
						lang='javascript'
						className={cn(
							"hide-gutters hidden h-fit w-full rounded-[0_0_0.75rem_0.75rem]",
							show.code && codeDisplay.javascript && "block",
						)}>
						{props.javascript}
					</Code>
				</div>
			</div>
		</>
	);
};

export default CodeComponent;
