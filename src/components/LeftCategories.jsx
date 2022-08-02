import { Row, Col } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const LeftCategories = ({ category }) => {
  const navigate = useNavigate()
  return (
    <Row
      className="my-3 categories-sticky left-categories-hover border-left-categories"
      onClick={() => navigate('/categories', { state: { name: category.name } })}
    >
      <Col md={1}>
        <img
          className="mt-2 "
          style={{ height: '40px', width: '40px', display: 'flex', alignItems: 'center' }}
          src={category.image}
          alt="placeholder"
        ></img>
      </Col>
      <Col md={9} className="d-flex align-items-center ">
        <span className="faded-text left-category-name-text ml-5">{category.name}</span>
      </Col>
    </Row>
  )
}

export default LeftCategories
