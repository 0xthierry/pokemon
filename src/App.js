import React from 'react';
import { ThemeProvider } from 'styled-components';

import ReactGA from 'react-ga';
import { theme } from './styles/theme';
import GlobalStyle from './styles/global';

import Home from './pages/Home';

ReactGA.initialize(process.env.REACT_APP_GA);

function App() {
	ReactGA.pageview(window.location.pathname + window.location.search);
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
