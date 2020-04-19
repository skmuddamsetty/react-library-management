import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';

const AddBookPage = (props) => (
  <div>
    <h1>Add Book Page</h1>
    <BookForm
      onSubmit={(book) => {
        props.dispatch(addBook(book));
        // navigating the user to the dashboard page
        props.history.push('/');
      }}
    />
  </div>
);
export default connect()(AddBookPage);
