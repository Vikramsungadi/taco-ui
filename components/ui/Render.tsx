import { Fragment } from "react";
interface Props {
	children: React.ReactNode;
	if: boolean;
}

const Render = (props: Props) => {
	return <Fragment>{props.if && props.children}</Fragment>;
};

export default Render;
