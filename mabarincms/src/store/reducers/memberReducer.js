const initialState = {
  members: [],
  detailMember: {},
  loadingMembers: true,
  loadingDetailMember: true
}

function reducer (state = initialState, action) {
  switch(action.type) {
    case 'MEMBER/SETMEMBERS': 
      return {...state, members: action.payload}
    case 'MEMBER/SETDETAILMEMBER': 
      return {...state, detailMember: action.payload}
    case 'MEMBER/SETLOADINGMEMBERS': 
      return {...state, loadingMembers: action.payload}
    case 'MEMBER/SETLOADINGDETAILMEMBER': 
      return {...state, loadingDetailMember: action.payload}
    
    default: 
      return state
  }
}

export default reducer