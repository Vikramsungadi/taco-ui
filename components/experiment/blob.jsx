"use client";
import CodeComponent from "@/components/code/code-component/CodeComponent";
import { data } from "@/data";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const Page = () => {
	let [{ X, Y }, setPos] = useState({ X: "2", Y: "2" });
	console.log(X, Y);
	function updatePos(e) {
		setPos(prev => {
			return { ...prev, X: e.clientX, Y: e.clientY };
		});
	}
	useEffect(() => {
		document.addEventListener("mousemove", updatePos);
	}, []);

	return (
		<>
			{/* <div className="wraper absolute  h-screen w-full overflow-hidden bg-white">
				<div className="overlay   -z-10  h-screen w-full overflow-hidden"> */}
			<motion.div
				layout
				transition={{
					layout: { duration: 0.8 },
				}}
				className={`absolute -z-10 aspect-square w-fit `}
				style={{
					top: `${Y}px`,
					left: `${X}px`,
					transform: "translate(-50%,-50%)",
					// transition: "all 2s cubic-bezier(.18,.89,.32,1.28) 0.3s",
				}}>
				<div className="-translate-x-1/2 -translate-y-1/2 scale-150 mix-blend-screen">
					<motion.svg
						initial={{ scaleX: 0.8, scaleY: 1.15 }}
						animate={{ scaleX: 1.15, scaleY: 0.85 }}
						transition={{ repeat: Infinity, repeatType: "mirror", duration: 4 }}
						width="151"
						height="138"
						// style={{ transform: "translate(50%,50%)" }}
						viewBox="0 0 151 138"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<motion.path
							initial={{ pathLength: 0, opacity: 0 }}
							animate={{ pathLength: 1, opacity: 1 }}
							transition={{ duration: 2 }}
							d="M141.352 41.9793C152.895 66.1217 153.894 95.2056 145.348 112.854C136.69 130.502 118.376 136.714 105.168 137.843C91.8487 138.831 83.6351 134.878 63.3233 133.608C43.0115 132.478 10.6014 133.89 2.27692 119.348C-6.04759 104.806 9.82448 74.1692 27.6944 48.1914C45.5644 22.2136 65.5432 1.03602 86.632 0.0477295C107.61 -1.08174 129.697 17.9781 141.352 41.9793Z"
							fill="#D0E2FF"
						/>
					</motion.svg>
				</div>
			</motion.div>
			{/* </div>
			</div> */}
			<div className="styl relative z-0 h-screen w-full bg-[rgba(0,0,0,0.3)] backdrop-blur-sm "></div>
		</>
	);
};

export default Page;

{
	/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
					<path
						fill="#D0E2FF"
						d="M50.3,-44.1C60.7,-27,61.6,-6.4,53.9,6.1C46.1,18.6,29.6,23,17.7,23.8C5.7,24.5,-1.7,21.7,-20,20.8C-38.3,20,-67.5,21,-75,10.7C-82.5,0.4,-68.2,-21.3,-52.1,-39.7C-36,-58.1,-18,-73.1,1,-73.8C19.9,-74.6,39.8,-61.1,50.3,-44.1Z"
						transform="translate(100 100)"
					/>
				</svg> */
}
