import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from './styles/theme';
import GlobalStyle from './styles/global';

import Home from './pages/Home';

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Home />
			</ThemeProvider>
		</>
	);
}

export default App;
