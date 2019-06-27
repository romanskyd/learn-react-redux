import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './state';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css'

ReactDOM.render(
  <Provider store={store}>
	  <App />
  </Provider>, document.getElementById('root'));
store.subscribe(() => {
  console.log('New state: ', store.getState());
});

