import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LeftCategories = ({ category }) => {
  const navigate = useNavigate()
  return (
    <Row
      className="my-2 post-hover categories-sticky"
      onClick={() => navigate('/categories', { state: { name: category.name } })}
    >
      <Col md={1}>
        <img
          style={{ height: '20px', width: '20px' }}
          src={category.image}
          alt="placeholder"
        ></img>
      </Col>
      <Col md={9}>
        <span className="faded-text smaller-text">{category.name}</span>
      </Col>
    </Row>
  )
}

export default LeftCategories
