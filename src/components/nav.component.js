import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navigation extends Component {
  state = {
    dropdown: { keyboard: false }
  };

  componentDidMount() {
    document.addEventListener('click', this.docClick);
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
  }

  render() {
    const dd = this.state.dropdown;
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
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/todo">
                TodoApp
              </Link>
            </li>

            <li
              className={`nav-item dropdown ${dd.keyboard && 'show'}`}
              onClick={e => {
                e.preventDefault();
                e.stopPropagation();
                this.setState({ dropdown: { keyboard: true } });
              }}
            >
              <span className="nav-link dropdown-toggle dspan" style={{ cursor: 'pointer' }}>
                KeyboardApp
              </span>
              <div className={`dropdown-menu ${dd.keyboard && 'show'}`}>
                <Link className="dropdown-item" to="/virtual-keyboard/one">
                  Example One
                </Link>
                <Link className="dropdown-item" to="/virtual-keyboard/two">
                  Example Two
                </Link>
                <Link className="dropdown-item" to="/virtual-keyboard/three">
                  Example Three
                </Link>
                <Link className="dropdown-item" to="/virtual-keyboard/three">
                  Example Four
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/not-found">
                404
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navigation;
