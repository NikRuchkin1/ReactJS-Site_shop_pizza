import Axios from 'axios';

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});
export const fetchPizzas = () => (dispatch) => {
  dispatch(setLoaded(false));
  Axios.get('http://localhost:3001/db.json').then(({ data }) => {
    dispatch(setPizzas(data.pizzas));
  });
};

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});
