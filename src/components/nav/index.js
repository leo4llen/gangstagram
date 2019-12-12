import React, { Component } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Cookies from 'js-cookie'

class Nav extends Component {
  constructor(props) {
    super(props)
  }

  logout = () => {
    Cookies.remove('session_token')
  }

  render() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Col md={4} xs={2}>
            <Navbar.Brand className="gangsta-text">Gangstagram</Navbar.Brand>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <InputGroup size="sm" className="mt-1">
              <FormControl
                className="gangsta-search-box"
                aria-label="Search"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button className="outline-default gangsta-search-box-button">
                  <i className="fa fa-search"></i>
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col className="text-right" md={2}>
            <i className="fa fa-smile-o mt-2 mr-2 gangsta-link fa-lg "></i>
            <a href="#" onClick={this.logout}>
              <i class="fa fa-sign-out mt-2 ml-2 gangsta-link fa-lg"></i>
            </a>
          </Col>
        </Container>
      </Navbar>
    )
  }
}

export default Nav
