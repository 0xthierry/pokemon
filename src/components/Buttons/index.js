import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function Buttons({ onClickSelectPokemon, onClickBackToList }) {
	return (
		<Container>
			<button
				type="button"
				title="Select Pokemon"
				onClick={onClickSelectPokemon}
				data-testid="buttons-select-pokemon"
			>
				&nbsp;
			</button>

			<button
				type="button"
				title="Back to list"
				onClick={onClickBackToList}
				data-testid="buttons-back-to-list"
			>
				&nbsp;
			</button>
		</Container>
	);
}

Buttons.defaultProps = {
	onClickSelectPokemon: () => {},
	onClickBackToList: () => {},
};
Buttons.propTypes = {
	onClickSelectPokemon: PropTypes.func,
	onClickBackToList: PropTypes.func,
};
