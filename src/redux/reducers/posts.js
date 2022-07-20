import { SET_POST_DATA } from '../actions'

const initialState = {
  postData: []
}

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST_DATA:
      return {
        postData: action.payload
      }
    default:
      return state
  }
}

export default postReducer
