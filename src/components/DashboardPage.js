import React from 'react';
import BooksList from './BooksList';
import BookListFilters from './BookListFilters';
import BooksSummary from './BooksSummary';
import SideBar from './SideBar';
const LibraryDashboardPage = () => (
  <div>
    <BooksSummary />
    <BookListFilters />
    <div className='content-container'>
      <div className='results-layout'>
        <SideBar />
        <div className='books-list'>
          <BooksList />
        </div>
      </div>
    </div>
  </div>
);
export default LibraryDashboardPage;
