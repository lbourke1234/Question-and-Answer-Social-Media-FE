import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import PostMainContainer from './PostMainContainer'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import {
  setCurrentCategoryAction,
  setCurrentCategoryQuestionsAction,
  setProfileDataAction
} from '../redux/actions'
import CategoryDetails from './CategoryDetails'
import ChatMain from './ChatMain'
import { io } from 'socket.io-client'

const ADDRESS = process.env.REACT_APP_SOCKET_URL
const socket = io(ADDRESS, { transports: ['websocket'] })

const Categories = () => {
  const [text, setText] = useState('')

  const profileData = useSelector((state) => state.profile)

  const [chatHistory, setChatHistory] = useState([])

  const currentCategory = useSelector((state) => state.currentCategory)
  const catQuestions = useSelector((state) => state.currentCategoryQuestions)

  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  const location = useLocation()
  const dispatch = useDispatch()

  const [room, setRoom] = useState('')

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

  const fetchChatHistory = async () => {
    const response = await fetch(
      process.env.REACT_APP_CHAT_HISTORY +
        location.state.name.charAt(0).toUpperCase() +
        location.state.name.slice(1),
      {
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      setChatHistory(body)
    }
  }
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

  useEffect(() => {
    fetchCategory()
    fetchCategoryQuestions()
    fetchProfileData()
    setRoom(location.state.name.charAt(0).toUpperCase() + location.state.name.slice(1))
    fetchChatHistory()

    // ALL SOCKET STUFF BELOW FOR NOW
    socket.on('connect', () => {
      console.log('Connection established!')

      socket.emit('connection', () => {
        console.log('finally established connection')
      })
      console.log('Socket ID', ` ${socket.id}!`)
    })
    socket.on('loggedin', fetchChatHistory)

    socket.on('message', ({ text, profileName, savedMessage }) => {
      console.log('saved Message on message', savedMessage)
      console.log('text', text)
      console.log('userName', profileName)
      const newMessage = {
        text,
        senderName: profileName,
        createdAt: new Date().toLocaleString('en-US')
      }

      console.log('in the on message')
      console.log('message to send', text, profileName)
      setChatHistory((evaluatedChatHistory) => [...evaluatedChatHistory, newMessage])
      console.log('chat history after update', chatHistory)
    })

    // ALL SOCKET STUFF ABOVE FOR NOW

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleUsernameSubmit = () => {
    socket.emit('setUsername', {
      userId: profileData._id,
      name: profileData.name,
      room
    })
  }
  const sendMessage = (e) => {
    e.preventDefault()
    const newMessage = {
      text,
      senderName: profileData.name,
      createdAt: new Date().toLocaleString('en-US')
    }
    setChatHistory([...chatHistory, newMessage])
    const catName = currentCategory.name
    const profileId = profileData._id
    const profileName = profileData.name
    console.log(text, catName, profileId, profileName)
    socket.emit('sendMessage', {
      text,
      catName,
      profileId,
      profileName
    })
    console.log('After emit sendMessage')
    // e.target.reset()
    setText('')
  }

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
          <h1>{room}</h1>
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
      <ChatMain
        handleUsernameSubmit={handleUsernameSubmit}
        setMessage={setText}
        chatHistory={chatHistory}
        room={room}
        sendMessage={sendMessage}
      />
    </>
  )
}
export default Categories
