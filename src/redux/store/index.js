import userReducer from '../reducers/userReducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const bigReducer = combineReducers({
  user: userReducer
})

const store = configureStore({
  reducer: bigReducer
})

export default store
