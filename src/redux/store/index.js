import userReducer from '../reducers/userReducer'
import postReducer from '../reducers/posts.js'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import profileReducer from '../reducers/profile'

const bigReducer = combineReducers({
  user: userReducer,
  posts: postReducer,
  profile: profileReducer
})

const store = configureStore({
  reducer: bigReducer
})

export default store
