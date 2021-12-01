import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { getHeroes } from './utils/mock_api';
import './App.css';

const Test1 = () => (
  <div>
    Hello world from test 1, <Link to="heroes/123"> Go to page 2</Link>{' '}
  </div>
);
const Test2 = () => <div>Hello world from test 2 </div>;

const App = () => {
  const [heroes, setHeroes] = useState([]);

  useEffect(async () => {
    console.log('heroes before:', heroes);
    const heroesRes = await getHeroes();
    setHeroes(heroesRes);
    console.log('heroes after', heroesRes);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/heroes" element={<Test1 />} />
        <Route path="heroes/:heroId" element={<Test2 />} />
        <Route path="*" element={<Test1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
