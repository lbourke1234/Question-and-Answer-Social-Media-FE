import { useEffect, useState } from 'react'
import { Col, Row, Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addNewCommentAction, setCurrentPostCommentsAction } from '../redux/actions'
import SingleComment from './SingleComment'

const Comments = ({ post, fullPost }) => {
  const dispatch = useDispatch()

  const profileData = useSelector((state) => state.profile)
  const comments = useSelector((state) => state.currentPostComments)

  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  const newestComments = useSelector((state) => state.newestComments)
  const [newCommentText, setNewCommentText] = useState('')

  const fullComment = {
    post: fullPost._id,
    author: profileData._id,
    comment: newCommentText
  }

  const submitNewComment = async () => {
    const response = await fetch(process.env.REACT_APP_POST_NEW_COMMENT, {
      method: 'POST',
      body: JSON.stringify(fullComment),
      headers: {
        Authorization: `Bearer ${resizedToken}`,
        'Content-type': 'application/json'
      }
    })
    if (response.ok) {
      const body = await response.json()
      console.log('body of new comment', body)
      dispatch(addNewCommentAction(body))
    }
  }

  const fetchComments = async (id) => {
    const response = await fetch(process.env.REACT_APP_GET_POST_COMMENTS + id)
    if (response.ok) {
      const body = await response.json()
      console.log('fetch comment', body)
      // setComments(body)
      dispatch(setCurrentPostCommentsAction(body))
    }
  }

  useEffect(() => {
    fetchComments(post)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Col>
      {profileData && (
        <Row className="py-2 add-comment-bg">
          <Col md={1}>
            <img
              style={{ height: '40px', width: '40px', borderRadius: '50%' }}
              src={profileData.avatar}
              alt="placeholder"
            ></img>
          </Col>
          <Col md={8}>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Add Comment..."
              className="post-begin-text-box"
              onChange={(e) => setNewCommentText(e.target.value)}
            />
          </Col>
          <Col md={3}>
            <Button
              className="comment-button"
              onClick={() => submitNewComment()}
              variant="secondary"
            >
              Add Comment
            </Button>{' '}
          </Col>
        </Row>
      )}
      {newestComments.length > 0 &&
        newestComments.map((comment, index) => (
          <Row key={index} className="comment-box">
            <SingleComment
              comment={comment}
              index={index}
              newestComments={newestComments}
            />
          </Row>
        ))}
      {comments.length > 0 &&
        comments.map((comment, index) => (
          <Row key={index} className="comment-box">
            <SingleComment comment={comment} index={index} />
          </Row>
        ))}
    </Col>
  )
}

export default Comments
