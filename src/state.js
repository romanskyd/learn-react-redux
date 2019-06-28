import {createStore, combineReducers, applyMiddleware} from 'redux';
import promisesMiddleware from './middlewares/promises';
import * as reducers from './reducers';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers(reducers);

const initialState = {
  weather: {
    isLoading: false,
    items: [],
    forcast: null
  }
}
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;