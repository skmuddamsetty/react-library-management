import { addBook, removeBook, editBook } from '../../actions/books';
import books from '../fixtures/books';

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

test('should add book to the database and store', () => {});

test('should add book with defaults to database and store', () => {});
