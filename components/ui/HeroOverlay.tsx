import Bg from "@/public/Bg";
type Props = {
	className?: string;
	children?:React.ReactNode;
}

const Overlay = (props:Props) => {
	return (
		<main className={` isolate h-full w-full ${props.className ?? ""} `}>
			<div className='overlay pointer-events-none absolute  top-0 -z-10 flex h-full w-full items-end  gap-8 opacity-[0.2]  dark:opacity-[0.1] md:overflow-x-hidden '>
				<div className='fixed h-screen w-screen dark:bg-gradient-to-br dark:from-sky-500/10 dark:via-transparent dark:to-purple-500/10'></div>
				<div className='relative isolate grid h-full w-full origin-center bg-gradient-to-r from-white from-10% via-white/0 via-10% to-white to-90% blur-xl dark:hidden  '>
					<div
						style={{
							backgroundImage: "linear-gradient(to right, white 10%,rgba(255,255,255,0) 5% 90%, white 90% )",
						}}
						className='absolute inset-0 z-20 h-full w-full '></div>
					<Bg className='absolute inset-0 z-10 h-full w-full' />
					<Bg className='inset-0 z-10 h-full w-full' />
				</div>
			</div>
			{props.children ?? ""}
		</main>
	);
};

export default Overlay;
