import uuid from 'uuid';
import database from '../firebase/firebase';
import axios from 'axios';
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

export const startEditBook = (id, updates) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database
      .ref(`users/${uid}/books/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editBook(id, updates));
      });

    // return database
    //   .ref(`books/${id}`)
    //   .update(updates)
    //   .then(() => {
    //     dispatch(editBook(id, updates));
    //   });
  };
};
// REMOVE_BOOK
export const removeBook = ({ id } = {}) => ({
  type: 'REMOVE_BOOK',
  id,
});

export const startRemoveBook = ({ id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    // return database
    //   .ref(`books/${id}`)
    //   .remove()
    //   .then(() => {
    //     dispatch(removeBook({ id }));
    //   });

    return database
      .ref(`users/${uid}/books/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBook({ id }));
      });
  };
};

// Changes after adding thunk middleware to dispatch functions instead of objects
export const startAddBook = (bookData = {}) => {
  // this function gets called by redux and redux passes the dispatch argument
  return async (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = '',
      description = '',
      price = 0,
      publishedAt = 0,
    } = bookData;
    const book = { title, description, price, publishedAt };
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify(book);
      const res = await axios.get('/api/v1/books');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    // added return here so that in the unit test cases we can listen to this event with .then()
    // return database
    //   .ref('books')
    //   .push(book)
    //   .then((ref) => {
    //     dispatch(addBook({ id: ref.key, ...book }));
    //   });

    // creating books for users
    return database
      .ref(`users/${uid}/books`)
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
  return async (dispatch, getState) => {
    try {
      const res = await axios.get('/api/v1/books');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    // return database
    //   .ref('books')
    //   .once('value')
    //   .then((snapshot) => {
    //     const books = [];
    //     snapshot.forEach((childSnapShot) => {
    //       books.push({ id: childSnapShot.key, ...childSnapShot.val() });
    //     });
    //     dispatch(setBooks(books));
    //   });
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/books`)
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
