/* eslint-disable no-use-before-define */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { throttle } from 'underscore';
import { Default as DefaultLayout } from '../../components/_layouts';
import Console from '../../components/Console';
import Screen from '../../components/Screen';
import Joystick from '../../components/Joystick';
import Buttons from '../../components/Buttons';
import api from '../../service/api';

const OFF_SET = 20;

export default function Home() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [pokemons, setPokemons] = useState([]);
	const [pokemon, setPokemon] = useState(null);
	const [offSet, setOffset] = useState(0);
	const [count, setCount] = useState(0);
	const _handleNextBackPage = throttle(handleNextBackPage, 300);

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
		const response = await api.get(`/pokemon/${selectedIndex + 1 + offSet}`);
		const { data } = response;
		const { id, name, weight, height } = data;
		setPokemon({ id, name, weight, height });
	}

	async function handleOnBackToList() {
		setPokemon(null);
	}

	function handleNextBackPage(value) {
		const acc = offSet + value;
		if (value > 0 && acc <= count) {
			setOffset(acc);
		}
		if (value < 0 && acc >= 0) {
			setOffset(acc);
		}
	}

	useEffect(() => {
		async function getAllPokemons() {
			const response = await api.get('/pokemon', {
				params: {
					limit: 20,
					offset: offSet,
				},
			});
			const { data } = response;
			setPokemons(data.results);
			setCount(data.count);
		}
		getAllPokemons();
	}, [offSet]);

	return (
		<DefaultLayout>
			<Console
				Screen={
					<Screen
						listPokemon={pokemons}
						selectedIndex={selectedIndex}
						pokemon={pokemon}
						totalPages={Math.round(count / OFF_SET)}
						page={Math.round(offSet / OFF_SET)}
					/>
				}
				Joystick={
					<Joystick
						onClickDown={() => handleJoystickyUpDown(1)}
						onClickUp={() => handleJoystickyUpDown(-1)}
						onClickNext={() => _handleNextBackPage(OFF_SET)}
						onClickBack={() => _handleNextBackPage(-OFF_SET)}
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
