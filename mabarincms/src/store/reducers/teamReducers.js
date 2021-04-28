const initialState = {
  teams: [],
  detailTeam: {},
  loadingTeams: true,
  loadiangDetailTeam: true
}

function reducer (state = initialState, action) {
  switch(action.type) {
    case 'TEAM/SETTEAMS': 
      return {...state, teams: action.payload}
    case 'TEAM/SETDETAILTEAM': 
      return {...state, detailTeam: action.payload}
    case 'TEAM/SETLOADINGTEAMS': 
      return {...state, loadingTeams: action.payload}
    case 'TEAM/SETLOADINGDETAILTEAM': 
      return {...state, loadingDetailTeam: action.payload}
    
    default: 
      return state
  }
}

export default reducer