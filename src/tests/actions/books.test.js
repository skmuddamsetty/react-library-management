import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addBook,
  removeBook,
  editBook,
  startAddBook,
} from '../../actions/books';
import books from '../fixtures/books';

// creating the configuration so that all test cases can use the same mock store
const createMockStore = configureMockStore([thunk]);

test('should setup removeBook Action Object', () => {
  const action = removeBook({ id: '123' });
  expect(action).toEqual({ type: 'REMOVE_BOOK', id: '123' });
});

test('should setup editBook Action Object', () => {
  const book = { title: 'React' };
  const id = '123';
  const action = editBook(id, book);
  expect(action).toEqual({ type: 'EDIT_BOOK', id, updates: { ...book } });
});

// commented this one because this will not work anymore as we have changed the action after adding thunk
// test('should setup addBook Action Object with default values', () => {
//   expect(addBook({})).toEqual({
//     type: 'ADD_BOOK',
//     book: {
//       id: expect.any(String),
//       title: '',
//       description: '',
//       price: 0,
//       publishedAt: 0,
//     },
//   });
// });

test('should setup addBook Action Object with provided values', () => {
  // const book = {
  //   title: 'React',
  //   description: 'React Book Desc',
  //   price: 240,
  //   publishedAt: 150,
  // };
  const action = addBook(books[3]);
  expect(action).toEqual({
    type: 'ADD_BOOK',
    // commented as part of thunk
    // book: {
    //   id: expect.any(String),
    //   ...book,
    // },
    book: books[3],
  });
});

test('should add book to the database and store', () => {
  const store = createMockStore({});
  // we can use the store variable above to dispatch asynchronous redux actions
  const book = {
    title: 'React Book',
    description: 'This is the first react book',
    price: 54500,
    publishedAt: 0,
  };
  store.dispatch(startAddBook(book)).then(() => {
    expect(1).toBe(2);
    // done();
  });
  // .catch(done);
  // store
  //   .dispatch(startAddBook(book))
  //   .then(() => {
  //     expect(1).toBe(2);
  //     // by calling done() we are forcing jest to make sure it waits untill the above assertion completes
  //     done();
  //   })
  //   .catch(done);
});

test('should add book with defaults to database and store', () => {});
