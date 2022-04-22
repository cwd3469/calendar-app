import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Counter from './Counter';
import Todo from './Todo';
import Main from './Mian';
import Sign from './Sign';
import Cookies from 'js-cookie';

const token = Cookies.get('access_token');

type IsProps = {
  Conponent: JSX.Element;
};

const Istoken = (props: IsProps): JSX.Element => {
  const { Conponent } = props;
  if (token !== undefined) {
    return <>{Conponent}</>;
  } else {
    return <Navigate to="/sign" replace />;
  }
};

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Istoken Conponent={<Main />} />} />
        <Route path="/todo" element={<Istoken Conponent={<Todo />} />} />
        <Route path="/counter" element={<Istoken Conponent={<Counter />} />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
