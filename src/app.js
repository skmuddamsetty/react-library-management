import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { editBook, addBook, removeBook, startSetBooks } from './actions/books';
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByDate,
  sortByPrice,
} from './actions/filters';
import { login, logout, userInfo } from './actions/auth';
import getVisibleBooks from './selectors/books';
import { Provider } from 'react-redux';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import LoadingPage from './components/LoadingPage';
import { firebase } from './firebase/firebase';

const store = configureStore();
// store.subscribe(() => {
//   const state = store.getState();
//   const visibleBooks = getVisibleBooks(state.books, state.filters);
//   console.log(visibleBooks);
// });
// const book1 = store.dispatch(
//   addBook({
//     title: 'React Book',
//     description: 'This is the first react book.',
//     price: 54500,
//     publishedAt: 200,
//   })
// );

// const book2 = store.dispatch(
//   addBook({
//     title: 'Angular Book',
//     description: 'This is the first react book.',
//     price: 64500,
//     publishedAt: 100,
//   })
// );

// store.dispatch(editBook(book2.book.id, { price: 64500 }));
// // store.dispatch(setTextFilter('book'));
// store.dispatch(sortByPrice());
// store.dispatch(sortByDate());
// // store.dispatch(setStartDate(100));
// // store.dispatch(setEndDate(200));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(
      userInfo({
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      })
    );
    store.dispatch(startSetBooks()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
});
