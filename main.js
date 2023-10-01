function checkout() {
  // Create a Stripe payment intent
  const stripe = Stripe('pk_test_51NvhR1BaLhkzaUYzjxxLzJhDhIBNRmS3CKQVTh0Jk0NbHUx7II6eO3bOr62vp9C3iQyGvsn9LR01Z9Rm99Uz7wUy00z7ebNb5uY');
  const paymentIntent = stripe.paymentIntents.create({
    amount: 1000,
    currency: 'usd',
  });

  // Redirect the user to the Stripe checkout page
  window.location.href = paymentIntent.client_secret;
}
