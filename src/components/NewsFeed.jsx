import { Container, Row, Col } from 'react-bootstrap'
import PostBegin from './PostBegin'
import PostMainContainer from './PostMainContainer'
import LeftCategories from './LeftCategories'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCategoriesAction,
  setPostDataAction,
  setProfileDataAction
} from '../redux/actions/index.js'
import RecentPostsContainer from './RecentPostsContainer'
// import { io } from 'socket.io-client'

// const ADDRESS = process.env.REACT_APP_SOCKET_URL
// // const socket = io(ADDRESS, { transports: ['websocket'] })
// const socket = io('http://localhost:5001', {
//   transports: ['websocket']
// })

const NewsFeed = () => {
  const dispatch = useDispatch()

  const newPosts = useSelector((state) => state.newestPost)

  const allPosts = useSelector((state) => state.posts)
  const allCategories = useSelector((state) => state.categories)

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

  const fetchCategories = async () => {
    const response = await fetch(process.env.REACT_APP_GET_CATEGORIES)
    if (response.ok) {
      const body = await response.json()
      dispatch(setCategoriesAction(body))
    }
  }

  useEffect(() => {
    fetchPostData()
    fetchProfileData()
    fetchCategories()

    // socket.on('connect', () => {
    //   console.log('Connection established!')
    //   socket.emit('connection', () => {
    //     console.log('finally established connection')
    //   })
    //   console.log('Socket ID', ` ${socket.id}!`)
    // })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="wider-container">
      <Row>
        <Col md={2}>
          <Container fluid className="categories-sticky">
            {allCategories.map((category) => (
              <LeftCategories key={category._id} category={category} />
            ))}
          </Container>
        </Col>
        <Col md={7}>
          <PostBegin />
          {newPosts &&
            newPosts.map((post) => (
              <PostMainContainer key={post._id} post={post} newPosts={newPosts} />
            ))}
          {allPosts &&
            allPosts.map((post) => <PostMainContainer key={post._id} post={post} />)}
        </Col>
        <Col md={3} className="recent-posts-container">
          <RecentPostsContainer posts={allPosts} />
        </Col>
      </Row>
    </Container>
  )
}
export default NewsFeed
