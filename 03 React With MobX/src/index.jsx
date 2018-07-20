import React from 'react';
import ReactDOM from 'react-dom';
import { observable, action } from 'mobx';

import App from './components/App';

class AppState {
  @observable items = [];
  @observable term = '';
  @observable selectedItem = {};

  // TODO: Show computed case

  @action
  setSelectedItem(item) {
    this.selectedItem = item;
  }

  @action
  setTerm(value) {
    this.term = value;
  }

  @action
  setItems(items) {
    this.items.replace(observable(items));
  }
}

const appState = new AppState();

window.appState = appState;

ReactDOM.render(<App appState={appState} />, document.querySelector('.container'));
