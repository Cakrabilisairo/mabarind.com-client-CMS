const initialState = {
  tournamentTeams: [],
  teamTournaments: [],
  detailTeamTournament: {},
  teamTournamentLoading: false,
  detailTeamTournamentLoading: false
}

function reducer (state =initialState, action) {
  switch(action.type) {
    case 'TEAMTOURNAMENT/SETTOURNAMENTTEAMS' :
      return {...state, tournamentTeams: action.payload}

    case 'TEAMTOURNAMENT/SETTEAMTOURNAMENTS' :
      return {...state, teamTournaments: action.payload}
    
    case 'TEAMTOURNAMENT/SETTEAMTOURNAMENTLOADING' :
      return {...state, tournamentTeams: action.payload}

    case 'TEAMTOURNAMENT/SETDETAILTEAMTOURNAMENT' :
      return {...state, detailTeamTournament: action.payload}

    case 'TEAMTOURNAMENT/SETDETAILTEAMTOURNAMENTLOADING' : 
      return {...state, detailTeamTournamentLoading: action.payload}

    default:
      return state
  }
}

export default reducer