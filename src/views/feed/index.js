import React, { Component, Fragment } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";

class LandingView extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Gangstagram
          </Navbar.Brand>
        </Navbar>

        <Container>
          <Row>
            <Col>some text</Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export { LandingView };
