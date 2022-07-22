import { SET_POST_DATA } from '../actions'

const initialState = []

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_DATA:
      return action.payload
    default:
      return state
  }
}

export default postReducer
