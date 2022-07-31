import { ADD_NEWEST_POST } from '../actions'

const initialState = []

const newestPostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEWEST_POST:
      return [action.payload]
    default:
      return state
  }
}
export default newestPostReducer
