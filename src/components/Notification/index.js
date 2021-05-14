import React from 'react';
import './style.scss';

const Notification = (props) => {
  const { product, color } = props
  return (
    <div className="notification">
      <div className="inner">
        <ul>
          <li>Name: {product.title}</li>
          <li>Color: {color}</li>
        </ul>
        <p>added into cart</p>
      </div>
    </div>
  );
}

export default Notification;