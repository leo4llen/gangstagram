import React, { Component, Fragment } from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import routes from './routes'
import Auth from '../components/auth'
const history = createBrowserHistory()

class Routes extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <Router history={history}>
          <Switch>
            {routes.map((x, i) => {
              return x.auth ? (
                <Auth
                  exact
                  key={'routes' + i}
                  path={x.path}
                  component={x.component}
                />
              ) : (
                <Route
                  exact
                  key={'routes' + i}
                  path={x.path}
                  component={x.component}
                />
              )
            })}
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default Routes
