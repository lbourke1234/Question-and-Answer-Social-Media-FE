import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { format } from 'date-fns'
import ModalReadyToEditComment from './ModalReadyToEditComment'

const SingleComment = ({ comment, index }) => {
  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)
  const [bestComment, setBestComment] = useState(false)
  const profileDate = useSelector((state) => state.profile)

  const [likesCount, setLikesCount] = useState('')

  const fetchLikesCount = async () => {
    const response = await fetch(`${process.env.REACT_APP_GET_COMMENT}${comment._id}`, {
      headers: {
        Authorization: `Bearer ${resizedToken}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      console.log('did mount body', body)
      setLikesCount(body.likes)
    }
  }

  const handleLikeComment = async () => {
    const response = await fetch(`${process.env.REACT_APP_LIKE_COMMENT}${comment._id}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resizedToken}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      console.log('body of like', body)
      setLikesCount(body.likes)
    }
  }
  const handleDislikeComment = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_DISLIKE_COMMENT}${comment._id}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      console.log('body of dislike', body)
      setLikesCount(body.likes)
    }
  }

  useEffect(() => {
    fetchLikesCount()
    if (index === 0) {
      setBestComment(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const profileData = useSelector((state) => state.profile)
  return (
    <>
      {bestComment && comment.likes > 0 ? (
        <Col md={2} className="best-comment d-flex justify-content-center pt-2">
          <img
            style={{ height: '60px', borderRadius: '50%' }}
            src={profileData.avatar}
            alt="placeholder"
          ></img>
        </Col>
      ) : (
        <Col md={2} className="d-flex justify-content-center pt-2">
          <img
            style={{ height: '60px', borderRadius: '50%' }}
            src={profileData.avatar}
            alt="placeholder"
          ></img>
        </Col>
      )}
      {bestComment && comment.likes > 0 ? (
        <Col md={10} className="best-comment pt-2">
          <Row>
            <span className="bold-text">{profileData.name}</span>
            <span className="mx-2">.</span>
            <span>{format(new Date(comment.createdAt), 'MMM d')}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-school ml-3"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path>
              <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path>
            </svg>
          </Row>
          <Row className="mb-n3">
            <span>{comment.comment}</span>
          </Row>
          <Row>
            <Row className="pt-3 pb-2">
              <Col className="d-flex flex-direction-column align-items-center">
                <span className="post-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-thumb-up mr-3 "
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => handleLikeComment()}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                  </svg>
                </span>
                <span className="post-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-thumb-down mr-3"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => handleDislikeComment()}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                  </svg>
                </span>
                <span>{likesCount}</span>
              </Col>
              {console.log('comment', comment)}
              {profileData._id === comment.author && (
                <Col className="d-flex justify-content-end">
                  <span className="post-hover">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-dots"
                      width="26"
                      height="26"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="#2c3e50"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <circle cx="5" cy="12" r="1" />
                      <circle cx="12" cy="12" r="1" />
                      <circle cx="19" cy="12" r="1" />
                    </svg>
                  </span>
                </Col>
              )}
            </Row>
          </Row>
          {/* <hr /> */}
        </Col>
      ) : (
        <Col md={10} className="pt-2">
          <Row>
            <span className="bold-text">{profileData.name}</span>
            <span className="mx-2">.</span>
            <span>{format(new Date(comment.createdAt), 'MMM d')}</span>
          </Row>
          <Row className="mb-n3">
            <span>{comment.comment}</span>
          </Row>
          <Row>
            <Row className="pt-3 pb-2">
              <Col className="d-flex flex-direction-column align-items-center">
                <span className="post-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-thumb-up mr-3 "
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => handleLikeComment()}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3" />
                  </svg>
                </span>
                <span className="post-hover">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-thumb-down mr-3"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    onClick={() => handleDislikeComment()}
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
                  </svg>
                </span>
                <span>{likesCount}</span>
              </Col>
              {profileData._id === comment.author && <ModalReadyToEditComment />}
            </Row>
          </Row>
        </Col>
      )}
    </>
  )
}
export default SingleComment
