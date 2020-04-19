import React from 'react';
import { Link } from 'react-router-dom';

const BookListItem = ({
  title,
  description,
  price,
  publishedAt,
  id,
  dispatch,
  history,
}) => (
  <div>
    <Link to={`/edit-book/${id}`}>
      <h3>
        {title}
        <span> - {description}</span>
      </h3>
    </Link>
    <p>{price}</p>
    <p>{publishedAt}</p>
  </div>
);

export default BookListItem;
