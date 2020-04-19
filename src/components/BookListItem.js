import React from 'react';
import { removeBook } from '../actions/books';
import { connect } from 'react-redux';
const BookListItem = ({
  title,
  description,
  price,
  publishedAt,
  id,
  dispatch,
}) => (
  <div>
    <h3>
      {title}
      <span> - {description}</span>
    </h3>

    <p>{price}</p>
    <p>{publishedAt}</p>
    <button
      onClick={() => {
        dispatch(removeBook({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

export default connect()(BookListItem);
