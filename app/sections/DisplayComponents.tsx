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
			className={cn(
				"mx-auto max-w-screen-xl overflow-hidden",
				"before-overlay  before:z-[100] before:hidden before:md:animate-slideToLeft",
				"after-overlay after:z-[100] after:hidden after:md:animate-slideToRight ",
				"dark:before:hidden dark:before:bg-zinc-950 dark:before:md:block",
				"dark:after:hidden dark:after:bg-zinc-950 max-sm:scale-[0.8] dark:after:md:block",
				props.className,
			)}>
			<div
				className={cn(
					"grid grid-cols-[repeat(3,90rem)] grid-rows-1 gap-2  max-sm:grid-cols-[repeat(3,80rem)] md:gap-6  lg:gap-10  [&>*]:min-w-full [&>*]:shrink-0",
					"[--dur:40s] md:[--dur:130s] lg:[--dur:150s]",
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
