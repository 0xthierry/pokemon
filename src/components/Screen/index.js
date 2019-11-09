import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Screen({ isOn }) {
	return (
		<Container isOn={isOn} data-testid="screen">
			<p />
			<div />{' '}
		</Container>
	);
}

Screen.defaultProps = {
	isOn: false,
};

Screen.propTypes = {
	isOn: PropTypes.bool,
};
