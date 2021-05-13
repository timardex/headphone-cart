import React from 'react';

import './style.scss';

const Header = (props) => {
  const { tabMenu, page, setPage } = props
  return (
    <header className="header">
      <div className="all-products">
        <i className="arrow-left"></i>
        <span>All products</span>
      </div>
      

      <h1 className="title">
        Audio-Technica ATH-MSR7
        <small>2017 Best Headphones of the Year Award Winner</small>
      </h1>
      <ul>
        {tabMenu.map((props, i) => (
          <li className={`link ${i === page ? 'active' : ''}`} key={i} onClick={() => setPage(i)}>
            {props.linkText}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;