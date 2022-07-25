import { useEffect, useState } from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import SingleComment from './SingleComment'

const Comments = ({ post }) => {
  const profileData = useSelector((state) => state.profile)

  const [comments, setComments] = useState('')

  const fetchComments = async (id) => {
    const response = await fetch(process.env.REACT_APP_GET_POST_COMMENTS + id)
    if (response.ok) {
      const body = await response.json()
      console.log(body)
      setComments(body)
    }
  }

  useEffect(() => {
    fetchComments(post)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Col>
      {profileData && (
        <Row>
          <Col md={1}>
            <img
              style={{ height: '40px' }}
              src={profileData.avatar}
              alt="placeholder"
            ></img>
          </Col>
          <Col md={9}>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Add Comment..."
              className="post-begin-text-box"
            />
          </Col>
          <Col md={2}>
            <Button variant="outline-success">Add Comment</Button>{' '}
          </Col>
        </Row>
      )}
      {comments &&
        comments.map((comment, index) => (
          <Row key={index}>
            <SingleComment comment={comment} />
          </Row>
        ))}
    </Col>
  )
}

export default Comments
