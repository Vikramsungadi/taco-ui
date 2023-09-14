"use client";
import React, { useState } from "react";
import Buttons from "../comps/Buttons";
import Alerts from "../comps/Alerts";
import Input from "../comps/Input2";
import Avatars from "../comps/Avatars";
import Avatars2 from "../comps/Avatars2";
import ButtonGhost from "../comps/ButtonGhost";
import ButtonPrimary from "../comps/ButtonPrimary";
import AvatarCurved from "../comps/AvatarCurved";
import CardBgHover from "../comps/CardBgHover";
import cn from "@/utils/cn";

type ShowCaseComponents = "Buttons" | "Alerts" | "Input" | "Avatars" | "Card";

const Showcase = () => {
	let [display, setDisplay] = useState<Record<ShowCaseComponents, boolean>>({
		Buttons: true,
		Alerts: false,
		Avatars: false,
		Card: false,
		Input: false,
	});

	function handleDisplay(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		let old = Object.entries(display).map(([key, _]) => [key, false]);
		setDisplay({
			...Object.fromEntries(old),
			// @ts-ignore
			[e.currentTarget.dataset.name]: true,
		});
	}
	const ShowButton = (props: { label: ShowCaseComponents }) => {
		return (
			<button
				data-name={props.label}
				aria-label={props.label}
				className={cn(
					"cursor-pointer select-none opacity-50 transition-[opacity,transform]",
					display[props.label] && "scale-[1.15] !opacity-100",
				)}
				onMouseMoveCapture={handleDisplay}
				onClick={handleDisplay}>
				{props.label}
			</button>
		);
	};

	return (
		<section className='mx-4 flex max-w-screen-lg flex-col items-center justify-center max-sm:max-h-[90vh] sm:mt-20  lg:mx-auto'>
			<h2 className='group/title  relative mx-auto mb-6 mt-12 w-fit  text-center font-sans text-6xl font-bold  selection:bg-sky-400/80 selection:text-sky-950 dark:selection:bg-zinc-200 dark:selection:text-zinc-950 max-sm:my-12'>
				<span className='clip zinc-grad3 relative group-hover/title:z-10'>Quick Peek</span>
				<span className='clip color-grad1 absolute left-[25%]  top-0 -translate-x-[40%] text-[7rem]  font-bold opacity-0 transition-opacity duration-500 group-hover/title:opacity-[0.25]'>
					Components
				</span>
			</h2>
			<div className='mx-4 my-10 grid h-full min-h-[20rem] w-full grid-cols-1 grid-rows-[1fr_5rem] items-center justify-center  gap-4 overflow-y-hidden rounded-lg border border-zinc-300  bg-transparent dark:border-zinc-800  dark:bg-gradient-to-tr dark:from-zinc-950 dark:to-zinc-900 max-sm:h-[70vh] md:min-h-[25rem] lg:mx-auto lg:p-3 '>
				<div className='flex h-full items-center justify-center overflow-x-hidden p-3 '>
					{display.Buttons && (
						<div className='flex animate-slideFromTop gap-6'>
							<Buttons /> <ButtonGhost /> <ButtonPrimary />
						</div>
					)}
					{display.Alerts && (
						<div className='animate-slideFromTop'>
							<Alerts />
						</div>
					)}
					{display.Input && (
						<div className='animate-slideFromTop [--delay:0s]'>
							<Input />
						</div>
					)}
					{display.Avatars && (
						<div className='flex animate-slideFromTop gap-8'>
							<Avatars /> <Avatars2 /> <AvatarCurved />
						</div>
					)}
					{display.Card && (
						<div className='animate-slideFromTop'>
							<CardBgHover />
						</div>
					)}
				</div>

				<div className='scrollbar-hide mx-auto flex w-[85%] flex-row items-center gap-4 overflow-y-hidden text-lg font-medium max-xs:flex-wrap max-xs:py-2 sm:justify-center'>
					<ShowButton label='Buttons' />
					<ShowButton label='Alerts' />
					<ShowButton label='Input' />
					<ShowButton label='Avatars' />
					<ShowButton label='Card' />
				</div>
			</div>
		</section>
	);
};

export default Showcase;
