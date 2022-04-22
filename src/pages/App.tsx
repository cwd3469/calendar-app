import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Counter from './Counter';
import Todo from './Todo';
import Main from './Mian';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
