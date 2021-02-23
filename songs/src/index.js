// when you specify directory without file, webapck will automatically look for index.js file inside the folder
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// own code
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  // wrap App with provider
  // provide store as the prop into provider
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);

