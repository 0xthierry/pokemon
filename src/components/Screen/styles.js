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
		overflow-y: auto;

		&::-webkit-scrollbar {
			width: 6px !important;
			height: 6px !important;
		}
		&::-webkit-scrollbar-thumb {
			background-color: rgba(0, 0, 0, 0.2);
			border-radius: 3px;
		}
		&::-webkit-scrollbar-track {
			background: #f1f1f1;
		}
	}
`;

export const ListItem = styled.li`
	height: 20px;
	background-color: ${({ isSelected }) => (isSelected ? '#c4c2c2' : '#ededed')};
	line-height: 20px;
	cursor: pointer;

	font-weight: 600;
	text-transform: capitalize;
	padding: 0 5px;
`;

export const ContainerDetail = styled.div`
	background-color: #ededed;
	width: 100%;
	height: 100%;

	padding: 5px;

	div {
		text-transform: capitalize;
		height: 20px;
		line-height: 20px;
	}
`;
