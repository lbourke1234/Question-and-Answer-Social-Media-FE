import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/posts.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from '../reducers/profile'
import categoriesReducer from '../reducers/categories'
import currentCategoryReducer from '../reducers/currentCategory'
import currentCategoryQuestionsReducer from '../reducers/currentCategoryQuestions'
import currentPostCommentsReducer from '../reducers/currentPostComments'
import likesCountReducer from '../reducers/likesCount'
import newestCommentsReducer from '../reducers/newestComments'
import newestPostReducer from '../reducers/newestPost'
import clickedCategoriesReducer from '../reducers/clickedCategory'

const bigReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  profile: profileReducer,
  categories: categoriesReducer,
  currentCategory: currentCategoryReducer,
  currentCategoryQuestions: currentCategoryQuestionsReducer,
  currentPostComments: currentPostCommentsReducer,
  likesCount: likesCountReducer,
  newestComments: newestCommentsReducer,
  newestPost: newestPostReducer,
  clickedCategory: clickedCategoriesReducer
})

const store = configureStore({
  reducer: bigReducer
})

export default store
