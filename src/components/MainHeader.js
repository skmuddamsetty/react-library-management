import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export class MainHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayUserMenu: false,
    };
  }
  displayUserMenuHandler = () => {
    this.setState(() => ({ displayUserMenu: !this.state.displayUserMenu }));
  };
  render() {
    return (
      <header className='main-header'>
        <div className='logo-box'>
          {
            //   <img
            //   src='/images/favicon.png'
            //   alt='Logo'
            //   className='logo-box__logo'
            // />
          }
          <svg className='logo-box__logo'>
            <use xlinkHref='/images/sprite.svg#icon-open-book'></use>
          </svg>
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
          <div className='user-nav__user' onClick={this.displayUserMenuHandler}>
            <svg className='user-nav__user-photo'>
              <use xlinkHref='/images/sprite.svg#icon-user'></use>
            </svg>
            {this.props.userInfo && this.props.userInfo.displayName ? (
              <div>
                <span className='user-nav__user-name'>
                  {this.props.userInfo.displayName.toUpperCase()}
                </span>
              </div>
            ) : (
              <button
                className='user-nav__user-name button button--link'
                onClick={this.props.startLogin}
              >
                Login
              </button>
            )}
            {this.state.displayUserMenu && (
              <div className='user-nav__user-menu'>Hello</div>
            )}
          </div>
        </nav>
      </header>
    );
  }
}

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
