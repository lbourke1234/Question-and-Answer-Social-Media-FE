import { Container, Row, Col } from 'react-bootstrap'
import PostBegin from './PostBegin'
import PostMainContainer from './PostMainContainer'
import LeftCategories from './LeftCategories'

const NewsFeed = () => {
  return (
    <Container>
      <Row>
        <Col md={2}>
          <LeftCategories />
        </Col>
        <Col md={7}>
          <PostBegin />
          <PostMainContainer />
          <PostMainContainer />
        </Col>
        <Col md={3}></Col>
      </Row>
    </Container>
  )
}
export default NewsFeed
