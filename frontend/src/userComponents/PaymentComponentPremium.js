// import React, { useEffect,useNavigate } from 'react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const PaymentComponentPremium = () => {
  const URL = 'https://localhost:44358/api';
  const navigate = useNavigate();

  const loadRazorpayScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const createOrderAndOpenPayment = async () => {
    try {
      const orderResponse = await axios.post(`${URL}/payment/create-order`, {
        amount: 20000 * 100, // Premium Plan Amount
        currency: "INR",
      });

      const { order_id } = orderResponse.data;

      const options = {
        key: "rzp_test_uDTjqNOhY3Rzjo",
        name: "CVAuction Premium",
        description: "Premium Plan Payment",
        order_id: order_id,
        amount : 20000 * 100,
        handler: async (response) => {
          try {
            const paymentData = {
              paymentNo: 0,
              uid: JSON.parse(localStorage.getItem('user')).uid,
              transactionTime: new Date().toISOString(),
              amt: 20000,
              paymentId: response.razorpay_payment_id,
              orderId: response.razorpay_order_id,
              planType: 'premium',
            };

            await axios.post(`${URL}/DepositPlans`, paymentData);
            alert('Payment Successful! Premium plan details have been saved.');
          } catch (error) {
            console.error('Error saving payment:', error);
            alert('Error saving payment details.');
          }
        },
        prefill: {
          name: "CV Auction",
          email: "cv@example.com",
          contact: "1100900009",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#ff6600",
        },
      };

      const rzp1 = new window.Razorpay(options);

      rzp1.on('payment.failed', (response) => {
        alert(`Payment failed: ${response.error.description}`);
      });

      rzp1.open();
      navigate('/dashboard');
    } catch (error) {
      console.error('Error during payment process:', error);
      alert('Error creating order or fetching user details.');
    }
  };

  useEffect(() => {
    loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js')
      .catch(() => alert("Failed to load Razorpay SDK"));
  }, []);

  return (
    <div>
      <button id="rzp-button1" onClick={createOrderAndOpenPayment}>Pay ₹20,000 for Premium Plan</button>
    </div>
  );
};

export default PaymentComponentPremium;
