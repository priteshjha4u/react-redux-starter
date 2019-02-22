import React from 'react';
import cat from '../assets/icons/cat.svg';
import { userLogin } from '../store/auth/action';
import Spinner from './spinner.component';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  };

  submit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { dispatch, history } = this.props;
    dispatch(userLogin(username, password, history));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { username, password } = this.state;
    const { authInfo } = this.props;
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10">
          <form className="form-signin" onSubmit={this.submit} style={{ marginTop: '10%' }}>
            <img className="mb-4" src={cat} alt="" width="50" height="50" style={{ marginLeft: '40%' }} />
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input
              type="text"
              name="username"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              required
              autoFocus
              value={username}
              onChange={this.handleChange}
            />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Password" required value={password} onChange={this.handleChange} />
            <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={!username || !password || authInfo.isLoading}>
              Sign in
            </button>
            {authInfo.isLoading && <Spinner cls="mt-4" />}
            {!authInfo.isLoading && authInfo.error && (
              <div className="row justify-content-center align-items-center mt-4">
                <div className="alert alert-danger">{authInfo.error.message}</div>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
