import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const MainHeader = (props) => {
  return (
    <header className='main-header'>
      <div className='logo-box'>
        <img src='/images/favicon.png' alt='Logo' className='logo-box__logo' />
        {/*<span className='logo-box__title'>Sunshine Library</span>*/}
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
          <svg className='user-nav__user-photo'>
            <use xlinkHref='/images/sprite.svg#icon-user'></use>
          </svg>
          {props.userInfo && props.userInfo.displayName ? (
            <span className='user-nav__user-name'>
              {props.userInfo.displayName.toUpperCase()}
            </span>
          ) : (
            <button
              className='user-nav__user-name button button--link'
              onClick={props.startLogin}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    userInfo: state.auth.userInfo,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(MainHeader);
