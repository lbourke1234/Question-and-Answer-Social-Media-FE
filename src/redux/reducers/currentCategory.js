import { SET_CURRENT_CATEGORY } from '../actions'

const initialState = {
  description: '',
  followers: [],
  image: '',
  name: '',
  questions: [],
  _id: ''
}

const currentCategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return action.payload
    default:
      return state
  }
}
export default currentCategoryReducer
