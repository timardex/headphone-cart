import React from 'react';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="price">$59.99 <span>$89.99</span></h2>
      <div className="form-group">
        <label htmlFor="select-color">Colors</label>
        <select>
          <option value="black">black</option>
          <option value="brown">brown</option>
        </select>
      </div>
      <button>Add to cart</button>
    </footer>
  );
}

export default Footer;