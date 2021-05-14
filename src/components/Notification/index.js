import React from 'react';
import './style.scss';

const Notification = (props) => {
  const { product, color } = props
  return (
    <div className="notification">
      <p>{product.title} <span>{color}</span></p>
      <p>added into cart</p>
    </div>
  );
}

export default Notification;