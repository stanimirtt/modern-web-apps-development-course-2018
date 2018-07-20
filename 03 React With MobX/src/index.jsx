import React from 'react';
import ReactDOM from 'react-dom';

import { AppState } from './stores/AppState';
import App from './components/App';

const appState = new AppState();

window.appState = appState;

ReactDOM.render(<App appState={appState} />, document.querySelector('.container'));
