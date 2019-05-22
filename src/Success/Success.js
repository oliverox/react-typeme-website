import React from 'react';

import './Success.css';

const Success = () => (
  <div className="page-container">
    <h2
      style={{
        textAlign: 'center',
        color: '#1ca086'
      }}
    >
      Thank you for your purchase!
    </h2>
    <p
      style={{
        maxWidth: 500,
        textAlign: 'center'
      }}
    >
      You will soon receive a confirmation email that you are now licensed to use
      React-TypeMe in a commercial project.
    </p>
  </div>
);

export default Success;
