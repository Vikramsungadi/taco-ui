import Image from "next/image";
import React from "react";
import avatarImage from "@/public/avatar-image.jpeg";

const Alerts = (props) => {
	return (
		<div
			className={`relative isolate h-14 w-14 shrink-0 before:absolute before:inset-0 before:-z-10 before:h-[110%] before:w-[110%] before:-translate-x-[5%] before:-translate-y-[5%] before:rounded-full before:bg-gradient-to-br before:from-indigo-500 before:to-pink-600 ${
				props.className ?? ""
			}`}>
			<Image className='relative z-30 aspect-square w-full rounded-full object-cover' src={avatarImage} alt='' />
			<span className='absolute bottom-0 right-1 z-30 aspect-square w-2.5 rounded-full bg-emerald-500 ring-1 ring-white ring-offset-1'></span>
		</div>
	);
};

export default Alerts;
