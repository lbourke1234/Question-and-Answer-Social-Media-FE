import { Container, Row, Col } from 'react-bootstrap'
import PostBegin from './PostBegin'
import PostMainContainer from './PostMainContainer'
import LeftCategories from './LeftCategories'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPostDataAction, setProfileDataAction } from '../redux/actions/index.js'

const NewsFeed = () => {
  const dispatch = useDispatch()
  const allPosts = useSelector((state) => state.posts.postData)
  const [profileData, setProfileData] = useState({
    avatar: '',
    email: '',
    name: '',
    _id: ''
  })

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
      console.log('body in profile fetch', body)
      setProfileData(body)
      dispatch(setProfileDataAction(body))
    }
  }

  const fetchPostData = async () => {
    const response = await fetch(process.env.REACT_APP_GET_POST_URL, {
      headers: {
        Authorization: `Bearer ${resizedToken}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      dispatch(setPostDataAction(body))
    }
  }

  useEffect(() => {
    fetchPostData()
    fetchProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container>
      <Row>
        <Col md={2}>
          <LeftCategories />
        </Col>
        <Col md={7}>
          <PostBegin />
          {allPosts &&
            allPosts.map((post) => <PostMainContainer key={post._id} post={post} />)}
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  )
}
export default NewsFeed
