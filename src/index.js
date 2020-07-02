import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  teams: [
    { id: 123, name: 'Steaua Bucuresti' },
    { id: 1234, name: 'Dinamo' },
    { id: 12345, name: 'Farul Constanta' },
  ],
  matches: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TEAM': {
      state.teams = [...state.teams, action.payload];
      console.log('from add_team', state);
      return { ...state };
    }
    case 'REMOVE_TEAM': {
      state.teams = [
        ...state.teams.filter((team) => team.id !== action.payload.id),
      ];
      console.log('From Remove Team:', action.id);
      return { ...state };
    }
    case 'MAKE_MATCH': {
      state.matches = [...state.matches, action.payload];
      return { ...state };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
