import { SET_PROFILE_DATA } from '../actions'

const initialState = {
  avatar: '',
  email: '',
  name: '',
  _id: ''
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {
        avatar: action.payload.avatar,
        email: action.payload.email,
        name: action.payload.name,
        _id: action.payload._id
      }
    default:
      return state
  }
}
export default profileReducer
