import React from 'react';
import { Link } from 'react-router-dom';

const Notfound = () => (
  <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
    <div className="col-md-5 p-lg-5 mx-auto my-5">
      <h1 className="display-4 font-weight-normal">Page Not Found</h1>
      <p className="lead font-weight-normal">Hi there, the page which you are looking for is missing, please come back later.</p>
      <Link className="btn btn-primary btn-lg" to="/">
        Go Home
      </Link>
    </div>
    <div className="product-device shadow-sm d-none d-md-block" />
    <div className="product-device product-device-2 shadow-sm d-none d-md-block" />
  </div>
);

export default Notfound;
