import React from 'react';

import './Error.css';

const Error = () => (
  <div className="page-container">
    <h2
      style={{
        textAlign: 'center',
        color: 'red'
      }}
    >
      Charge error!
    </h2>
    <p
      style={{
        maxWidth: 500,
        textAlign: 'center'
      }}
    >
      Sadly, we encountered an error while processing your credit card payment.{' '}
      <a href="/#license">Please try again</a>.
    </p>
  </div>
);

export default Error;
