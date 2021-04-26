const initialState = {
  tournamentApiUrl: 'http://localhost:3001/tournament',
  teamTournamentApiUrl: 'http://localhost:3001/team-tournament',
  memberTeamApiUrl: 'http://localhost:3001/memberteam',
  allMemberApiUrl: 'http://localhost:3001/members',
  detailMemberApiUrl: 'http://localhost:3001/member'
}

function reducer (state = initialState, action) {
  switch(action.type) {
    case 'APIURL/SETAPIURL': 
      return {...state, apiUrl: action.payload}
    
    default: 
      return state
  }
}

export default reducer