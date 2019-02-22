import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { setSelectedMenu } from '../store/ui-state/action';
import { logout } from '../store/auth/action';

class Navigation extends Component {
  state = {
    dropdown: { keyboard: false, user: false },
    navToogler: false
  };

  clearHistoryListener = null;

  componentDidMount() {
    document.addEventListener('click', this.docClick);
    this.setState({ currentPath: this.props.location.pathname }, () => {
      this.clearHistoryListener = this.props.history.listen(loc => {
        this.props.dispatch(setSelectedMenu(loc.pathname));
        if (this.state.navToogler === true) {
          this.setState({ navToogler: false });
        }
      });
    });
  }

  docClick = e => {
    const cls = e.path[0].className;
    if (cls.indexOf('kspan') > -1 || cls.indexOf('ub') > -1) {
      return false;
    }
    if (this.state.dropdown.keyboard || this.state.dropdown.user) {
      this.setState({ dropdown: { keyboard: false, user: false } });
    }
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.docClick);
    if (this.clearHistoryListener) {
      this.clearHistoryListener();
    }
  }

  navAction = action => {
    if (action === 'logout') {
      this.props.dispatch(logout());
      this.props.history.push('/home');
    }
  };

  render() {
    const { dropdown, navToogler } = this.state;
    const { currentPath } = this.props.uiInfo;
    const { authInfo } = this.props;
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/home">
          React-Redux-Starter
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            this.setState(state => {
              return { navToogler: !state.navToogler };
            });
          }}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${navToogler ? 'show' : ''}`}>
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${currentPath === '/home' || currentPath === '/' ? 'active' : ''}`}>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className={`nav-item ${currentPath === '/todo' ? 'active' : ''}`}>
              <Link className="nav-link" to="/todo">
                TodoApp
              </Link>
            </li>

            <li
              className={`nav-item dropdown ${currentPath.indexOf('keyboard') > -1 ? 'active' : ''} ${dropdown.keyboard ? 'show' : ''}`}
              onClick={e => {
                e.stopPropagation();
                return this.setState({ dropdown: { keyboard: true } });
              }}
            >
              <span className="nav-link dropdown-toggle kspan">KeyboardApp</span>
              <div className={`dropdown-menu ${dropdown.keyboard ? 'show' : ''}`}>
                <Link className="dropdown-item" to="/virtual-keyboard/one">
                  Example One
                </Link>
                <Link className="dropdown-item" to="/virtual-keyboard/two">
                  Example Two
                </Link>
                <Link className="dropdown-item" to="/virtual-keyboard/three">
                  Example Three
                </Link>
                <Link className="dropdown-item" to="/virtual-keyboard/four">
                  Example Four
                </Link>
              </div>
            </li>
            <li className={`nav-item ${currentPath === '/not-found' ? 'active' : ''}`}>
              <Link className="nav-link" to="/not-found">
                404
              </Link>
            </li>
          </ul>
          {authInfo.isAuthenticated ? (
            <div className={`dropdown ${dropdown.user ? 'show' : ''}`}>
              <button
                className="btn btn-info btn-sm dropdown-toggle ub"
                type="button"
                onClick={e => {
                  e.stopPropagation();
                  return this.setState({ dropdown: { keyboard: false, user: true } });
                }}
              >
                {authInfo.userDetails.username}
              </button>
              <div className={`dropdown-menu ${dropdown.user ? 'show' : ''} ${window.innerWidth < 700 ? '' : 'logout'}`}>
                <span className="dropdown-item" onClick={() => this.navAction('logout')}>
                  Logoutasdasdadsadsasd
                </span>
              </div>
            </div>
          ) : (
            <span
              className="btn btn-info btn-sm loginbtn"
              onClick={() => {
                this.props.history.push('/login');
              }}
            >
              Login
            </span>
          )}
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
