import React from 'react'
import logo from '../../logo.svg';
import { Counter } from './Counter';
function CounterTemplate() {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
    </header>
  )
}

export default CounterTemplate