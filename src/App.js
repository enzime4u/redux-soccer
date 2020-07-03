import React, { useState } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import cuid from 'cuid';

function App(props) {
  const teams = useSelector((state) => state.teams);
  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();
  const [teamName, setTeamName] = useState('');
  const [teamOne, setTeamOne] = useState('');
  const [teamTwo, setTeamTwo] = useState('');
  const [score, setScore] = useState('');

  const addTeam = () => {
    if (teamName) {
      dispatch({
        type: 'ADD_TEAM',
        payload: { name: teamName, id: cuid() },
      });
    }
    setTeamName('');
  };

  const removeTeam = (id) => {
    dispatch({ type: 'REMOVE_TEAM', payload: { id: id } });
  };

  const makeMatch = () => {
    dispatch({
      type: 'MAKE_MATCH',
      payload: { teamOne, teamTwo, score },
    });
    setTeamOne('');
    setTeamTwo('');
    setScore('');
  };

  return (
    <div className='App'>
      <input
        type='text'
        value={teamName}
        onChange={(e) => {
          e.preventDefault();
          setTeamName(e.target.value);
        }}
      />
      <button onClick={addTeam}>Add Team</button>
      <ul>
        {teams.map((team) => (
          <li key={team.id}>
            {team.name}
            <button onClick={() => removeTeam(team.id)}>X</button>
          </li>
        ))}
      </ul>

      <div>
        <select
          value={teamOne}
          onChange={(event) => setTeamOne(event.target.value)}
        >
          <option>Select Team 1</option>
          {teams.map((team) => (
            <option key={team.id} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
        <select
          value={teamTwo}
          onChange={(event) => setTeamTwo(event.target.value)}
        >
          <option>Select Team 2</option>
          {teams.map((team) => (
            <option key={team.id} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
        <input
          type='text'
          value={score}
          onChange={(event) => setScore(event.target.value)}
        />
        <button onClick={() => makeMatch()}>Make Match</button>
      </div>
      <div>
        <ul>
          {matches.map((match, index) => (
            <li key={index}>
              {match.teamOne}-{match.teamTwo} {match.score}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
