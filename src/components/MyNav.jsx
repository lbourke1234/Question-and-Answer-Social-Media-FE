import { useEffect } from 'react'
import { useState } from 'react'
import { Container, Navbar, Nav, Form, Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const MyNav = () => {
  const profileData = useSelector((state) => state.profile)
  const [imageLoading, setImageLoading] = useState(true)

  useEffect(() => {
    if (profileData.avatar) {
      setImageLoading(false)
    }
  }, [profileData])

  return (
    <Navbar expand="lg" className="navBar-sticky white-background">
      <Container className="wider-container">
        <Navbar.Brand href="/" className="navbar-text">
          Questions
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="my-flex-grow">
            <Nav.Link href="#link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-friends"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="7" cy="5" r="2" />
                <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                <circle cx="17" cy="5" r="2" />
                <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
              </svg>
            </Nav.Link>
            <Nav.Link href="#link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-question-mark"
                width="33"
                height="33"
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
            </Nav.Link>
            <Form.Control
              type="text"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
              placeholder="Search for something"
              className="mt-2 py-4 input-nav"
            />
            <Nav.Link href="#link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-bell"
                width="33"
                height="33"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
              </svg>
            </Nav.Link>
            <Nav.Link href="profile">
              {imageLoading ? (
                <Spinner animation="grow" variant="info" />
              ) : profileData.avatar ? (
                <img
                  style={{ height: '35px', width: '35px', borderRadius: '50%' }}
                  src={profileData.avatar}
                  alt="placeholder"
                ></img>
              ) : (
                <img
                  style={{ height: '35px', width: '35px', borderRadius: '50%' }}
                  src={
                    'https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo-500x500.jpg'
                  }
                  alt="placeholder"
                ></img>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNav
