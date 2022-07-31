import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import PostMainContainer from './PostMainContainer'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  setCurrentCategoryAction,
  setCurrentCategoryQuestionsAction
} from '../redux/actions'
import CategoryDetails from './CategoryDetails'
import ChatMain from './ChatMain'
import { io } from 'socket.io-client'

// const ADDRESS = process.env.REACT_APP_SOCKET_URL
// const socket = io(ADDRESS, { transports: ['websocket'] })
const socket = io('http://localhost:5001', {
  transports: ['websocket']
})

const Categories = () => {
  // console.log('socket', socket)

  const currentCategory = useSelector((state) => state.currentCategory)
  const catQuestions = useSelector((state) => state.currentCategoryQuestions)

  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  const location = useLocation()
  const dispatch = useDispatch()

  const fetchCategoryQuestions = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GET_CATEGORY_QUESTIONS}${location.state.name}`,
      {
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      dispatch(setCurrentCategoryQuestionsAction(body))
    }
  }

  const fetchCategory = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GET_SINGLE_CATEGORY}${location.state.name}`,
      {
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      dispatch(setCurrentCategoryAction(body))
    }
  }

  useEffect(() => {
    fetchCategory()
    fetchCategoryQuestions()

    // ALL SOCKET STUFF BELOW FOR NOW
    socket.on('connect', () => {
      console.log('Connection established!')
      socket.emit('connection', () => {
        console.log('finally established connection')
      })
      console.log('Socket ID', ` ${socket.id}!`)
    })

    // ALL SOCKET STUFF ABOVE FOR NOW

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {}, [])

  const imageUrl = currentCategory.image

  return (
    <>
      <Jumbotron
        fluid
        className="jumbotron-categories"
        style={{ backgroundImage: 'url(' + imageUrl + ')' }}
      >
        <Container className="jumbotron-text-container">
          <h1>{location.state.name}</h1>
          <p>{currentCategory.description}</p>
        </Container>
      </Jumbotron>
      <Container className="wider-container">
        <Row>
          <Col md={9}>
            {catQuestions.map((q) => (
              <PostMainContainer key={q._id} post={q} />
            ))}
          </Col>
          <Col md={3}>
            <CategoryDetails currentCategory={currentCategory} />
          </Col>
        </Row>
      </Container>
      <ChatMain />
    </>
  )
}
export default Categories
