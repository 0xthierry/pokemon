import styled from 'styled-components';

export const Container = styled.div`
	background: ${({ theme }) => theme.color.primary};
	border-radius: 10px;
	border-bottom-right-radius: 40px;
	border: 4px solid #546285;
	position: relative;

	max-height: 500px;
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
`;
