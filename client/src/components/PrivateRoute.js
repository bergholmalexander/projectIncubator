import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
  <Route {...rest} render={props => (
    true // eslint-disable-line
      ? <Component {...props} />
      : <Redirect to="/" />
  )} />
);

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default PrivateRoute;
