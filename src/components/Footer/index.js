import React from 'react';
import './style.scss';

const Footer = (props) => {  
  const { addToCart, toggleText } = props;
  const disabled = toggleText.includes('Loading');
  return (
    <footer className="footer pt-2 pl-3 pb-3 pr-3">
      <button onClick={(e) => !disabled ? addToCart() : null} disabled={disabled}>
        { toggleText }
      </button>
    </footer>
  );
}

export default Footer;