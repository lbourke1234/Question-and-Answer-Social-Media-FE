import { SET_CURRENT_CATEGORY_QUESTIONS } from '../actions'

const initalState = []

const currentCategoryQuestionsReducer = (state = initalState, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY_QUESTIONS:
      return action.payload
    default:
      return state
  }
}
export default currentCategoryQuestionsReducer
