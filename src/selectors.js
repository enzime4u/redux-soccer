import { createSelector } from 'reselect';

const teams = (state) => state.teams;
const matches = (state) => state.matches;

export const selectAllTeams = createSelector(teams, (teams) => teams);

export const selectMatches = createSelector(matches, (matches) => matches);
