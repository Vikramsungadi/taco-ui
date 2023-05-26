"use client";
import styled from "styled-components";
import React from "react";

const SideBar = ({ children, ...props }) => {
	let StyledDiv = styled.div``;
	return <StyledDiv {...props}>{children}</StyledDiv>;
};

export default SideBar;
// a[href="/${params.component}"] {
//   background-color: rgb(186 230 253) !important;
//   transform: translateX(2px);
//   font-weight: 500;
//   color: #022330;
// }
