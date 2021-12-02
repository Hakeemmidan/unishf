import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AllHeroes } from './pages/all_heroes/AllHeroes';
import { getHeroes } from './utils/mock_api';

const Test2 = () => <div>Hello world from test 2 </div>;

const App = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(async () => {
    setHeroes(await getHeroes());
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/heroes" element={<AllHeroes heroes={heroes} />} />
        <Route path="heroes/:heroId" element={<Test2 />} />
        <Route path="*" element={<AllHeroes heroes={heroes} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
