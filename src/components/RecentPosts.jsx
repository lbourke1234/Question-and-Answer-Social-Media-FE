import { Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import { format } from 'date-fns'

const RecentPosts = ({ post, userPosts }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }
  return (
    <>
      {userPosts ? (
        <Row
          className="my-2 mx-1 pt-2 slight-border-radius recent-post-design profile-col-height-a custom-profile-posts"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Col md={2} className="opacity-difference">
            <img
              style={{ height: '40px', width: '40px', borderRadius: '50%' }}
              src={post.author.avatar}
              alt="placeholder"
            ></img>
          </Col>
          <Col md={10} className="opacity-difference">
            <Row>
              <Col>
                <p className="bold-text">{post.content.heading}</p>
                {!isHovering && (
                  <p className="text-align-right">
                    {format(new Date(post.createdAt), 'MMM d kk:mm')}
                  </p>
                )}
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
      ) : (
        <Row
          className="my-2 pt-2 slight-border-radius recent-post-design"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <Col md={2}>
            <img
              style={{ height: '40px', width: '40px', borderRadius: '50%' }}
              src={post.author.avatar}
              alt="placeholder"
            ></img>
          </Col>
          <Col md={10}>
            <Row>
              <Col>
                <p className="bold-text">{post.content.heading}</p>
                {!isHovering && (
                  <p className="text-align-right">
                    {format(new Date(post.createdAt), 'MMM d kk:mm')}
                  </p>
                )}
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
      )}
    </>
  )
}
export default RecentPosts
