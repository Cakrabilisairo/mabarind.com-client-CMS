import {createStore, combineReducers, applyMiddleware } from 'redux'
import apiUrl from './reducers/apiReducers'
import tournamentReducers from './reducers/tournamentReducers'
import teamTournamentReducer from './reducers/teamTournamentReducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers ({
  apiUrl,
  tournament: tournamentReducers,
  teamTournament: teamTournamentReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store