import selectBooksTotal from '../../selectors/books-total';
import books from '../fixtures/books';
test('should return 0 if empty books', () => {
  const res = selectBooksTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single book', () => {
  const res = selectBooksTotal([books[1]]);
  expect(res).toBe(books[1].price);
});

test('should correctly add up a multiple book', () => {
  const res = selectBooksTotal(books);
  expect(res).toBe(193500);
});
