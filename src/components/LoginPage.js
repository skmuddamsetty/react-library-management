import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import MainHeader from './MainHeader';

export const LoginPage = (props) => {
  return (
    <div>
      <MainHeader />
      <div className='box-layout'>
        <div className='box-layout__box'>
          <h1 className='box-layout__title'>Sunshine Library</h1>
          <p>Login to manage, checkout and to do much more</p>
          <button className='button' onClick={props.startLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    startLogin: () => dispatch(startLogin()),
  };
};
export default connect(undefined, mapDispatchToProps)(LoginPage);
