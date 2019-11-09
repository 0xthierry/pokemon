import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '.';

describe('Buttons component', () => {
	it('should call function onClickSelectPokemon onClick', () => {
		const onClickSelectPokemon = jest.fn();
		const { getByTestId } = render(
			<Buttons onClickSelectPokemon={onClickSelectPokemon} />
		);
		fireEvent.click(getByTestId('buttons-select-pokemon'));

		expect(onClickSelectPokemon.mock.calls.length).toBe(1);
	});

	it('should call function onClickBackToList onClick', () => {
		const onClickBackToList = jest.fn();
		const { getByTestId } = render(
			<Buttons onClickBackToList={onClickBackToList} />
		);
		fireEvent.click(getByTestId('buttons-back-to-list'));

		expect(onClickBackToList.mock.calls.length).toBe(1);
	});
});
