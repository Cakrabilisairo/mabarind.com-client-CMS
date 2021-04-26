export function setMembers (payload) {
  return {type: 'MEMBER/SETMEMBERS', payload}
}
export function setDetailMember (payload) {
  return {type: 'MEMBER/SETDETAILMEMBER', payload}
}
export function setLoadingMembers (payload) {
  return {type: 'MEMBER/SETLOADINGMEMBERS', payload}
}
export function setLoadingDetailMember(payload) {
  return {type: 'MEMBER/SETLOADINGDETAILMEMBER', payload}
}

export function fetchDetailMember (apiUrl) {
  return async (dispatch) => {
    dispatch(setLoadingDetailMember(true))
    const response = await fetch(apiUrl)
    const data = await response.json()
    dispatch(setDetailMember(data))
    dispatch(setLoadingDetailMember(false))
  }
}