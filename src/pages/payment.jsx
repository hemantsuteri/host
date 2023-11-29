import React from 'react';

const centeredText = {
  marginTop: '150px',
  textAlign: 'center',
  // margin: '0',
};

const centeredImg = {
  display: 'block',
  margin: 'auto',
  height: '400px',
  width: '500px',
};

const Payment = () => {
  return (
    <div>
      <h1 style={centeredText}>Pay ₹5000 Now</h1>
      <img style={centeredImg} src="https://res.cloudinary.com/duivrjbfz/image/upload/v1701272116/paynow_macvlq.png" alt="QR_Code" />
    </div>
  );
};

export default Payment;
