import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setLikesCountAction } from '../redux/actions'
import Comments from './Comments'
import { format, compareAsc } from 'date-fns'

const PostMainContainer = ({ post }) => {
  const dispatch = useDispatch()
  const [likesCount, setLikesCount] = useState('')

  const [commentOpen, setCommentsOpen] = useState(false)

  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  const fetchLikesCount = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_LIKES_BEGINNING_POST_URL}${post._id}`,
      {
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      setLikesCount(body.likes)
    }
  }

  const addLikeFetch = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_LIKES_BEGINNING_POST_URL}${post._id}/like`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      console.log('like fetch', body)
      if (body.post) {
        console.log('likes count like', body.post.likes)

        setLikesCount(body.post.likes)
      }
    }
  }
  const removeLikeFetch = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_LIKES_BEGINNING_POST_URL}${post._id}/unlike`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      console.log('remove like fetch body', body)
      console.log('likes count dislike', body.likes)
      if (body.likes >= 0) {
        setLikesCount(body.likes)
      }
    }
  }

  useEffect(() => {
    dispatch(setLikesCountAction(post.likes))
    fetchLikesCount()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container className="white-background pt-3 mt-3 slight-border-radius">
      <Row>
        <Col md={1}>
          <img
            style={{ height: '40px' }}
            src={post.author.avatar}
            alt="placeholder"
          ></img>
        </Col>

        <Col md={11}>
          <Row>
            <Col>
              <span className="bold-text">{post.author.name}</span>
              <span className="mx-2">.</span>
              <a href="/" id={post._id}>
                <span className="blue-text">Follow</span>
              </a>
            </Col>
            <Col className="d-flex justify-content-end">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
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
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </span>
            </Col>
          </Row>
          <Row>
            <Col>
              <span className="faded-text smaller-text">{post.category}</span>
              <span className="mx-2">.</span>
              <span className="faded-text smaller-text">
                {format(new Date(post.createdAt), 'PPp')}
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <Row>
            <Col>
              <span className="bold-text">{post.content.heading}</span>
            </Col>
          </Row>
          <Row>
            <Col>{post.content.question}</Col>
          </Row>
          {post.content.image && (
            <Row>
              <img
                style={{ height: '600px', width: '100%' }}
                src={post.content.image}
                alt="placeholder"
                className="mt-2"
              ></img>
            </Row>
          )}
        </Col>
      </Row>
      <Row className="py-3">
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
              onClick={() => addLikeFetch()}
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
              onClick={() => removeLikeFetch()}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 13v-8a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v7a1 1 0 0 0 1 1h3a4 4 0 0 1 4 4v1a2 2 0 0 0 4 0v-5h3a2 2 0 0 0 2 -2l-1 -5a2 3 0 0 0 -2 -2h-7a3 3 0 0 0 -3 3" />
            </svg>
          </span>
          <span>{likesCount}</span>

          <span className="post-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-share mr-3"
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
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="6" r="3" />
              <circle cx="18" cy="18" r="3" />
              <line x1="8.7" y1="10.7" x2="15.3" y2="7.3" />
              <line x1="8.7" y1="13.3" x2="15.3" y2="16.7" />
            </svg>
          </span>
          <span className="post-hover">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-message-dots"
              width="26"
              height="26"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              onClick={() => setCommentsOpen(!commentOpen)}
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
              <line x1="12" y1="11" x2="12" y2="11.01" />
              <line x1="8" y1="11" x2="8" y2="11.01" />
              <line x1="16" y1="11" x2="16" y2="11.01" />
            </svg>
          </span>
        </Col>
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
      </Row>
      <Row>{commentOpen && <Comments post={post._id} fullPost={post} />}</Row>
    </Container>
  )
}
export default PostMainContainer
