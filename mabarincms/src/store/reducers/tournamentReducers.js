
const initialState = {
  tournaments: [],
  detailTournament: {},
  loadingTournaments: true,
  loadingDetailTournament: true
}

function reducer (state = initialState, action){
  switch (action.type) {
    case 'TOURNAMENT/SETTOURNAMENTS':
      return {...state, tournaments: action.payload}
    
    case 'TOURNAMENT/SETDETAILTOURNAMENT':
      return {...state, detailTournament: action.payload}

    case 'TOURNAMENT/SETLOADINGTOURNAMNETS' :
      return {...state, loadingTournaments: action.payload}

    case 'TOURNAMENT/SETLOADINGDETAILTOURNAMENT' :
      return {...state, loadingDetailTournament: action.payload}
    
    default:
      return state
  }
}

export default reducer