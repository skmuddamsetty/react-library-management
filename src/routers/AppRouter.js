import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LibraryDashboardPage from '../components/DashboardPage';
import AddBookPage from '../components/AddBookPage';
import EditBookPage from '../components/EditBookPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  // Switching from BrowserRouter to Router so that we can pass our own history object
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={LoginPage} exact={true} />
        <Route path='/dashboard' component={LibraryDashboardPage} />
        <Route path='/add-book' component={AddBookPage} />
        <Route path='/edit-book/:id' component={EditBookPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
