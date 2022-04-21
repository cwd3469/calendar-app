import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CounterPage from './CounterPage';
import TodoPage from './TodoPage';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
