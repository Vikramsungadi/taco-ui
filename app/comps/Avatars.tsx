import React from "react";
import avatarImage from "@/public/avatar-image.jpeg";
import Image from "next/image";
type Props = {
	className?:string;
}
const Avatars = (props:Props) => {
	return (
		<div
			className={`relative isolate h-14 w-14 before:absolute before:inset-0 before:-z-10 before:h-[110%] before:w-[110%] before:-translate-x-[5%] before:-translate-y-[5%] before:rounded-full before:bg-gradient-to-r before:from-indigo-500 before:from-10% before:via-sky-500 before:via-30% before:to-emerald-500 before:to-90% before:transition-transform before:duration-[2000ms] hover:before:rotate-180 ${
				props.className ?? ""
			}`}>
			<Image className='relative z-30 aspect-square w-full rounded-full object-cover' src={avatarImage} alt='' />
		</div>
	);
};

export default Avatars;
