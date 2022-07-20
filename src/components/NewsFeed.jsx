import { Container, Row, Col } from 'react-bootstrap'
import PostBegin from './PostBegin'
import PostMainContainer from './PostMainContainer'
import LeftCategories from './LeftCategories'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPostDataAction } from '../redux/actions/index.js'

const NewsFeed = () => {
  const allPosts = useSelector((state) => state.posts.postData)

  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  const dispatch = useDispatch()

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
