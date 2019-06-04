import React from 'react';
import CheckoutForm from './CheckoutForm';
import { StripeProvider, Elements } from 'react-stripe-elements';

const Checkout = () => {
  return (
    <StripeProvider apiKey={`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`}>
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  );
};

export default Checkout;
