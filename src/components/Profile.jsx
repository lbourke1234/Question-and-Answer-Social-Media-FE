import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { setProfileDataAction } from '../redux/actions'
import RecentPosts from './RecentPosts'

const Profile = () => {
  const [userPosts, setUserPosts] = useState([])
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
      fetchUserPosts(body._id)
    }
  }
  const fetchUserPosts = async (userId) => {
    const response = await fetch(process.env.REACT_APP_GET_USERS_QUESTIONS + userId, {
      headers: {
        Authorization: `Bearer ${resizedToken}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      setUserPosts(body)
    }
  }

  useEffect(() => {
    fetchProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <Container className="mt-3 white-background slight-border-radius profile-main-container">
      <Row className="pt-5 border-bottom-profile pb-4">
        <Col md={4} className="d-flex justify-content-center">
          <img
            style={{ height: '140px', width: '140px' }}
            src={profileData.avatar}
            alt="placeholder"
            className="profile-image"
          ></img>
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column profile-text-row-column">
            <Col className="d-flex flex-column">
              <h2 className="bold-text">{profileData.name}</h2>
            </Col>
            <Row>
              <Col>
                <span className="kudos-profile d-flex align-items-center">
                  {profileData.kudos}
                </span>
              </Col>
            </Row>
          </Row>
        </Col>
        <Col className="d-flex align-items-center">
          {profileData.kudos >= 10 && (
            <>
              <span>
                <img
                  style={{ height: '120px', width: '120px' }}
                  src={'https://img.icons8.com/stickers/100/000000/prize.png'}
                  alt="placeholder"
                  className="profile-image"
                ></img>

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-trophy great-helper"
                  width="120"
                  height="120"
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
                </svg> */}
              </span>
            </>
            // ) : (
            //   <>
            //     <span>
            //       <svg
            //         xmlns="http://www.w3.org/2000/svg"
            //         className="icon icon-tabler icon-tabler-trophy"
            //         width="44"
            //         height="44"
            //         viewBox="0 0 24 24"
            //         strokeWidth="1.5"
            //         stroke="#2c3e50"
            //         fill="none"
            //         strokeLinecap="round"
            //         strokeLinejoin="round"
            //       >
            //         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            //         <line x1="8" y1="21" x2="16" y2="21" />
            //         <line x1="12" y1="17" x2="12" y2="21" />
            //         <line x1="7" y1="4" x2="17" y2="4" />
            //         <path d="M17 4v8a5 5 0 0 1 -10 0v-8" />
            //         <circle cx="5" cy="9" r="2" />
            //         <circle cx="19" cy="9" r="2" />
            //       </svg>
            //     </span>
            // </>
          )}
        </Col>
      </Row>
      <Row>
        {/* <Col>{console.log('user psosts', userPosts)}</Col> */}
        <Container className="recent-posts-sticky white-background px-5 py-2 slight-border-radius mt-3">
          <Row className="ml-2">
            <h2>Your Recent Posts</h2>
          </Row>
          <Row>
            {userPosts
              .slice(0, 8)
              .reverse()
              .map((post) => (
                <Col md={3} className="profile-col-height margin-bottom-custom-profile">
                  <a
                    className="recent-sidebar-a profile-col-height-a"
                    href={`#${post._id}`}
                    key={post._id}
                  >
                    <RecentPosts key={post._id} post={post} userPosts={userPosts} />
                  </a>
                </Col>
              ))}
          </Row>
        </Container>
      </Row>
    </Container>
  )
}
export default Profile
