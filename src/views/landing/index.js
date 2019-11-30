import React, { Component, Fragment } from "react";
import "./landing.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import LandingForm from "../../components/landingForm";

class LandingView extends Component {
  togglePasswordVisibility(type) {
    return type === "password" ? "text" : "password";
  }

  handleLogin() {}

  handleRegister() {}

  render() {
    return (
      <Fragment>
        <Container className="login-container">
          <Row className="justify-content-center">
            <Col lg={12}>
              <h4 className="text-center mb-4">Gangstagram</h4>
            </Col>
            <Col lg={6}>
              <Card>
                <Card.Header className="text-center">LOGIN</Card.Header>
                <Card.Body>
                  <LandingForm handleLogin={this.handleLogin} />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export { LandingView };
