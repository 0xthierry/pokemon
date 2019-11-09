import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Default({ children }) {
	return <Container>{children}</Container>;
}

Default.defaultProps = {
	children: null,
};

Default.propTypes = {
	children: PropTypes.element,
};
