import React from 'react';
import { connect } from 'react-redux';
import BookListItem from './BookListItem';
import getVisibleBooks from '../selectors/books';

export const BooksList = (props) => (
  <div className='content-container'>
    <div className='list-header'>
      <div className='show-for-mobile'>Books</div>
      <div className='show-for-desktop'>Book</div>
      <div className='show-for-desktop'>Price</div>
    </div>
    <div className='list-body'>
      {props.books.length === 0 ? (
        <div className='list-item list-item--message'>
          <span>No Books</span>
        </div>
      ) : (
        props.books.map((book) => {
          return <BookListItem key={book.id} {...book} />;
        })
      )}
    </div>
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
