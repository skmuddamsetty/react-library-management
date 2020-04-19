import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { editBook, removeBook } from '../actions/books';
const EditBookPage = (props) => {
  return (
    <div>
      Edit Book Page
      <BookForm
        book={props.book}
        onSubmit={(book) => {
          props.dispatch(editBook(props.book.id, book));
          props.history.push('/');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeBook({ id: props.book.id }));
          props.history.push('/');
        }}
      >
        Remove Book
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    book: state.books.find((book) => book.id === props.match.params.id),
  };
};
export default connect(mapStateToProps)(EditBookPage);
