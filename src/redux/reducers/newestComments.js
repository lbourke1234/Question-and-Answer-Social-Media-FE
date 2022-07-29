import { ADD_NEW_COMMENT } from '../actions'

const initialState = []

const newestCommentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_COMMENT:
      return [action.payload, ...state]
    default:
      return state
  }
}

export default newestCommentsReducer
