import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Profile = () => {
  const [profileData, setProfileData] = useState({
    avatar: '',
    email: '',
    name: '',
    _id: ''
  })
  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)
  console.log('access token in profile', resizedToken)

  const fetchProfileData = async () => {
    const response = await fetch(process.env.REACT_APP_USER_ME_URL, {
      headers: {
        Authorization: `Bearer ${resizedToken}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      console.log('body in profile fetch', body)
      setProfileData(body)
    }
  }

  useEffect(() => {
    fetchProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container className="mt-3">
      <Row>
        <Col md={8}>
          <Row>
            <Col md={3}>
              <img
                style={{ height: '140px' }}
                src={profileData.avatar}
                alt="placeholder"
                className="profile-image"
              ></img>
            </Col>
            <Col md={9}>
              <Row>
                <Col>
                  <span className="bold-text large-text">{profileData.name}</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="faded-text">Add profile credentials</span>
                </Col>
              </Row>
              <Row>
                <Col>
                  <span className="faded-text">no. followers / no. following</span>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="mt-2">
            <Col>
              <span className="faded-text">Person's description will go here</span>
            </Col>
          </Row>
        </Col>
        <Col md={4}>
          <Row>
            <Col md={12}>
              <span>Credentials & Highlights</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-edit"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
              </svg>
              <hr />
            </Col>
            <Col md={12}>
              <span>Employment history</span>
            </Col>
            <Col md={12}>
              <span>Education history</span>
            </Col>
            <Col md={12}>
              <span>Location history</span>
            </Col>
            <Col md={12}>
              <span>When the user joined</span>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <span>Specielized Areas</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-edit"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                <line x1="16" y1="5" x2="19" y2="8" />
              </svg>
              <hr />
            </Col>
            <Col md={12}>Specialized Area</Col>
            <Col md={12}>Specialized Area</Col>
            <Col md={12}>Specialized Area</Col>
            <Col md={12}>Specialized Area</Col>
            <Col md={12}>Specialized Area</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
export default Profile
