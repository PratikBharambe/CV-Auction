import React, { useEffect } from 'react';
import axios from 'axios';

const PaymentComponentPremium = () => {
  useEffect(() => {
    const loadRazorpayScript = (src) => {
      return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
      });
    };

    const handlePaymentSuccess = async (response) => {
            try {
                const userId = await axios.get('http://localhost:8080/api/getUserId');
            } catch (error) {
                console.error('Error saving payment:', error);
                alert('Error saving payment details.');
            }

      const paymentData = {
    //    user_id : userId,
        payment_id: response.razorpay_payment_id,
        order_id: response.razorpay_order_id,
        signature: response.razorpay_signature,
        selected_plan : 'premium',
      };
      console.log(paymentData.payment_id + '  ' + paymentData.order_id + " " + paymentData.signature);


      try {
        await axios.post('http://localhost:8080/api/save-payment', paymentData);
        alert('Payment Successful! Details have been saved.');
      } catch (error) {
        console.error('Error saving payment:', error);
        alert('Error saving payment details.');
      }    
    };

    loadRazorpayScript('https://checkout.razorpay.com/v1/checkout.js')
      .then(() => {
        document.getElementById('rzp-button1').onclick = async (e) => {
          e.preventDefault();

          const orderResponse = await axios.post('http://localhost:8080/api/create-order', {
            amount: 10000 * 100, 
            currency: "INR",
          });

          const { order_id } = orderResponse.data;

          const options = {
            key: "rzp_test_n7avkNIJO7kz3S",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order_id,
            handler: handlePaymentSuccess,
            prefill: {
              name: "CV Auction",
              email: "cv@example.com",
              contact: "1100900009"
            },
            notes: {
              address: "Razorpay Corporate Office"
            },
            theme: {
              color: "#3399cc"
            },
          };

          const rzp1 = new window.Razorpay(options);

          rzp1.on('payment.failed', function (response) {
            alert(`Payment failed: ${response.error.description}`);
          });

          rzp1.open();
        };
      })
      .catch(() => alert("Failed to load Razorpay SDK"));
  }, []);

  return (
    <div>
      <button id="rzp-button1">Pay</button>
    </div>
  );
};

export default PaymentComponentPremium;
