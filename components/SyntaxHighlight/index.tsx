import cn from "@/utils/cn";
import { highlight } from "sugar-high";
import "./SyntaxHighlight.css";

interface Props {
	renderIf: boolean;
	code: string;
}

const SyntaxHighlight = (props: Props) => {
	return (
		<>
			{props.code ? (
				<pre
					className={cn(
						"hidden h-fit rounded-[0_0_0.75rem_0.75rem]  bg-[#0d1117] px-3 py-3 font-mono text-sm",
						props.renderIf && "inline-flex grow",
					)}>
					<code dangerouslySetInnerHTML={{ __html: highlight(props.code) }} className='w-full bg-[#0d1117]' />
				</pre>
			) : (
				<></>
			)}
		</>
	);
};

export default SyntaxHighlight;
