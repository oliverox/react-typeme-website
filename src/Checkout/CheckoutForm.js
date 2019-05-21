import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './CheckoutForm.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(ev) {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Within the context of `Elements`, this call to createPaymentMethod knows from which Element to
    // create the PaymentMethod, since there's only one in this group.
    // See our createPaymentMethod documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method
    this.props.stripe
      .createPaymentMethod('card', { billing_details: { name: 'Jenny Rosen' } })
      .then(({ paymentMethod }) => {
        console.log('Received Stripe PaymentMethod:', paymentMethod);
      });

    // You can also use handleCardPayment with the Payment Intents API automatic confirmation flow.
    // See our handleCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment
    // this.props.stripe.handleCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', data);

    // You can also use createToken to create tokens.
    // See our tokens documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-token
    // this.props.stripe.createToken({ type: 'card', name: 'Jenny Rosen' });
    // token type can optionally be inferred if there is only one one Element
    // with which to create tokens
    // this.props.stripe.createToken({name: 'Jenny Rosen'});

    // You can also use createSource to create Sources.
    // See our Sources documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-source
    // this.props.stripe.createSource({
    //   type: 'card',
    //   owner: {
    //     name: 'Jenny Rosen'
    //   }
    // });
  }

  render() {
    let qs = window.location.search || '?lic=single';
    let split = qs.split('=');
    let license = 'single';
    let price = '15';
    let lic;
    if (split.length > 1) {
      lic = split[1];
    }
    if (lic === 'unlimited') {
      license = lic;
      price = '45';
    }
    window.scrollTo({ top: 0 });
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <h3 style={{ marginTop: 20, textAlign: 'center' }}>
            React-TypeMe
            <br />
            Commercial {`${license.charAt(0).toUpperCase()}${license.slice(1)}`} License
          </h3>
          <input name="name" type="text" placeholder="Full name" required />
          <hr />
          <input
            name="email"
            type="email"
            placeholder="Email address"
            required
          />
          <hr />
          <div style={{ paddingTop: 10, paddingLeft: 10, marginBottom: 15 }}>
            <CardElement
              style={{
                base: {
                  color: '#1ca086',
                  fontSize: '18px',
                  '::placeholder': {
                    color: '#bfbfbf'
                  }
                }
              }}
            />
          </div>
          <hr />
          <span className="powered"><img src="./powered_by_stripe.png" alt="powered by Stripe" /></span>
          <button className="buy-cta" onClick={this.handleSubmit}>
            Pay US${`${price}`}
          </button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
