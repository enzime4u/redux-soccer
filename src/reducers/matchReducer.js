const matchesInitialState = [];

const matchReducer = (state = matchesInitialState, action) => {
  switch (action.type) {
    case 'MAKE_MATCH': {
      state = [...state, action.payload];
      return [...state];
    }
    default:
      return state;
  }
};

export default matchReducer;
