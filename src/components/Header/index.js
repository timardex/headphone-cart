import React from 'react';

import './style.scss';

const Header = (props) => {
  const { tabMenu, page, setPage } = props
  return (
    <header className="header">
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