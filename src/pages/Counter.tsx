import React from 'react';
import logo from '../assets/images/logo.svg';
import { Counter } from '../components/Counter/Counter';
import MainLayout from '../components/Common/MainLayout';

const CounterPage = (): JSX.Element => {
  return (
    <MainLayout>
      <>
        <img src={logo} alt="" />
        <Counter />
      </>
    </MainLayout>
  );
};

export default CounterPage;
