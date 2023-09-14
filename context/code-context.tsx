"use client";
import { AlignmentProps } from "@/components/code/code-editor/Frame";
import { CodeDisplayProps } from "@/types/types";
import { createContext, useState } from "react";

interface InitialCode extends Record<CodeDisplayProps, string> {
	center: AlignmentProps | "";
}
const initialCode: InitialCode = {
	javascript: "",
	html: "",
	css: "",
	react: "",
	category: "",
	size: "",
	center: "",
	name: "",
};

const srcCodeContext = createContext({
	code: { ...initialCode },
	setCode: (lang: CodeDisplayProps, data: string) => {},
});

type Props = {
	children?: React.ReactNode;
};
export const CodeProvider = ({ children }: Props) => {
	const [enteredCode, setEnteredCode] = useState({ ...initialCode });

	function setCodeHandler(lang: CodeDisplayProps, data: string) {
		setEnteredCode((prev) => {
			return { ...prev, [lang]: data };
		});
	}

	let context = {
		code: enteredCode,
		setCode: setCodeHandler,
	};

	return <srcCodeContext.Provider value={context}>{children}</srcCodeContext.Provider>;
};
export default srcCodeContext;
