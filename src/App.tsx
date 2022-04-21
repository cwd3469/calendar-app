import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CounterTemplate from './components/Counter/CounterTemplate';
import TodoTemplate from './components/Todo/TodoTemplate';

import './assets/style/App.css';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoTemplate />} />
        <Route path="/counter" element={<CounterTemplate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
