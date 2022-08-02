import { useDispatch } from 'react'

const dispatch = useDispatch()
const token = localStorage.getItem('token')
const resizedToken = token.substring(1, token.length - 1)

const fetchProfileData = async () => {
  const response = await fetch(process.env.REACT_APP_USER_ME_URL, {
    headers: {
      Authorization: `Bearer ${resizedToken}`
    }
  })
  if (response.ok) {
    const body = await response.json()
    dispatch(setProfileDataAction(body))
  }
}
