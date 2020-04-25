import React from 'react';

const MainHeader = () => {
  return (
    <header className='main-header'>
      <div className='logo-box'>
        <img src='/images/favicon.png' alt='Logo' className='logo-box__logo' />
        <span className='logo-box__title'>Sunshine Library</span>
      </div>
      <form className='search'>
        <input
          type='text'
          className='search__input'
          placeholder='Search Books'
        />
        <button className='search__button'>
          <svg className='search__icon'>
            <use xlinkHref='/images/sprite.svg#icon-magnifying-glass'></use>
          </svg>
        </button>
      </form>
      <nav className='user-nav'>
        <div className='user-nav__icon-box'>
          <svg className='user-nav__icon'>
            <use xlinkHref='/images/sprite.svg#icon-bookmark'></use>
          </svg>
          <span className='user-nav__notification'>0</span>
        </div>
        <div className='user-nav__user'>
          <img
            src='/images/loader.gif'
            alt='User Photo'
            className='user-nav__user-photo'
          />
          <span className='user-nav__user-name'>John Doe</span>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
