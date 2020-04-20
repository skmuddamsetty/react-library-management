import selectBooks from '../../selectors/books';
import moment from 'moment';
import books from '../fixtures/books';

test('should filter by text value', () => {
  const filters = {
    text: 'r',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectBooks(books, filters);
  expect(result).toEqual([books[0], books[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
  };
  const result = selectBooks(books, filters);
  expect(result).toEqual([books[2], books[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).subtract(3, 'days'),
  };
  const result = selectBooks(books, filters);
  expect(result).toEqual([books[1]]);
});

test('should sortByDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectBooks(books, filters);
  expect(result).toEqual([books[2], books[0], books[1]]);
});

test('should sortByPrice', () => {
  const filters = {
    text: '',
    sortBy: 'price',
    startDate: undefined,
    endDate: undefined,
  };
  const result = selectBooks(books, filters);
  expect(result).toEqual([books[1], books[2], books[0]]);
});
