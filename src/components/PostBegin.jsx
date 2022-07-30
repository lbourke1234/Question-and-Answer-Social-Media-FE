import { Container, Row, Col } from 'react-bootstrap'
import MakePostModal from './MakePostModal'
import { useSelector } from 'react-redux/es/exports'

const PostBegin = () => {
  const profileData = useSelector((state) => state.profile)
  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  return (
    <Container className="mt-3 pt-3 white-background slight-border-radius">
      <Row>
        <Col md={2}>
          <img
            style={{ height: '40px', width: '40px' }}
            src={profileData.avatar}
            alt="placeholder"
            className="profile-image"
          ></img>
        </Col>
        <Col md={10}>
          <MakePostModal token={resizedToken} />
        </Col>
      </Row>
      <Row className="py-2">
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <span>Ask</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-question-mark"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M8 8a3.5 3 0 0 1 3.5 -3h1a3.5 3 0 0 1 3.5 3a3 3 0 0 1 -2 3a3 4 0 0 0 -2 4" />
              <line x1="12" y1="19" x2="12" y2="19.01" />
            </svg>
          </span>
        </Col>
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <span>Answer</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-pencil"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
              <line x1="13.5" y1="6.5" x2="17.5" y2="10.5" />
            </svg>
          </span>
        </Col>
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <span>Share</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-share"
              width="24"
              height="24"
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
        </Col>
      </Row>
    </Container>
  )
}

export default PostBegin
