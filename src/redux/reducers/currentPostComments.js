import { SET_CURRENT_POST_COMMENTS } from '../actions'

const initialState = []

const currentPostCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_POST_COMMENTS:
      return action.payload
    default:
      return state
  }
}
export default currentPostCommentsReducer
