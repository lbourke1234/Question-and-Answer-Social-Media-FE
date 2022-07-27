import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'

const RecentPosts = ({ post }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  return (
    <Row
      className="my-2 pt-2 white-background slight-border-radius"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <Col md={2}>
        <img style={{ height: '40px' }} src={post.author.avatar} alt="placeholder"></img>
      </Col>
      <Col md={10}>
        <Row>
          <Col>
            <p className="bold-text">{post.content.heading}</p>
          </Col>
        </Row>
        {isHovering && (
          <Row>
            <Col>
              <p>{post.content.question}</p>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  )
}
export default RecentPosts
