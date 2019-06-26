import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMiddleware from './middlewares/promises';
import * as reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promisesMiddleware)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer, {
	weather: {
		isLoading: false,
		items: [],
		forcast: null
	}
});

export default store;