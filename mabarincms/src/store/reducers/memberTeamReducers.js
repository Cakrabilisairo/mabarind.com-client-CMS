const initialState = {
  memberTeamList: [],
  loadingMemberTeamList: true
}

function reducer (state = initialState, action) {
  switch(action.type) {
    case 'MEMBERTEAM/SETMEMBERTEAMLIST': 
      return {...state, memberTeamList: action.payload}
    
    case 'MEMBERTEAM/SETLOADINGMEMBERTEAMLIST':
      return {...state, loadingMemberTeamList: action.payload}
    
    default: 
      return state
  }
}

export default reducer