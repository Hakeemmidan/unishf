import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from './utils/themes';
import { AllHeroes } from './pages/heroes/Main';
import { HeroProfile } from './pages/heroes/:heroId/Main';
import { getHeroes } from './utils/mock_api';

const AppContainer = styled.div`
  font-family: ${(props) => props.theme.fontFamily};
  color: ${(props) => props.theme.colors.text};
`;

const App = () => {
  const [heroes, setHeroes] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [theme, setTheme] = useState('mainLight');

  useEffect(async () => {
    setHeroes(await getHeroes());
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <AppContainer>
        <BrowserRouter>
          <Routes>
            <Route
              index
              path="/heroes"
              element={<AllHeroes heroes={heroes} setHeroes={setHeroes} />}
            />
            <Route path="heroes/:heroId" element={<HeroProfile />} />
            <Route path="*" element={<AllHeroes heroes={heroes} setHeroes={setHeroes} />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
