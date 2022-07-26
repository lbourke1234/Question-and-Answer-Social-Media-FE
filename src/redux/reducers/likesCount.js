import { SET_LIKES_COUNT } from '../actions'

const initialState = ''

const likesCountReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LIKES_COUNT:
      return action.payload
    default:
      return state
  }
}
export default likesCountReducer
