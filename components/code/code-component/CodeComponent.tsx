"use client";

import SyntaxHighlight from "@/components/SyntaxHighlight/index";
import Frame, { AlignmentProps } from "@/components/code/code-editor/Frame";
import { CodeDisplayProps, languages } from "@/types/types";
import cn from "@/utils/cn";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { BsMoonFill, BsSun } from "react-icons/bs";
import ActionBar from "./ActionBar";
import { useTheme } from "next-themes";

type ClickHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
interface Props extends Record<CodeDisplayProps, string> {
	className?: string;
	center: AlignmentProps;
}
const CodeComponent = (props: Props) => {
	const frameRef = useRef<null | HTMLIFrameElement>(null);
	let [screens, setScreen] = useState({
		mobile: false,
		tab: false,
		desktop: true,
	});

	let { theme } = useTheme();
	let isDark = theme === "dark";
	let [dark, setDark] = useState(isDark);

	useLayoutEffect(() => {
		setDark(isDark);
	}, [theme, isDark]);

	let [show, setShow] = useState({ code: false, preview: true });
	let [copied, setCopied] = useState(false);
	let [codeDisplay, setCodeDisplay] = useState<Record<languages, boolean>>({
		html: true,
		react: false,
		css: false,
		javascript: false,
	});

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
		<div className={cn("mx-auto flex max-w-[calc(1440px-1.5rem)] flex-col overflow-x-auto", props.className)}>
			<ActionBar
				className={cn("top-0 z-[9999999999]", show.code && "sticky")}
				screens={screens}
				actions={{ show, codeDisplay, copied }}
				handlers={{ handleCopy, handleScreen, handleShow, handleShowCode }}
				react={props.react}
				javascript={props.javascript}
			/>

			<div
				className={cn(
					"component-wrapper scrollbar-thin relative flex h-full w-full overflow-hidden rounded-lg bg-gray-300 ring-1 ring-neutral-300 dark:bg-zinc-950/95 dark:ring-zinc-800",
					show.preview && " items-center justify-center",
				)}>
				<div
					className={cn(
						"absolute right-0  top-0 mx-5 my-2 flex cursor-pointer gap-4",
						show.code && "hidden",
					)}>
					<AiOutlineFullscreen
						onClick={() => {
							// e.currentTarget.parentElement!.nextElementSibling!.requestFullscreen();
							frameRef.current?.requestFullscreen();
						}}
					/>
					{dark ? <BsMoonFill onClick={changeTheme} /> : <BsSun onClick={changeTheme} />}
				</div>
				<Frame
					ref={frameRef}
					style={{ minHeight: props.size }}
					className={cn(
						"hidden  rounded-md ring-1 ring-zinc-100 dark:shadow-zinc-600 dark:ring-zinc-950",
						show.preview && "!block",
						size,
					)}
					{...props}
					dark={dark}
				/>
				{/* <Code
						readOnly
						className={cn(
							"hide-gutters hidden h-fit w-full rounded-[0_0_0.75rem_0.75rem]",
							show.code && codeDisplay.html && "block",
						)}>
						{props.html}
					</Code> */}

				<SyntaxHighlight code={props.html} renderIf={show.code && codeDisplay.html} />
				<SyntaxHighlight code={props.react} renderIf={show.code && codeDisplay.react} />
				<SyntaxHighlight code={props.javascript} renderIf={show.code && codeDisplay.javascript} />
			</div>
		</div>
	);
};

export default CodeComponent;
