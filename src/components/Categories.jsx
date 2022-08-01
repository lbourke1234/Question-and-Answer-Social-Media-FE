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

// const ADDRESS = process.env.REACT_APP_SOCKET_URL
// const socket = io(ADDRESS, { transports: ['websocket'] })
const socket = io('http://localhost:5001', {
  transports: ['websocket']
})

const Categories = () => {
  // console.log('socket', socket)
  const [onlineUsers, setOnlineUsers] = useState([])
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
      process.env.REACT_APP_CHAT_HISTORY + location.state.name,
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
    setRoom(location.state.name)

    // ALL SOCKET STUFF BELOW FOR NOW
    socket.on('connect', () => {
      console.log('Connection established!')

      socket.emit('connection', () => {
        console.log('finally established connection')
      })
      console.log('Socket ID', ` ${socket.id}!`)
    })
    socket.on('loggedin', (onlineUsers) => {
      console.log('logged in successfully!')
      // setLoggedIn(true);
      setOnlineUsers(onlineUsers)

      fetchChatHistory()

      socket.on('newConnection', (onlineUsers) => {
        console.log('a new client just connected!')
        console.log('Online Users:', onlineUsers)
        setOnlineUsers(onlineUsers)
      })
    })
    socket.on('message', (text, userName) => {
      console.log('in the on message')
      console.log('chat history now', chatHistory)
      setChatHistory([{ message: { text, sender: userName } }, ...chatHistory])
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
    // this function executes just for the sender for the message!
    const newMessage = {
      text,
      sender: profileData.name,
      createdAt: new Date().toLocaleString('en-US')
    }

    socket.emit('sendMessage', {
      text,
      room: currentCategory.name,
      senderId: profileData._id,
      senderName: profileData.name
    })
    console.log('in sendMessage emit')
    setChatHistory([...chatHistory, newMessage])
    // this is appending my new message to the chat history in this very moment
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
