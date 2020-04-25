import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import LibraryDashboardPage from '../components/DashboardPage';
import AddBookPage from '../components/AddBookPage';
import EditBookPage from '../components/EditBookPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createBrowserHistory();

const AppRouter = () => (
  // Switching from BrowserRouter to Router so that we can pass our own history object
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path='/' component={LoginPage} exact={true} />
        <PrivateRoute path='/dashboard' component={LibraryDashboardPage} />
        <PrivateRoute path='/add-book' component={AddBookPage} />
        <PrivateRoute path='/edit-book/:id' component={EditBookPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
