const selectBooksTotal = (books) => {
  return books.map((book) => book.price).reduce((sum, value) => sum + value, 0);
};

export default selectBooksTotal;
