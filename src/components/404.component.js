import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => (
  <div className="text-center bg-light shadow-sm rounded">
    <div className="col-md-12 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Page Not Found</h1>
      <p className="lead font-weight-normal">Hi there, the page which you are looking for is missing, please come back later.</p>
      <Link className="btn btn-primary btn-lg" to="/">
        Go Home
      </Link>
    </div>
  </div>
);

export default Notfound;
