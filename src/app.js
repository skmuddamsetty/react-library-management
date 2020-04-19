import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { editBook, addBook, removeBook } from './actions/books';
import {
  setEndDate,
  setStartDate,
  setTextFilter,
  sortByDate,
  sortByPrice,
} from './actions/filters';
import getVisibleBooks from './selectors/books';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();
store.subscribe(() => {
  const state = store.getState();
  const visibleBooks = getVisibleBooks(state.books, state.filters);
  console.log(visibleBooks);
});
const book1 = store.dispatch(
  addBook({
    title: 'React Book',
    description: 'This is the first react book.',
    price: 54500,
    publishedAt: 200,
  })
);

const book2 = store.dispatch(
  addBook({
    title: 'Angular Book',
    description: 'This is the first react book.',
    price: 64500,
    publishedAt: 100,
  })
);

store.dispatch(editBook(book2.book.id, { price: 64500 }));
store.dispatch(setTextFilter('book'));
store.dispatch(sortByPrice());
// store.dispatch(sortByDate());
store.dispatch(setStartDate(100));
store.dispatch(setEndDate(200));
ReactDOM.render(<AppRouter />, document.getElementById('app'));
