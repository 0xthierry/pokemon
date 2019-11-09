import styled from 'styled-components';

export const Container = styled.div`
	background-color: #a7adbb;
	height: 35px;
	width: 80px;
	border-radius: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5px;

	transform: rotate(-45deg);

	button {
		background-color: #c54c7b;
		border: none;
		height: 25px;
		width: 25px;
		border-radius: 50%;
	}
`;
