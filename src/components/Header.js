import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header className='header'>
    <div className='content-container'>
      <div className='header__content'>
        <Link to='/dashboard' className='header__title'>
          <h1>Library Management</h1>
        </Link>
        <button className='button button--link' onClick={props.startLogout}>
          Logout
        </button>
      </div>
    </div>
  </header>
);

const mapPropsToDispatch = (dispatch) => {
  return {
    startLogout: () => dispatch(startLogout()),
  };
};
export default connect(undefined, mapPropsToDispatch)(Header);
