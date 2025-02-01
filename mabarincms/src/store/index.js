import {createStore, combineReducers, applyMiddleware } from 'redux'
import apiUrl from './reducers/apiReducers'
import tournamentReducers from './reducers/tournamentReducers'
import teamTournamentReducers from './reducers/teamTournamentReducers'
import memberTeamReducers from './reducers/memberTeamReducers'
import memberReducers from './reducers/memberReducer'
import teamReducers from  './reducers/teamReducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers ({
  apiUrl,
  tournament: tournamentReducers,
  teamTournament: teamTournamentReducers,
  memberTeam: memberTeamReducers,
  member: memberReducers,
  team: teamReducers

})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store