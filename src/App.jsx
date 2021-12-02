import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from './utils/themes';
import { AllHeroes } from './pages/all_heroes/AllHeroes';
import { getHeroes } from './utils/mock_api';

const Test2 = () => <div>Hello world from test 2 </div>;

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
            <Route index path="/heroes" element={<AllHeroes heroes={heroes} />} />
            <Route path="heroes/:heroId" element={<Test2 />} />
            <Route path="*" element={<AllHeroes heroes={heroes} />} />
          </Routes>
        </BrowserRouter>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
