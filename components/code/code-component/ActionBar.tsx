import React from "react";
import Icon from "./Icon";
import { FaEye, FaReact, FaHtml5, FaJs, FaCheck } from "react-icons/fa";
import { GoDeviceDesktop } from "react-icons/go";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { HiCodeBracket } from "react-icons/hi2";
import { MdContentCopy, MdOutlineTabletMac } from "react-icons/md";
import { CodeDisplayProps, languages } from "@/types/types";
import cn from "@/utils/cn";
type Screens = {
	mobile: boolean;
	tab: boolean;
	desktop: boolean;
};
type Actions = {
	show: { code: boolean; preview: boolean };
	codeDisplay: Record<languages, boolean>;
	copied: boolean;
};

interface Props {
	screens: Screens;
	actions: Actions;
	className?: string;
	handlers: any;
	react?: any;
	javascript?: any;
}

const ActionBar = (props: Props) => {
	const { mobile, tab, desktop } = props.screens;
	const { show, codeDisplay, copied } = props.actions;
	const { handleCopy, handleScreen, handleShow, handleShowCode } = props.handlers;

	return (
		<div className={cn("flex justify-center p-4 text-black", props.className)}>
			<div className={cn("screens mr-auto flex gap-4", !show.code && "hidden")}>
				<Icon
					data='html'
					isActive={codeDisplay.html}
					onClick={handleShowCode}
					isActiveStyles={"text-red-500 bg-red-100"}
					className='hover:!bg-red-100 hover:!text-red-500 dark:!bg-red-100 dark:!text-red-500'>
					<FaHtml5 className='icon' />
				</Icon>
				{props.react && (
					<Icon
						className='ml-4'
						data='react'
						isActiveStyles={"text-sky-600 bg-sky-100"}
						onClick={handleShowCode}
						isActive={codeDisplay.react}>
						<FaReact className='icon' />
					</Icon>
				)}
				{props.javascript && (
					<Icon
						data='javascript'
						isActiveStyles={"text-amber-500 bg-amber-50"}
						onClick={handleShowCode}
						className=' hover:bg-amber-50 hover:text-amber-500 '
						isActive={codeDisplay.javascript}>
						<FaJs className='icon' />
					</Icon>
				)}
			</div>

			<div className={cn("screens ml-auto flex gap-4", show.code && "hidden")}>
				<Icon isActive={mobile} data='mobile' onClick={handleScreen} className='max-sm:hidden'>
					<HiOutlineDeviceMobile className='icon text-base' />
				</Icon>
				<Icon isActive={tab} data='tab' onClick={handleScreen} className='max-sm:hidden'>
					<MdOutlineTabletMac className='icon text-[1.1rem]' />
				</Icon>
				<Icon isActive={desktop} data='desktop' onClick={handleScreen} className='max-lg:hidden'>
					<GoDeviceDesktop className='icon text-[1.2rem]' />
				</Icon>
			</div>
			<div className='ml-auto flex gap-2'>
				<Icon onClick={handleShow} isActive={show.preview} data='preview'>
					<FaEye className='icon' />
				</Icon>
				<Icon
					onClick={handleCopy}
					data={!copied ? "copy" : "copied"}
					className={cn(
						"group hover:!bg-emerald-100/50 hover:!text-emerald-500 active:text-emerald-500 dark:text-emerald-100 dark:hover:!bg-emerald-800/60",
						copied && "!bg-emerald-100/80 !text-emerald-500 dark:!bg-emerald-800/60",
					)}>
					{!copied && <MdContentCopy className='icon group-active:text-emerald-500 ' />}
					{copied && <FaCheck className='icon text-sm group-active:text-emerald-500' />}
				</Icon>
				<Icon onClick={handleShow} isActive={show.code} data='code'>
					<HiCodeBracket className='icon' />
				</Icon>
			</div>
		</div>
	);
};

export default ActionBar;
