import React from 'react';
import './style.scss';

const Footer = (props) => {
  const { color, setColor } = props;
  const colors = ['black', 'brown'];
  return (
    <footer className="footer">
      <h2 className="price">$59.99 <span>$89.99</span></h2>
      <div className="form-group">
        <label htmlFor="select-color">Colors</label>
        <select value={color} onChange={e => setColor(e.target.value)}>
          {colors.map((color, i) => (
            <option value={color} key={i}>{color}</option>
          ))}
        </select>
      </div>
      <button>Add to cart</button>
    </footer>
  );
}

export default Footer;