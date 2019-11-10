/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Container, ListItem } from './styles';

export default function Screen({ listPokemon, selectedIndex }) {
	const [isOn, setIsOn] = useState(false);
	const refs = listPokemon.reduce((acc, value, index) => {
		acc[index] = React.createRef();
		return acc;
	}, {});

	useEffect(() => {
		function scrollTo(index) {
			refs[index].current.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
			});
		}
		setTimeout(() => {
			setIsOn(!isOn);
		}, 1000);
		if (listPokemon.length > 1) {
			scrollTo(selectedIndex);
		}
	}, [isOn, listPokemon.length, refs, selectedIndex]);

	return (
		<Container data-testid="screen" isOn={isOn} key="screen">
			<p />
			<div>
				<ul>
					{listPokemon.map(({ name }, i) => (
						<ListItem key={i} isSelected={i === selectedIndex} ref={refs[i]}>
							{name}
						</ListItem>
					))}
				</ul>
			</div>
		</Container>
	);
}

Screen.defaultProps = {
	listPokemon: [],
	selectedIndex: 0,
};

Screen.propTypes = {
	listPokemon: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			url: PropTypes.string,
		})
	),
	selectedIndex: PropTypes.number,
};
