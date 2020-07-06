const teamsInitialState = [
  { id: 123, name: 'Steaua Bucuresti' },
  { id: 1234, name: 'Dinamo' },
  { id: 12345, name: 'Farul Constanta' },
];

const teamReducer = (state = teamsInitialState, action) => {
  switch (action.type) {
    case 'ADD_TEAM': {
      state = [...state, action.payload];
      return [...state];
    }
    case 'REMOVE_TEAM': {
      state = [...state.filter((team) => team.id !== action.payload.id)];
      return [...state];
    }
    default:
      return state;
  }
};

export default teamReducer;
