import { combineReducers } from 'redux';
import filtersReducer from './filters';
import pizzasReducer from './pizzas';

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  filters: filtersReducer,
});

export default rootReducer;
