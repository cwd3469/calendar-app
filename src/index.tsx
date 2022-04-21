import React from 'react';
import { createRoot } from 'react-dom/client';
import './assets/scss/reset.scss';
import './assets/scss/root.scss';
import App from './pages/App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
const root = createRoot(container as Element);
const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(app);
