import styled, { css } from 'styled-components';

const CommonStyle = css`
	height: 50px;
	color: blue;
	text-align: center;
	background-color: aqua;
`;

export const Square = styled.div`
	${CommonStyle}
	width: 50px;
	border-radius: 50%;
	height: 50px;
`;

export const Rectangle = styled.div`
	${CommonStyle}
	width: 100px;
	border-color: 2px solid red;
	padding: 20px;
`;
