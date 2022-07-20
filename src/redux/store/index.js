import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/posts.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const bigReducer = combineReducers({
  user: userReducer,
  posts: postReducer
})

const store = configureStore({
  reducer: bigReducer
})

export default store
