import React from 'react';
import { render } from '@testing-library/react';
import Screen from '.';

describe('Screen component', () => {
	it('should render a list of Pokemons', () => {
		jest.spyOn(React, 'createRef').mockImplementation(() => ({
			current: {
				scrollIntoView() {},
			},
		}));

		const { getByText } = render(
			<Screen listPokemon={[{ name: 'Pikachu', url: '' }]} />
		);

		expect(getByText('Pikachu')).toBeTruthy();
	});
});
