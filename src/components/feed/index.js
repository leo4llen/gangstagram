import React, { Fragment } from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Fade from 'react-bootstrap/Fade'
import FeedItems from '../feedItem'

function Feed({ feedItems }) {
  return (
    <Fragment>
      {feedItems.map(x => (
        <Col lg={12} key={x.id}>
          <FeedItems item={x} />
        </Col>
      ))}
    </Fragment>
  )
}

export default Feed
