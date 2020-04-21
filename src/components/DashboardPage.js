import React from 'react';
import BooksList from './BooksList';
import BookListFilters from './BookListFilters';
import BooksSummary from './BooksSummary';
const LibraryDashboardPage = () => (
  <div>
    <BooksSummary />
    <BookListFilters />
    <BooksList />
  </div>
);
export default LibraryDashboardPage;
