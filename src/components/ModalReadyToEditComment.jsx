import { Modal, Button, Col, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import { setCurrentPostCommentsAction } from '../redux/actions'
import { useDispatch } from 'react-redux'

const ModalReadyToEditComment = ({ comment }) => {
  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [commentText, setCommentText] = useState('')

  let commentObj = {
    comment: commentText
  }

  const dispatch = useDispatch()

  const fetchComments = async (id) => {
    const response = await fetch(process.env.REACT_APP_GET_POST_COMMENTS + id)
    if (response.ok) {
      const body = await response.json()
      console.log('fetch comment', body)
      // setComments(body)
      dispatch(setCurrentPostCommentsAction(body))
    }
  }

  const fetchCommentText = async () => {
    const response = await fetch(`${process.env.REACT_APP_GET_COMMENT}${comment._id}`, {
      headers: {
        Authorization: `Bearer ${resizedToken}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      console.log('fetch', body)
      setCommentText(body.comment)
    }
  }

  const submitEditedComment = async () => {
    const response = await fetch(`${process.env.REACT_APP_GET_COMMENT}${comment._id}`, {
      method: 'PUT',
      body: JSON.stringify(commentObj),
      headers: {
        Authorization: `Bearer ${resizedToken}`,
        'Content-type': 'application/json'
      }
    })
    if (response.ok) {
      const body = await response.json()
      console.log('submit edited comment body', body)
      fetchComments(comment._id)
    }
  }

  return (
    <>
      <Col className="d-flex justify-content-end">
        <span className="post-hover">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-writing"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#2c3e50"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={(e) => {
              handleShow()
              fetchCommentText()
            }}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
            <path d="M16 7h4" />
            <path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" />
          </svg>
        </span>
      </Col>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit your comment here...</Modal.Title>
        </Modal.Header>
        <Row className="pl-3 py-3">
          <Col md={8}>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder={commentText}
              className="post-begin-text-box"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </Col>
          <Col md={4}>
            <Button className="comment-button" variant="secondary">
              Add Comment
            </Button>{' '}
          </Col>
        </Row>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose()
              submitEditedComment()
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
export default ModalReadyToEditComment
