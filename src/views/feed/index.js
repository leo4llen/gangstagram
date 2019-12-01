import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import LoadingBar from 'react-top-loading-bar'
import './feed.css'
import { feedServices } from '../../services'
import Feed from '../../components/feed'

class FeedView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      feedItems: []
    }
  }

  componentDidMount() {
    this.LoadingBar.continuousStart()
    feedServices
      .getItems()
      .then(({ data: feedItems }) => {
        this.LoadingBar.complete()
        this.setState({ feedItems })
      })
      .catch(e => {
        this.LoadingBar.complete()
        console.log(e)
      })
  }

  render() {
    return (
      <Fragment>
        <LoadingBar
          onRef={ref => (this.LoadingBar = ref)}
          height={3}
          color="#47d147"
        />
        <Navbar bg="light" variant="light">
          <Container>
            <Col md={4}>
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
              <i className="fa fa-smile-o mt-2 gangsta-link fa-lg "></i>
            </Col>
          </Container>
        </Navbar>

        <Container className="feed-container">
          <Row className="mt-4">
            <Col md={9}>
              <Feed feedItems={this.state.feedItems} />
            </Col>
            <Col md={3}></Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export { FeedView }
