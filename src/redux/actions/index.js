export const SET_BEARER_TOKEN = 'SET_BEARER_TOKEN'
export const SET_POST_DATA = 'SET_POST_DATA'
export const ADD_LIKE_AND_KUDOS = 'ADD_LIKE_AND_KUDOS'
export const REMOVE_LIKE_AND_KUDOS = 'REMOVE_LIKE_AND_KUDOS'
export const SET_PROFILE_DATA = 'SET_PROFILE_DATA'

export const setBearerTokenAction = (token) => ({
  type: SET_BEARER_TOKEN,
  payload: token
})
export const setPostDataAction = (data) => ({
  type: SET_POST_DATA,
  payload: data
})
export const setProfileDataAction = (body) => ({
  type: SET_PROFILE_DATA,
  payload: body
})
// export const addLikeAndKudosAction = (post) => ({
//   type: ADD_LIKE_AND_KUDOS,
//   payload: post
// })
// export const removeLikeAndKudosAction = (post) => ({
//   type: REMOVE_LIKE_AND_KUDOS,
//   payload: post
// })
