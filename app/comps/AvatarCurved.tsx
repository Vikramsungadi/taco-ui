import Image from "next/image";
import React from "react";
import avatarImage from "@/public/avatar-image.jpeg";
const AvatarCurved = () => {
	return (
		<div className='relative isolate h-14 w-14 before:absolute before:inset-0 before:-z-10 before:h-[110%] before:w-[110%] before:-translate-x-[5%] before:-translate-y-[5%] before:rounded-lg before:bg-gradient-to-br before:from-indigo-500 before:to-pink-600'>
			<Image className='relative z-30 aspect-square w-full rounded-lg object-cover' src={avatarImage} alt='Profile Picture' />
		</div>
	);
};

export default AvatarCurved;
