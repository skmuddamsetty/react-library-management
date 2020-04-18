import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LibraryDashboardPage from '../components/DashboardPage';
import AddBookPage from '../components/AddBookPage';
import EditBookPage from '../components/EditBookPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={LibraryDashboardPage} exact={true} />
        <Route path='/add-book' component={AddBookPage} />
        <Route path='/edit-book/:id' component={EditBookPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
