import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

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
    <p>{numeral(price / 100).format('$0,0.00')}</p>
    <p>{moment(publishedAt).format('MMMM Do, YYYY')}</p>
  </div>
);

export default BookListItem;
