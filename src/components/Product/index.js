import React from 'react';
import './style.scss';

const Product = (props) => {
  const { getPage, price, colors, color, setColor } = props

  return (
    <div className="content pl-3 pr-3">
      {getPage}
      <h2 className="price">{price.newPrice} <span>{price.oldPrice}</span></h2>
      <div className="form-group">
      <label htmlFor="select-color">Colors</label>
      <select value={color} onChange={e => setColor(e.target.value)}>
          {colors.map((color, i) => (
          <option value={color} key={i}>{color}</option>
          ))}
      </select>
      </div>
    </div>
  );
}

export default Product;
