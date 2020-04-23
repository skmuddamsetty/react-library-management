import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <Link to='/' className='header__title'>
          <h1>Library Management</h1>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
