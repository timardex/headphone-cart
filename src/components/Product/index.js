import React from 'react';
import './style.scss';

const Product = (props) => {
  const { product, getPage, color, setColor, setToggleText } = props;
  const handleOnChange = (value) => {
    setColor(value);
    setToggleText('Add to Cart');
  }

  return (
    <div className="content pl-3 pr-3">
      {getPage}
      <h2 className="price">{product.price.newPrice} <span>{product.price.oldPrice}</span></h2>
      <div className="form-group">
      <label htmlFor="select-color">Colors</label>
      <select value={color} onChange={e => handleOnChange(e.target.value)}>
          {product.colors.map((color, i) => (
          <option value={color} key={i}>{color}</option>
          ))}
      </select>
      </div>
    </div>
  );
}

export default Product;
