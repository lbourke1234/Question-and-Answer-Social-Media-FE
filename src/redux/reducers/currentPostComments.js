import { ADD_NEW_COMMENT, SET_CURRENT_POST_COMMENTS } from '../actions'

const initialState = []

const currentPostCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_POST_COMMENTS:
      return action.payload
    case ADD_NEW_COMMENT:
      return [action.payload, ...state]
    default:
      return state
  }
}
export default currentPostCommentsReducer
