import React from "react";
import Avatars from "../comps/Avatars";
import Alerts from "../comps/Alerts";
import Breadcrumbs from "../comps/Breadcrumbs";
import Buttons from "../comps/Buttons";
import cn from "@/utils/cn";
type Props = {
	className?: string;
	scroll?: boolean;
};

const DisplayComponents = (props: Props) => {
	return (
		<section
			className={`before-overlay after-overlay  mx-auto max-w-screen-xl
			overflow-hidden before:z-[100] before:hidden before:animate-slideToLeft 
			after:z-[100] after:hidden after:animate-slideToRight 
			dark:before:block dark:before:bg-zinc-950
			dark:after:block dark:after:bg-zinc-950 max-sm:scale-[0.8] ${props.className}`}>
			<div
				className={cn(
					"grid grid-cols-[repeat(3,90rem)] grid-rows-1 gap-2 [--dur:50s] max-sm:grid-cols-[repeat(3,80rem)] md:gap-6 md:[--dur:150s] lg:gap-10 lg:[--dur:300s] [&>*]:min-w-full [&>*]:shrink-0",
					props.scroll && "animate-scroll",
				)}>
				<section className='flex items-center justify-around gap-8 p-2 md:gap-16  lg:gap-24 [&>*]:shrink-0 sm:[&>*]:mx-1 md:[&>*]:mx-2 lg:[&>*]:mx-4'>
					<Alerts />
					<Avatars />
					<Breadcrumbs />
					<Buttons />
				</section>
				<section className='flex items-center justify-around gap-8 p-2 md:gap-16  lg:gap-24 [&>*]:shrink-0 sm:[&>*]:mx-1 md:[&>*]:mx-2 lg:[&>*]:mx-4'>
					<Alerts />
					<Avatars />
					<Breadcrumbs />
					<Buttons />
				</section>
				<section className='flex items-center justify-around gap-8 p-2 md:gap-16  lg:gap-24 [&>*]:shrink-0 sm:[&>*]:mx-1 md:[&>*]:mx-2 lg:[&>*]:mx-4'>
					<Alerts />
					<Avatars />
					<Breadcrumbs />
					<Buttons />
				</section>
			</div>
		</section>
	);
};

export default DisplayComponents;
