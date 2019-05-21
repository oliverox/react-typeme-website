import React from 'react';
import CheckoutForm from './CheckoutForm';
import { StripeProvider, Elements } from 'react-stripe-elements';

const Checkout = () => {
  return (
    <StripeProvider apiKey="pk_test_IpbBMxVHMOVDx6dooIbcBAZ200qevJ0q3Y">
      <Elements>
        <CheckoutForm />
      </Elements>
    </StripeProvider>
  );
};

export default Checkout;
