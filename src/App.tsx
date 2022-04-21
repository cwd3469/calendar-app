import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Counter } from './components/Counter/Counter';
import TodoTemplate from './components/Todo/TodoTemplate';
  
import './assets/style/App.css';

function App(): JSX.Element  {
  return (
    <BrowserRouter>
     <Routes> 
        <Route path="/" element={<TodoTemplate />} />
        <Route path="/counter" element={<Counter />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
