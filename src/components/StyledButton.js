import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
	border-radius: 5px;
	background-color: ${(props) => (props.secondary ? '#F7A072' : '#a1cdf1')};
	color: #fff;
	padding: 10px 15px;
	font-size: ${(props) => {
		if (props.big) return '20px';
		return '16px';
	}};
	outline: none;
	border: none;
	cursor: pointer;
	margin: 15px;

	// applying props with the help of single inline ternary conditions

	border: 2px solid ${(props) => (props.secondary ? '#F7A072' : '#a1cdf1')};

	// applying multiple props with the help of css helper
	${(props) => {
		return (
			props.inverse &&
			css`
				background-color: #fff;
				color: #a1cdf1;
			`
		);
	}}
`;

export const Button = ({ secondary, big, inverse, ...props }) => {
	return (
		<StyledButton
			secondary={secondary}
			big={big}
			inverse={inverse}
			{...props}
		/>
	);
};
