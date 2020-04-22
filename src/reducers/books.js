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
    case 'SET_BOOKS':
      return action.books;
    default:
      return state;
  }
};

export default booksReducer;
