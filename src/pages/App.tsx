import React from 'react';
import { Switch, Route } from 'react-router';
import Main from './Mian';
import Calendar from './Calendar';
import NotFound from './NotFound';
import MainLayout from '@components/Common/MainLayout';
function App(): JSX.Element {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/calendar" component={Calendar} />
        <Route path="*" component={NotFound} />
      </Switch>
    </MainLayout>
  );
}

export default App;
