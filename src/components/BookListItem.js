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
  <Link to={`/edit-book/${id}`} className='list-item'>
    <div>
      <h3 className='list-item__title'>{title}</h3>
      <span className='list-item__subtitle'>
        {moment(publishedAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <h3 className='list-item__data'>
      {numeral(price / 100).format('$0,0.00')}
    </h3>
  </Link>
);

export default BookListItem;
