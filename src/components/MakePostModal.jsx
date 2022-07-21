import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Form } from 'react-bootstrap'

const MakePostModal = ({ token }) => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [heading, setHeading] = useState('')
  const [postBody, setPostBody] = useState('')

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
    content: {
      heading,
      question: postBody
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
      console.log('body of post', body)
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
          <Form.Label>Question Title</Form.Label>
          <Form.Control
            type="text"
            aria-describedby="passwordHelpBlock"
            placeholder="What do you want to ask?"
            className="post-begin-text-box"
            onChange={(e) => setHeading(e.target.value)}
          />
          <Form.Label>Question Body</Form.Label>
          <Form.Control
            type="text-box"
            aria-describedby="passwordHelpBlock"
            placeholder="What do you want to ask?"
            className="post-begin-text-box"
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
