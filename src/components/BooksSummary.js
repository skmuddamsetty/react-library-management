import React from 'react';
import { connect } from 'react-redux';
import getVisibleBooks from '../selectors/books';
import selectBooksTotal from '../selectors/books-total';
import numeral from 'numeral';
import { Link } from 'react-router-dom';

export const BooksSummary = ({ booksCount, booksTotal }) => {
  const bookWord = booksCount === 1 ? 'book' : 'books';
  const formattedBooksTotal = numeral(booksTotal / 100).format('$0,0.00');
  return (
    <div className='page-header'>
      <div className='content-container'>
        <h1 className='page-header__title'>
          Viewing <span>{booksCount}</span> {bookWord} totalling{' '}
          <span>{formattedBooksTotal}</span>
        </h1>
        <div className='page-header__actions'>
          <Link to='/add-book' className='button'>
            Add Book
          </Link>
        </div>
      </div>
    </div>
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
