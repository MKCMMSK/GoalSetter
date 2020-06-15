import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

//components
import NavBar from "./components/NavBar"
import LightTheme from './themes/light';
import DarkTheme from './themes/dark';

const GlobalStyle = createGlobalStyle`
	body{
		background: ${p => p.theme.bodyBackgroundColor};
		min-height: 100vh;
		margin: 0;
		color: ${p => p.theme.bodyFontColor};
		font-family: 'Kaushan Script'
	}
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <div className="App">
      <ThemeProvider theme={{
        ...theme, setTheme: () => {
          setTheme(s => s.id === 'light' ? DarkTheme : LightTheme);
        }
      }}>
        <GlobalStyle />
        <BrowserRouter>
          <NavBar />
          <Routes />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
