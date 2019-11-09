import styled, { css } from 'styled-components';

export const Container = styled.div`
	position: relative;
	background-color: #a3b0b9;
	width: 80px;
	height: 80px;
	border-radius: 50%;
	padding: 10px;

	display: flex;
	align-items: center;
	justify-content: center;
`;
export const Line = styled.div`
	height: 22px;
	width: 100%;
	background-color: #262626;
	border-radius: 5px;

	display: grid;
	grid-auto-flow: column;

	${({ rotate }) =>
		rotate
			? css`
					transform: rotate(90deg);
			  `
			: css`
					position: absolute;
			  `}
`;
export const Button = styled.div`
	position: relative;
`;
