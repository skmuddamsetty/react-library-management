import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Header } from '../components/Header';
// renaming the component property passed in to this component from AppRouter
// because component name has to be in uppercase
export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    component={(props) =>
      isAuthenticated ? <Redirect to='/dashboard' /> : <Component {...props} />
    }
  />
);
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PublicRoute);
