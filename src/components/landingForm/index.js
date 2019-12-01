import React, { Fragment, useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Fade from 'react-bootstrap/Fade'
import validate from 'validate.js'

function LandingForm({ handleLandingForm }) {
  const [formData, setFormData] = useState({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
    type: 'login',
    linkText: 'New gangsta?'
  })

  const assignValue = e => {
    formData[e.target.name] = e.target.value
  }

  const toggleFormType = type => {
    type = type === 'login' ? 'register' : 'login'
    let linkText = type === 'login' ? 'New gangsta?' : "I'm a part of the hood"
    setFormData({ ...formData, ...{ type, linkText } })
  }

  const submitForm = e => {
    e.preventDefault()
    handleLandingForm(formData)
  }

  return (
    <Fragment>
      <Card>
        <Card.Body>
          <Form noValidate onSubmit={e => submitForm(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                defaultValue={formData.email}
                onChange={assignValue}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                defaultValue={formData.password}
                onChange={assignValue}
              />
            </Form.Group>

            <Fade in={formData.type === 'register'} unmountOnExit={true}>
              <div id="example-fade-text">
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirm password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPassword"
                    defaultValue={formData.confirmPassword}
                    onChange={assignValue}
                  />
                </Form.Group>
              </div>
            </Fade>
            <Form.Group controlId="formRegister">
              <a
                href="#"
                className="gangsta-link"
                onClick={() => toggleFormType(formData.type)}
              >
                {formData.linkText}
              </a>
            </Form.Group>
            <Button
              className="gangsta-button text-capitalize"
              type="submit"
              block
            >
              {formData.type}
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default LandingForm
