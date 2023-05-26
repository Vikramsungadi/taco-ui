"use client";

import { createContext, useState } from "react";

const initialCode = { javascript: "", html: "", css: "", react: "", category: "", size: "", center: "", name: "" };

const srcCodeContext = createContext({
	code: { ...initialCode },
	setCode: () => {},
});

export const CodeProvider = ({ children }) => {
	const [enteredCode, setEnteredCode] = useState({ ...initialCode });

	function setCodeHandler(lang, data) {
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
