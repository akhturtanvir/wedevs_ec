import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import cookie from 'js-cookie';

const GuestRoute = ({ component:Component, ...rest }) => {
    const token = cookie.get('token');
    return (
      <Route
        {...rest}
        render={props =>
          !token ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/products",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }

  export default GuestRoute;