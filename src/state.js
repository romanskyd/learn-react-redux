import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMiddleware from './middlewares/promises';
import * as reducers from './reducers';
// import counterReducer from './reducers/counter';
// import issuesReducer from './reducers/issues';

const createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);

/*
	state: {
		issues: [],
		repository: '',
		counter: 0
	}
*/
const reducer = combineReducers(reducers);
/*
	const reducer = combineReducers({
		// repository: state.repository,
		counter: counterReducer,
		issues: issuesReducer
	});
*/


const store = createStoreWithMiddleware(reducer, {
	issues: [],
	// repository: '',
	counter: 0
});

export default store;