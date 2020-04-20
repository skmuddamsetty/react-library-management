import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { editBook, removeBook } from '../actions/books';

export class EditBookPage extends React.Component {
  onSubmit = (book) => {
    this.props.editBook(this.props.book.id, book);
    this.props.history.push('/');
  };

  removeBookHandler = () => {
    this.props.removeBook({ id: this.props.book.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        Edit Book Page
        <BookForm book={this.props.book} onSubmit={this.onSubmit} />
        <button onClick={this.removeBookHandler}>Remove Book</button>
      </div>
    );
  }
}
// const EditBookPage = (props) => {
//   return (
//     <div>
//       Edit Book Page
//       <BookForm
//         book={props.book}
//         onSubmit={(book) => {
//           props.dispatch(editBook(props.book.id, book));
//           props.history.push('/');
//         }}
//       />
//       <button
//         onClick={() => {
//           props.dispatch(removeBook({ id: props.book.id }));
//           props.history.push('/');
//         }}
//       >
//         Remove Book
//       </button>
//     </div>
//   );
// };

const mapStateToProps = (state, props) => {
  return {
    book: state.books.find((book) => book.id === props.match.params.id),
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editBook: (id, book) => dispatch(id, editBook(book)),
  removeBook: ({ id }) => dispatch(removeBook({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBookPage);
