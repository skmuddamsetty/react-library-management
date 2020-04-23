import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { startAddBook } from '../actions/books';

export class AddBookPage extends React.Component {
  onSubmit = (book) => {
    // we should not use the below line as this makes testing this component harder
    // props.dispatch(addBook(book));
    // we are calling the addBook property which has been obtained from mapDispatchToProps
    this.props.startAddBook(book);
    // navigating the user to the dashboard page
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <div className='page-header'>
          <div className='content-container'>
            <h1 className='page-header__title'>Add Book</h1>
          </div>
        </div>
        <div className='content-container'>
          <BookForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}
// const AddBookPage = (props) => (
//   <div>
//     <h1>Add Book Page</h1>
//     <BookForm
//       onSubmit={(book) => {
//         // we should not use the below line as this makes testing this component harder
//         // props.dispatch(addBook(book));
//         // we are calling the onSubmit property which has been obtained from mapDispatchToProps
//         props.onSubmit(book);
//         // navigating the user to the dashboard page
//         props.history.push('/');
//       }}
//     />
//   </div>
// );

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onSubmit: (book) => dispatch(addBook(book)),
//   };
// };

// syntax for implicitly returning the object. this is same as the above commented code but uses a short hand syntax
const mapDispatchToProps = (dispatch) => ({
  startAddBook: (book) => dispatch(startAddBook(book)),
});
export default connect(undefined, mapDispatchToProps)(AddBookPage);
