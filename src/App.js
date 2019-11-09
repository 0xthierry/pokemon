import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global';

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>App</ThemeProvider>
		</>
	);
}

export default App;
