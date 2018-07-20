// TODO: Add css loader
// TODO: Add Bulma
// TODO: WB 4

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { AppState } from './stores';
import { Home } from './pages';

const appState = new AppState();

// Add for debug purpose
window.appState = appState;

ReactDOM.render(
  <Provider appState={appState}>
    <Home />
  </Provider>,
  document.querySelector('.container')
);
