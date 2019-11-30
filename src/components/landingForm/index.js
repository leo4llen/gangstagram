import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

function LandingForm(props) {
  const formData = {
    email: undefined,
    password: undefined
  };

  const onChange = (name, value) => {
    formData[name] = value;
    console.log(name, value);
  };

  return (
    <Fragment>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
          <Form.Text className="text-muted">Must be gangsta enuf</Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
          />
        </Form.Group>

        <Button className="gangsta-button" onClick={props.handleLogin}>
          Login
        </Button>
      </Form>
    </Fragment>
  );
}

export default LandingForm;
