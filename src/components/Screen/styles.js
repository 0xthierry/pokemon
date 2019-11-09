import styled from 'styled-components';

export const Container = styled.div`
	width: 200px;
	height: 150px;
	position: relative;

	border-radius: 10px;
	border-bottom-right-radius: 40px;

	background: #576c89;

	display: flex;
	justify-content: center;
	align-items: center;

	> p {
		width: 5px;
		height: 5px;
		border-radius: 50%;
		position: absolute;
		top: 42px;
		left: 11px;

		background: ${({ isOn }) => (isOn ? '#f00' : '#a84a32')};
	}

	> div {
		width: 150px;
		height: 100px;
		background: #61c36c;
		border: 1px solid #d2d5da;
	}
`;
