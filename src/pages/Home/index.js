import React from 'react';
import { Default as DefaultLayout } from '../../components/_layouts';
import Console from '../../components/Console';
import Screen from '../../components/Screen';
import Joystick from '../../components/Joystick';
// import { Container } from './styles';

export default function Home() {
	return (
		<DefaultLayout>
			<Console Screen={Screen} Joystick={Joystick} />
		</DefaultLayout>
	);
}