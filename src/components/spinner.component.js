import React from 'react';

const Spinner = ({ cls }) => (
  <div className={`d-flex justify-content-center ${cls || ''}`}>
    <div className="spinner-border" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Spinner;
