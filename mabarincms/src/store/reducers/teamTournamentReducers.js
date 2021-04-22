const initialState = {
  tournamentTeams: [],
  teamTournaments: [],
  teamTournamentLoading: false
}

function reducer (state =initialState, action) {
  switch(action.type) {
    case 'TEAMTOURNAMENT/SETTOURNAMENTTEAMS' :
      return {...state, tournamentTeams: action.payload}

    case 'TEAMTOURNAMENT/SETTEAMTOURNAMENTS' :
      return {...state, teamTournaments: action.payload}
    
    case 'TEAMTOURNAMENT/SETTEAMTOURNAMENTLOADING' :
      return {...state, tournamentTeams: action.payload}

    default:
      return state
  }
}

export default reducer