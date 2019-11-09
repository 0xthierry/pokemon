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
	background-color: #262626;
	border-radius: 5px;

	display: grid;
	grid-auto-flow: column;

	${({ vertical }) =>
		vertical
			? css`
					width: 100%;
					transform: rotate(90deg);
			  `
			: css`
					width: 80%;
					position: absolute;
			  `}

	button {
		background-color: #262626;
		border: none;
		border-radius: 5px;
	}

	span {
		background-color: #2f2f2f;
		border-radius: 50%;
	}
`;
