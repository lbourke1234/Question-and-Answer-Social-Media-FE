import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/posts.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from '../reducers/profile'
import categoriesReducer from '../reducers/categories'
import currentCategoryReducer from '../reducers/currentCategory'
import currentCategoryQuestionsReducer from '../reducers/currentCategoryQuestions'

const bigReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  profile: profileReducer,
  categories: categoriesReducer,
  currentCategory: currentCategoryReducer,
  currentCategoryQuestions: currentCategoryQuestionsReducer
})

const store = configureStore({
  reducer: bigReducer
})

export default store
