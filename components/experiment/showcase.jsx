"use client";
import React, { useState } from "react";
import Buttons from "../comps/Buttons";
import Alerts from "../comps/Alerts";
import Input from "../comps/Input2";
import Avatars from "../comps/Avatars";
import Avatars2 from "../comps/Avatars2";

import { motion } from "framer-motion";
import ButtonGhost from "../comps/ButtonGhost";
import ButtonPrimary from "../comps/ButtonPrimary";
import AvatarCurved from "../comps/AvatarCurved";

const Showcase = () => {
	let [display, setDisplay] = useState({ alerts: false, button: true, input: false, avatars: false });
	console.log(display);
	function handleDisplay(e) {
		let old = Object.entries(display).map(([key, value]) => [key, false]);
		setDisplay((prev) => ({ ...Object.fromEntries(old), [e.target.dataset.name]: true }));
	}
	// prettier-ignore
	let variants = {
		hidden: { y: "-200%",opacity:0 },
		show: {
			y: "0",opacity:1,
			transition: { type:'spring', duration: 0.5, ease: "easeOut" },
		},
		exit: { y: "200%",opacity:0 },
  };
	let avatarVariants = {
		hidden: { y: "-200%", opacity: 0 },
		show: {
			y: "0",
			opacity: 1,
			transition: { type: "spring", duration: 0.5, ease: "easeOut", delayChildren: 0.3 },
		},
		exit: { y: "200%", opacity: 0 },
	};

	return (
		<>
			<section className='mx-auto my-24 grid  min-h-[20rem] max-w-screen-lg grid-cols-[1fr_minmax(15rem,auto)]  items-center justify-center gap-4 rounded-lg border border-zinc-700 bg-gradient-to-tr from-zinc-950 to-zinc-900 '>
				<motion.div className='flex h-full items-center justify-center '>
					{display.button && (
						<motion.div variants={variants} initial='hidden' animate='show' className='flex gap-6'>
							<Buttons /> <ButtonGhost /> <ButtonPrimary />
						</motion.div>
					)}
					{display.alerts && (
						<motion.div variants={variants} initial='hidden' animate='show'>
							<Alerts />
						</motion.div>
					)}
					{display.input && (
						<motion.div variants={variants} initial='hidden' animate='show'>
							<Input />
						</motion.div>
					)}
					{display.avatars && (
						<motion.div variants={avatarVariants} initial='hidden' animate='show' className='flex gap-8'>
							<Avatars /> <Avatars2 /> <AvatarCurved />
						</motion.div>
					)}
				</motion.div>

				<ul className='flex h-[70%] flex-col items-center  justify-center gap-4 overflow-y-hidden border-l border-zinc-700 text-lg font-medium [&>li]:cursor-pointer [&>li]:opacity-50 [&>li]:transition-[opacity,transform] hover:[&>li]:opacity-80'>
					<li
						data-name='button'
						className={display.button && "scale-110 text-xl font-bold !opacity-100 "}
						onMouseOver={handleDisplay}>
						Buttons
					</li>
					<li
						data-name='alerts'
						className={display.alerts && "scale-110 text-xl font-bold !opacity-100 "}
						onMouseOver={handleDisplay}>
						Alerts
					</li>
					<li
						data-name='input'
						className={display.input && "scale-110 text-xl font-bold !opacity-100 "}
						onMouseOver={handleDisplay}>
						Input
					</li>
					<li
						data-name='avatars'
						className={display.avatars && "scale-110 text-xl font-bold !opacity-100 "}
						onMouseOver={handleDisplay}>
						Avatars
					</li>
				</ul>
			</section>
		</>
	);
};

export default Showcase;
