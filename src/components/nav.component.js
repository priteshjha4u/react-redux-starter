import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Navigation extends Component {
  state = {
    currentPath: '',
    dropdown: { keyboard: false }
  };

  clearHistoryListener = null;

  componentDidMount() {
    document.addEventListener('click', this.docClick);
    this.setState({ currentPath: this.props.location.pathname }, () => {
      this.clearHistoryListener = this.props.history.listen(loc => {
        this.setState({ currentPath: loc.pathname });
      });
    });
  }

  docClick = e => {
    if (e.path && e.path[0].className.indexOf('dspan') > -1) {
      return false;
    }
    if (this.state.dropdown.keyboard) {
      this.setState({ dropdown: { keyboard: false } });
    }
  };

  componentWillUnmount() {
    document.removeEventListener('click', this.docClick);
    if (this.clearHistoryListener) {
      this.clearHistoryListener();
    }
  }

  render() {
    const { dropdown, currentPath } = this.state;
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <Link className="navbar-brand" to="/home">
          React-Redux-App
        </Link>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse">
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
              className={`nav-item dropdown ${dropdown.keyboard ? 'show' : ''}`}
              onClick={e => {
                e.stopPropagation();
                return this.setState({ dropdown: { keyboard: true } });
              }}
            >
              <span className="nav-link dropdown-toggle dspan" style={{ cursor: 'pointer' }}>
                KeyboardApp
              </span>
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
            <li className={`nav-item ${currentPath === '/login' ? 'active' : ''}`}>
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navigation);
