import React from 'react';
import PropTypes from 'prop-types';
import {
	Container,
	Wrapper,
	ScreenContainer,
	ButtonsContainer,
	SoundOutputContainer,
} from './styles';

export default function Console({ Screen, Joystick, Buttons }) {
	return (
		<Container>
			<Wrapper>
				<ScreenContainer>{Screen}</ScreenContainer>
				<ButtonsContainer>
					{Joystick}
					{Buttons}
				</ButtonsContainer>
				<SoundOutputContainer>
					{[...Array(6).keys()].map(i => (
						<div key={i} />
					))}
				</SoundOutputContainer>
			</Wrapper>
		</Container>
	);
}

Console.defaultProps = {
	Screen: <></>,
	Joystick: <></>,
	Buttons: <></>,
};

Console.propTypes = {
	Screen: PropTypes.element,
	Joystick: PropTypes.element,
	Buttons: PropTypes.element,
};
