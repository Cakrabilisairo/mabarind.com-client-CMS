import {createStore, combineReducers, applyMiddleware } from 'redux'
import apiUrl from './reducers/apiReducers'
import tournamentReducers from './reducers/tournamentReducers'
import teamTournamentReducer from './reducers/teamTournamentReducers'
import memberTeamReducers from './reducers/memberTeamReducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers ({
  apiUrl,
  tournament: tournamentReducers,
  teamTournament: teamTournamentReducer,
  memberTeam: memberTeamReducers
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store