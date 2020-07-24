import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// reducers
import counter from './reducer/counterReducer'

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || (a => a);

export default createStore(combineReducers({ counter }), enhancer(applyMiddleware(thunk)))