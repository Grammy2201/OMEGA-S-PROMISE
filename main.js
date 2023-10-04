function checkout() {
  // Create a Stripe payment intent
  const stripe = Stripe('YOUR_API_KEY');
  const paymentIntent = stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
  });

  // Redirect the user to the Stripe checkout page
  window.location.href = paymentIntent.client_secret;
}
