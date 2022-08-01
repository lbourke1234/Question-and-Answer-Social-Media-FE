import { Col, Row } from 'react-bootstrap'
import SingleMessage from './SingleMessage'

const PopupChatMain = ({ chatHistory }) => (
  <div
    className="main-popup-chat-col"
    style={{ flexGrow: 1, overflow: 'auto', marginBlock: '0.5rem', marginRight: '10px' }}
  >
    {chatHistory.map((message) => (
      <SingleMessage message={message} />
    ))}
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
    <SingleMessage />
  </div>
)
export default PopupChatMain
