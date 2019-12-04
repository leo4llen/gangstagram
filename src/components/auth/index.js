import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'
function Auth({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Cookies.get('session_token') ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}

export default Auth
