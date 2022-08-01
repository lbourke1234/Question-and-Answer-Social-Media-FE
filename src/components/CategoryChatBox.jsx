import { Form, Col } from 'react-bootstrap'

const CategoryChatBox = ({ setMessage }) => {
  return (
    <Col md={12} className="category-chat-box-col">
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="What would you like to say?"
        className="post-begin-text-box"
        onChange={(e) => setMessage(e.target.value)}
      />
    </Col>
  )
}
export default CategoryChatBox
