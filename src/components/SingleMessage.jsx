import { Col, Row } from 'react-bootstrap'

const SingleMessage = () => (
  <Row className="single-message-row">
    <Col>
      <span className="sender">sender: </span>
      <span className="message">message goes here</span>
    </Col>
  </Row>
)
export default SingleMessage
