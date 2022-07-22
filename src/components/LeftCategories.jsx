import { Row, Col } from 'react-bootstrap'

const LeftCategories = ({ category }) => (
  <Row className="my-2 post-hover">
    <Col md={1}>
      {console.log(category)}
      <img style={{ height: '20px' }} src={category.image} alt="placeholder"></img>
    </Col>
    <Col md={9}>
      <span className="faded-text smaller-text">{category.name}</span>
    </Col>
  </Row>

  /* <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-building-fortress "
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M7 21h1a1 1 0 0 0 1 -1v-1h0a3 3 0 0 1 6 0m3 2h1a1 1 0 0 0 1 -1v-15l-3 -2l-3 2v6h-4v-6l-3 -2l-3 2v15a1 1 0 0 0 1 1h2m8 -2v1a1 1 0 0 0 1 1h2" />
          <path d="M7 7h0v.01" />
          <path d="M7 10h0v.01" />
          <path d="M7 13h0v.01" />
          <path d="M17 7h0v.01" />
          <path d="M17 10h0v.01" />
          <path d="M17 13h0v.01" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Philosophy</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-tank"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="2" y="12" width="18" height="6" rx="3" />
          <path d="M6 12l1 -5h5l3 5" />
          <line x1="21" y1="9" x2="13.2" y2="9" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Guns and Firearms</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-building-church"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="3" y1="21" x2="21" y2="21" />
          <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
          <line x1="10" y1="5" x2="14" y2="5" />
          <line x1="12" y1="3" x2="12" y2="8" />
          <path d="M6 21v-7m-2 2l8 -8l8 8m-2 -2v7" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Religion & Spirituality</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-mask"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <circle cx="12" cy="12" r="3" />
          <rect x="4" y="4" width="16" height="16" rx="2" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Rights</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-speakerphone"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 8a3 3 0 0 1 0 6" />
          <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
          <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Free Speech</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-jump-rope"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 14v-6a3 3 0 1 1 6 0v8a3 3 0 0 0 6 0v-6" />
          <rect x="16" y="3" width="4" height="7" rx="2" />
          <rect x="4" y="14" width="4" height="7" rx="2" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Self Imporovement</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-ball-american-football"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="10" y1="12" x2="12" y2="14" />
          <line x1="12" y1="10" x2="14" y2="12" />
          <path d="M8 21a5 5 0 0 0 -5 -5" />
          <path d="M16 3c-7.18 0 -13 5.82 -13 13a5 5 0 0 0 5 5c7.18 0 13 -5.82 13 -13a5 5 0 0 0 -5 -5" />
          <path d="M16 3a5 5 0 0 0 5 5" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Sports</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-old"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M11 21l-1 -4l-2 -3v-6" />
          <path d="M5 14l-1 -3l4 -3l3 2l3 .5" />
          <circle cx="8" cy="4" r="1" />
          <path d="M7 17l-2 4" />
          <path d="M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Politics</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-device-desktop"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <rect x="3" y="4" width="18" height="12" rx="1" />
          <line x1="7" y1="20" x2="17" y2="20" />
          <line x1="9" y1="16" x2="9" y2="20" />
          <line x1="15" y1="16" x2="15" y2="20" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Computer Science</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-heart"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Health & Wellness</span>
      </Col>
    </Row>
    <Row className="my-2 post-hover">
      <Col md={1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-speakerphone"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="#2c3e50"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 8a3 3 0 0 1 0 6" />
          <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
          <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
        </svg>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">Free Speech</span>
      </Col>
    </Row> */
)

export default LeftCategories
