import {createStore, combineReducers, applyMiddleware } from 'redux'
import apiUrl from './reducers/apiReducers'
import tournamentReducers from './reducers/tournamentReducers'
import thunk from 'redux-thunk'

const rootReducer = combineReducers ({
  apiUrl,
  tournament: tournamentReducers
})
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store