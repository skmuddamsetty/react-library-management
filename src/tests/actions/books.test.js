import { addBook, removeBook, editBook } from '../../actions/books';

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

test('should setup addBook Action Object with default values', () => {
  expect(addBook({})).toEqual({
    type: 'ADD_BOOK',
    book: {
      id: expect.any(String),
      title: '',
      description: '',
      price: 0,
      publishedAt: 0,
    },
  });
});

test('should setup addBook Action Object with provided values', () => {
  const book = {
    title: 'React',
    description: 'React Book Desc',
    price: 240,
    publishedAt: 150,
  };
  const action = addBook(book);
  expect(action).toEqual({
    type: 'ADD_BOOK',
    book: {
      id: expect.any(String),
      ...book,
    },
  });
});
