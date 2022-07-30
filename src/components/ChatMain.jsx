import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import CategoryChatBox from './CategoryChatBox'
import CategoryChatTop from './CategoryChatTop'
import PopupChatMain from './PopupChatMain'

const ChatMain = () => {
  const [openChat, setOpenChat] = useState(false)

  const toggleChat = () => setOpenChat(!openChat)

  return (
    <>
      {openChat && (
        <div className="chat-popup-container d-flex flex-column">
          <CategoryChatTop />

          <PopupChatMain />

          <CategoryChatBox />
        </div>
      )}

      <Container fluid className="chat-main-container">
        <Row>
          <Col className="chat-main-col" onClick={toggleChat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-message-circle"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
              <line x1="12" y1="12" x2="12" y2="12.01"></line>
              <line x1="8" y1="12" x2="8" y2="12.01"></line>
              <line x1="16" y1="12" x2="16" y2="12.01"></line>
            </svg>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ChatMain
