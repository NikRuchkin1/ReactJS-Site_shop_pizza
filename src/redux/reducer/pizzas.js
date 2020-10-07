const initialState = {
  items: [],
  isLoaded: false,
};

const pizzas = (state = initialState, action) => {
  if (action.type === 'ACTIVE_SORT_BY') {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default pizzas;
