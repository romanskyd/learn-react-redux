import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './state';
import {getIssues} from './api';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, document.getElementById('root'));
store.subscribe(() => {
	console.log('New state: ', store.getState());
});

store.dispatch({
	type: 'LOAD_ISSUES',
	payload: [
		{id: 1, name: 'First issue'},
		{id: 2, name: 'Second issue'},
	]
});

