import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from './components/App';
import reducers from './reducers';

const store = createStore(
  reducers,
  /* preloadedState, */ devToolsEnhancer()
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);
