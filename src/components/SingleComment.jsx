import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const SingleComment = ({ comment }) => {
  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

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
    }
  }

  const profileData = useSelector((state) => state.profile)
  return (
    <>
      <Col md={2}>
        <img style={{ height: '40px' }} src={profileData.avatar} alt="placeholder"></img>
      </Col>
      <Col md={8}>
        <Row>
          <span>{profileData.name}</span>
          <span className="mx-2">.</span>
          <span>date</span>
        </Row>
        <Row>
          <span>{comment.comment}</span>
        </Row>
        <Row>
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
              <span>{comment.likes}</span>
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
        </Row>
        {/* <hr /> */}
      </Col>
    </>
  )
}
export default SingleComment
