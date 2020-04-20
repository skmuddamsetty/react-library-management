import React from 'react';
import BookForm from './BookForm';
import { connect } from 'react-redux';
import { addBook } from '../actions/books';

export class AddBookPage extends React.Component {
  onSubmit = (book) => {
    // we should not use the below line as this makes testing this component harder
    // props.dispatch(addBook(book));
    // we are calling the onSubmit property which has been obtained from mapDispatchToProps
    this.props.onSubmit(book);
    // navigating the user to the dashboard page
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Book Page</h1>
        <BookForm onSubmit={this.onSubmit} />
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
  onSubmit: (book) => dispatch(addBook(book)),
});
export default connect(undefined, mapDispatchToProps)(AddBookPage);
