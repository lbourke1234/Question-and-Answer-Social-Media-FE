import { SET_BEARER_TOKEN } from '../actions'

const initialState = {
  token: ''
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BEARER_TOKEN:
      return {
        token: action.payload
      }
    default:
      return state
  }
}
export default userReducer
