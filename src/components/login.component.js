import React from 'react';
import cat from '../assets/icons/cat.svg';

class Login extends React.Component {
  submit = e => {
    e.preventDefault();
  };
  render() {
    return (
      <div className="row justify-content-center align-items-center">
        <div className="col-md-10">
          <form className="form-signin" onSubmit={this.submit} style={{ marginTop: '10%' }}>
            <img className="mb-4" src={cat} alt="" width="50" height="50" style={{ marginLeft: '40%' }} />
            <h1 className="h3 mb-3 font-weight-normal text-center">Please sign in</h1>
            <label htmlFor="inputEmail" className="sr-only">
              Email address
            </label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
            <label htmlFor="inputPassword" className="sr-only">
              Password
            </label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            {/* <div className="checkbox mb-3">
		  <label>
			<input type="checkbox" value="remember-me" /> Remember me
		  </label>
		</div> */}
            <button className="btn btn-lg btn-primary btn-block" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
