import React from 'react';
import logo from '../assets/images/logo.svg';
import { Counter } from '../components/Counter/Counter';

function CounterPage() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Counter />
    </header>
  );
}

export default CounterPage;
