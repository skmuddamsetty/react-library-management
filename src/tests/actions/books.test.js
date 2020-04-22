import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  addBook,
  removeBook,
  editBook,
  startAddBook,
  setBooks,
  startSetBooks,
  startRemoveBook,
} from '../../actions/books';
import books from '../fixtures/books';
import database from '../../firebase/firebase';

// creating the configuration so that all test cases can use the same mock store
const createMockStore = configureMockStore([thunk]);
var originalTimeout;

beforeEach(() => {
  originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  const booksData = {};
  books.forEach(({ id, description, title, price, publishedAt }) => {
    booksData[id] = { description, title, price, publishedAt };
  });
  database
    .ref('books')
    .set(booksData)
    .then(() => {
      console.log('helloo');
      // done();
    });
  // .catch(done);
});

afterEach(function () {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

test('should setup removeBook Action Object', () => {
  const action = removeBook({ id: '123' });
  expect(action).toEqual({ type: 'REMOVE_BOOK', id: '123' });
});

// testing startRemoveBook Async action
test('should remove book from firebase', () => {
  const store = createMockStore({});
  const id = books[2].id;
  store
    .dispatch(startRemoveBook({ id }))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_BOOK',
        id,
      });
      return database.ref(`books/${id}`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      // done();
    });
  // .catch(done)
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
  store
    .dispatch(startAddBook(book))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_BOOK',
        book: {
          id: expect.any(String),
          ...book,
        },
      });
      return database.ref(`books/$actions[0].book.id`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(book);
    });
});

test('should add book with defaults to database and store', () => {
  const store = createMockStore({});
  // we can use the store variable above to dispatch asynchronous redux actions
  const bookDefaults = {
    title: '',
    description: '',
    price: 0,
    publishedAt: 0,
  };
  store
    .dispatch(startAddBook({}))
    .then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_BOOK',
        book: {
          id: expect.any(String),
          ...bookDefaults,
        },
      });
      return database.ref(`books/$actions[0].book.id`).once('value');
    })
    .then((snapshot) => {
      expect(snapshot.val()).toEqual(bookDefaults);
      // done();
    });
  // .catch(done);
});

test('should setup book action object with data', () => {
  const action = setBooks(books);
  expect(action).toEqual({ type: 'SET_BOOKS', books });
});

test('should fetch the books from firebase', () => {
  // below line creates the store and empty object means that we do not need anything in the store
  const store = createMockStore({});
  store.dispatch(startSetBooks()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_BOOKS',
      books,
    });
    // done();
  });
  // .catch(done);
});
