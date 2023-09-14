import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function cn(...args: any[]) {
	return twMerge(clsx(...args));
}
