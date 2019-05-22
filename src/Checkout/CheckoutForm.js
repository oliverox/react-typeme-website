import React, { Component } from 'react';
import { Redirect } from 'react-router';
import uuid from 'uuid/v4';
import { CardElement, injectStripe } from 'react-stripe-elements';

import './CheckoutForm.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      redirect: '',
      disabled: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUpdate(ev) {
    ev.preventDefault();
    this.setState({
      [ev.target.name]: ev.target.value
    });
  }

  async handleSubmit(ev) {
    ev.preventDefault();
    let license = ev.target.getAttribute('data-lic');
    let { token } = await this.props.stripe.createToken({
      name: this.state.name,
      email: this.state.email
    });
    let response = await fetch('/.netlify/functions/charge', {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain' },
      body: JSON.stringify({
        token,
        license,
        idempotency_key: uuid()
      })
    });

    if (response.ok) {
      console.log('Purchase Complete!');
      this.setState({
        redirect: 'success'
      });
    } else {
      console.error('Purchase Error encountered!');
      this.setState({
        redirect: 'error'
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.disabled !== this.state.disabled) {
      return true;
    } else if (nextState.redirect !== this.state.redirect) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    let qs = window.location.search || '?lic=1';
    let split = qs.split('=');
    let license = 'single';
    let fullPrice = process.env.REACT_APP_SINGLE_LICENSE_PRICE;
    if (split.length > 1 && split[1] === '2') {
      license = 'unlimited';
      fullPrice = process.env.REACT_APP_UNLIMITED_LICENSE_PRICE;
    }
    let price = `${fullPrice.slice(0, 2)}.${fullPrice.slice(2)}`;
    window.scrollTo({ top: 0 });
    return (
      <div className="form-container">
        {this.state.redirect === 'success' && <Redirect to="/success" />}
        {this.state.redirect === 'error' && <Redirect to="/error" />}
        <form onSubmit={this.handleSubmit}>
          <h3 style={{ marginTop: 20, textAlign: 'center' }}>
            React-TypeMe
            <br />
            Commercial {`${license.charAt(0).toUpperCase()}${license.slice(
              1
            )}`}{' '}
            License
          </h3>
          <input
            style={{ textTransform: 'capitalize' }}
            name="name"
            type="text"
            autoCorrect="off"
            spellCheck="off"
            placeholder="Full name"
            onChange={this.handleUpdate}
            required
          />
          <hr />
          <input
            name="email"
            type="email"
            autoCorrect="off"
            spellCheck="off"
            onChange={this.handleUpdate}
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
          <span className="powered">
            <img src="./powered_by_stripe.png" alt="powered by Stripe" />
          </span>
          <button
            disabled={this.state.disabled}
            className="buy-cta"
            data-lic={license}
            onClick={ev => {
              this.setState({
                disabled: true
              });
              this.handleSubmit(ev);
            }}
          >
            Pay US${`${price}`}
          </button>
        </form>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);
