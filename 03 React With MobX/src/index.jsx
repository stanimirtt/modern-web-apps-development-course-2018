import React from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx';

import App from './components/App';

const appState = observable({
  items: [],
  term: '',
  selectedItem: null
});

appState.setSelectedItem = action(item => {
  appState.selectedItem = item;
});

appState.setTerm = action(value => {
  appState.term = value;
});

appState.setItems = action(items => {
  appState.items = items;
});

window.appState = appState;

ReactDOM.render(<App appState={appState} />, document.querySelector('.container'));
