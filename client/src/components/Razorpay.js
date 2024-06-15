import React, { useEffect } from 'react';

const RazorpayComponent = ({ amount, onSuccess, onFailure }) => {
  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        openRazorpayDialog();
      };
    };

    const openRazorpayDialog = () => {
      const options = {
        key: 'YOUR_RAZORPAY_KEY_ID', // Replace with your Razorpay key ID
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Test Transaction',
        image: 'https://your-logo-url.com',
        handler: function (response) {
          if (response.razorpay_payment_id) {
            onSuccess(response);
          } else {
            onFailure(response);
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: ''
        },
        notes: {
          address: 'Razorpay Corporate Office'
        },
        theme: {
          color: '#F37254'
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    };

    loadRazorpayScript();
  }, [amount, onSuccess, onFailure]);

  return null;
};

export default RazorpayComponent;
