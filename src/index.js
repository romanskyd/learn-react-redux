import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './state';
import {getIssues} from './api';

ReactDOM.render(<App />, document.getElementById('root'));

store.subscribe(() => {
	console.log('New state: ', store.getState());
});
console.log('1')
store.dispatch({type: 'INCREASE_COUNTER'});
console.log('2')
store.dispatch({type: 'INCREASE_COUNTER'});
console.log('3')
store.dispatch({type: 'RESET_COUNTER'});
console.log('4')
store.dispatch({type: 'UNKNOWN'});
console.log('5')
store.dispatch({
	type: 'LOAD_ISSUES',
	payload: [
		{id: 1, name: 'First issue'},
		{id: 2, name: 'Second issue'},
	]
});

store.dispatch({
	type: 'PROMISE',
	actions: ['ISSUES_LOADING', 'ISSUES_LOADED', 'ISSUES_LOAD_FAILTURE'],
	promise: getIssues()
});