import { CodeDisplayProps } from "@/types/types";
import cn from "@/utils/cn";
import { forwardRef, ForwardedRef, CSSProperties } from "react";

export type AlignmentProps = "row" | "rowStart" | "rowEnd" | "column" | "colStart" | "colEnd";
interface Props extends Partial<Record<CodeDisplayProps, string>> {
	className?: string;
	style?: CSSProperties;
	dark?: boolean;
	center: AlignmentProps | "";
}

const Frame = forwardRef(function Frame(
	{ html, css, javascript, className, style, size, ...props }: Props,
	ref: ForwardedRef<HTMLIFrameElement>,
) {
	const alignment: Record<AlignmentProps, string> = {
		row: "flex-row justify-center items-center flex-wrap",
		rowStart: "flex-row !items-start justify-center",
		rowEnd: "flex-row !items-end justify-center",
		column: "flex-col justify-center items-center ",
		colStart: "flex-col !justify-start items-center",
		colEnd: "flex-col !justify-end items-center",
	};

	let doc = `
<html class='w-full ${props.dark ? "dark" : "light"}'  >
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	</head>
		<body  class='flex ${
			alignment[props.center === "" ? "row" : props.center]
		} gap-4 w-full h-full bg-white dark:bg-black'>
		
		${html ?? ""}

		</body>
</html>

<style>
::-webkit-scrollbar {
	width: 4px;
	height: 4px;
	background: rgb(32, 32, 32);
}
html{
	user-select:none;
}
::-webkit-scrollbar-thumb {
	border-radius: 0.5rem;
	background-color:  #636363;
}
:root{

	-ms-overflow-style: none;
	scrollbar-width: thin;
}

@media (max-width:400px){
body{ scale:0.9 } 
}
body{padding : 2rem 0.5rem;}
@media (max-width:640px){
body{ padding:2rem 0 !important; } 
}

.absolute { position: absolute; } .right-0 { right: 0px; } .top-0 { top: 0px; } .z-\[999999\] { z-index: 999999; } .m-0 { margin: 0px; } .m-0\.5 { margin: 0.125rem; } .inline-block { display: inline-block; } .flex { display: flex; } .hidden { display: none; } .h-screen { height: 100vh; } .w-screen { width: 100vw; } .flex-row { flex-direction: row; } .flex-col { flex-direction: column; } .flex-wrap { flex-wrap: wrap; } .\!items-start { align-items: flex-start !important; } .\!items-end { align-items: flex-end !important; } .items-center { align-items: center; } .\!justify-start { justify-content: flex-start !important; } .\!justify-end { justify-content: flex-end !important; } .justify-center { justify-content: center; } .gap-4 { gap: 1rem; } .bg-\[\#fafafa\] { --tw-bg-opacity: 1; background-color: rgb(250 250 250 / var(--tw-bg-opacity)); } .text-black { --tw-text-opacity: 1; color: rgb(0 0 0 / var(--tw-text-opacity)); } .text-white { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); } :is(.dark .dark\:inline-block) { display: inline-block; } :is(.dark .dark\:hidden) { display: none; } :is(.dark .dark\:bg-black) { --tw-bg-opacity: 1; background-color: rgb(0 0 0 / var(--tw-bg-opacity)); } @media (min-width: 640px) { .sm\:items-center { align-items: center; } } 
 *, ::before, ::after { box-sizing: border-box; border-width: 0; border-style: solid; border-color: #e5e7eb; } ::before, ::after { --tw-content: ""; } html { line-height: 1.5; -webkit-text-size-adjust: 100%; -moz-tab-size: 4; -o-tab-size: 4; tab-size: 4; font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; font-feature-settings: normal; font-variation-settings: normal; } body { margin: 0; line-height: inherit; } hr { height: 0; color: inherit; border-top-width: 1px; } abbr:where([title]) { -webkit-text-decoration: underline dotted; text-decoration: underline dotted; } h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; } a { color: inherit; text-decoration: inherit; } b, strong { font-weight: bolder; } code, kbd, samp, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 1em; } small { font-size: 80%; } sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; } sub { bottom: -0.25em; } sup { top: -0.5em; } table { text-indent: 0; border-color: inherit; border-collapse: collapse; } button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; font-weight: inherit; line-height: inherit; color: inherit; margin: 0; padding: 0; } button, select { text-transform: none; } button, [type="button"], [type="reset"], [type="submit"] { -webkit-appearance: button; background-color: transparent; background-image: none; } :-moz-focusring { outline: auto; } :-moz-ui-invalid { box-shadow: none; } progress { vertical-align: baseline; } ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; } [type="search"] { -webkit-appearance: textfield; outline-offset: -2px; } ::-webkit-search-decoration { -webkit-appearance: none; } ::-webkit-file-upload-button { -webkit-appearance: button; font: inherit; } summary { display: list-item; } blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0; } fieldset { margin: 0; padding: 0; } legend { padding: 0; } ol, ul, menu { list-style: none; margin: 0; padding: 0; } textarea { resize: vertical; } input::-moz-placeholder, textarea::-moz-placeholder { opacity: 1; color: #9ca3af; } input::placeholder, textarea::placeholder { opacity: 1; color: #9ca3af; } button, [role="button"] { cursor: pointer; } :disabled { cursor: default; } img, svg, video, canvas, audio, iframe, embed, object { display: block; vertical-align: middle; } img, video { max-width: 100%; height: auto; } [hidden] { display: none; } *, ::before, ::after { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; } ::backdrop { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x: ; --tw-pan-y: ; --tw-pinch-zoom: ; --tw-scroll-snap-strictness: proximity; --tw-gradient-from-position: ; --tw-gradient-via-position: ; --tw-gradient-to-position: ; --tw-ordinal: ; --tw-slashed-zero: ; --tw-numeric-figure: ; --tw-numeric-spacing: ; --tw-numeric-fraction: ; --tw-ring-inset: ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur: ; --tw-brightness: ; --tw-contrast: ; --tw-grayscale: ; --tw-hue-rotate: ; --tw-invert: ; --tw-saturate: ; --tw-sepia: ; --tw-drop-shadow: ; --tw-backdrop-blur: ; --tw-backdrop-brightness: ; --tw-backdrop-contrast: ; --tw-backdrop-grayscale: ; --tw-backdrop-hue-rotate: ; --tw-backdrop-invert: ; --tw-backdrop-opacity: ; --tw-backdrop-saturate: ; --tw-backdrop-sepia: ; } .absolute { position: absolute; } .right-0 { right: 0px; } .top-0 { top: 0px; } .z-\[999999\] { z-index: 999999; } .m-0 { margin: 0px; } .m-0\.5 { margin: 0.125rem; } .inline-block { display: inline-block; } .flex { display: flex; } .hidden { display: none; } .h-full { height: 100%; } .h-screen { height: 100vh; } .w-full { width: 100%; } .w-screen { width: 100vw; } .justify-center { justify-content: center; } .gap-4 { gap: 1rem; } .bg-\[\#fafafa\] { --tw-bg-opacity: 1; background-color: rgb(250 250 250 / var(--tw-bg-opacity)); } .bg-white { --tw-bg-opacity: 1; background-color: rgb(255 255 255 / var(--tw-bg-opacity)); } .p-4 { padding: 1rem; } .text-black { --tw-text-opacity: 1; color: rgb(0 0 0 / var(--tw-text-opacity)); } .text-white { --tw-text-opacity: 1; color: rgb(255 255 255 / var(--tw-text-opacity)); } :is(.dark .dark\:inline-block) { display: inline-block; } :is(.dark .dark\:hidden) { display: none; } :is(.dark .dark\:bg-black) { --tw-bg-opacity: 1; background-color: rgb(0 0 0 / var(--tw-bg-opacity)); } @media not all and (min-width: 640px) { .max-sm\:flex-wrap { flex-wrap: wrap; } .max-sm\:items-start { align-items: flex-start; } .max-sm\:justify-start { justify-content: flex-start; } } @media (min-width: 640px) { .sm\:items-center { align-items: center; } } 

${css ?? ""}

</style>

<script>
const anchors = document.querySelectorAll('a');
anchors.forEach((anchor)=>{ anchor.addEventListener('click',(e)=>{ e.preventDefault() }) })
${javascript ?? ""}

</script>`;

	return (
		<div style={{ ...style }} className={cn("relative z-50 h-full w-full", className)}>
			<iframe className='absolute h-full w-full' ref={ref} srcDoc={doc}></iframe>;
		</div>
	);
});

export default Frame;
// <script src="https://cdn.tailwindcss.com"></script>
