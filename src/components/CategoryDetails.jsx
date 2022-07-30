import { Container, Row, Col } from 'react-bootstrap'

const CategoryDetails = ({ currentCategory }) => {
  return (
    <>
      <Container className="white-background slight-border-radius mt-3 cancel-bottom-border-radius">
        <Row>
          <Col>
            <h1>Details</h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="pb-3">
            <span>{currentCategory.text.paragraph1}</span>
          </Col>
        </Row>
      </Container>
      <img
        style={{ width: '100%' }}
        src={currentCategory.text.picture}
        alt="placeholder"
      ></img>
      <Container className="white-background slight-border-radius pt-3 cancel-top-border-radius">
        <Row>
          <Col md={12} className="mb-4">
            <span>{currentCategory.text.paragraph2}</span>
          </Col>
        </Row>
      </Container>
      <Container className="white-background slight-border-radius my-3 pt-3">
        <Row>
          <Col md={12} className="pb-3">
            <span>{currentCategory.text.paragraph3}</span>
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default CategoryDetails
