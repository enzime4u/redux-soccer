import { combineReducers } from 'redux';
import teamReducer from './teamReducer';
import matchReducer from './matchReducer';

const appReducer = combineReducers({
  teams: teamReducer,
  matches: matchReducer,
});

export default appReducer;
