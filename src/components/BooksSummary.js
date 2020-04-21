import React from 'react';
import { connect } from 'react-redux';
import getVisibleBooks from '../selectors/books';
import selectBooksTotal from '../selectors/books-total';
import numeral from 'numeral';

export const BooksSummary = ({ booksCount, booksTotal }) => {
  const bookWord = booksCount === 1 ? 'book' : 'books';
  const formattedBooksTotal = numeral(booksTotal / 100).format('$0,0.00');
  return (
    <h2>
      Viewing {booksCount} {bookWord} totalling {formattedBooksTotal}
    </h2>
  );
};

const mapStateToProps = (state) => {
  const visibleBooks = getVisibleBooks(state.books, state.filters);
  return {
    booksCount: visibleBooks.length,
    booksTotal: selectBooksTotal(visibleBooks),
  };
};

export default connect(mapStateToProps)(BooksSummary);
