import React from 'react';
import './style.scss';

const Footer = (props) => {  
  const { addToCart, toggleText } = props;
  const disabled = toggleText.includes('Loading');
  const viewCart = toggleText === 'View Cart';

  const handleClick = () => {
    if(viewCart) {
      window.location.reload();
    }
    if(!disabled) {
      addToCart();
    }
    return null;
  }
  return (
    <footer className="footer pt-2 pl-3 pb-3 pr-3">
      <button onClick={(e) => handleClick()} disabled={disabled}>
        { toggleText }
      </button>
    </footer>
  );
}

export default Footer;