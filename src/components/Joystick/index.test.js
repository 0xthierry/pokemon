import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Joystick from '.';

describe('Joystick component', () => {
	let onClickMockFunction;
	beforeEach(() => {
		onClickMockFunction = jest.fn();
	});
	it('should call function onClickNext onClick', () => {
		const { getByTestId } = render(
			<Joystick onClickNext={onClickMockFunction} />
		);
		fireEvent.click(getByTestId('joystick-next'));

		expect(onClickMockFunction.mock.calls.length).toBe(1);
	});

	it('should call function onClickBack onClick', () => {
		const { getByTestId } = render(
			<Joystick onClickBack={onClickMockFunction} />
		);
		fireEvent.click(getByTestId('joystick-back'));

		expect(onClickMockFunction.mock.calls.length).toBe(1);
	});

	it('should call function onClickDown onClick', () => {
		const { getByTestId } = render(
			<Joystick onClickDown={onClickMockFunction} />
		);
		fireEvent.click(getByTestId('joystick-down'));

		expect(onClickMockFunction.mock.calls.length).toBe(1);
	});

	it('should call function onClickUp onClick', () => {
		const { getByTestId } = render(
			<Joystick onClickUp={onClickMockFunction} />
		);
		fireEvent.click(getByTestId('joystick-up'));

		expect(onClickMockFunction.mock.calls.length).toBe(1);
	});
});
