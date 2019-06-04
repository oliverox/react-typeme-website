import React from 'react';
import CheckoutForm from './CheckoutForm';
import { StripeProvider, Elements } from 'react-stripe-elements';

const Checkout = () => {
  console.log(
    'STRIPE_PUBLISHABLE_KEY=',
    process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  );
  return (
    <StripeProvider apiKey={`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`}>
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  );
};

export default Checkout;
