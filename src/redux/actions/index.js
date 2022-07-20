export const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN'
export const SET_POST_DATA = 'SET_POST_DATA'
export const ADD_LIKE_AND_KUDOS = 'ADD_LIKE_AND_KUDOS'

export const setBearerTokenAction = (token) => ({
  type: SET_BEARER_TOKEN,
  payload: token
})
export const setPostDataAction = (data) => ({
  type: SET_POST_DATA,
  payload: data
})
export const addLikeAndKudosAction = (postInfo) => ({
  type: ADD_LIKE_AND_KUDOS,
  payload: postInfo
})
