import selectBooks from '../../selectors/books';
import moment from 'moment';
const books = [
  {
    id: '1',
    title: 'React Book',
    description: 'This is the first react book',
    price: 54500,
    publishedAt: 0,
  },
  {
    id: '2',
    title: 'Angular Book',
    description: 'This is the first angular book',
    price: 74500,
    publishedAt: moment(0).subtract(4, 'days').valueOf(),
  },
  {
    id: '3',
    title: 'Node Book',
    description: 'This is the first node book',
    price: 64500,
    publishedAt: moment(0).add(4, 'days').valueOf(),
  },
];
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
