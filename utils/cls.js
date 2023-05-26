export default function cls(...classes) {
	return classes.join(" ");
}

export function before(...classes) {
	let final = classes.map((className) =>
		className
			.split(" ")
			.map((seperateClass) => {
				if (seperateClass) {
					return !seperateClass.includes("hover:") ? `before:${seperateClass}` : seperateClass.replace("hover:", "hover:before:");
				}
			})
			.join(" ")
	);
	return final.join(" ");
}
export function dark(...classes) {
	let final = classes.map((className) =>
		className
			.split(" ")
			.map((seperateClass) => {
				if (seperateClass) {
					return `dark:${seperateClass}`;
				}
			})
			.join(" ")
	);
	return final.join(" ");
}
