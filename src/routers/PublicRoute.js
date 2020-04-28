import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Header } from '../components/Header';
import MainHeader from '../components/MainHeader';
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
      isAuthenticated ? (
        <Redirect to='/dashboard' />
      ) : (
        <div>
          <MainHeader />
          <Component {...props} />
        </div>
      )
    }
  />
);
const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});
export default connect(mapStateToProps)(PublicRoute);
