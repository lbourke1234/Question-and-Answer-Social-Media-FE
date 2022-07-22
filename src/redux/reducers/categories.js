import { SET_CATEGORIES_DATA } from '../actions'

const initialState = []

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES_DATA:
      return action.payload
    default:
      return state
  }
}
export default categoriesReducer
