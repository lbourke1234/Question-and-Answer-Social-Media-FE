import { Container, Row, Col } from 'react-bootstrap'

const CategoryDetails = ({ currentCategory }) => {
  return (
    <Container className="white-background slight-border-radius mt-3">
      <Row>
        <Col>
          <h1>Details</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>{currentCategory.description}</span>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend nibh
            sapien, ac egestas ipsum feugiat et. Nam vehicula lacinia nibh. Sed pretium
            fermentum ligula vel vulputate. Duis tristique magna sit amet metus posuere
            vulputate. Nullam tortor purus, tincidunt placerat pretium ac, porta ac urna.
            Maecenas imperdiet, nunc vel egestas aliquet, odio urna dapibus tortor, vel
            eleifend lorem enim quis magna. Sed ut nunc massa. Curabitur mattis dolor
            placerat neque tristique suscipit. Donec odio lorem, vehicula quis sem sit
            amet, molestie varius elit. Cras eget sem ut mauris sodales auctor lacinia ut
            risus. Fusce fermentum ultrices facilisis. Nunc fermentum pulvinar fringilla.
            In suscipit aliquet volutpat. Nullam ut lorem ipsum. Aliquam id tempor nisl.
            Nulla ultrices, magna at bibendum vulputate, orci mi maximus ligula, vel
            placerat tellus sapien et erat.
          </span>
        </Col>
      </Row> */}
    </Container>
  )
}
export default CategoryDetails
