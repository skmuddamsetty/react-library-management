import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_BOOK
// export const addBook = ({
//   title = '',
//   description = '',
//   price = 0,
//   publishedAt = 0,
// }) => ({
//   type: 'ADD_BOOK',
//   book: {
//     id: uuid(),
//     title,
//     description,
//     price,
//     publishedAt,
//   },
// });

// ADD_BOOK with new changes after adding thunk middleware
export const addBook = (book) => ({
  type: 'ADD_BOOK',
  book,
});
// EDIT_BOOK
export const editBook = (id, updates) => ({
  type: 'EDIT_BOOK',
  id,
  updates,
});
// REMOVE_BOOK
export const removeBook = ({ id } = {}) => ({
  type: 'REMOVE_BOOK',
  id,
});

// Changes after adding thunk middleware to dispatch functions instead of objects
export const startAddBook = (bookData = {}) => {
  // this function gets called by redux and redux passes the dispatch argument
  return (dispatch) => {
    const {
      title = '',
      description = '',
      price = 0,
      publishedAt = 0,
    } = bookData;
    const book = { title, description, price, publishedAt };
    // added return here so that in the unit test cases we can listen to this event with .then()
    return database
      .ref('books')
      .push(book)
      .then((ref) => {
        dispatch(addBook({ id: ref.key, ...book }));
      });
  };
};

// SET_EXPENSES
export const setBooks = (books) => ({
  type: 'SET_BOOKS',
  books,
});

export const startSetBooks = () => {
  return (dispatch) => {
    return database
      .ref('books')
      .once('value')
      .then((snapshot) => {
        const books = [];
        snapshot.forEach((childSnapShot) => {
          books.push({ id: childSnapShot.key, ...childSnapShot.val() });
        });
        dispatch(setBooks(books));
      });
  };
};
