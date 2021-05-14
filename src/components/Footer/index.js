import React from 'react';
import './style.scss';

const Footer = (props) => {  
  const { addToCart, toggleText } = props;
  return (
    <footer className="footer pt-2 pl-3 pb-3">
      <button onClick={(e) => addToCart()}>
        { toggleText }
      </button>
    </footer>
  );
}

export default Footer;