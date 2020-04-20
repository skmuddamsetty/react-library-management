import booksReducer from '../../reducers/books';
import books from '../fixtures/books';
import moment from 'moment';

test('should set default State', () => {
  const state = booksReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('remove book works properly with a valid id', () => {
  const state = booksReducer(books, {
    type: 'REMOVE_BOOK',
    id: books[1].id,
  });
  expect(state).toEqual([books[0], books[2]]);
});

test('remove book works properly with a invalid id', () => {
  const state = booksReducer(books, {
    type: 'REMOVE_BOOK',
    id: 'awdawdawd',
  });
  expect(state).toEqual([books[0], books[1], books[2]]);
});

test('add book works properly', () => {
  const book = {
    title: 'Micro Services Book',
    price: 84500,
    description: 'This is first Micro Services Book',
    publishedAt: moment().endOf('month'),
  };
  const state = booksReducer(books, {
    type: 'ADD_BOOK',
    book,
  });
  expect(state).toEqual([books[0], books[1], books[2], book]);
});

test('edit book works properly', () => {
  const state = booksReducer(books, {
    type: 'EDIT_BOOK',
    id: books[0].id,
    updates: {
      title: 'Changed Title',
    },
  });
  expect(state[0].title).toEqual('Changed Title');
});
