import React from 'react';
import CheckoutForm from './CheckoutForm';
import { StripeProvider, Elements } from 'react-stripe-elements';

const Checkout = () => {
  const STRIPE_PUBLISHABLE_KEY = process.env.NODE_ENV === 'production' ? process.env.STRIPE_PUBLISHABLE_KEY : process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
  console.log(process.env);
  console.log('env=', process.env.NODE_ENV);
  console.log('STRIPE_PUBLISHABLE_KEY=', STRIPE_PUBLISHABLE_KEY);
  return (
    <StripeProvider apiKey={`${STRIPE_PUBLISHABLE_KEY}`}>
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  );
};

export default Checkout;
