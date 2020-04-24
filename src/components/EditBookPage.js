import React from 'react';
import { connect } from 'react-redux';
import BookForm from './BookForm';
import { startEditBook, startRemoveBook } from '../actions/books';

export class EditBookPage extends React.Component {
  onSubmit = (book) => {
    this.props.startEditBook(this.props.book.id, book);
    this.props.history.push('/');
  };

  removeBookHandler = () => {
    this.props.startRemoveBook({ id: this.props.book.id });
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Edit Book</h1>
          </div>
        </div>
        <div className='content-container'>
          <BookForm book={this.props.book} onSubmit={this.onSubmit} />
          <button
            onClick={this.removeBookHandler}
            className='button button--secondary'
          >
            Remove Book
          </button>
        </div>
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
  startEditBook: (id, book) => dispatch(startEditBook(id, book)),
  startRemoveBook: ({ id }) => dispatch(startRemoveBook({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditBookPage);
