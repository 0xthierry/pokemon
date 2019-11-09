import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Joystick from '.';

describe('Joystick component', () => {
	it('should call function onClickNext onClick', () => {
		const onClickNext = jest.fn();
		const { getByTestId } = render(<Joystick onClickNext={onClickNext} />);
		fireEvent.click(getByTestId('joystick-next'));

		expect(onClickNext.mock.calls.length).toBe(1);
	});

	it('should call function onClickBack onClick', () => {
		const onClickBack = jest.fn();
		const { getByTestId } = render(<Joystick onClickBack={onClickBack} />);
		fireEvent.click(getByTestId('joystick-back'));

		expect(onClickBack.mock.calls.length).toBe(1);
	});

	it('should call function onClickDown onClick', () => {
		const onClickDown = jest.fn();
		const { getByTestId } = render(<Joystick onClickDown={onClickDown} />);
		fireEvent.click(getByTestId('joystick-down'));

		expect(onClickDown.mock.calls.length).toBe(1);
	});

	it('should call function onClickUp onClick', () => {
		const onClickUp = jest.fn();
		const { getByTestId } = render(<Joystick onClickUp={onClickUp} />);
		fireEvent.click(getByTestId('joystick-up'));

		expect(onClickUp.mock.calls.length).toBe(1);
	});
});
