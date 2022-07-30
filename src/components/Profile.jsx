import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setProfileDataAction } from '../redux/actions'

const Profile = () => {
  const dispatch = useDispatch()
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
      dispatch(setProfileDataAction(body))
    }
  }

  useEffect(() => {
    fetchProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container className="mt-3 white-background slight-border-radius">
      <Row className="border-bottom-profile">
        <Col className="d-flex justify-content-center py-3">
          <h1>Come back and check your kudos here!</h1>
        </Col>
        <hr></hr>
      </Row>
      <Row className="pt-4 border-bottom-profile pb-4">
        <Col md={4} className="d-flex justify-content-center">
          <img
            style={{ height: '140px', width: '140px' }}
            src={profileData.avatar}
            alt="placeholder"
            className="profile-image"
          ></img>
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center flex-column"
        >
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
        <Col md={4}>
          <span className="kudos-profile">{profileData.kudos}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          {profileData.kudos >= 10 ? (
            <>
              <h1>You are doing an amazing job answering questions </h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trophy"
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
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <line x1="7" y1="4" x2="17" y2="4" />
                  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                  <circle cx="5" cy="9" r="2" />
                  <circle cx="19" cy="9" r="2" />
                </svg>
              </span>
            </>
          ) : (
            <>
              <h1>You could answer some more questions </h1>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trophy"
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
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <line x1="7" y1="4" x2="17" y2="4" />
                  <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
                  <circle cx="5" cy="9" r="2" />
                  <circle cx="19" cy="9" r="2" />
                </svg>
              </span>
            </>
          )}
          <h2>Check back often to see how you rank</h2>
        </Col>
      </Row>
    </Container>
  )
}
export default Profile
