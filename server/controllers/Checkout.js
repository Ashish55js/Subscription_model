// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const stripe = require('stripe')('sk_test_tR3PYbcVNZZ796tH88S4VQ2u');

const paymentIntent = await stripe.paymentIntents.create({
  amount: 500,
  currency: 'gbp',
  payment_method: 'pm_card_visa',
});