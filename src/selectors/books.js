import moment from 'moment';
// Get Visible Books
const getVisibleBooks = (books, { text, sortBy, startDate, endDate }) => {
  const filteredBooks = books.filter((book) => {
    const publishedAtMoment = moment(book.publishedAt);
    const startDateMatch = startDate
      ? startDate.isSameOrBefore(publishedAtMoment, 'day')
      : true;
    const endDateMatch = endDate
      ? endDate.isSameOrAfter(publishedAtMoment, 'day')
      : true;
    const textMatch = book.title.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  });
  return filteredBooks.sort((a, b) => {
    if (sortBy === 'date') {
      return a.publishedAt < b.publishedAt ? 1 : -1; // decreasing order
    } else if (sortBy === 'price') {
      return a.price < b.price ? 1 : -1;
    }
  });
};

export default getVisibleBooks;
