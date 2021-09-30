import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { setup } from 'twind';
import store from './store';
import App from './App';

setup({
  preflight: false,
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
