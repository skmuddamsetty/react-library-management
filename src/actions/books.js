import uuid from 'uuid';
// ADD_BOOK
export const addBook = ({
  title = '',
  description = '',
  price = 0,
  publishedAt = 0,
}) => ({
  type: 'ADD_BOOK',
  book: {
    id: uuid(),
    title,
    description,
    price,
    publishedAt,
  },
});
// EDIT_BOOK
export const editBook = (id, updates) => ({
  type: 'EDIT_BOOK',
  id,
  updates,
});
// REMOVE_BOOK
export const removeBook = ({ id } = {}) => ({
  type: 'REMOVE_BOOK',
  id,
});
