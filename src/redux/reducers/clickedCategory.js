import { SET_CLICKED_CATEGORY } from '../actions'

const initialState = 'Philosophy'

const clickedCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CLICKED_CATEGORY:
      return action.payload
    default:
      return state
  }
}
export default clickedCategoriesReducer
