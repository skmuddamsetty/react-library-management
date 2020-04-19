import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_BOOK
const addBook = ({
  title = '',
  description = '',
  price = 0,
  publishedAt = 0,
}) => ({
  type: 'ADD_BOOK',
  book: {
    id: uuid(),
    title,
    description,
    price,
    publishedAt,
  },
});
// EDIT_BOOK
const editBook = (id, updates) => ({
  type: 'EDIT_BOOK',
  id,
  updates,
});
// REMOVE_BOOK
const removeBook = ({ id } = {}) => ({
  type: 'REMOVE_BOOK',
  id,
});
// SET_TEXT_FILTER
const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text,
});
// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});
// SORT_BY_PRICE
const sortByPrice = () => ({
  type: 'SORT_BY_PRICE',
});
// SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate,
});
// SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate,
});

const demoState = {
  books: [],
  filters: {
    text: '',
    sortBy: 'price',
    startDate: undefined,
    endDate: undefined,
  },
};

const booksReducerDefaultState = [];

const booksReducer = (state = booksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      let books = [...state];
      books = books.filter((book) => book.id !== action.id);
      return books;
    case 'EDIT_BOOK':
      return state.map((book) => {
        if (book.id === action.id) {
          return { ...book, ...action.updates };
        } else {
          return book;
        }
      });
    default:
      return state;
  }
};

const filtersReducerDefaultState = demoState.filters;

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return { ...state, text: action.text };
    case 'SORT_BY_DATE':
      return { ...state, sortBy: 'date' };
    case 'SORT_BY_PRICE':
      return { ...state, sortBy: 'price' };
    case 'SET_START_DATE':
      return { ...state, startDate: action.startDate };
    case 'SET_END_DATE':
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

// Get Visible Books
const getVisibleBooks = (books, { text, sortBy, startDate, endDate }) => {
  const filteredBooks = books.filter((book) => {
    const startDateMatch =
      typeof startDate !== 'number' || book.publishedAt >= startDate;
    const endDateMatch =
      typeof startDate !== 'number' || book.publishedAt <= endDate;
    const textMatch = book.title.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  });
  return filteredBooks.sort((a, b) => {
    if (sortBy === 'date') {
      return a.publishedAt < b.publishedAt ? 1 : -1; // decreasing order
    } else if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1;
    }
  });
};
// Store Creation
const store = createStore(
  combineReducers({ books: booksReducer, filters: filtersReducer })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleBooks = getVisibleBooks(state.books, state.filters);
  console.log(store.getState(), visibleBooks);
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
    price: 54500,
    publishedAt: 100,
  })
);

// store.dispatch(removeBook({ id: book1.book.id }));
store.dispatch(editBook(book2.book.id, { price: 64500 }));
store.dispatch(setTextFilter('book'));
store.dispatch(sortByPrice());
store.dispatch(sortByDate());
store.dispatch(setStartDate(100));
store.dispatch(setEndDate(200));
