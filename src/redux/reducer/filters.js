const initialState = {
  sortBy: 'popular',
  category: 0,
};

const filters = (state, action) => {
  if (action.type === 'ACTIVE_SORT_BY') {
    return {
      ...state,
      sortBy: action.payload,
    };
  }
};
