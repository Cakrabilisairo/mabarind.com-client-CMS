const initialState = {
  apiUrl: ''
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