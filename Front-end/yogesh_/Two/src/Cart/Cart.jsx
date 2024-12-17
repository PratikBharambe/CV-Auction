import React from 'react';
import './cart.css';
import image from '../assets/download.jpg'

const Cart = () => {
  return (
    <div className="cart-list">
      <div className="cart-item">
        <div className="info">
            <img src={image} alt="image" className='car-img' />
            <h5> Car Brand : Honda </h5>
           
        </div>


    
        <button className="btn btn-danger"> Remove </button>
      </div>

    </div>
  );
};

export default Cart;
