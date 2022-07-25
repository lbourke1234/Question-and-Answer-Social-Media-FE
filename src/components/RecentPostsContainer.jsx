import RecentPosts from './RecentPosts'
import { Container, Row } from 'react-bootstrap'

const RecentPostsContainer = ({ posts }) => {
  return (
    <Container className="recent-posts-sticky">
      <Row>
        <h2>Recent Posts</h2>
      </Row>
      <Row>
        {posts.slice(0, 5).map((post) => (
          <a href={`#${post._id}`} key={post._id}>
            <RecentPosts key={post._id} post={post} />
          </a>
        ))}
      </Row>
    </Container>
  )
}

export default RecentPostsContainer
