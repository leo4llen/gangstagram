import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import './feed.css'

class FeedView extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="light" variant="light">
          <Container>
            <Col md={4}>
              <Navbar.Brand className="gangsta-text">Gangstagram</Navbar.Brand>
            </Col>
            <Col md={6}>
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
              <i className="fa fa-smile-o mt-2 gangsta-link fa-lg "></i>
            </Col>
          </Container>
        </Navbar>

        <Container>
          <Row>
            <Col></Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export { FeedView }
