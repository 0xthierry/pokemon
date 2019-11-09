import React from 'react';
import PropTypes from 'prop-types';
import { Container, Line } from './styles';

export default function Joystick({
	onClickUp,
	onClickDown,
	onClickBack,
	onClickNext,
}) {
	return (
		<Container>
			<Line vertical>
				<button
					type="button"
					title="Up"
					onClick={onClickUp}
					data-testid="joystick-up"
				>
					&nbsp;
				</button>
				<span>&nbsp;</span>
				<button
					type="button"
					title="Down"
					onClick={onClickDown}
					data-testid="joystick-down"
				>
					&nbsp;
				</button>
			</Line>
			<Line>
				<button
					type="button"
					title="Back"
					onClick={onClickBack}
					data-testid="joystick-back"
				>
					&nbsp;
				</button>
				<span>&nbsp;</span>
				<button
					type="button"
					title="Next"
					onClick={onClickNext}
					data-testid="joystick-next"
				>
					&nbsp;
				</button>
			</Line>
		</Container>
	);
}
Joystick.defaultProps = {
	onClickUp: () => {},
	onClickDown: () => {},
	onClickBack: () => {},
	onClickNext: () => {},
};

Joystick.propTypes = {
	onClickUp: PropTypes.func,
	onClickDown: PropTypes.func,
	onClickBack: PropTypes.func,
	onClickNext: PropTypes.func,
};
