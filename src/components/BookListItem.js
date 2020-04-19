import React from 'react';
const BookListItem = ({ title, description, price, publishedAt }) => (
  <div>
    <h3>
      {title}
      <span> - {description}</span>
    </h3>

    <p>{price}</p>
    <p>{publishedAt}</p>
  </div>
);

export default BookListItem;
