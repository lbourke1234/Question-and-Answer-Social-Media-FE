import { Col } from 'react-bootstrap'

const RecentPosts = ({ post }) => (
  <Col md={12} className="my-2 white-background">
    <p>{post.author.name}</p>
    <p>{post.content.heading}</p>
  </Col>
)
export default RecentPosts
