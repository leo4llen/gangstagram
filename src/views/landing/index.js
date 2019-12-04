import React, { Component, Fragment } from 'react'
import './landing.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoadingBar from 'react-top-loading-bar'
import LandingForm from '../../components/landingForm'
import { landingServices } from '../../services'
import Cookies from 'js-cookie'

class LandingView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: 10
    }
  }
  togglePasswordVisibility(type) {
    return type === 'password' ? 'text' : 'password'
  }

  handleLandingForm = async formData => {
    this.LoadingBar.continuousStart()
    await landingServices.login(formData)
    this.LoadingBar.complete()
    Cookies.set('session_token', 'blahblah')
    this.props.history.push('/feed')
  }
  render() {
    return (
      <Fragment>
        <LoadingBar
          onRef={ref => (this.LoadingBar = ref)}
          height={3}
          color="#47d147"
        />
        <Container className="login-container">
          <Row className="justify-content-center">
            <Col lg={12}>
              <h4 className="text-center gangsta-text mb-4">Gangstagram</h4>
            </Col>
            <Col lg={6}>
              <LandingForm handleLandingForm={this.handleLandingForm} />
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export { LandingView }
