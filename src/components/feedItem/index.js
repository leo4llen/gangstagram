import React, { Fragment } from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function FeedItems({ item }) {
  return (
    <Fragment>
      <Card className="mt-2 mb-4 feed-card">
        <Card.Header className="feed-item-header">{item.id}</Card.Header>
        <Card.Body>
          <img src={item.url} alt={item.id} className="feed-image"></img>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default FeedItems
