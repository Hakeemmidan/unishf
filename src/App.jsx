import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { theme } from './utils/theme';
import { AllHeroes } from './pages/all_heroes/AllHeroes';
import { getHeroes } from './utils/mock_api';

const currTheme = theme.mainLight;

const ThemeWrapper = styled.span`
  font-family: ${currTheme.fontFamily};
  border: 0.07rem solid ${currTheme.colors.border};
  color: ${currTheme.colors.text};
`;

const Test2 = () => <div>Hello world from test 2 </div>;

const App = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(async () => {
    setHeroes(await getHeroes());
  }, []);

  return (
    <ThemeWrapper>
      <BrowserRouter>
        <Routes>
          <Route index path="/heroes" element={<AllHeroes heroes={heroes} />} />
          <Route path="heroes/:heroId" element={<Test2 />} />
          <Route path="*" element={<AllHeroes heroes={heroes} />} />
        </Routes>
      </BrowserRouter>
    </ThemeWrapper>
  );
};

export default App;
