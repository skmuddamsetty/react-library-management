import React from 'react';
import BooksList from './BooksList';
import BookListFilters from './BookListFilters';
const LibraryDashboardPage = () => (
  <div>
    <BookListFilters />
    <BooksList />
  </div>
);
export default LibraryDashboardPage;
