import { Container, Row, Col } from 'react-bootstrap'

const Profile = () => (
  <Container className="mt-3">
    <Row>
      <Col md={8}>
        <Row>
          <Col md={3}>
            <img
              style={{ height: '140px' }}
              src="https://th.bing.com/th/id/R.f358ad0c5a9027f553ff9ad92164ea8e?rik=2hOgBr%2b8LNh01g&riu=http%3a%2f%2fwww.saucepodcast.com%2fwp-content%2fuploads%2f2019%2f08%2fBlack-Square.jpg&ehk=O%2bAsUEhC4NxLhzOvIgXAvdv8eVUuhJNWYUJkd3l3Pqs%3d&risl=&pid=ImgRaw&r=0"
              alt="placeholder"
              className="profile-image"
            ></img>
          </Col>
          <Col md={9}>
            <Row>
              <Col>
                <span className="bold-text large-text">Name Here</span>
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
export default Profile
