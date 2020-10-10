import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunk from 'redux-thunk';

const composeEnhancer = compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
