import { Container, Row, Col, Jumbotron } from 'react-bootstrap'
import PostMainContainer from './PostMainContainer'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  setCurrentCategoryAction,
  setCurrentCategoryQuestionsAction
} from '../redux/actions'
import CategoryDetails from './CategoryDetails'

const Categories = () => {
  const currentCategory = useSelector((state) => state.currentCategory)
  const catQuestions = useSelector((state) => state.currentCategoryQuestions)

  const token = localStorage.getItem('token')
  const resizedToken = token.substring(1, token.length - 1)

  const location = useLocation()
  const dispatch = useDispatch()

  const fetchCategoryQuestions = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GET_CATEGORY_QUESTIONS}${location.state.name}`,
      {
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      console.log('category questions', body)
      dispatch(setCurrentCategoryQuestionsAction(body))
    }
  }

  const fetchCategory = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GET_SINGLE_CATEGORY}${location.state.name}`,
      {
        headers: {
          Authorization: `Bearer ${resizedToken}`
        }
      }
    )
    if (response.ok) {
      const body = await response.json()
      console.log('category current body', body)
      dispatch(setCurrentCategoryAction(body))
    }
  }

  useEffect(() => {
    fetchCategory()
    fetchCategoryQuestions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const imageUrl = currentCategory.image
  console.log(imageUrl)

  return (
    <>
      <Jumbotron
        fluid
        className="jumbotron-categories"
        style={{ backgroundImage: 'url(' + imageUrl + ')' }}
      >
        <Container className="jumbotron-text-container">
          <h1>{location.state.name}</h1>
          {/* <p>{currentCategory.description}</p> */}
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col md={9}>
            {catQuestions.map((q) => (
              <PostMainContainer key={q._id} post={q} />
            ))}
          </Col>
          <Col md={3}>
            <CategoryDetails currentCategory={currentCategory} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
export default Categories
