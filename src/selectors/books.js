// Get Visible Books
const getVisibleBooks = (books, { text, sortBy, startDate, endDate }) => {
  const filteredBooks = books.filter((book) => {
    const startDateMatch =
      typeof startDate !== 'number' || book.publishedAt >= startDate;
    const endDateMatch =
      typeof startDate !== 'number' || book.publishedAt <= endDate;
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
