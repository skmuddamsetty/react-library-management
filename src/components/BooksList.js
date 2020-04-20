import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import getVisibleBooks from '../selectors/books';

export const BooksList = (props) => (
  <div>
    {props.books.length === 0 ? (
      <p>No Books</p>
    ) : (
      props.books.map((book) => {
        return <BookListItem key={book.id} {...book} />;
      })
    )}
  </div>
);

// const ConnectedBooksList = connect((state) => {
//   return {
//     books: state.books,
//   };
// })(BooksList);

const mapStateToProps = (state) => {
  return {
    books: getVisibleBooks(state.books, state.filters),
  };
};

export default connect(mapStateToProps)(BooksList);
