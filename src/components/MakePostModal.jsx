import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux/es/hooks/useDispatch'
import { addNewestPostAction, setPostDataAction } from '../redux/actions'

const MakePostModal = ({ token }) => {
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [heading, setHeading] = useState('')
  const [postBody, setPostBody] = useState('')
  const [category, setCategory] = useState('')

  const [profileData, setProfileData] = useState({
    avatar: '',
    email: '',
    name: '',
    _id: ''
  })

  const fetchProfileData = async () => {
    const response = await fetch(process.env.REACT_APP_USER_ME_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      setProfileData(body)
    }
  }
  useEffect(() => {
    fetchProfileData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fullPostBody = {
    author: profileData._id,
    category,
    content: {
      heading,
      question: postBody
    }
  }

  const fetchPostData = async () => {
    const response = await fetch(process.env.REACT_APP_GET_POST_URL, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      dispatch(setPostDataAction(body))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('in handlesubmit')
    const response = await fetch(process.env.REACT_APP_POST_QUESTION_URL, {
      method: 'POST',
      body: JSON.stringify(fullPostBody),
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })
    if (response.ok) {
      const body = await response.json()
      // dispatch(setPostDataAction(body))
      fetchPostData()
      console.log('body of post', body)
      dispatch(addNewestPostAction(body))
    } else {
      console.log('problem posting question')
    }
  }

  return (
    <>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        placeholder="What do you want to ask?"
        className="post-begin-text-box"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Post your Question</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label className="modal-title-text">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your title goes here"
            className="slight-border-radius"
            onChange={(e) => setHeading(e.target.value)}
          />
          <Form.Label className="modal-title-text">Choose a category</Form.Label>
          <Form.Control
            as="select"
            className="slight-border-radius"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option></option>
            <option>Philosophy</option>
            <option>Religion</option>
            <option>Free Speech</option>
            <option>Technology</option>
            <option>Sports</option>
            <option>Politics</option>
            <option>Health & Wellness</option>
          </Form.Control>
          <Form.Label className="modal-title-text">Write your question here</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            placeholder="What do you want to ask?"
            className="slight-border-radius"
            onChange={(e) => setPostBody(e.currentTarget.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              handleSubmit(e)
              handleClose()
            }}
          >
            Post
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default MakePostModal
