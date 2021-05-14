import React from 'react';

import './style.scss';

const Header = (props) => {
  const { title, subTitle, tabMenu, page, setPage } = props
  return (
    <header className="header pt-3">
      <div className="all-products pl-3 pr-3">
        <i className="arrow-left"></i>
        <span>All products</span>
      </div>
      

      <h1 className="title pl-3 pr-3">
        {title}
        <small>{subTitle}</small>
      </h1>

      <ul className="pl-3 pr-3">
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