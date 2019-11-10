import React, { useState, useEffect } from 'react';
import { Default as DefaultLayout } from '../../components/_layouts';
import Console from '../../components/Console';
import Screen from '../../components/Screen';
import Joystick from '../../components/Joystick';
import Buttons from '../../components/Buttons';
import api from '../../service/api';

export default function Home() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [pokemons, setPokemons] = useState([]);
	const [pokemon, setPokemon] = useState(null);

	useEffect(() => {
		async function getAllPokemons() {
			const response = await api.get('/pokemon');
			const { data } = response;
			setPokemons(data.results);
		}
		getAllPokemons();
	}, []);

	function handleJoystickyUpDown(value) {
		const lengthPokemon = pokemons.length;

		if (value > 0 && selectedIndex + value < lengthPokemon) {
			setSelectedIndex(selectedIndex + value);
		}
		if (value < 0 && selectedIndex + value >= 0) {
			setSelectedIndex(selectedIndex + value);
		}
	}

	async function handleOnSelectPokemon() {
		const response = await api.get(`/pokemon/${selectedIndex + 1}`);
		const { data } = response;
		const { id, name, weight, height } = data;
		setPokemon({ id, name, weight, height });
	}

	async function handleOnBackToList() {
		setPokemon(null);
	}
	return (
		<DefaultLayout>
			<Console
				Screen={
					<Screen
						listPokemon={pokemons}
						selectedIndex={selectedIndex}
						pokemon={pokemon}
					/>
				}
				Joystick={
					<Joystick
						onClickDown={() => handleJoystickyUpDown(1)}
						onClickUp={() => handleJoystickyUpDown(-1)}
					/>
				}
				Buttons={
					<Buttons
						onClickSelectPokemon={handleOnSelectPokemon}
						onClickBackToList={handleOnBackToList}
					/>
				}
			/>
		</DefaultLayout>
	);
}
