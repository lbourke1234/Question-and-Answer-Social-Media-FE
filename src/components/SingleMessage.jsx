import { Col, Row } from 'react-bootstrap'

const SingleMessage = () => (
  <Row className="single-message-row">
    <Col>
      <span>sender:</span>
    </Col>
    <Col>
      <span>message goes here</span>
    </Col>
  </Row>
)
export default SingleMessage
