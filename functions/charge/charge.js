const stripe = require('stripe')(
  process.env.CONTEXT === 'production'
    ? process.env.STRIPE_SECRET_KEY
    : process.env.DEV_STRIPE_SECRET_KEY
);
const statusCode = 200;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type'
};
exports.handler = (event, context, callback) => {
  console.log(`env is ${process.env.CONTEXT}`);
  console.log('secret prod=', process.env.STRIPE_SECRET_KEY);
  console.log('secret dev =', process.env.DEV_STRIPE_SECRET_KEY);
  if (event.httpMethod !== 'POST' || !event.body) {
    callback(null, {
      statusCode,
      headers,
      body: {}
    });
  }

  const data = JSON.parse(event.body);

  //-- Make sure we have all required data. Otherwise, escape.
  if (!data.token || !data.license || !data.idempotency_key) {
    console.error('Required information is missing.');

    callback(null, {
      statusCode: 400,
      headers,
      body: JSON.stringify({ status: 'missing-information' })
    });

    return;
  }

  stripe.charges.create(
    {
      currency: 'usd',
      amount:
        data.license === 'single'
          ? process.env.REACT_APP_SINGLE_LICENSE_PRICE
          : process.env.REACT_APP_UNLIMITED_LICENSE_PRICE,
      source: data.token.id,
      name: data.token.name,
      receipt_email: data.token.email,
      description: `Charge for React-TypeMe ${
        data.license === 'single' ? 'Single' : 'Unlimited'
      } License`
    },
    {
      idempotency_key: data.idempotency_key
    },
    (err, charge) => {
      if (err !== null) {
        console.log(err);
        callback(null, {
          statusCode: 400,
          headers,
          body: JSON.stringify({
            status: 'failed-charge'
          })
        });
      }

      let status =
        charge === null || charge.status !== 'succeeded'
          ? 'failed'
          : charge.status;

      callback(null, {
        statusCode,
        headers,
        body: JSON.stringify({ status })
      });
    }
  );
};
