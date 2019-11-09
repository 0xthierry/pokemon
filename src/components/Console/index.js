import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Wrapper,
	ScreenContainer,
	ButtonsContainer,
} from './styles';

export default function Console({ Screen, Joystick }) {
	return (
		<Container>
			<Wrapper>
				<ScreenContainer>
					<Screen />
				</ScreenContainer>
				<ButtonsContainer>
					<Joystick />
					{/* TO.DO add startSelect */}
				</ButtonsContainer>
			</Wrapper>
		</Container>
	);
}

Console.defaultProps = {
	Screen: null,
	Joystick: null,
};

Console.propTypes = {
	Screen: PropTypes.element,
	Joystick: PropTypes.element,
};
