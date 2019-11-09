import React from 'react';

import { Container, Line, Button } from './styles';

export default function Joystick() {
	return (
		<Container>
			<Line rotate>
				<Button />
				<Button />
			</Line>
			<Line style={{ position: 'absolute' }}>
				<Button />
				<Button />
			</Line>
		</Container>
	);
}
