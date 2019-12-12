import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'
import LoadingBar from 'react-top-loading-bar'
import './feed.css'
import { feedServices } from '../../services'
import Nav from '../../components/nav'
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
        <Nav />
        <Container className="feed-container">
          <Row className="mt-4">
            <Col md={9}>
              <Feed feedItems={this.state.feedItems} />
            </Col>
            <Col md={3} className="mt-2">
              <Row>
                <Col md={3} sm={4}>
                  <Image
                    src="/placeholder_photo_cat.png"
                    height="50px"
                    width="auto"
                    roundedCircle
                  />
                </Col>
                <Col md={9} sm={8}>
                  <a href="#" className="gangsta-link">
                    leo4llen
                  </a>
                  <p>Leo Allen</p>
                </Col>
              </Row>

              <Card>
                <Card.Body>
                  <Card.Title>Homies</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export { FeedView }
