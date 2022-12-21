import { CLEAR_STORAGE, SET_USER_DATA, SET_ROLES } from '../constants/shared'

export const clearStore = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_STORAGE,
    })
  }
}

export const InsertUserData = (userData) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER_DATA,
      payload: userData,
    })
  }
}

export const saveRolesData = (userRoles) => {
  return (dispatch) => {
    dispatch({
      type: SET_ROLES,
      payload: userRoles,
    })
  }
}
