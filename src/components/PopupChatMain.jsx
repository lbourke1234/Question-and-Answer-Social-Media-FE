import { Col, Row } from 'react-bootstrap'
import SingleMessage from './SingleMessage'

const PopupChatMain = () => (
  <Row>
    <Col className="main-popup-chat-col">
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
      <SingleMessage />
    </Col>
  </Row>
)
export default PopupChatMain
