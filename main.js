document.addEventListener('DOMContentLoaded', function() {
  const element = document.querySelector('#my-element');

  element.addEventListener('checkout', function() {
    
  });
});

const form = document.querySelector('form');


form.addEventListener('checkout', function(event) {
  
  event.preventDefault();

  
  const email = document.querySelector('#inputEmail4').value;
  const amount = document.querySelector('#amount').value;

  if (!email || !amount) {
    
    alert('Please enter a valid email address and amount.');
    return;
  }

  form.submit();
});

const loadingIndicator = document.querySelector('#loadingIndicator');


form.addEventListener('checkout', function(event) {
  
  event.preventDefault();

  
  loadingIndicator.style.display = 'block';

  
  form.submit();
});

form.addEventListener('load', function() {
  
  loadingIndicator.style.display = 'none';
});

form.addEventListener('checkout', function(event) {
  
  event.preventDefault();

  form.submit();

  
  window.location.href = '/thank-you.html';
});
