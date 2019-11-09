import styled from 'styled-components';

export const Container = styled.div`
	background: ${({ theme }) => theme.color.primary};
	border-radius: 10px;
	border-bottom-right-radius: 40px;
	border: 4px solid #546285;
	position: relative;
	min-height: 420px;
	max-height: 450px;
`;

export const Wrapper = styled.div`
	padding: 30px 20px 20px;

	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const ScreenContainer = styled.div``;
export const ButtonsContainer = styled.div`
	margin: 20% 0;
	align-self: flex-start;
	width: 100%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const SoundOutputContainer = styled.div`
	display: flex;
	align-self: flex-end;

	transform: rotate(-45deg);

	div + div {
		margin-left: 8px;
	}

	div {
		width: 5px;
		border-radius: 2px;
		height: 40px;
		background-color: #566a85;
	}
`;
export const SoundOutput = styled.div``;
