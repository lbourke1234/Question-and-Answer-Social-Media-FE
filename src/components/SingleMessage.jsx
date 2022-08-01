import { Col, Row } from 'react-bootstrap'

const SingleMessage = ({ message }) => (
  <Row className="single-message-row">
    {/* {console.log('every message', message)} */}
    <Col>
      <span className="sender">{message.senderName} </span>
      <span className="message">{message.text}</span>
    </Col>
  </Row>
)
export default SingleMessage
