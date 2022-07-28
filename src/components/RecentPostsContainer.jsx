import RecentPosts from './RecentPosts'
import { Container, Row } from 'react-bootstrap'
import { useEffect, useState } from 'react'

const RecentPostsContainer = ({ posts }) => {
  const [recentPosts, setRecentPosts] = useState([])

  const fetchPostsByDate = async () => {
    const response = await fetch(process.env.REACT_APP_GET_POST_URL_BY_DATE, {
      headers: {
        Authorization: `Bearer `
      }
    })
    if (response.ok) {
      const body = await response.json()
      setRecentPosts(body)
    }
  }

  useEffect(() => {
    fetchPostsByDate()
  }, [])

  return (
    <Container className="recent-posts-sticky">
      <Row>
        <h2>Recent Posts</h2>
      </Row>
      <Row>
        {recentPosts.map((post) => (
          <a className="recent-sidebar-a" href={`#${post._id}`} key={post._id}>
            <RecentPosts key={post._id} post={post} />
          </a>
        ))}
      </Row>
    </Container>
  )
}

export default RecentPostsContainer
