import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Buttons from '.';

describe('Buttons component', () => {
	let onClickMockFunction;
	beforeEach(() => {
		onClickMockFunction = jest.fn();
	});

	it('should call function onClickSelectPokemon onClick', () => {
		const { getByTestId } = render(
			<Buttons onClickSelectPokemon={onClickMockFunction} />
		);
		fireEvent.click(getByTestId('buttons-select-pokemon'));

		expect(onClickMockFunction.mock.calls.length).toBe(1);
	});

	it('should call function onClickBackToList onClick', () => {
		const { getByTestId } = render(
			<Buttons onClickBackToList={onClickMockFunction} />
		);
		fireEvent.click(getByTestId('buttons-back-to-list'));

		expect(onClickMockFunction.mock.calls.length).toBe(1);
	});
});
